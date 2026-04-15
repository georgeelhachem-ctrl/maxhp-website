import { createContext, useContext } from 'react'

export const DemoModalContext = createContext<() => void>(() => {})
export const useDemoModal = () => useContext(DemoModalContext)
