import React from 'react';
import { SlideTemplate2, Styles } from './index';
import { Heading, Text, Box } from 'theme-ui'
const Slide9 = () => {
    return (

        <SlideTemplate2>
            <Heading sx={Styles.HeadingStyle}>
                NodeJS in the MERN Stack
            </Heading>
            <Box sx={Styles.MarginTop180}>
                <Text sx={Styles.ParagraphStyle}>
                    NodeJS is a server-side JavaScript runtime that allows developers to build scalable, high-performance applications.
                </Text>
                <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx={Styles.ParagraphStyle}>
                    It is the “N” in the MERN stack and is used to power the backend of web applications built with the MERN stack.
                </Text>
                <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx={Styles.ParagraphStyle}>
                    NodeJS provides a powerful set of tools for  building web applications, including support for asynchronous I/O, event-driven programming, and a vast ecosystem of third-party modules.
                </Text>
            </Box>
        </SlideTemplate2>

    );
}

export { Slide9 };