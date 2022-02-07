import { withRouter } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { BiTimer } from "react-icons/bi";



function Home(props) {
let data = new Date()
let year = data.getFullYear()
let day = data.getDate()
let month = data.getMonth()
let hour = data.getHours()
let minute = data.getMinutes()
// console.log(newDate.getDate())

    return (
        
        <>
            <div style={{textAlign:"center",backgroundColor:"black",position:"relative"}}>
                <div style={{width:"600px",height:"500px",backgroundColor:"yellow",position:"absolute",left:"30%",backgroundImage:"url(/static/111.jpg)"}}>
                    <h1 style={{color:"green"}}>Welcome To Medicine</h1>
                    <BiTimer style={{width:"100px",height:"100px",color:"yellow"}} />
                    
                    <div>
                        <h1>{day}/{month}/{year}<p>{hour}:{minute}</p></h1>
                        
                    </div>
                    
                </div>
                

                
               

            </div>

        </>
    )

}

export default withRouter(Home)