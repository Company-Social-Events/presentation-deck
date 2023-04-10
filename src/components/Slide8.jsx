import React from 'react';
import { SlideTemplate2, ThemeStyles } from './index';
import { Heading, Box, Text } from 'theme-ui'
const Slide8 = () => {
    return (

        <SlideTemplate2 pageNumber={8}>
            <Heading >ReactJS in the MERN Stack</Heading>
            <Box sx={{ ...ThemeStyles.MarginTop180, ...ThemeStyles.ParagraphStyle }}>
                <Text >
                    ReactJS is a popular front-end library for building user interfaces.
                </Text>
                <Text >
                    It is the “R” in the MERN stack and is used to build the user interface of web applications.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    ReactJS provides a simple, declarative syntax for building UI components, which makes it easy to create reusable, modular code.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    ReactJS also provides powerful tools for managing application state and handling user interactions.
                </Text>
            </Box>
        </SlideTemplate2>

    );
}

export { Slide8 };