import {getPictures} from '../api/api';

const SET_PICTURES = 'SET_PICTURES';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const PICTURES_IS_FETCHING = 'PICTURES_IS_FETCHING';
const FETCH_MORE_PICS = 'FETCH_MORE_PICS';

const initialState = {
  pictures: [],
  nextPage: 1,
  isFetching: false,
  currentQuery: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICTURES: {
      return {
        ...state,
        pictures: action.pictures,
      };
    }

    case FETCH_MORE_PICS: {
      return {
        ...state,
        pictures: state.pictures.concat(action.pictures),
      };
    }

    case SET_NEXT_PAGE: {
      return {
        ...state,
        nextPage: action.page,
        currentQuery: action.query,
      };
    }

    case PICTURES_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    default:
      return state;
  }
};

// Action-creators

export const setPictures = pictures => ({type: SET_PICTURES, pictures});
export const fetchMorePictures = pictures => ({
  type: FETCH_MORE_PICS,
  pictures,
});
export const setNextPage = (page, query) => ({
  type: SET_NEXT_PAGE,
  page,
  query,
});
export const picturesIsFetching = isFetching => ({
  type: PICTURES_IS_FETCHING,
  isFetching,
});

// ThunkCreator

export const requestPictures = (query, page) => async dispatch => {
  try {
    dispatch(picturesIsFetching(true));
    const response = await getPictures(page, query);
    const json = await response.json();
    dispatch(picturesIsFetching(false));
    page === 1
      ? dispatch(setPictures(json.results))
      : dispatch(fetchMorePictures(json.results));
    dispatch(setNextPage(page + 1, query));
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

export default appReducer;
