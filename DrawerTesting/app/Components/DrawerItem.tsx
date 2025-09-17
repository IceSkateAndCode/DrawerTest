import * as React from 'react';
import { Drawer } from 'react-native-paper';


//DrawerItem is a component that lets you navigate to different places
//Examples of a DrawerItem would be a Profile or Logout button
const DrawerItem = () => (
   <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />
);

export default DrawerItem;