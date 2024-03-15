export const AddContact = (contact) => {
    return {type: "AddContact", payload: contact }
}
export const DeleteContact = (age) => {
    return {type: "DeleteContact", payload: age }
}
export const EditeContact = (newContact) => {
    return {type: "EditeContact", payload: newContact }
}
export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error
});