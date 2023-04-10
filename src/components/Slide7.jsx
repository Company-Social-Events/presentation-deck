import React from 'react';
import { SlideTemplate2, ThemeStyles } from './index';
import { Heading, Text, Box } from 'theme-ui'
const Slide7 = () => {
    return (
        <SlideTemplate2 pageNumber={7}>
            <Heading >ExpressJS in the MERN Stack</Heading>
            <Box sx={{ ...ThemeStyles.MarginTop180, ...ThemeStyles.ParagraphStyle }}>
                <Text >
                    ExpressJS is a web application framework for Node.js that provides a set of features for building web and mobile applications.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    It is the “E” in the MERN stack and is used to build the backend of web applications.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    ExpressJS provides a simple, flexible API for building web applications, including support for routing, middleware, and templating engines.
                </Text>
            </Box>
        </SlideTemplate2>

    );
}

export { Slide7 };