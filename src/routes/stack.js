import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tabs';
//import Home from '../pages/Home';
import Luta from '../pages/Luta';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true}}>
      
      
      
      <Stack.Screen 
        name='Home'
        component={Tabs}
        options={{
          title: 'Inicio',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: false,
        }}
      />

    <Stack.Screen 
        name='Luta'
        component={Luta}
        options={{
          title: 'Luta',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'white',
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}