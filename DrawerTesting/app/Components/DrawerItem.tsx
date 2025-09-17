import * as React from 'react';
import { Drawer } from 'react-native-paper';

const DrawerItem = () => (
   <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />
);

export default DrawerItem;