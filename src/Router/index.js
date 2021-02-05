// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const toDetailButton = navigation => {
    navigation.navigate('Details')
    console.warn('tobutton')
}


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => toDetailButton(navigation)}
            />
            {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            /> */}
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}


const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}>
                    {/* {props => <HomeScreen {...props} extraData={someData} />} */}

                </Stack.Screen>
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;