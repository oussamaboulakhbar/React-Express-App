import axios from 'axios';

// const fetchData = async () => {
//     try {
//         const response = await axios.get('http://localhost:3001/students');
//         // console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return []; // Return an empty array or handle the error as needed
//     }
// };

// const initialState = {
//     infoContacts: [] // Initialize with an empty array
// };

// // Fetch data asynchronously in the initialization of the reducer
// fetchData()
//     .then(data => {
//         initialState.infoContacts = data;
//     })
//     .catch(error => {
//         console.error('Error setting initial state:', error);
//     });
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
                loading: false,
                error: null
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "AddContact":
            axios.post("http://localhost:3001/students/create", action.payload)
                .then(response => {
                    // Handle success if needed
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle error if needed
                    console.error('Error adding contact:', error);
                });
            return state


        case "EditeContact":
            axios.put(`http://localhost:3001/students/update/${action.payload2}`, action.payload1)
            .then(response => {
                // Handle success if needed
                console.log(response.data);
            })
            .catch(error => {
                // Handle error if needed
                console.error('Error adding contact:', error);
            });
            console.log('action.payload2 :',action.payload2)
            console.log('action.payload1 :',action.payload1)
            return state;

        case "DetailContact":
            return {};

        case "DeleteContact":
            axios.delete(`http://localhost:3001/students/delete/${action.payload}`)
            .then(response => {
                // Handle success if needed
                console.log(response.data);
            })
            .catch(error => {
                // Handle error if needed
                console.error('Error deleting contact:', error);
            });
            return state

        default:
            return state
    }

}

export default reducer;