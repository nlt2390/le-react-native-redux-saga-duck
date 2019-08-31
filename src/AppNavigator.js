import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import routes from './routes';

export const RootStack = createStackNavigator(routes);

export default createAppContainer(RootStack);
