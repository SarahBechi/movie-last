import { createStore, combineReducers } from "redux";
import MovieListR from './reducers/movieListReducer';
import SearchFilterReducer from './reducers/searchFilterReducer';
import StarsReducer from './reducers/starsReducer';
import ModalReducer from './reducers/modalReducer';


import ImgInput from './reducers/formInputsReducers/imgReducer';
import NameInputReducer from './reducers/formInputsReducers/nameReducer';
import RatingInputReducer from './reducers/formInputsReducers/ratingReducer';
import YearInputReducer from './reducers/formInputsReducers/yearReducer';
import stateR from './reducers/movieListReducer';
import ModalEditReducer from './reducers/modalEditR';

const store = createStore(combineReducers({

    stateR: stateR,
    SearchFilterReducer: SearchFilterReducer,
    StarsReducer: StarsReducer,
    ModalReducer: ModalReducer,


    ImgInput: ImgInput,
    NameInputReducer: NameInputReducer,
    RatingInputReducer: RatingInputReducer,
    YearInputReducer: YearInputReducer,
    ModalEditReducer: ModalEditReducer
}))


export default store;