import React, { Component, Fragment } from 'react';
import { getPostDetail } from '../../api/endpoints';
import { ResponseType } from '@orderandchaos/request';
import {
    Column,
    LinkButton,
    Panel,
    Row,
    Text,
    Title,
} from '@orderandchaos/react-components';

export default class PostDetail extends Component {
    state = {
        post: {
            id: null,
            title: '...Loading',
            body: '',
        },
    };

    componentDidMount() {
        const {params} = this.props.match;
        getPostDetail(params).then(result => {
            switch(result.type) {
                case ResponseType.SUCCESS:
                    this.setState({post: result.data});
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
            <Fragment>
                <Title tag={'h1'}>Post Detail</Title>
                <Row>
                    <Column>
                        <Panel className={'bc-light-grey'}>
                            <Title tag={'h2'}>{this.state.post.title}</Title>
                            <Text>{this.state.post.body}</Text>
                            <LinkButton to={`/`}>List Posts</LinkButton>
                        </Panel>
                    </Column>
                </Row>
            </Fragment>
        );
    }
}
