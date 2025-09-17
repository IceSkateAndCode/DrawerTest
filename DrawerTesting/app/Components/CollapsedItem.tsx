import { Drawer } from 'react-native-paper';
import colors from "../styles/colors";
const CollapsedItem = () => (
   <Drawer.CollapsedItem
     focusedIcon="inbox"
     unfocusedIcon="inbox-outline"
     label="Inbox"
   />
);

<Drawer.Item 
  style={{backgroundColor: "yellow"}}
/>

export default CollapsedItem;