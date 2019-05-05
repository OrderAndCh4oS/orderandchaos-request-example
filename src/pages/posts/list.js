import React, { Component } from 'react';
import { getPostList } from '../../api/endpoints';
import { ResponseType } from '@orderandchaos/request';
import {
    Column,
    Container,
    LinkButton,
    Panel,
    Row,
    Text,
    Title,
} from '@orderandchaos/react-components';

export default class PostList extends Component {
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
                            <Panel className={'bc-light-grey'}>
                                <Title tag={'h2'}>{post.title}</Title>
                                <Text>{post.body}</Text>
                                <LinkButton to={`/post/${post.id}`}>Discover
                                                                    More</LinkButton>
                            </Panel>
                        </Column>,
                    )}
                </Row>
            </Container>
        );
    }
}
