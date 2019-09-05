import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import { getDict } from '../../dictionary';
import {
    LANG_EN,
    // LANG_RU,
} from '../../consts/generalConsts';
// import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    SnackbarMessage: {},
    SnackbarVisible: false,
    userParams: {
        lang: LANG_EN,
        //
    },
    mobileVersion: false,
    dict: getDict(LANG_EN),
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState;
    },
    [ActionTypes.OPEN](state, action) {
        return state.merge({
            //
            mobileVersion: action.params.isMobile,
        });
    },
    [ActionTypes.CHANGE_LANG](state, action) {
        return state.merge({
            userParams: { lang: action.lang },
            dict: getDict(action.lang),
        });
    },
    [ActionTypes.SHOW_SNACKBAR](state, action) {
        return state.merge({ SnackbarVisible: true, SnackbarMessage: action.msg });
    },
    [ActionTypes.CLOSE_SNACKBAR](state) {
        return state.merge({ SnackbarVisible: false });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;