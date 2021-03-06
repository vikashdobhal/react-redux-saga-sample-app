import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function commentReducer(state = initialState.comments, action){
    switch(action.type){
        case actionTypes.LOAD_COMMENTS_SUCCESS:
            return [...action.comments]
        case actionTypes.DELETE_COMMENT_SUCCESS:
            return state.filter((comment,i) => {
                return comment.id !== action.id
            })
        case actionTypes.ADD_COMMENT_SUCCESS:
            return [...state, action.comment]
        case actionTypes.SAVE_COMMENT_SUCCESS:            
            return state.map((comment,i)=>{
                if(comment.id === action.comment.id){
                    return action.comment
                } else {
                    return comment
                }
            })
        default:
            return state
    }
}