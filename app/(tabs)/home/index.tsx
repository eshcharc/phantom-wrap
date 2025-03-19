import { StyleSheet, View, Text } from 'react-native';

export default function IndicatorsSection() {
  return (
    <View style={styles.container}>
      <Text>Indicators</Text>
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
