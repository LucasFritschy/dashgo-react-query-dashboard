import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SizebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiContactsLine} />
        <NavLink title="Usuários" icon={RiDashboardLine} />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" icon={RiGitMergeLine} />
        <NavLink title="Automação" icon={RiInputMethodLine} />
      </NavSection>
    </Stack>
  )
}