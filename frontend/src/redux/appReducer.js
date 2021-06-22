import {  CHANGE_INPUT, ADD_NEW_NOTE, ADD_HASHTAG} from "./appTypes"

const initialState = {
    inputField: '',
    noteList: [],
    hashtagList: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HASHTAG: {
            action.payload.map(tag => state.hashtagList.unshift(tag))
            return{
                ...state, 
            }
        }
        case ADD_NEW_NOTE: {
            state.noteList.unshift(action.payload)
            return{
                ...state, 
            }
        }
        case CHANGE_INPUT: {
            return{
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