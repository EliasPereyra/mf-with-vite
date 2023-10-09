import {atom, useAtom} from "jotai"

const value = atom(0)

const useValue = () => useAtom(value)

export default useValue