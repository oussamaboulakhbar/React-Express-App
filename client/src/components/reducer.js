import axios from 'axios';

const initialState = {
    infoContacts: [],
    loading: true,
    error: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                infoContacts: action.payload,
                loading: false
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "AddContact":
            return axios.post(`http://localhost:3001/students/create`, action.payload).then(response => {
                const data = response.data;
                const add = [...state.infoContacts, data];                          //* <------------- return state
                console.log(`add : ${add}`);
                console.log(`state : ${state}`);
                return { ...state, infoContacts: add };
            }).catch(err => {
                return state
            });
            
        case "EditeContact":
            console.log("hbes")
            axios.put(`http://localhost:3001/students/update/${action.payload2}`, action.payload1)
                .then(response => {
                    // Handle success if needed
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle error if needed
                    console.error('Error adding contact:', error);
                });
            console.log('action.payload2 :', action.payload2)
            console.log('action.payload1 :', action.payload1)
            return state;

        case "DetailContact":
            return {};

        case "DeleteContact":
            axios.delete(`http://localhost:3001/students/delete/${action.payload}`);
            // Filter out the deleted contact from the state
            const updatedContacts = state.infoContacts.filter(contact => contact._id != action.payload);
            // Return the updated state with the filtered contacts
            return { ...state, infoContacts: updatedContacts };

        default:
            return state
    }

}

export default reducer;