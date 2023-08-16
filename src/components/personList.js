import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetPerson, startDestroyPerson } from '../action/personAction'

function PersonList(props){
    const dispatch = useDispatch()

    const person = useSelector((state) => {
        return state.person.person
    })

    useEffect(()=> {
        // invoke action creator
        dispatch(startGetPerson())
    }, [dispatch])

    function handleRemove(id){
        dispatch(startDestroyPerson(id))
    }

    return (
        <div>
            <ul>
                {person.map(function(ele){
                    return  <li key={ele._id}> 
                                <a href={ele.name} onClick={() => {alert(` ${ele.name} ${ele.gender} `)}}>
                                    {ele.name}   
                                </a>    
                                <button onClick={() => {handleRemove(ele._id)}}> 
                                    Remove 
                                </button> 
                            </li>
                })}
            </ul>        
        </div>
    )

}
export default PersonList