export const Types = {
  ADD: "detail/ADD_DETAIL_BOOK"
};

const initialState = {
  detail: {},
  loading: false,
  error: false
};

export default function BooksDetail(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        detail: { ...action.payload.data },
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

export const Creators = {
  saveDetail: data => ({
    type: Types.ADD,
    payload: {
      data
    }
  })
};
