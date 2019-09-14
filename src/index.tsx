import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ListView from "./components/ListView/list-view.container";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4567/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ListView />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
