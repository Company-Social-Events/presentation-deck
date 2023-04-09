import React from 'react';
import { SlideTemplate2 } from './index';
import { Heading, Text, Box } from 'theme-ui'
const Slide9 = () => {
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
        NodeJS in the MERN Stack

        </Heading>

        <Box sx = {{marginTop : '180px'}}>
        <Text sx = {ParagraphStyle}>
        NodeJS is a server-side JavaScript runtime that allows developers to build scalable, high-performance applications.
        </Text>
        <Text sx = {ParagraphStyle}> &nbsp;</Text>

        <Text sx = {ParagraphStyle}>
        It is the “N” in the MERN stack and is used to power the backend of web applications built with the MERN stack. 
        </Text>

        <Text sx = {ParagraphStyle}> &nbsp;</Text>

        <Text sx = {ParagraphStyle}>
        NodeJS provides a powerful set of tools for  building web applications, including support for asynchronous I/O, event-driven programming, and a vast ecosystem of third-party modules.
        </Text>

        </Box>

    </SlideTemplate2>

    );
}

export { Slide9 };