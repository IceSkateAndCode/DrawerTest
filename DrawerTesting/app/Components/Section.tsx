import * as React from 'react';
import { Drawer } from 'react-native-paper';
import CollapsedItem from './CollapsedItem';
import DrawerItem from './DrawerItem';

const Section = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section
        // The header of the section 
        title="This is a section title!"
        // Decides if there is a divider at the end of the section
        // Default is true
        showDivider = {true}
        // Specifies the largest possible size a title font can be
        titleMaxFontSizeMultiplier={50}
        >
      // Children are REQUIRED for Drawer.Section
      // Children can be Drawer.Item or Drawer.CollapsedItem
      // Children can even be a mix of the two!
      <DrawerItem />
      <CollapsedItem />
    </Drawer.Section>
  );
};

export default Section;