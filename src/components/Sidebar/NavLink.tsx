import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
// import Link from 'next/link'
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  title: string
  icon: ElementType,
}

export function NavLink({ icon, title, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
  )
}