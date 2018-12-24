import { createAppContainer, createStackNavigator } from "react-navigation";
import colors from "src/styles/colors";

import HomeScreen from "src/screens/home";
import DetailScreen from "src/screens/detail";
import ListScreen from "src/screens/list";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Detail: { screen: DetailScreen },
      List: { screen: ListScreen }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark
        },
        headerTintColor: colors.white,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
