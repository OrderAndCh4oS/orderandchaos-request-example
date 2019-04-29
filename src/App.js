import React, { Component } from 'react';
import './App.css';
import {ResponseType} from '@orderandchaos/request';
import { getPost } from './api/endpoints';

class App extends Component {

    state = {};

    componentDidMount() {
        getPost().then(result => {
            switch(result.type) {
                case ResponseType.SUCCESS:
                    console.log(result.data);
                    break;
                default:
                    // Todo: handle error messages
                    console.log(result);
            }
        })
    }

    render() {
        return (
            <div>Test</div>
        );
    }
}

export default App;
