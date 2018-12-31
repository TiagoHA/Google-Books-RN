export const Types = {
  ADD_REQUEST: "books/ADD_REQUEST",
  ADD_SUCCESS: "books/ADD_SUCCESS",
  ADD_FAILURE: "books/ADD_FAILURE",
  ADD_MORE: "books/ADD_MORE",
  ADD_MORE_SUCCESS: "books/ADD_MORE_SUCCESS",
  ADD_MORE_FAILURE: "books/ADD_MORE_FAILURE"
};

const initialState = {
  search: "",
  data: <Object>[],
  dataLength: 0,
  loading: false,
  loadingMore: false,
  errorMsg: "",
  error: false
};

export default function BooksList(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        search: action.payload.search,
        loading: true
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...action.payload.response],
        dataLength: action.payload.response.length,
        loading: false,
        error: false
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        errorMsg: action.payload.message
      };

    case Types.ADD_MORE:
      return {
        ...state,
        loadingMore: true
      };

    case Types.ADD_MORE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.response],
        dataLength: state.dataLength + action.payload.response.length,
        loadingMore: false,
        loading: false,
        error: false
      };

    case Types.ADD_MORE_FAILURE:
      return {
        ...state,
        loadingMore: false,
        loading: false,
        error: action.payload.error,
        errorMsg: action.payload.message
      };

    default:
      return state;
  }
}

export const Creators = {
  getBooks: (search = null) => ({
    type: Types.ADD_REQUEST,
    payload: {
      search
    }
  }),

  getBooksSuccess: ({ response, search }) => ({
    type: Types.ADD_SUCCESS,
    payload: {
      response,
      search
    }
  }),

  getBooksError: ({ error, message }) => ({
    type: Types.ADD_FAILURE,
    payload: {
      error,
      message
    }
  }),

  getMoreBooks: () => ({
    type: Types.ADD_MORE
  }),

  getMoreBooksSuccess: response => ({
    type: Types.ADD_MORE_SUCCESS,
    payload: {
      response
    }
  }),

  getMoreBooksError: ({ error, message }) => ({
    type: Types.ADD_MORE_FAILURE,
    payload: {
      error,
      message
    }
  })
};
