import { createAppContainer, createStackNavigator } from "react-navigation";
import colors from "src/styles/colors";

import HomeScreen from "src/screens/home";
import DetailScreen from "src/screens/book_detail";
import ListScreen from "src/screens/books_list";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Detail: { screen: DetailScreen },
      List: { screen: ListScreen }
    },
    {
      initialRouteName: "Home",
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
