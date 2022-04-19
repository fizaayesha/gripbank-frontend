import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavigationBar/Navbar';
import Userdets from './Components/Userdetails/User-content';
import About from "./Components/About/About";
import Home from './Components/HomePage/home';
import Transactions from './Components/TransactionHistory/Transactions';
import Transfer from './Components/TransferAmount/Transfer';
import Successport from './Components/SuccessPortal/success';

function App() {
  return (
<Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/users" exact component={Userdets} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/transfer/:id" exact component={Transfer} />
        <Route path="/success" exact component={Successport} />
      </Switch> 
    </Router>  );
}

export default App;
