import { CHANGE_NAME, EXAMPLE_ACTIONS } from "./actions"


const initialState = {
    showName: false,
    name: 'Bill'
}


const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS:
            return {
                ...state,
                showName: !state.showName
            }

        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }

        default:
            return state
    }
}

export default profileReduser