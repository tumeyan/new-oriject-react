import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HEADER from '../Components/HEADER';
import NewMedicine from '../Containers/NewMedicine';
import Shop from '../Containers/Shop';
import Search from '../Containers/Search';
import Medicine from '../Containers/Medicine';
import Home from '../Containers/Home';

function Routers() {
    return (
        <BrowserRouter>
            <HEADER />
            <Switch>
                <Route path="/NewMedicine" exact>
                    <NewMedicine />
                </Route>
                <Route path="/Home" exact>
                    <Home />
                </Route>
                <Route path="/Shop" exact>
                    <Shop />
                </Route>
                <Route path="/shop/medicine/:id" exact>
                    <Medicine />
                </Route>
                <Route path="/shop/search" exact>
                    <Search />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routers