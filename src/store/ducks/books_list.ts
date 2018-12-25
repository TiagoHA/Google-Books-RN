export const Types = {
  ADD_REQUEST: "books/ADD_REQUEST",
  ADD_SUCCESS: "books/ADD_SUCCESS",
  ADD_FAILURE: "books/ADD_FAILURE"
};

const initialState = {
  data: [],
  loading: false,
  error: false
};

export default function BooksList(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: null
      };

    default:
      return state;
  }
}

export const Creators = {
  getBooks: search => ({
    type: Types.ADD_REQUEST,
    payload: {
      search
    }
  }),

  getBooksSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data
    }
  }),

  getBooksError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message
    }
  })
};
