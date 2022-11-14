import { API_URL_PUBLIC } from "../../constants/common"
export const GET_GISTS = 'GISTS::GET_GISTS'
export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST'
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS'
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE'


export const getGists = () => ({
    type: GET_GISTS
})


export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
})


export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
})


export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err
})



export const getAllGists = () => async (dispatch, getState) => {
    dispatch(getGistsRequest())

    try {
        const res = await fetch(API_URL_PUBLIC)

        if (!res.ok) {
            throw new Error('ERROR!')
        }

        const result = await res.json()
        dispatch(getGistsSuccess(result))

    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
    // const response = await fetch(API_URL_PUBLIC)
    // const result = await response.json()
    // dispatch(getGistsSuccess(result))
}