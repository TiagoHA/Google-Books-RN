import { call, put, select } from "redux-saga/effects";
import api from "src/services/api";

import { Creators as BooksListActions } from "src/store/ducks/books_list";

export function* getBooksRequest(action) {
  try {
    const link = linkCreator(action.payload.search);
    const response = yield call(api.get, link);

    yield put(
      BooksListActions.getBooksSuccess({
        search: action.payload.search,
        response: response.data.items
      })
    );
  } catch (err) {
    yield put(
      BooksListActions.getBooksError({ error: err, message: "No results" })
    );
  }
}

export function* getMoreBooksRequest() {
  try {
    const search = yield select((state: any) => state.booksList.search);
    const booksLength = yield select((state: any) => state.booksList.data);

    const link = linkCreator(search, booksLength.length + 1);

    const response = yield call(api.get, link);

    yield put(BooksListActions.getMoreBooksSuccess(response.data.items));
  } catch (err) {
    yield put(
      BooksListActions.getMoreBooksError({ error: err, message: "No results" })
    );
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
