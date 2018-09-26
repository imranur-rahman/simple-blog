import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Comment extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text : props.text,
            showComment : true
        }
    }

    handleRemove(evt) {
        this.setState ({
            [evt.target.name] : false
        });
    }

    render() {
        if(this.state.showComment) {
            return (
                <div>
                    <div>{this.text}</div>
                    <input type="submit" name="showComment" value="Remove" onClick={this.handleRemove}/>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}

class Blog extends Component{
    constructor (props) {
        super(props);
        // console.log(props.title);
        // console.log(props.text);
        this.state = {
            title : props.title,
            text : props.text,
            comment : '',
            comments : [],
        }
    }

    handleSubmit (evt) {
        const newArray = this.state.comments.concat(new Comment({text : this.state.comment}));
        this.setState ({
            comment : '',
            comments : newArray
        });
    }

    handleChange (evt) {
        this.setState ({
            [evt.target.name] : evt.target.value
        });
    }

    render () {
        return (
            <li key={this.state.title}>{this.state.text}
            {/*<div key={this.state.title}>*/}
                {/*<div key={this.state.title}>*/}
                    {/*<div>{this.state.title}</div>*/}
                    {/*<div>{this.state.text}</div>*/}
                {/*</div>*/}

                {/*/!*<form className="form">*!/*/}

                    {/*/!*<fieldset>*!/*/}

                        {/*/!*<legend>Add a comment</legend>*!/*/}

                        {/*/!*<input type="text" name="comment" onChange={this.handleChange} size="100" required />*!/*/}
                        {/*/!*<br></br><br></br>*!/*/}

                        {/*/!*<input type="submit" value="Submit" onClick={this.handleSubmit} />*!/*/}

                    {/*/!*</fieldset>*!/*/}

                {/*/!*</form>*!/*/}

                {/*/!*<div>*!/*/}
                    {/*/!*{*!/*/}
                        {/*/!*this.state.comments.map((item) => {*!/*/}
                            {/*/!*return (<Comment key={item.text} text={item.text}/>);*!/*/}
                        {/*/!*})*!/*/}
                    {/*/!*}*!/*/}
                {/*/!*</div>*!/*/}

            {/*</div>*/}
            </li>
        );
    }
}

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.text}</li>;
}

class App extends Component {

    constructor () {
        super();
        this.blog = [];
        //this.blog = [{title: "ass", text: "ok ok"}, {title: "shit", text: "oh no"}];
        //new Blog() evabe na korar jonno o bujhte pare nai, ei kon type er object
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
        //alert(this.state.blog_title + '' + this.state.blog_text);
        var new_blog = new Blog({title: this.state.blog_title, text: this.state.blog_text});
        this.blog.push(new_blog);
        console.log(this.blog.length);
        console.log(new_blog);
        this.setState ({
            title : '',
            text : ''
        });
        evt.preventDefault(); // preventing the submit button to cause page reload
    }

    callAllBlogs = () => {
        const ret = this.blog.map((item) => {
            //console.log(item);
            // return (
            //     <ListItem key={item.title} title={item.title} text={item.text}/>
            // );
            return (<Blog key={item.title} title={item.title} text={item.text}/>);

        });
        return (<div>{ret}</div>);
    };

    render () {
        //let ret = this.callAllBlogs();
        //console.log(ret);
        return (
            <div>

                <form className="form" onSubmit={this.handleSubmit}>

                    <fieldset>

                        <legend>Add new blog!!!</legend>

                        Blog Title<br></br>
                        <input type="title" name="blog_title" onChange={this.handleChange} required /><br></br>

                        Blog Text<br></br>
                        <input type="text" name="blog_text" onChange={this.handleChange} size="100" required />
                        <br></br><br></br>

                        <input type="submit" value="Submit" />

                    </fieldset>

                </form>

                <div>
                    {
                        this.blog.map((item) => {
                            return (<Blog key={item.title} title={item.title} text={item.text}> </Blog>);
                        })
                    }
                </div>

            </div>

        );
    }
}

export default App;
