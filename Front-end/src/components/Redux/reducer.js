import { UPDATE_CHATS, GET_DETAILS } from './action.type'

const initialState = {
    info: [],
    // chats: [],
}

function reducer(state = initialState, { type, payload }) {
    console.log('type', type)
    switch (type) {
        case GET_DETAILS:
            return {
                ...state,
                info: payload,
            }

        case UPDATE_CHATS:
            return {
                ...state,
                info: payload,
            }

        default:
            return state
    }
}

export default reducer
