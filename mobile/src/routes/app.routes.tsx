import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '@/screens/Home';
import { NewHabit } from '@/screens/NewHabit';
import { Habit } from '@/screens/Habit';

export function AppRoutes(){
  return(
    <Navigator>
    <Screen 
      name='home'
      component={Home}
    />

    <Screen 
      name='new'
      component={NewHabit}
    />
    
    <Screen 
      name='habit'
      component={Habit}
    />
  </Navigator>
  )
}