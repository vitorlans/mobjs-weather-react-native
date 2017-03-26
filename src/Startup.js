import { StackNavigator } from 'react-navigation';
import Weather from './screens/Weather';
import Search from './screens/Search';

const Routes = {
  SearchScreen: {
    name: 'PROCURAR',
    description: 'Where you looking for the weather.',
    screen: Search,
  }
}

const AppNavigator = StackNavigator({
  ...Routes,
  Index: {
    name: 'TEMPO',
    description: 'Where you see the weather.',
    screen : Weather
  }
}, {
    initialRouteName: 'Index',
    headerMode: 'screen'
});

export default AppNavigator