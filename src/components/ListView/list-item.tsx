import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Fab,
  Tooltip
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const SCard = styled(Card)({
  margin: "15px 0",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

interface IListItem {
  id: number;
  title: string;
  author: string;
  price: number;
  onEdit: any;
  onSelect: any;
}

const ListItem = (props: IListItem) => {
  return (
    <SCard>
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="subtitle1">{props.author}</Typography>
        <Typography variant="subtitle2">€{props.price.toFixed(2)}</Typography>
        <Checkbox
          onChange={e =>
            props.onSelect(props.id, props.price, e.target.checked)
          }
        />
      </CardContent>
      <Tooltip
        onClick={props.onEdit}
        title={`Edit ${props.title}`}
        aria-label="add"
      >
        <Fab color="primary">
          <EditIcon />
        </Fab>
      </Tooltip>
    </SCard>
  );
};

export default ListItem;
