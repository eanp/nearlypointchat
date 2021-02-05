import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from '@/Router/'

const App = Router;
class Main extends Component {
    constructor(properties) {
        super(properties);
    }
    render() {
        return (
            <NavigationContainer>
                <App />
            </NavigationContainer>
        );
    }

}


AppRegistry.registerComponent(appName, () => Main);
