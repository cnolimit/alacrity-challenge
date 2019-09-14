import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContentText,
  DialogContent,
  Button,
  DialogActions
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { IBook } from "../../constants/types";

interface IDialogForm {
  onClose: any;
  onSubmit: any;
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
  const [author, setAuthor] = useState(
    (props.defaultValues && props.defaultValues.author) || ""
  );

  const handlePriceChange = (e: any) => {
    const shouldUpdate = e.target.value.replace(/[.0-9]/g, "").length;
    if (shouldUpdate) return;
    setPrice(parseFloat(e.target.value || 0));
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
        <Button disabled={!isValid} onClick={props.onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
