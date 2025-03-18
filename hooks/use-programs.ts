import { Programs } from "@/models/programs"
import { useMemo, useState } from "react"

export const usePrograms = (initialProgramId: string, defaultPrograms: Programs) => {
    const [currentProgramId, setCurrentProgramId] = useState(initialProgramId)
    const [programs, setPrograms] = useState(defaultPrograms)

    const currentProgram = useMemo(() => {
        const program = programs[currentProgramId]

        return program;
    }, [initialProgramId])

    return {
        currentProgram,
        setCurrentProgramId,
        programs,
    }
}