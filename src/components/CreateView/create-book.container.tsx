import React from "react";
import DialogForm from "../shared/dialog-form";

interface ICreateView {
  onClose: any;
  open: boolean;
}

const CreateView = (props: ICreateView) => {
  return (
    <DialogForm
      onCancel={props.onClose}
      onSubmit={props.onClose}
      onClose={props.onClose}
      open={props.open}
      title="Create New Book"
    />
  );
};

export default CreateView;
