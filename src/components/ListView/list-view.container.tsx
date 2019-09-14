import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { TitleBar, Loader } from "../shared";
import { IBook } from "../../constants/types";
import { GET_BOOKS } from "../../constants/queries";
import ListItem from "./list-item";
import EditView from "../EditView/edit-view.container";

const ListView = () => {
  const defaultValues = { title: "", author: "", price: 0, bookId: 0 };
  const [prices, addPrice] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingBook, setEditingBook] = useState<IBook>(defaultValues);

  const handleSelected = (id: number, price: number, status: boolean) => {
    addPrice({ ...prices, [id]: status ? price : 0 });
  };

  const handleEdit = (book: IBook) => {
    setEditing(true);
    setEditingBook(book);
  };

  const handleEditClose = () => {
    setEditing(false);
    setEditingBook(defaultValues);
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
      {editing && (
        <EditView
          open={editing}
          onClose={handleEditClose}
          book={editingBook}
          title={`Edit - ${editingBook.title}`}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        data.books.map((book: IBook & { bookId: number }) => (
          <ListItem
            key={`${book.bookId}-${book.author}`}
            id={book.bookId}
            author={book.author}
            price={book.price}
            title={book.title}
            onSelect={handleSelected}
            onEdit={() => handleEdit(book)}
          />
        ))
      )}
    </React.Fragment>
  );
};

export default ListView;
