import React from 'react';
import { SlideTemplate2, ThemeStyles } from './index';
import { Heading, Box, Text } from 'theme-ui'
const Slide6 = () => {
  return (
    <SlideTemplate2 pageNumber={6}>
      <Heading >
        MongoDB in the MERN Stack
      </Heading>
      <Box sx={{ ...ThemeStyles.MarginTop180, ...ThemeStyles.ParagraphStyle }}>
        <Text >
          MongoDB is a document-based NoSQL database that stores data in JSON-like documents.
        </Text>
        <Text> &nbsp;</Text>
        <Text>
          It is the “M” in the MERN stack and provides a flexible, scalable solution for storing and querying data.
        </Text>
        <Text> &nbsp;</Text>
        <Text>
          One of the benefits of using MongoDB in the MERN stack is that it allows developers to work with data in a way that is similar to working with objects in JavaScript. This makes it easy to work with data in a flexible, intuitive way.
        </Text>
      </Box>

    </SlideTemplate2>

  );
}

export { Slide6 };