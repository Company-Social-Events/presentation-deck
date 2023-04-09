import React from 'react';
import { SlideTemplate2 } from './index';
import { Heading,Box,Text } from 'theme-ui'
const Slide6 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',

    };
    const ParagraphStyle = {
        fontsize: '32px'

    };


    return (
     <SlideTemplate2>
          <Heading sx = {HeadingStyle}>
        MongoDB in the MERN Stack
       </Heading>

       <Box sx = {{marginTop : '180px'}}>

        <Text sx = {ParagraphStyle}>
        MongoDB is a document-based NoSQL database that stores data in JSON-like documents.
        </Text>
        
     
        <Text sx = {ParagraphStyle}> &nbsp;</Text>

        <Text sx = {ParagraphStyle}>
        It is the “M” in the MERN stack and provides a flexible, scalable solution for storing and querying data.
        </Text>
        
        <Text sx = {ParagraphStyle}> &nbsp;</Text>

        <Text sx = {ParagraphStyle}>
        One of the benefits of using MongoDB in the MERN stack is that it allows developers to work with data in a way that is similar to working with objects in JavaScript. This makes it easy to work with data in a flexible, intuitive way.
        </Text>

       </Box>

     </SlideTemplate2>
     
    );
}

export { Slide6 };