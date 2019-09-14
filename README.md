# Alacrity Frontend Challenge

### Brief Description

This project utilises the API found [here](https://github.com/alacrity-law/apollo-test-app)

The project consumes the API and provides a frontend client which allows you to
view and manipulate the data from the API easier. This project will have the following
functionalities

- Display list of books with thier properties `{title, author, price}`
- Edit any of the three properties for each book
- Create a new book, specifying the three properties

### Time to Complete

In total ~5 Hours

### Modules

| Module       | Why?                                                                                                                                          |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| graphql-tag  | graphql-tag is a utility which helps parses graphql queries allowing you to have an effective way of specify variables to pass into the query |
| apollo-boost | apollo-boost is a simple zero-config package to help quickly get started with the apollo-client                                               |
| @material-ui | material-ui is a robost ui framework which provides react components which strictly follow the official material guidelines                   |

### Hardest Area

- I had difficulties working out how Apollo works.
- I found it difficult to work out the best way to handle currency formating onChange

### Proudest Area

- Working out the best way to structure components and files to improve readbility
- Determining the best way to isolate components and thier responsibilities

---

## Getting Started

You will need to run the API and the frontend seperately.

To run the API you will need to clone and run this repo locally: [API](https://github.com/alacrity-law/apollo-test-app)

To run the frontend clone and `cd` into the project then run the command

```
  yarn start
```
