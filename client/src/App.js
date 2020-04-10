import React from 'react';
import './App.css';

//import components
import Example  from "./components/NavBar";
import MyForm  from "./components/Form";




class App extends React.Component {
  
  //contain form values
  state = { title: '', body: '', posts: [] };

  render() { 

    console.log("state: ", this.state);

    return (  
      <React.Fragment>
          <Example/>
          
          <div className="app">
            <h4>The MERN Stack</h4>
            <p>You can participate by giving your post a title and a body, and then click submit.</p>
            
            <MyForm></MyForm>              
          </div>

      </React.Fragment>
    );
  
  }

}
 
export default App;