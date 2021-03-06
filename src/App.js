import React, {Component} from 'react';
import './App.css';
import LandingPage from './Main/LandingPage';
import NewProjectForm from './Adding/NewProjectForm';
import NewCardForm from './Adding/NewCardForm';
import {Route} from 'react-router-dom';
import List from './Main/List';
import CardList from './Main/CardList';
import Navbar from './Main/Navbar';


class App extends Component {

  render(){
  return (
    <div className="App">
    <Navbar />
     <Route exact path={"/"} component={LandingPage} />
     <Route path={"/new-project"} component={NewProjectForm} />
     <Route path={"/new-card/:projectId"} component={NewCardForm} />
     <Route path={"/list"} component={List} />
     <Route path={"/card-list/:projectId"} component={CardList} />
   
    </div>
  );
}
}

export default App;
