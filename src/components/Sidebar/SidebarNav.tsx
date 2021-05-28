import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SizebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiContactsLine} href="/dashboard" />
        <NavLink title="Usuários" icon={RiDashboardLine} href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" icon={RiGitMergeLine} href="/forms" />
        <NavLink title="Automação" icon={RiInputMethodLine} href="/automation" />
      </NavSection>
    </Stack>
  )
}