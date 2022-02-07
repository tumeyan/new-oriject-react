import { withRouter } from "react-router"
import { useDispatch, useSelector } from "react-redux"


function Search(props){
    const search = useSelector(state => state.Med.search)
    console.log(search)

    return(
        <>
        <div>
            <img src={""}/>
        </div>
        {
            search.map((item,itemIndex)=>{
                return(
                    <h1 key={itemIndex}>{item.name}</h1>
                )
            })
        }
        
        </>
    )

}

export default withRouter(Search)