import { GET_STATE } from '../1_actionTypes/stateActions'

export default function getState() {
    return dispatch => {
        dispatch( {type: GET_STATE})

    }
}

export { GET_STATE }