import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Kimberlyn!</Text>
      <TouchableHighlight onPress={() => console.log("Image pressed!")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https:picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("Button pressed")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
