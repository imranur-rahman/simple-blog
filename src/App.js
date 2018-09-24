import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Comment {
    
}

class Blog extends Component {

    constructor () {
        super();
        this.state = {
            blog_title: '',
            blog_text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit (evt) {
        alert(this.state.blog_title + '' + this.state.blog_text);
    }

    render () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>

                <fieldset>

                    <legend>Add new blog!!!</legend>
                    Title<br></br>
                    <input type="title" name="blog_title" onChange={this.handleChange} required /><br></br>

                    Text<br></br>
                    <input type="text" name="blog_text" onChange={this.handleChange} size="100" required />
                    <br></br><br></br>

                    <input type="submit" value="Submit" />

                </fieldset>

            </form>
        );
    }
}

export default Blog;

//export default App;
