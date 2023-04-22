import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react"

export default function Navbar() {
	return (
		<Flex bg={'blue.200'} h={50} borderRadius={5} mt={2}>
			<Spacer />
			<Center>
				<Text>
					LogIn
				</Text>
			</Center>
			<Spacer />
			<Center>
				<Text>
					Settings
				</Text>
			</Center>
			<Spacer />
		</Flex>
	)
}
