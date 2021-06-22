
import { CHANGE_INPUT, ADD_NEW_NOTE, ADD_HASHTAG, SET_HASHTAG_FILTER, DELETE_HASHTAG_FILTER } from "./appTypes"


export const changeInputField = (value) => {
    return dispatch => {
        dispatch({ type: CHANGE_INPUT, payload: value })
    }
}

export const addNewNote = (inputField) => {
    return dispatch => {
        const date = new Date()
        function findHashtags(searchText) {
            var regexp = /\B\#\w\w+\b/g
            let result = searchText.match(regexp);
            if (result) {
            } else {
                return false;
            }
            return result
        }
        const hastags = findHashtags(inputField)?  findHashtags(inputField): []
        const newNote = { date: date, noteText: inputField, hashtags: hastags }
        dispatch({ type: ADD_NEW_NOTE, payload: newNote })
        dispatch({type: SET_HASHTAG_FILTER, payload: ''})
        if (hastags.length > 0) {
            dispatch({ type: ADD_HASHTAG, payload: hastags })
            dispatch({type: SET_HASHTAG_FILTER, payload: ''})
        }
        dispatch({ type: CHANGE_INPUT, payload: '' })
    }
}

export const setHashtagFilter = (value) => {
    return dispatch => {
        dispatch({type: SET_HASHTAG_FILTER, payload: value})
    }
}
export const deleteHashtagFilter = (value) => {
    return dispatch => {
        dispatch({type: DELETE_HASHTAG_FILTER, payload: value})
    }
}
export const deleteSelectedHashtag = () => {
    return dispatch => {
        dispatch({type: SET_HASHTAG_FILTER, payload: ''})
    }
}