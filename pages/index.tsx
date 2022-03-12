import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Flex, Input, Heading, Box } from '@chakra-ui/react'
import React from "react";

const Home = () => {
  const dynamicTextRef = React.useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dynamicTextRef.current.changeValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Flex p={4} display={{ sm: 'flex' }}>
      <Heading>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Heading>

      <main className={styles.main}>
        <DynamicText ref={dynamicTextRef} />
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Input 
            size='lg'
            onChange={onChange}
          />
        </Box>
      </main>
    </Flex>
  );
};

export default Home;
