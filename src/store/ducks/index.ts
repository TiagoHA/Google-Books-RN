import { combineReducers } from "redux";
import booksList from "./books_list";
import bookDetail from "./book_detail";

export default combineReducers({
  booksList,
  bookDetail
});
