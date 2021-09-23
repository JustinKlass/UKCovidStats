import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import Wales from './pages/Wales/Wales'
import England from './pages/England/England'
import Scotland from './pages/Scotland/Scotland'
import UnitedKingdom from './pages/UnitedKingdom/UnitedKingdom'
import NorthernIreland from './pages/NorthernIreland/NorthernIreland'

const App = () => {

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          
          <Route path='/' exact>
            <UnitedKingdom />
          </Route>

          <Route path='/England' exact>
            <England />
          </Route>
          
          <Route path='/Scotland' exact>
            <Scotland />
          </Route>
          
          <Route path='/Wales' exact>
            <Wales />
          </Route>
          
          <Route path='/NorthernIreland' exact>
            <NorthernIreland />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;