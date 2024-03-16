export const AddContact = (contact) => {
    return {type: "AddContact", payload: contact }
}
export const DeleteContact = (id) => {
    return {type: "DeleteContact", payload: id }
}
export const EditeContact = (newContact, id) => {
    return {type: "EditeContact", payload1: newContact, payload2: id  }
}
export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error
});