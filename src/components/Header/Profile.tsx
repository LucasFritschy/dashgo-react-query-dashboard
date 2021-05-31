import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text color="gray.300" fontSize="small">
            Lucas Fritschy
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Fritschy" src="http://github.com/lucasfritschy.png" />
    </Flex>
  )
}
