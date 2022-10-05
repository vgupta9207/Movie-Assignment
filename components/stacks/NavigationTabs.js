
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import SearchContainer from "../containers/SearchContainer";
import MovieContainer from "../containers/MovieContainer";
import TvContainer from "../containers/TvContainer";
const Tab= createMaterialTopTabNavigator();
 const NavigationTabs=()=>{

return(
  
<Tab.Navigator>
<Tab.Screen name="Movie" component={MovieContainer}/>
<Tab.Screen name="Search" component={SearchContainer}/>
<Tab.Screen name="Tv" component={TvContainer}/>

</Tab.Navigator>
   

)





}







export default NavigationTabs;