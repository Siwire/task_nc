import { CHANGE_INPUT, ADD_NEW_NOTE, ADD_HASHTAG, SET_HASHTAG_FILTER, DELETE_HASHTAG_FILTER, 
    IS_EDIT_MODE, EDIT_NOTE_TEXT, DELETE_NOTE } from "./appTypes"

const initialState = {
    inputField: '',
    filteredNoteList: [],
    noteList: [],
    hashtagList: [],
    selectedHashtag: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_NOTE_TEXT: {
            const note = state.noteList.find(note => note.id === action.payload.id)

            note.noteText = action.payload.noteText
            return{
                ...state,
            }
        }
        case IS_EDIT_MODE: {
            const indexNote = state.noteList.findIndex(note => note.id === action.payload.id)
            state.noteList.splice(indexNote, 1, action.payload)
            return{
                ...state, 
            }
        }
        case DELETE_HASHTAG_FILTER: {
            const indexHashtag = state.hashtagList.findIndex(hashtag => hashtag === action.payload)
            state.hashtagList.splice(indexHashtag, 1)
            return {
                ...state,
            }
        }
        case SET_HASHTAG_FILTER: {
            state.selectedHashtag = action.payload
            if (state.selectedHashtag === '') {
                state.filteredNoteList = state.noteList
            }
            else {
                state.filteredNoteList = state.noteList.filter(note => {
                    const isHashTag = note.hashtags.find(aa => aa === state.selectedHashtag)
                    if (isHashTag) {
                        return note
                    }
                })
            }
            return {
                ...state,
            }
        }
        case ADD_HASHTAG: {
            action.payload.map(tag => {
                const checkHashtag = state.hashtagList.find(hashtag => hashtag === tag) 
                if (!checkHashtag) {
                    state.hashtagList.unshift(tag)
                }
            })
            return {
                ...state,
            }
        }
        case DELETE_NOTE: {
            const indexNote = state.noteList.findIndex(note => note.id === action.payload)
            state.noteList.splice(indexNote, 1)
            state.filteredNoteList = state.noteList
            return {
                ...state,
            }
        }
        case ADD_NEW_NOTE: {
            state.noteList.unshift(action.payload)
            return {
                ...state,
            }
        }
        case CHANGE_INPUT: {
            return {
                ...state,
                inputField: action.payload
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default reducer;