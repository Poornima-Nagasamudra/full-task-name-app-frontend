const initialState = {
    person : []
}

const personReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PERSON' : {
            return {...state, person:[...action.payload]}
        }
        case 'CREATE_PERSON' : {
            return {...state, person:[...state.person, action.payload]}
        }
        case 'DESTROY_PERSON' : {
            return {...state, person: state.person.filter(function(ele){
                return ele._id !== action.payload
            })}
        }

        default : {
            return {...state}
        }
    }
}

export default personReducer