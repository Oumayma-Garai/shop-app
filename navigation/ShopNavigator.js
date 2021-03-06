import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "./../screens/shop/ProductsOverviewScreen";

import ProductDetailScreen from "./../screens/shop/ProductDetailScreen";
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);
export default createAppContainer(ProductsNavigator);
