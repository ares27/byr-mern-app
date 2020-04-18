import React from 'react';
import './App.css';

//import router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components
import { NavBar }  from "./components/NavBar";
import MyForm from "./components/Form";
import Jumbotron from './components/jumbotron';

//import routes
import Home from './components/Home';
import { NoMatch } from './components/nomatch';
import Covid19News  from './components/Covid19News';
import Match from './components/Match';




class App extends React.Component {
  
  //contain form values
  state = { title: '', body: '', covidCases: [] };

  render() { 

    console.log("state: ", this.state);

    return (  
      <React.Fragment>
          <NavBar/>
          <Jumbotron />
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/posts" component={MyForm} />
                  <Route path="/covid19news" component={Covid19News} />
                  <Route path="/match" component={Match} />
                  <Route component={NoMatch} />
                  {/* <Route path="/about" component={About} /> */}
                </Switch>
            </Router>
          
          
          {/* <div className="app">           
            <MyForm></MyForm>              
          </div> */}

      </React.Fragment>
    );
  
  }

}
 
export default App;