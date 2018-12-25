import { call, put, select } from "redux-saga/effects";
import api from "src/services/api";

import { Creators as BooksListActions } from "src/store/ducks/books_list";

const link = search => `volumes?q=\$\{${search.replace(" ", "%20")}\}`;

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, link(action.payload.search));

    yield put(BooksListActions.getBooksSuccess(response.data));
  } catch (err) {
    yield put(BooksListActions.getBooksError("Os Livros não existem"));
  }
}
