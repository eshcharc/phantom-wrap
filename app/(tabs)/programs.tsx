import { Image, StyleSheet, Platform, View, Text, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const RoundedButton = ({ title, onPress }: { title: string, onPress: (event: GestureResponderEvent) => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{flex: 5, backgroundColor: 'red'}}>
        {/* <RoundedButton title="dfdfd" onPress={() => {}}></RoundedButton> */}
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50, // Makes it rounded
    alignItems: "center",
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
