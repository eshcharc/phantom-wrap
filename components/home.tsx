import { StyleSheet, View, Text } from 'react-native';
import { ActiveButton } from '@/components/ui/activation-button';
import { CurrentProgramSetup } from '@/components/ui/current-program-setup';
import { usePrograms } from '@/hooks/use-programs';
import { defaultPrograms } from '@/defaults/programs';
import { Indicators } from './indicators';
import { ProgramsPage } from './programs';

export const Home = ({ isActive, setActivation, part }: { isActive: boolean; setActivation: (active: boolean) => void; part: string}) => {
    const { programs, currentProgram, setCurrentProgramId } = usePrograms('program-1', defaultPrograms)

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <ActiveButton isActive={isActive} onPress={() => setActivation(!isActive)}></ActiveButton>
            </View>
            <View style={styles.setupContainer}>
                <CurrentProgramSetup program={currentProgram} />
            </View>
            <View style={styles.innerContainer}>
                { part === 'home' ? <Indicators /> : <ProgramsPage currentProgram={currentProgram} programs={programs} onProgramSelect={(id) => {
                    setCurrentProgramId(id)
                    setActivation(false)
                }}/>}
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
  buttonContainer: {
    flex: 2,
    marginBottom: 30
  },
  setupContainer: {
    flex: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 5,
    padding: 10,
  },
});