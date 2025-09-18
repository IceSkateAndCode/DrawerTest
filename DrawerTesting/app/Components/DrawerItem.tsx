import * as React from 'react';
import { Drawer } from 'react-native-paper';
import defaultStyles from '../styles/defaultStyles';


//DrawerItem is a component that lets you navigate to different places
//Examples of a DrawerItem would be a Profile or Logout button
//Child of DrawerSection
const DrawerItem = () => (
   <Drawer.Item
     style={defaultStyles.itemContainer}
     icon="star"
     label="First Item"
   />
);

export default DrawerItem;