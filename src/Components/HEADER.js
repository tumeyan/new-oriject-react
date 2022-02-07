import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import { FaBriefcaseMedical } from "react-icons/fa";


function HEADER(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" title="home" to="Home"><FaBriefcaseMedical style={{ width: "40px", height: "40px", color: "yellow" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/NewMedicine'>NewMedicine</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Shop'>Shop</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

     


    </>
  )
}
export default withRouter(HEADER)