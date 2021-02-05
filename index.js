import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
class Main extends Component {
    constructor(properties) {
        super(properties);
    }
    render() {
        return (
            <App />
        );
    }

}


AppRegistry.registerComponent(appName, () => Main);
