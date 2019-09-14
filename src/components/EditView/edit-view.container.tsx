import React from "react";
import { IBook, formType } from "../../constants/types";
import { DialogForm } from "../shared";

interface IEditView {
  onClose: any;
  open: boolean;
  book: IBook;
  title: string;
}

const EditView = (props: IEditView) => {
  return (
    <DialogForm
      type={formType.EDIT}
      onCancel={props.onClose}
      onClose={props.onClose}
      open={props.open}
      title={props.title}
      defaultValues={props.book}
    />
  );
};

export default EditView;
