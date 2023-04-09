import React from 'react';
import { SlideTemplate2, Styles } from './index';
import { Heading, Box, Text } from 'theme-ui'
const Slide6 = () => {
  return (
    <SlideTemplate2>
      <Heading sx={Styles.HeadingStyle}>
        MongoDB in the MERN Stack
      </Heading>
      <Box sx={Styles.MarginTop180}>
        <Text sx={Styles.ParagraphStyle}>
          MongoDB is a document-based NoSQL database that stores data in JSON-like documents.
        </Text>
        <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
        <Text sx={Styles.ParagraphStyle}>
          It is the “M” in the MERN stack and provides a flexible, scalable solution for storing and querying data.
        </Text>
        <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
        <Text sx={Styles.ParagraphStyle}>
          One of the benefits of using MongoDB in the MERN stack is that it allows developers to work with data in a way that is similar to working with objects in JavaScript. This makes it easy to work with data in a flexible, intuitive way.
        </Text>
      </Box>

    </SlideTemplate2>

  );
}

export { Slide6 };