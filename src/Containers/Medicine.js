import { withRouter } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { comValue } from "../Store/Med/action"


function Medicine(props) {
    console.log(props)
    const med = useSelector(state => state.Med.medByid)
    console.log(med)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "medByid", id: props.match.params.id })
    }, [])

    return (
        <>
            <h1>Name: {med.name}</h1>
            <h3>price:{med.price}</h3>
            <h3>count:{med.count}</h3>
            <h3>description:{med.description}</h3>
            <h3>producer:{med.producer}</h3>
            <textarea onChange={(e) => dispatch(comValue({ value: e.target.value, key: "com" }))} type="text" className="form-control" id="com" placeholder="comment" name="name" />
            <button onClick={()=>dispatch({type:"send",id:med.id})} >Send</button>
        </>
    )



}


export default withRouter(Medicine)