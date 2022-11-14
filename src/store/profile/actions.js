export const EXAMPLE_ACTIONS = 'Example Actions'
export const CHANGE_NAME = 'Change name'

export const exampleAction = {
    type: EXAMPLE_ACTIONS
}

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
})

