import { call, put, select } from "redux-saga/effects";
import api from "src/services/api";

import { Creators as BooksListActions } from "src/store/ducks/books_list";
import { Alert } from "react-native";
import { Convert } from "src/models/booksModel";

export function* getBooksRequest(action) {
  try {
    const link = linkCreator(action.payload.data);
    const response = yield call(api.get, link);

    yield put(BooksListActions.getBooksSuccess(response.data.items));
  } catch (err) {
    yield put(BooksListActions.getBooksError("Sem resultados"));
  }
}

export function* getMoreBooksRequest(action) {
  try {
    const booksLength = yield select((state: any) => state.data.length);
    const link = linkCreator(action.payload.search, booksLength + 1);

    const response = yield call(api.get, link);

    yield put(BooksListActions.getMoreBooksSuccess(response.data.items));
  } catch (err) {
    yield put(BooksListActions.getBooksError("Sem resultados"));
  }
}

const linkCreator = (
  search: string,
  index: number = 0,
  maxResults: number = 39
) => {
  const newSearch = search.replace(" ", "%20");
  return `volumes?q=\$\{${newSearch}\}&maxResults=${maxResults}&startIndex=${index}`;
};

// https://www.googleapis.com/books/v1/volumes?q=${harry%20pot}&filter=full&maxResults=20&startIndex=0
