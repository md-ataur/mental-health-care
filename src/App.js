import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import PrivateFoute from './components/PrivateRoute/PrivateFoute';
import Services from './components/Home/Services/Services';
import OnlineCourses from './components/OnlineCourses/OnlineCourses';
import Appointment from './components/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateFoute path="/detail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateFoute>
            <PrivateFoute path="/courses">
              <OnlineCourses></OnlineCourses>
            </PrivateFoute>
            <PrivateFoute path="/appointment">
              <Appointment></Appointment>
            </PrivateFoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
