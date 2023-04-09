import React from 'react';
import { SlideTemplate2, Styles } from './index';
import { Heading, Text, Box } from 'theme-ui'
const Slide7 = () => {
    return (
        <SlideTemplate2>
            <Heading sx={Styles.HeadingStyle}>ExpressJS in the MERN Stack</Heading>
            <Box sx={Styles.MarginTop180}>
                <Text sx={Styles.ParagraphStyle}>
                    ExpressJS is a web application framework for Node.js that provides a set of features for building web and mobile applications.
                </Text>
                <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx={Styles.ParagraphStyle}>
                    It is the “E” in the MERN stack and is used to build the backend of web applications.
                </Text>
                <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx={Styles.ParagraphStyle}>
                    ExpressJS provides a simple, flexible API for building web applications, including support for routing, middleware, and templating engines.
                </Text>
            </Box>
        </SlideTemplate2>

    );
}

export { Slide7 };