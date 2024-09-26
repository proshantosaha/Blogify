import { actions } from "../actions";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const postReducers = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.post.DATA_FETCHED:
      return {
        ...state,

        blogs: action.data.blogs,
        loading: false,
      };
    case actions.post.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.post.DATA_CREATED:
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data],
      };
    default: {
      return state;
    }
  }
};

export { postReducers, initialState };
