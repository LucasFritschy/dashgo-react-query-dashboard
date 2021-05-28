import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="gray.300" fontSize="small" >Lucas Fritschy</Text>
      </Box>
      <Avatar size="md" name="Lucas Fritschy" src="http://github.com/lucasfritschy.png" />
    </Flex>
  )
}