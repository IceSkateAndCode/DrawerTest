import * as React from 'react';
import { Drawer } from 'react-native-paper';
import colors from "../styles/colors";

//DrawerItem is a component that lets you navigate to different places
//Examples of a DrawerItem would be a Profile or Logout button
//Child of DrawerSection
const DrawerItem = () => (
   <Drawer.Item
     style={{ backgroundColor: colors.secondaryContainer}}
     icon="star"
     label="First Item"
   />
);

export default DrawerItem;