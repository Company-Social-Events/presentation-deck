import React from 'react';
import { SlideTemplate2 } from './index';
import { Heading, Box, Text } from 'theme-ui'
const Slide8 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',

    };
    const ParagraphStyle = {
        fontsize: '32px'

    };

    return (
       
        <SlideTemplate2>
            <Heading sx ={ HeadingStyle}>ReactJS in the MERN Stack</Heading>

            <Box sx = {{marginTop : '180px'}}>
            <Text sx = {ParagraphStyle}>
            ReactJS is a popular front-end library for building user interfaces. 

            </Text>

            

            <Text sx = {ParagraphStyle}>
            It is the “R” in the MERN stack and is used to build the user interface of web applications.

            </Text>

            <Text sx = {ParagraphStyle}> &nbsp;</Text>

            <Text sx = {ParagraphStyle}>
            ReactJS provides a simple, declarative syntax for building UI components, which makes it easy to create reusable, modular code.
            </Text>
            
            <Text sx = {ParagraphStyle}> &nbsp;</Text>

            <Text sx ={ParagraphStyle}>
            ReactJS also provides powerful tools for managing application state and handling user interactions.
            </Text>

            </Box>

        </SlideTemplate2>

    );
}

export { Slide8 };