import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Loading from '../pages/Loading';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor: 'red', 
      tabBarShowLabel: false,

      tabBarStyle: {
      backgroundColor: '#fff',
      tabBarLabelPosition: 'below-icon',
      paddingBottom: 3,
      borderWidth: 0,

      shadowColor: '#000',
      shadowOpacity: 0.10,
      shadowOffset: {
        width: 0,
        height: 0,
      }
      }}}>

    <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen 
        name='Loading'
        component={Loading}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='help-circle' color={color} size={size} />,
          tabBarLabel: 'Loading',
        }}
      />
    </Tab.Navigator>
  );
}