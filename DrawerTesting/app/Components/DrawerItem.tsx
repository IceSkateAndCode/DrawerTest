import * as React from 'react';
import { Drawer } from 'react-native-paper';
<<<<<<< HEAD
import colors from "../styles/colors";
=======
import defaultStyles from '../styles/defaultStyles';

>>>>>>> 445eb36ed99c1a4ccd013c0f742dd459c20cd0cb

//DrawerItem is a component that lets you navigate to different places
//Examples of a DrawerItem would be a Profile or Logout button
//Child of DrawerSection
const DrawerItem = () => (
   <Drawer.Item
<<<<<<< HEAD
     style={{ backgroundColor: colors.secondaryContainer}}
=======
     style={defaultStyles.itemContainer}
>>>>>>> 445eb36ed99c1a4ccd013c0f742dd459c20cd0cb
     icon="star"
     label="First Item"
   />
);

export default DrawerItem;