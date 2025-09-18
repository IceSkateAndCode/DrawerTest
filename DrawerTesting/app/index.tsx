import { View, Text } from "react-native";
import CollapsedItem from "./Components/CollapsedItem";
import Section from "./Components/Section";
import defaultStyles from "./styles/defaultStyles";
import DrawerItem from "./Components/DrawerItem";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper";
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

function HomeScreen() {
  const navigation = useNavigation();
  
  return(
    <View style={defaultStyles.contanier}>
      <Text style={defaultStyles.text}>This is the homescreen</Text>
      
      <Button onPress={() => navigation.openDrawer()}>
        Open Drawer
      </Button>
    </View>
  )
}

function DrawerSectionScreen() {
  const navigation = useNavigation();

  return(
    <View style={defaultStyles.contanier}>
      <Text>Drawer Section Screen</Text>
      
      <Button onPress={() => navigation.goBack()}>
        Go back to the Home Page
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
      {/* Keep your screens but the drawer content will be custom */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="DrawerSection" component={DrawerSectionScreen} />
    </Drawer.Navigator>
  );
}