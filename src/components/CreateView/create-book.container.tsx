import React from "react";
import { DialogForm } from "../shared";
import { formType } from "../../constants/types";

interface ICreateView {
  onClose: any;
  open: boolean;
}

const CreateView = (props: ICreateView) => {
  return (
    <DialogForm
      type={formType.CREATE}
      onCancel={props.onClose}
      onClose={props.onClose}
      open={props.open}
      title="Create New Book"
    />
  );
};

export default CreateView;
