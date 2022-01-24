import * as React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Icon,
  IconProps,
} from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { List } from './views/List';
import { Wallet } from './views/Wallet';
import { Quiz } from './views/Quiz';
import { Settings } from './views/Settings';

// export const navigationRef = React.createRef() as any; // TODO: type

// const customNavigate = ( route: string ) => {
//     navigationRef.current?.navigate( route );
// };



const Tab = createBottomTabNavigator();

// const HomeIcon = (props) => (
//   <Icon {...props} name='home' />
//   );


//<IconRegistry icons={EvaIconsPack} /> //for icon package

function MyTabs() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Tab.Navigator
        //  tabBarOptions={ {
        //   showLabel: false,
        //   style: {
        //       height: 0,
        //   },
        // } }
        initialRouteName='List'
        screenOptions={{
          tabBarActiveTintColor: '#e91e63'
        }}
      >
        <Tab.Screen
          name='List'
          component={List}
          options={{
            tabBarLabel: 'List'
            //tabBarVisible: false
          }}
        />
        <Tab.Screen
          name='Wallet'
          component={Wallet}
          options={{
            tabBarLabel: 'Wallet'
            //tabBarVisible: false
          }}
        />
        <Tab.Screen
          name='Quiz'
          component={Quiz}
          options={{
            tabBarLabel: 'Quiz'
            //tabBarVisible: false
          }}
        />
        <Tab.Screen
          name='Settings'
          component={Settings}
          options={{
            tabBarLabel: 'Settings'
            //tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </ApplicationProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
