import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen0188475Navigator from '../features/CopyOfBlankScreen0188475/navigator';
import SignUp23188474Navigator from '../features/SignUp23188474/navigator';
import BlankScreen0188471Navigator from '../features/BlankScreen0188471/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen0188475: { screen: CopyOfBlankScreen0188475Navigator },
SignUp23188474: { screen: SignUp23188474Navigator },
BlankScreen0188471: { screen: BlankScreen0188471Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
