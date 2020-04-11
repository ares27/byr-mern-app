import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
//import reactstrap components
import { Alert, Button } from "reactstrap";
import { Card, Form } from 'react-bootstrap';

class MyForm extends Component {
    
    //contain form values
    state = { 
        title: '',
        body: '',
        posts: [],
        errorMsg: ''
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
        .catch((err)=> {
            //alert("Error receiving data...")
            console.log(err);
            this.setState({ errorMsg: err.message });
        });
    }

    //INPUT ONCHANGE
    handleChange = (e) => {

    const target = e.target;
    const name = target.name;
    const value = target.value;

        //set current state
        this.setState({
            [name]: value
        });
    };

    //SUBMIT FORM
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

    //RESET FORM INPUT
    resetUserInputs = () => {
        this.setState({
        title: '',
        body: ''
        });
    };

    //DISPLAY POSTS
    displayBlogPost = (posts) => {

        if(!posts.length) { 
            return (
                <div>
                    <Alert 
                        className="mt-2" 
                        color="danger">
                        {this.state.errorMsg} 
                    </Alert>
                </div>
            );
        } else {

            return posts.map((post, index) => (

                <div key={index} className="blog-post_display">                
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    {/* <small>Date Captured: {Date(post.date)}</small>  */}
                </div>
            ));
        }
    }


    

    render() { 

        //deconstruct *use this way going forward
        //const { username, comments, topic } = this.state;
        //console.log("state: ", this.state);

        return (
            
            <React.Fragment>
                        

            <div className="app">
            <h4>Comment</h4>
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
                    <Button color="primary">SUBMIT</Button>
                </form>  

                 <div className="blog-post">
                    {this.displayBlogPost(this.state.posts)}
                 </div>        
            </div>

            </React.Fragment>
         );
    }
}
 
export default MyForm;