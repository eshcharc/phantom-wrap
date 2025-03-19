import { HAPTIC_DEVICE } from "@/constants/haptic-device";
import { HapticNames } from "@/constants/haptic-names";
import { HapticSetup, Program } from "@/models/program";
import { StyleSheet, View, Image, Text } from "react-native";

const HapticDevice = ({ haptic, name, position, labelOnTop = true }: { haptic: HapticSetup, name: string, position: number[], labelOnTop?: boolean }) => {
  const markRadius = 30*(haptic.level/100)
  // const greenGain = 155 + haptic.level
  return (
    <View style={[styles.hapticDevice, {
      left: position[0],
      top: position[1],
      flexDirection: labelOnTop ? 'column' : 'column-reverse',
      
    }]}>
      <Text style={styles.hapticName}>{name}</Text>
      <View style={[styles.hapticMark, { 
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'black',
        borderColor: 'green'
        // backgroundColor: haptic.level ? `rgb(0, ${greenGain}, 0)` : 'black'
        }]}>
          <View style={[{ 
            width: markRadius,
            height: markRadius,
            borderRadius: markRadius/2,
            backgroundColor: 'green'
            }]}>
          </View>
        </View>
    </View>
  )
}

export const CurrentProgramSetup = ({ program }: { program: Program }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.programName}>{program.name}</Text>
      <View style={styles.handImageContainer}>
        <Image
          source={require('@/assets/images/handicap.png')}
          style={styles.handImage}
        />
        <View style={styles.hapticDevices}>
          <HapticDevice 
            haptic={program.hapticDevices[HAPTIC_DEVICE.HEAT]} 
            name={HapticNames[HAPTIC_DEVICE.HEAT]} 
            position={[15, 5]}/>
          <HapticDevice 
            haptic={program.hapticDevices[HAPTIC_DEVICE.PREASURE]} 
            name={HapticNames[HAPTIC_DEVICE.PREASURE]} 
            position={[90, 25]}/>
          <HapticDevice 
            haptic={program.hapticDevices[HAPTIC_DEVICE.TENSE]} 
            name={HapticNames[HAPTIC_DEVICE.TENSE]} 
            labelOnTop={false}
            position={[10, 85]}/>
          <HapticDevice 
            haptic={program.hapticDevices[HAPTIC_DEVICE.VIBRATION]} 
            name={HapticNames[HAPTIC_DEVICE.VIBRATION]} 
            labelOnTop={false}
            position={[100, 95]}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  handImageContainer: {
  },
  hapticDevices: {
    position: 'absolute'
  },
  programName: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7,
    boxShadow: '1px 1px 1px grey'
  },
  hapticDevice: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
  },
  handImage: {
    width: 210,
    height: 180
  },
  hapticMark: {
    flex: 1,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hapticName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});