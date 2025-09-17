import { Drawer } from 'react-native-paper';
const CollapsedItem = () => (
   <Drawer.CollapsedItem
     // Icon for the focused destination
     // Type: IconSource
     focusedIcon="inbox"
     // Icon for the unfocused destination
     // Type: IconSource
     unfocusedIcon="inbox-outline"
     // The label text of the item
     // Type: string
     label="Inbox"
     // Decides whether to highlight the drawer item as active
     // Type: boolean
     active = {true}
   />
);

export default CollapsedItem;