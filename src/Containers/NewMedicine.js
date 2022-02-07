import { withRouter } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { changeValue,addMed } from "../Store/Med/action"


function NewMedicine(props) {
    const data = useSelector(state => state.Med.newmed)
    const prod = useSelector(state =>state.Med.prod)
    console.log(prod)
    console.log(data.producer)
    const dispatch = useDispatch()
    console.log(data)
    return (
        <>
            <div style={{width:"400px"}}>
              <input onChange={(e) => dispatch(changeValue({ value: e.target.value, key: "name" }))} value={data.name} type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                <input onChange={(e) => dispatch(changeValue({ value: e.target.value, key: "price" }))} value={data.price} type="number" className="form-control" id="pricee" placeholder="Enter pricee" name="price" />
                <input onChange={(e) => dispatch(changeValue({ value: e.target.value, key: "count" }))} value={data.count} type="number" className="form-control" id="count" placeholder="Enter count" name="count" />
                
                
                <select type="" onChange={(e) => dispatch(changeValue({ value: e.target.value, key: "producer" }))}  type="text" className="form-control" id="producer" placeholder="Enter producer" name="producer">
                        {
                            prod.map((item,itemIndex)=>{
                                return(
                                    <option key={itemIndex} value={item.name}>{item.name}</option>
                                )
                            })
                        }
                </select>
                <input onChange={(e) => dispatch(changeValue({ value: e.target.value, key: "description" }))} value={data.description} type="text" className="form-control" id="description" placeholder="Enter description" name="description" />
                
                <button onClick={()=>dispatch({type:"add"})}>Add</button>
            </div>
          

        </>
    )
}
export default withRouter(NewMedicine)