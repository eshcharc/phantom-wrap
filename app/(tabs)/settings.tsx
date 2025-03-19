import { StyleSheet, View, Text } from 'react-native';
import { ActiveButton } from '@/components/ui/activation-button';
import { CurrentProgramSetup } from '@/components/ui/current-program-setup';
import { usePrograms } from '@/hooks/use-programs';
import { defaultPrograms } from '@/defaults/programs';
import { Stack } from 'expo-router';
import { useActivation } from '@/hooks/use-activation';

export default function HomeScreen() {
  return (
    <View>
        <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 2
  },
  setupContainer: {
    flex: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorsContainer: {
    flex: 5,
    padding: 10,
  },
});
