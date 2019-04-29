import React, { Component } from 'react';
import './App.css';
import {ResponseType} from '@orderandchaos/request';
import { getPost } from './api/endpoints';

class App extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        getPost().then(result => {
            switch(result.type) {
                case ResponseType.SUCCESS:
                    this.setState({posts: result.data});
                    break;
                case ResponseType.ERROR:
                    console.log(result.errors);
                    break;
                default:
                    // Todo: handle error messages
                    console.log(result);
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>)}
            </div>
        );
    }
}

export default App;
