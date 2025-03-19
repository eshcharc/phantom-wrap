import { Programs } from "@/models/programs"
import { useMemo, useRef, useState } from "react"

export const usePrograms = (initialProgramId: string, defaultPrograms: Programs) => {
    const [currentProgramId, setCurrentProgramId] = useState(initialProgramId)
    const programs = useRef(defaultPrograms)

    const currentProgram = useMemo(() => {
        const program = programs.current[currentProgramId]

        return program;
    }, [currentProgramId])

    return {
        currentProgram,
        setCurrentProgramId,
        programs: programs.current,
    }
}