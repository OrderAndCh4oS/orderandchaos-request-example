import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@orderandchaos/react-components';
import PostList from './pages/posts/list';
import PostDetail from './pages/posts/detail';

class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Route exact path="/" component={PostList}/>
                    <Route path="/post/:id" component={PostDetail}/>
                </Container>
            </Router>

        );
    }
}

export default App;
