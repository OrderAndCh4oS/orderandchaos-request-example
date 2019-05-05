import React, { Component } from 'react';
import './App.scss';
import { ResponseType } from '@orderandchaos/request';
import {
    Column,
    Container,
    Panel,
    Row,
    Text,
    Title,
} from '@orderandchaos/react-components';
import { getPostList } from './api/endpoints';

class App extends Component {

    state = {
        posts: [],
    };

    componentDidMount() {
        getPostList().then(result => {
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
        });
    }

    render() {
        return (
            <Container>
                <Title tag={'h1'}>Posts</Title>
                <Row>
                    {this.state.posts.map(post =>
                        <Column key={post.id} span={['xsml-12', 'sml-6', '4']}>
                            <Panel classname={'bc-light-grey'}>
                                <Title tag={'h2'}>{post.title}</Title>
                                <Text>{post.body}</Text>
                            </Panel>
                        </Column>,
                    )}
                </Row>
            </Container>
        );
    }
}

export default App;
