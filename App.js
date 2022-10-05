import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import  Header  from './components/layout/header';
import   MovieContainer  from './components/containers/SearchContainer';
import AppStack from './components/stacks/AppStack';
import navigationTabs from './components/stacks/NavigationTabs';

export default function App() {
  return (
    <NativeBaseProvider>
    {/* <Header/> */}
     {/* {navigationTabs} */}
    <AppStack/>
     {/* <MovieContainer/> */}
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


