import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tabs';
import Home from '../pages/Home';
import Luta from '../pages/Luta';
import Loading from '../pages/Loading';
import LoadingLuta from '../pages/LoadingLuta';
import Login from '../pages/Login';
import Cadastro from '../pages/Login/subPages/Cadastro';
import Entrar from '../pages/Login/subPages/Entrar';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: true}}>
      
      <Stack.Screen 
        name='Loading'
        component={Loading}
        options={{
          title: 'Loading',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name='Entrar'
        component={Entrar}
        options={{
          title: 'Entrar',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: true,
        }}
      />

      <Stack.Screen 
        name='Cadastro'
        component={Cadastro}
        options={{
          title: 'Crie seu pinguim',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: true,
        }}
      />

      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Inicio',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name='LoadingLuta'
        component={LoadingLuta}
        options={{
          title: 'LoadingLuta',
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