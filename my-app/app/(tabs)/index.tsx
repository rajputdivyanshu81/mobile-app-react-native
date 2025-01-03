import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Text,View} from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
    </Tab.Navigator>
  );
}
function Library() {
  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}

function Suggested() {
  return (
    <View>
      <Text>Suggested</Text>
    </View>
  );
}

function Liked() {
  return (
    <View>
      <Text>Liked</Text>
    </View>
  );
}