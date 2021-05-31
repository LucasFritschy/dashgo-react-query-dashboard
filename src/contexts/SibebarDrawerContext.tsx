import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: React.ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
