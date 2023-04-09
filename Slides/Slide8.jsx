import React from 'react';
import { SlideTemplate2, Styles } from './index';
import { Heading, Box, Text } from 'theme-ui'
const Slide8 = () => {
    return (
       
        <SlideTemplate2>
            <Heading sx ={ Styles.HeadingStyle}>ReactJS in the MERN Stack</Heading>

            <Box sx = {Styles.MarginTop180}>
            <Text sx = {Styles.ParagraphStyle}>
            ReactJS is a popular front-end library for building user interfaces. 

            </Text>

            

            <Text sx = {Styles.ParagraphStyle}>
            It is the “R” in the MERN stack and is used to build the user interface of web applications.

            </Text>

            <Text sx = {Styles.ParagraphStyle}> &nbsp;</Text>

            <Text sx = {Styles.ParagraphStyle}>
            ReactJS provides a simple, declarative syntax for building UI components, which makes it easy to create reusable, modular code.
            </Text>
            
            <Text sx = {Styles.ParagraphStyle}> &nbsp;</Text>

            <Text sx ={Styles.ParagraphStyle}>
            ReactJS also provides powerful tools for managing application state and handling user interactions.
            </Text>

            </Box>

        </SlideTemplate2>

    );
}

export { Slide8 };