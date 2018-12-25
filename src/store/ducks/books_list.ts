export const Types = {
  ADD_REQUEST: "books/ADD_REQUEST",
  ADD_SUCCESS: "books/ADD_SUCCESS",
  ADD_FAILURE: "books/ADD_FAILURE",
  ADD_MORE_SUCCESS: "books/ADD_MORE_SUCCESS"
};

const initialState = {
  search: "",
  data: [],
  dataLength: 0,
  loading: false,
  error: false
};

export default function BooksList(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        search: action.data,
        loading: true
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...action.payload.data],
        dataLength: action.payload.data.length,
        loading: false,
        error: false
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.data
      };

    case Types.ADD_MORE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

export const Creators = {
  getBooks: data => ({
    type: Types.ADD_REQUEST,
    payload: {
      data
    }
  }),

  getBooksSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data
    }
  }),

  getBooksError: data => ({
    type: Types.ADD_FAILURE,
    payload: {
      data
    }
  }),

  getMoreBooksSuccess: data => ({
    type: Types.ADD_MORE_SUCCESS,
    payload: {
      data
    }
  })
};
