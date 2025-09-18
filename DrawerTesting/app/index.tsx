import { View, Text } from "react-native";
import CollapsedItem from "./Components/CollapsedItem";
import Section from "./Components/Section";
import defaultStyles from "./styles/defaultStyles";
import DrawerItem from "./Components/DrawerItem";
//This is a navigator I found just for drawers
//More information: https://reactnavigation.org/docs/drawer-navigator/
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper";
//the DrawerContentScrollView is just liek it sounds, it's the scroll but just for the drawer 
import { DrawerContentScrollView } from '@react-navigation/drawer';

// Custom drawer content that REPLACES the default navigation items
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={defaultStyles.contanier}>
        {/* Your React Native Paper drawer components */}
        <CollapsedItem navigation={props.navigation} />
        <Section navigation={props.navigation} />
        <DrawerItem navigation={props.navigation} />
        {/* Add more Paper drawer components as needed */}
      </View>
    </DrawerContentScrollView>
  );
}

//this function is for the home screen, it is just the base
function HomeScreen() {
  const navigation = useNavigation();
  return(
    <View style={defaultStyles.contanier}>
      <Text style={defaultStyles.text}>This is the homescreen</Text>
      <Button onPress={() => navigation.openDrawer()}> {/*This still works even with the red underline*/}
        Open Drawer
      </Button>
    </View>
  )
}


const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 280, //This is the about of width you want your drawer to be
        },
      }}
    >
      {/* All your screens will be put down here */}
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}