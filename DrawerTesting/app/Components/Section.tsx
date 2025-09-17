import * as React from 'react';
import { Drawer } from 'react-native-paper';
import CollapsedItem from './CollapsedItem';

const Section = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section
        // The header of the section 
        title="Some title"
        // Decides if there is a divider at the end of the section
        // Default is true
        showDivider = {true}
        >
      // Children are REQUIRED for Drawer.Section
      // Children can be Drawer.Item or Drawer.CollapsedItem
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <CollapsedItem />
    </Drawer.Section>
  );
};

export default Section;