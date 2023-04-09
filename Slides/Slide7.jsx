import React from 'react';
import { SlideTemplate2 } from './index';
import { Heading, Text,Box } from 'theme-ui'
const Slide7 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',

    };
    const ParagraphStyle = {
        fontsize: '32px'

    };


    return (
        <SlideTemplate2>
                <Heading sx = {HeadingStyle}>ExpressJS in the MERN Stack</Heading>
                <Box sx = {{marginTop:'180px'}}>
                
                <Text sx = {ParagraphStyle}>
                ExpressJS is a web application framework for Node.js that provides a set of features for building web and mobile applications.
                </Text>
                
                <Text sx = {ParagraphStyle}> &nbsp;</Text>
                
                <Text sx ={ParagraphStyle}>
                It is the “E” in the MERN stack and is used to build the backend of web applications.
                </Text>

                <Text sx = {ParagraphStyle}> &nbsp;</Text>

                <Text sx = {ParagraphStyle}>

                ExpressJS provides a simple, flexible API for building web applications, including support for routing, middleware, and templating engines.
                </Text>

                </Box>

        </SlideTemplate2>

    );
}

export { Slide7 };