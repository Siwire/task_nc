import { CHANGE_INPUT, ADD_NEW_NOTE, ADD_HASHTAG, SET_HASHTAG_FILTER, DELETE_HASHTAG_FILTER } from "./appTypes"

const initialState = {
    inputField: '',
    filteredNoteList: [],
    noteList: [],
    hashtagList: [],
    selectedHashtag: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            action.payload.map(tag => state.hashtagList.unshift(tag))
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