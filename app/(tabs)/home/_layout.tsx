import { StyleSheet, View } from 'react-native';
import { ActiveButton } from '@/components/ui/activation-button';
import { CurrentProgramSetup } from '@/components/ui/current-program-setup';
import { usePrograms } from '@/hooks/use-programs';
import { defaultPrograms } from '@/defaults/programs';
import { Stack } from 'expo-router';
import { useActivation } from '@/hooks/use-activation';

export default function HomeLayout() {
  const { isActive, setActivation } = useActivation(false)
    const { currentProgram } = usePrograms('program-3', defaultPrograms)
  
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <ActiveButton isActive={isActive} onPress={() => setActivation(!isActive)}></ActiveButton>
        </View>
        <View style={styles.setupContainer}>
          <CurrentProgramSetup program={currentProgram} />
        </View>
        <View style={styles.indicatorsContainer}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="programs"/>
        </Stack>
        </View>
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
