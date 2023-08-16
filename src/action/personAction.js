import axios from 'axios'

export function startGetPerson(){
            return(dispatch) => {
                axios.get('http://localhost:4001/key/person')
                    .then((response) => {
                        const result = response.data
                       // console.log(result)
                        dispatch(getPerson(result))
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            } 

        }

    function getPerson(data){
        return  {
            type: 'GET_PERSON',
            payload: data
        }
    }

export function startCreatePerson(formData, resetForm){
    return(dispatch) => {
        axios.post('http://localhost:4001/key/person', formData)
        .then((response) => {
            const result = response.data 
            console.log(result)
            dispatch(createPerson(result))
            resetForm()
        })

        .catch((err) => {
           alert(err.message)
        })
    }
    
}

function createPerson(data){
    return{
        type: 'CREATE_PERSON',
        payload: data
    }
}

export function startDestroyPerson(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:4001/key/person/${id}`)
           .then((response) => {
               const result = response.data 
               console.log(result)
               dispatch(destroyPerson(result._id))
           })
           .catch((err) => {
               alert(err.message)
           })
    }
}
  
  function destroyPerson(id){
    console.log(id)
     return {
        type : 'DESTROY_PERSON',
        payload : id
     }
  }