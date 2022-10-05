import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen } from "../screens/DetailScreen";
import IndexScreen from "../screens/IndexScreen";
import MovieScreen from "../screens/MovieScreen";
import navigationTabs from "./NavigationTabs";

const Stack=createNativeStackNavigator()

const AppStack=()=>
(    
   
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Navigation Tabs" component={navigationTabs} ></Stack.Screen>
    {/* <Stack.Screen name="Movies" component={MovieScreen}></Stack.Screen> 
   
    <Stack.Screen name="Index" component={IndexScreen}
    ></Stack.Screen> */}
    <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen> 

    </Stack.Navigator>
</NavigationContainer>

)




export default AppStack