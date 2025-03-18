import { useState } from "react"

export const useActivation = (initalActivation: boolean) => {
    const [activated, setActivation] = useState(initalActivation)

    return {
        isActive: activated,
        setActivation
    }
}