/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from '@react-navigation/stack';
import CompleteProfile from './src/onboarding/CompleteProfile';
import EditProfile from './src/Setting/EditProfile';
import { NavigationContainer } from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          cardStyle:{backgroundColor:Colors.white},
          headerStyle:{
            elevation:0
          }
        }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={CompleteProfile}/>
          <Stack.Screen name="Settings" component={EditProfile} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({navigation}:any) =>{
  return(
    <>
      <View style={{backgroundColor:"green", height:"100%"}}>
        <Text onPress={navigation.navigate("Profile")}>
          Propssds dsdsdsd
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
