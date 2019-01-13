import React, {Component} from 'react';
import TodoScreen from './src/TodoScreen'
import TodoDetailScreen from './src/TodoDetailScreen'
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import store from "./src/store";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://59.120.179.80:9088/graphql' }),
  cache: new InMemoryCache(),
});

//yarn add apollo-client apollo-cache-inmemory apollo-link-http  react-apollo graphql-tag graphql

const AppNavigator = createStackNavigator(
  {
    Home: TodoScreen,
    TodoDetail: TodoDetailScreen,
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </ApolloProvider>
    );
  }
}