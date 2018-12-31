import { all, takeLatest } from "redux-saga/effects";
import { Types as BooksListTypes } from "../ducks/books_list";
import { getBooksRequest, getMoreBooksRequest } from "./books_list";

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksListTypes.ADD_REQUEST, getBooksRequest),
    takeLatest(BooksListTypes.ADD_MORE, getMoreBooksRequest)
  ]);
}
