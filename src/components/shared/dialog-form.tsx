import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  Button,
  DialogActions
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { IBook, formType } from "../../constants/types";
import { EDIT_BOOK, CREATE_BOOK } from "../../constants/mutations";
import { useMutation } from "@apollo/react-hooks";
import { euCurrencyFormat } from "../../helpers";

interface IDialogForm {
  type: formType.CREATE | formType.EDIT;
  onClose: any;
  onCancel: any;
  open: boolean;
  title: string;
  defaultValues?: IBook;
}

const STextField = styled(TextField)({
  width: "100%"
});

const DialogForm = (props: IDialogForm) => {
  const [title, setTitle] = useState(
    (props.defaultValues && props.defaultValues.title) || ""
  );
  const [price, setPrice] = useState(
    (props.defaultValues && props.defaultValues.price) || 0
  );
  const [pricePreview, setPricePreview] = useState(
    props.defaultValues && euCurrencyFormat.format(props.defaultValues.price)
  );
  const [author, setAuthor] = useState(
    (props.defaultValues && props.defaultValues.author) || ""
  );

  const [editBook] = useMutation(EDIT_BOOK);
  const [createBook] = useMutation(CREATE_BOOK);

  const handlePriceChange = (e: any) => {
    const shouldUpdate = e.target.value.replace(/[.0-9]/g, "").length;
    if (shouldUpdate) return;

    const value = parseFloat(e.target.value || "0").toFixed(2);
    setPricePreview(euCurrencyFormat.format(e.target.value));
    setPrice(parseFloat(value));
  };

  const handleSubit = () => {
    if (props.type === formType.EDIT && props.defaultValues) {
      editBook({
        variables: { bookId: props.defaultValues.bookId, title, price, author }
      });
    }

    if (props.type === formType.CREATE) {
      createBook({ variables: { title, price, author } });
    }
    props.onClose();
  };

  const isValid = !!(price > 0 && title.length && author.length);

  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <STextField
          error={!title.length}
          label="Title"
          margin="normal"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <STextField
          error={!(price > 0)}
          label="Price"
          margin="normal"
          value={price}
          helperText={pricePreview}
          onChange={e => handlePriceChange(e)}
        />
        <STextField
          error={!author.length}
          label="Author"
          margin="normal"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="secondary">
          Cancel
        </Button>
        <Button disabled={!isValid} onClick={handleSubit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
