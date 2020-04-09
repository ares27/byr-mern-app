import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  
  //contain form values
  state = { 
    title: '',
    body: '',
    posts: []
  };

  
  componentDidMount = () => {
    this.getBlogPost();
  }
  
  //GET BLOG POSTS
  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {

        const data = response.data;       
        this.setState({ posts: data });
        console.log("Data received", data);
      
      })
      .catch(()=> {
        alert("Error receiving data...")
      });
  }
  

  //handle change function, DOM change
  handleChange = (e) => {

    const target = e.target;
    const name = target.name;
    const value = target.value;

    //set current state
    this.setState({
      [name]: value
    });

  };  


  //ON SUBMIT EVENTS
  submit = (e) => {

    e.preventDefault();

    //build payload
    const payload = {
      title: this.state.title,
      body: this.state.body
    }

    //make HTTP POST - axios
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then( (response) => {
        console.log('Data: ', response);
        console.log("data sent.");
        //reset user input form
        this.resetUserInputs();      
        
        //call latest blogPost when submit
        this.getBlogPost();
      })
      .catch( (err) => {
        console.log('Error: ', err);
      })

  }

  //RESET USER INPUT
  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  }



  //
  displayBlogPost = (posts) => {

    if(!posts.length) return null;

    return posts.map((post, index) => (

      <div key={index} className="blog-post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    
  };


  render() { 

    console.log("state: ", this.state);

    return (  
      <div className="app">
        <h2>The MERN Stack</h2>
        <form onSubmit={this.submit}>

          <div className="form-input">
            <input
            type="text"
            name="title"
            placeholder="Title: "
            value={this.state.title}
            onChange={this.handleChange}>
            </input>
          </div>
          
          <div className="form-input">
            <textarea name="body" cols="30" rows="10" 
              value={this.state.body} 
              onChange={this.handleChange} 
              placeholder="Write something...">
            
            </textarea>
          </div>

          <button>Submit</button>
        </form>  

        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>

        
      </div>
    );
  
  
  
  }



}
 
export default App;