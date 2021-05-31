import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  DrawerBody,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SibebarDrawerContext'
import { SizebarNav } from './SidebarNav'

export function Sidebar(): JSX.Element {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SizebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SizebarNav />
    </Box>
  )
}
