//Formatting
import './App.css';
import { Nav, Button } from 'react-bootstrap'

//Functional
import { createBrowserHistory } from "history";
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MicroFrontend from './MicroFrontend'


const defaultHistory = createBrowserHistory();

const {
  REACT_APP_USERS_HOST: usersHost,
  REACT_APP_TASKS_HOST: tasksHost,
  REACT_APP_PAYMENT_HOST: paymentHost,
  REACT_APP_SERVICE_REQUEST_HOST: serviceRequestHost
} = process.env;

function Header() {
  return (
    <div>
      <h1>Maintain Yo Self</h1>
      <h4>An App to help organize your home maintainence</h4>
    </div>
  );
}

class App extends React.Component {


  render() {
    return (
      <div className="">
        <Header />
        <BrowserRouter>
          <Link to={'/users'}>
            Users
          </Link>
          <br></br>
          <Link to={'/tasks'}>
            Tasks
          </Link>
          <br></br>
          <Link to={'/contractors'}>
            Contractors
          </Link>
          <br></br>
          <Link to={'/servicerequest'}>
            Service Requests
          </Link>
          <br></br>
          <Link to={'/payment'}>
            Payment
          </Link>
          <Route path="/users" component={User} />
          <Route path="/contractors" component={Contractor} />
          <Route path="/tasks" component={Task} />
          <Route path="/servicerequest" component={ServiceRequest} />
          <Route path="/payment" component={Payment} />
        </BrowserRouter>
      Test
      </div >
    );
  }
}
const User = ({history}) => (
  <MicroFrontend history={history} host={usersHost} name="UserService" />
)
const Contractor = ({ history }) => (
  <div>
    Contractor Profile is displayed
  </div>
)
const Task = ({ history }) => (
  <div>
    <MicroFrontend history={history} host={tasksHost} name="tasks" />
  </div>
)

const ServiceRequest = ({ history }) => (
  <div>
    <MicroFrontend history={history} host={serviceRequestHost} name="ServiceRequest" />
  </div>
)

const Payment = ({ history }) => (
  <div>
    <MicroFrontend history={history} host={paymentHost} name="Payment" />
  </div>
)

export default App;
