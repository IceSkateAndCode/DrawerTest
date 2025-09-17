import { View } from "react-native";
import CollapsedItem from "./Components/CollapsedItem";
import Section from "./Components/Section";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CollapsedItem />
      <Section />
    </View>
  );
}
