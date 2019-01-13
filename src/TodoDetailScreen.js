import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setTodoDescription } from './store/actions/actions';
import { Container, Button, Icon, Content, Textarea, Label, Form } from 'native-base';
import UIHeader from './UIHeader'

class TodoDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id'),
            title: this.props.navigation.getParam('title'),
            description: this.props.navigation.getParam('description')
        };
        
    }

    static navigationOptions = {
        header: null
    };

    render(){
        return (
            <Container>
                {/* <Header 
                    iosBarStyle={"light-content"} 
                    androidStatusBarColor="#800000" 
                    style={{backgroundColor: '#990000'}}>
                    <Left>
                        <Button transparent 
                            onPress={()=>{
                                this.props.navigation.goBack();
                            }}>
                            <Icon name='arrow-back' style={{color: '#fff'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={()=>{
                                this.props.setTodoDescription(this.state.id,this.state.description);
                            }}>
                            <Icon name='ios-save' style={{color: '#fff'}}/>
                        </Button>
                    </Right>
                </Header> */}

                <UIHeader 
                    iosBarStyle="light-content"
                    statusBarColor="#800000"
                    styleColor="#990000"
                    titleColor="#fff"
                    title={this.state.title}
                    hasBackButton={true}
                    hasRightButton={true}
                    rightButtons={(
                        <Button transparent
                            onPress={()=>{
                                this.props.setTodoDescription(this.state.id,this.state.description);
                            }}>
                            <Icon name='ios-save' style={{color: '#fff'}}/>
                            {/* <Text></Text> */}
                        </Button>
                    )} >
                </UIHeader>
                <Content>
                    <Form style={{padding:10}}>
                        <Label>Enter Description</Label>
                        <Textarea rowSpan={5} bordered 
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}/>
                    </Form>
                </Content>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos.data
    };
};

const mapDispatchToProps = {
    setTodoDescription
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailScreen);
