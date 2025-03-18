import { HAPTIC_DEVICE } from "@/constants/haptic-device";

export interface HapticSetup {
    level: number,
    pattern: number
}

export interface Program {
    id: string;
    name: string;
    hapticDevices: {
        [HAPTIC_DEVICE.HEAT]: HapticSetup,
        [HAPTIC_DEVICE.TENSE]: HapticSetup,
        [HAPTIC_DEVICE.PREASURE]: HapticSetup,
        [HAPTIC_DEVICE.VIBRATION]: HapticSetup,
    }
}