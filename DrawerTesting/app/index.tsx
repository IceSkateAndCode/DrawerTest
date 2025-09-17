import { View } from "react-native";
import CollapsedItem from "./Components/CollapsedItem";
import Section from "./Components/Section";
import defaultStyles from "./styles/defaultStyles";
//add navigations to use the drawers
import {
  useNavigation
} from '@react-navigation/native';
import { Button } from "react-native-paper";
//https://reactnavigation.org/docs/drawer-based-navigation/

function HomeScreen(){
  const navigation = useNavigation();
  
  return(
    <view style={defaultStyles.contanier}>
      <text style={defaultStyles.text}>This is the homescreen</text>
      <Button style={defaultStyles.button} onPress={()=> navigation.navigate('')}
    </view>
  )
}

function drawerSectionScreen(){

}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CollapsedItem />
      <Section />
    </View>
  );
}
