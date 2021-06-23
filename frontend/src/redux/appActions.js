
import {
    CHANGE_INPUT, ADD_NEW_NOTE, ADD_HASHTAG, SET_HASHTAG_FILTER,
    DELETE_HASHTAG_FILTER, IS_EDIT_MODE, EDIT_NOTE_TEXT
} from "./appTypes"
function findHashtags(searchText) {
    var regexp = /\B\#\w\w+\b/g
    let result = searchText.match(regexp);
    if (result) {
    } else {
        return false;
    }
    return result
}

export const changeInputField = (value) => {
    return dispatch => {
        dispatch({ type: CHANGE_INPUT, payload: value })
    }
}

export const addNewNote = (inputField) => {
    return dispatch => {
        const date = new Date()

        const random = (length) => {
            let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let str = '';
            for (let i = 0; i < length; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return str;
        };

        const hashtags = findHashtags(inputField) ? findHashtags(inputField) : []
        const newNote = { id: random(9), date: date, noteText: inputField, hashtags: hashtags, isEdit: false }
        dispatch({ type: ADD_NEW_NOTE, payload: newNote })
        dispatch({ type: SET_HASHTAG_FILTER, payload: '' })
        if (hashtags.length > 0) {
            dispatch({ type: ADD_HASHTAG, payload: hashtags })
            dispatch({ type: SET_HASHTAG_FILTER, payload: '' })
        }
        dispatch({ type: CHANGE_INPUT, payload: '' })
    }
}

export const setHashtagFilter = (value) => {
    return dispatch => {
        dispatch({ type: SET_HASHTAG_FILTER, payload: value })
    }
}
export const deleteHashtagFilter = (value) => {
    return dispatch => {
        dispatch({ type: DELETE_HASHTAG_FILTER, payload: value })
    }
}
export const deleteSelectedHashtag = () => {
    return dispatch => {
        dispatch({ type: SET_HASHTAG_FILTER, payload: '' })
    }
}

export const switchOnEditMode = (note) => {
    return dispatch => {
        dispatch({ type: SET_HASHTAG_FILTER, payload: '' })
        dispatch({ type: IS_EDIT_MODE, payload: { ...note, isEdit: true } })
    }
}
export const switchOffEditMode = (note) => {
    return dispatch => {
        const hashtags = findHashtags(note.noteText) ? findHashtags(note.noteText) : []
        if (hashtags.length > 0) {
            dispatch({ type: ADD_HASHTAG, payload: hashtags })
            dispatch({ type: SET_HASHTAG_FILTER, payload: '' })
        }
        dispatch({ type: IS_EDIT_MODE, payload: { ...note, isEdit: false, hashtags: hashtags } })

    }
}

export const editNoteText = (note, value) => {
    return dispatch => {
        dispatch({ type: EDIT_NOTE_TEXT, payload: { ...note, noteText: value } })
    }
}