import { StyleSheet, View, Text } from 'react-native';

export const Indicators = ({  }: { }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Indicators</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    width: '100%'
  },
  innerContainer: {
    flex: 5,
    padding: 10,
  },
});