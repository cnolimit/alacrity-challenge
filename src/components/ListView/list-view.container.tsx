import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  Typography,
  Checkbox,
  Fab,
  Tooltip
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TitleBar, Loader } from "../shared";
import { IBook } from "../../constants/types";
import { GET_BOOKS } from "../../constants/queries";

const SCard = styled(Card)({
  margin: "15px 0",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const ListView = () => {
  const [prices, addPrice] = useState({});

  const handleSelected = (id: number, price: number, status: boolean) => {
    addPrice({ ...prices, [id]: status ? price : 0 });
  };

  const getItemCount = () => Object.values(prices).filter(Boolean).length;

  const getTotalPrice = () => {
    return parseFloat(
      Object.values<number>(prices)
        .reduce((acc, price) => acc + price, 0)
        .toFixed(2)
    );
  };

  const { loading, error, data } = useQuery(GET_BOOKS);
  if (error) return <p>Error :( {error.message}</p>;

  return (
    <React.Fragment>
      <TitleBar
        title="Book List"
        amount={getTotalPrice()}
        itemCount={getItemCount()}
      />
      {loading ? (
        <Loader />
      ) : (
        data.books.map(({ author, price, bookId, title }: IBook) => (
          <SCard key={bookId}>
            <CardContent>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="subtitle1">{author}</Typography>
              <Typography variant="subtitle2">€{price.toFixed(2)}</Typography>
              <Checkbox
                onChange={e => handleSelected(bookId, price, e.target.checked)}
              />
            </CardContent>
            <Tooltip title={`Edit ${title}`} aria-label="add">
              <Fab color="primary">
                <EditIcon />
              </Fab>
            </Tooltip>
          </SCard>
        ))
      )}
    </React.Fragment>
  );
};

export default ListView;
