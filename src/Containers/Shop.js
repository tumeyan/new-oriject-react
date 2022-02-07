import { withRouter } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { SearchValue } from "../Store/Med/action"


function Shop(props) {
    const data = useSelector(state => state.Med.med)
    let dispatch = useDispatch()

    return (
        <>
            <div>
                <input style={{ width: "300px", display: "inline-block" }} onChange={(e) => dispatch(SearchValue({ value: e.target.value, key: "search" }))} value={data.search} type="text" className="form-control" id="search" placeholder="search" name="search" />
                <button onClick={
                    () => {
                        props.history.push({ pathname: `/shop/search` })
                    }
                } className="btn btn-primary">Search</button>
            </div>
            {
                data.map((item, itemIndex) => {
                    return (
                        <div key={itemIndex}>
                            <h1>Name: {item.name}</h1>
                            <h3>price:{item.price}</h3>
                            <h3>count:{item.count}</h3>
                            <h3>description:{item.description}</h3>
                            <h3>producer:{item.producer}</h3>
                            <h3>com:{item.coment}</h3>
                            <button onClick={
                                () => {
                                    
                                    props.history.push({ pathname: `/shop/medicine/${item.id}` })
                                }
                            } className="btn btn-primary">See More</button>

                        </div>
                    )
                })
            }
        </>
    )
}
export default withRouter(Shop)