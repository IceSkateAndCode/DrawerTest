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
     // Badge to show on the icon, true is a dot, string or number to show text
     // Type: string | number | boolean
     // Default value: false
     badge = {true}
     // Whether the item is disabled
     // Type: boolean
     disabled = {false}
     // Largest possible scale a label font can reach
     // Type: number
     labelMaxFontSizeMultiplier={25}
     // Accessibility label for the button
     // Read by screen reader when the user presses the button
     // Type: string
     accessibilityLabel = "accessibility label demo"
     // An onPress prop can be added as well
     // Type: (e: GestureResponderEvent) => void
     // Syntax below as a comment:
     // onPress = onPressFunction
   />
);

export default CollapsedItem;