import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';
import { addTodo, toggleTodo } from './store/actions/actions';
import { Container, Button, Text, ListItem, Content, Item, Input, Icon, CheckBox } from 'native-base';
import { Col, Grid } from "react-native-easy-grid";
import UIHeader from './UIHeader'

class TodoScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render(){
        return (
            <Container>
                {/* <Header 
                    iosBarStyle="light-content"
                    androidStatusBarColor="#800000" 
                    style={{backgroundColor: '#990000'}}>
                    <Body>
                        <Title style={{color: '#fff'}}>Add Todo List</Title>
                    </Body>
                </Header> */}
                <UIHeader 
                    iosBarStyle="light-content"
                    statusBarColor="#800000"
                    styleColor="#990000"
                    title="Add Todo List" titleColor="#fff">
                </UIHeader>
                <Content>
                    <Grid  style={[{padding:15, borderBottomWidth:1,borderBottomColor:'#ddd'}]}>
                        <Col size={75}>
                            <Item regular>
                                <Input style={[styles.input,{padding: 10}]}
                                placeholder="enter todo title"
                                onChangeText={(text) => this.setState({text})} />
                            </Item>
                        </Col>
                        <Col size={25}>
                            <Button iconLeft transparent primary style={{marginLeft:5}} onPress={()=> this.props.addTodo(this.state.text) } >
                                <Icon name="md-send" style={{fontSize:30}}></Icon>
                            </Button>
                        </Col>
                    </Grid>
                    <FlatList keyboardShouldPersistTaps={'handled'}
                        data={this.props.todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                        <ListItem
                            onPress={()=>{ this.props.navigation.push('TodoDetail',item);}} >
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <CheckBox checked={item.completed} 
                                    style={{marginRight:8}}
                                    onPress={()=>{ this.props.toggleTodo(item.id);}} />
                                <View style={{padding:8}}>
                                    <Text style={[{fontSize:17}]}>{item.title}</Text>
                                </View>
                            </View>
                        </ListItem>)}
                        
                    />
                </Content>
                
            </Container>
        );

    };
}
const styles = StyleSheet.create({
    inputContainer:{
      width: "100%",
      flexDirection: "row"
    },
    input:{
      width: "80%"
    },
    completed:{
        textDecorationLine: "line-through",
        color: 'red'
    }
});

const mapStateToProps = state => {
    return {
        todos: state.todos.data
    };
};

const mapDispatchToProps = {
    addTodo,
    toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);