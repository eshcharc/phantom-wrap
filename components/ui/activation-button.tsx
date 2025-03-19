import { StyleSheet, GestureResponderEvent, TouchableOpacity, Text } from "react-native";

export const ActiveButton = ({ isActive, onPress }: { isActive: boolean, onPress: (event: GestureResponderEvent) => void }) => {
  return (
    <TouchableOpacity style={[styles.button, {
      backgroundColor: isActive ? '#22cc22' : 'red',
      boxShadow: isActive ? '1px 1px 2px black': '5px 5px 5px black'
    }]} onPress={onPress}>
      <Text style={styles.activeLabel}>{isActive ? "RUNNING" : "STOPPED"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, 
    alignItems: "center",
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },
  activeLabel: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },
});