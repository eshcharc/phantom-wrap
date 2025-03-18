import { HAPTIC_DEVICE } from "@/constants/haptic-device";
import { Programs } from "@/models/programs";

export const defaultPrograms: Programs = {
    'program-1': {
        id: 'program-1',
        name: 'Program 1',
        hapticDevices: {
            [HAPTIC_DEVICE.HEAT]: { level: 100, pattern: 1 },
            [HAPTIC_DEVICE.TENSE]: { level: 20, pattern: 2 },
            [HAPTIC_DEVICE.PREASURE]: { level: 0, pattern: 3 },
            [HAPTIC_DEVICE.VIBRATION]: { level: 20, pattern: 4 }
        }
    },
    'program-2': {
        id: 'program-2',
        name: 'Program 2',
        hapticDevices: {
            [HAPTIC_DEVICE.HEAT]: { level: 100, pattern: 5 },
            [HAPTIC_DEVICE.TENSE]: { level: 0, pattern: 6 },
            [HAPTIC_DEVICE.PREASURE]: { level: 0, pattern: 7 },
            [HAPTIC_DEVICE.VIBRATION]: { level: 0, pattern: 8 }
        }
    },
    'program-3': {
        id: 'program-3',
        name: 'Program 3',
        hapticDevices: {
            [HAPTIC_DEVICE.HEAT]: { level: 0, pattern: 9 },
            [HAPTIC_DEVICE.TENSE]: { level: 20, pattern: 10 },
            [HAPTIC_DEVICE.PREASURE]: { level: 10, pattern: 11 },
            [HAPTIC_DEVICE.VIBRATION]: { level: 10, pattern: 12 }
        }
    }
}