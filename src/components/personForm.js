import React, {useState} from 'react'
import { startCreatePerson } from '../action/personAction'
import {useDispatch} from 'react-redux'

function PersonForm(props) {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    function handleName(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            name : name
        }
        console.log(formData)
        const resetForm = () => {
            setName('')
        }
        dispatch(startCreatePerson(formData, resetForm))
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  value={name} onChange={handleName} /> <br/>
                <input type="submit" />
            </form>
            
            
        </div>
    )
}

export default PersonForm