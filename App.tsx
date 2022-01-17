import * as React from 'react';
// import * as eva from '@eva-design/eva';
// import {
//   ApplicationProvider,
//   IconRegistry,
//   Layout,
//   Icon,
//   IconProps,
// } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { List } from './components/List';
import { Wallet } from './components/Wallet';
import { Quiz } from './components/Quiz';
import { Settings } from './components/Settings';

// export const navigationRef = React.createRef() as any; // TODO: type

// const customNavigate = ( route: string ) => {
//     navigationRef.current?.navigate( route );
// };

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          //tabBarVisible: false
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          //tabBarVisible: false
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarLabel: 'Quiz',
          //tabBarVisible: false
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Profile',
          //tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
