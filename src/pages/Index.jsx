import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Textarea, useToast, VStack, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaSearch, FaRegLightbulb, FaRegCheckCircle } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  // Dummy function to simulate search
  const handleSearch = () => {
    if (!inputValue.trim()) {
      toast({
        title: "Error",
        description: "Please enter a search query.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // This is where you would integrate with the back-end AI services.
    toast({
      title: "Search Initiated",
      description: "Searching for business problems and solutions...",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={16}>
        <Heading as="h1" size="2xl" textAlign="center">
          ProblemFinder
        </Heading>
        <Stack direction={["column", "row"]} spacing={4} align="center">
          <Input placeholder="Enter industry, interest or keyword..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} size="lg" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleSearch}>
            Search
          </Button>
        </Stack>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg" mb={4}>
            Identified Problems
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRegLightbulb} color="orange.400" />
              Problem 1: A significant pain-point identified in the retail industry...
            </ListItem>
            {/* ...more problems */}
          </List>
          <Divider my={4} />
          <Heading as="h3" size="lg" mb={4}>
            Existing Solutions
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRegCheckCircle} color="green.400" />
              Solution 1: An existing SaaS product that addresses...
            </ListItem>
            {/* ...more solutions */}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
