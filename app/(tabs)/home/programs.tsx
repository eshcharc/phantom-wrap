import { StyleSheet, View, Text } from 'react-native';

export default function ProgramsSection() {
  return (
    <View style={styles.container}>
      <Text>Programs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});
