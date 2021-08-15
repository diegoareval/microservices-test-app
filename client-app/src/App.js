import * as React from "react"
import Header from "./layout/header"
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme, Container, Heading, Flex } from "@chakra-ui/react"
import PostCreate from "./components/PostCreate"
import PostList from "./components/PostList"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  }
  const theme = extendTheme({ colors })

export default function App( ) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Container>
      <Heading>Blog App</Heading>
        <PostCreate />
        </Container>
        <Flex justify="space-around">
      <PostList/>
     </Flex>
    </ChakraProvider>
  )
}