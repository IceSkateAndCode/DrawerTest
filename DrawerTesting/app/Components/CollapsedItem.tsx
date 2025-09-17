import { Drawer } from 'react-native-paper';

const CollapsedItem = () => (
   <Drawer.CollapsedItem
     // Icon for the focused destination(where you actively are)
     focusedIcon="inbox"
     // Icon for the unfocused destination(places where you aren't)
     unfocusedIcon="inbox-outline"
     // The label text of the item
     label="Inbox"
   />
);

export default CollapsedItem;