import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
//import reactstrap components
import { Alert, Button } from "reactstrap";
import { Card, Form, Row, Col } from 'react-bootstrap';
import { SketchPicker } from 'react-color'
// import ColorPicker from './ColorPicker';

class MyForm extends Component {
    
    //contain form values
    state = { 
        title: '',
        body: '',
        background: '#fff',
        cardBorderColor: '',
        displayColorPicker: false,
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
    console.log(this.state);
    };

    //SUBMIT FORM
    submit = (e) => {

    e.preventDefault();

    //build payload
    const payload = {
      title: this.state.title,
      body: this.state.body,
      cardBorderColor: this.state.cardBorderColor
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

                <div key={index} className="blog-post_display shadow-sm " 
                     style={{ 
                         border: '1px solid',
                         borderColor:post.cardBorderColor,
                         backgroundColor: 'rgba(195, 196, 192, 0.15)'
                     }}
                >                
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    {/* <small>Date Captured: {Date(post.date)}</small>  */}
                </div>
            ));
        }
    }


    greet = () => {
        alert("awe");
    }
    
    //handle color change
    handleChangeComplete = (color) => {
        this.setState({ cardBorderColor: color.hex });
        console.log(this.state);
        console.log("cardBorderColor: ", this.state.cardBorderColor);
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    
    



    render() { 

        const popover = {
            position: 'absolute',
            zIndex: '2',
        }

        const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        }

        return (
            
            <React.Fragment>

              
            {/* <Button onClick={this.greet}>CLICK</Button> */}
            


            <div className="app">
            {/* <h4>Comment</h4> */}
                
                <div className="row p-3" >
                   
                   
                    <form className="" >

                        <div className="row" >                       
                            <div className="col">               
                                <input className="form-control" type="text" name="title" placeholder="Title: "
                                    value={this.state.title} onChange={this.handleChange}>
                                </input>
                                {/* <ColorPicker /> */}
                            </div>
                        </div>    
                        
                    
                        <div className="row" >     
                            <div className="col">           
                                <div className="form-input">
                                    <textarea name="body" cols="20" rows="5" 
                                    value={this.state.body}
                                    onChange={this.handleChange} 
                                    placeholder="Write something...">  
                                    </textarea>
                                </div>
                            </div>
                        </div>

                    <button className="btn btn-outline-primary" onClick={this.submit}>SUBMIT</button>
                                        
                    </form>

                    <div className="col">  
                        
                        <div className="p-1">
                            <button onClick={ this.handleClick }>Pick Color</button>
                            { this.state.displayColorPicker ? 
                                <div style={ popover }> 
                                    <div style={ cover } onClick={ this.handleClose }/>
                                        <SketchPicker 
                                            color={ this.state.cardBorderColor }
                                            onChangeComplete={ this.handleChangeComplete } 
                                        />
                                </div> 
                                : 
                                null 
                            }
                        </div>   
                    </div>

                </div>  






                <Row>
                    <div className="blog-post p-3">
                        {this.displayBlogPost(this.state.posts)}
                    </div>
                </Row>        
            
            
            </div>

            </React.Fragment>
         );
    }
}
 
export default MyForm;