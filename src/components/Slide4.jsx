import React from 'react';
import { SlideTemplate1, ThemeStyles } from "./index";
import { Heading, Text, Box } from 'theme-ui'



const Slide4 = () => {
    return (
        <SlideTemplate1>
            <Heading sx={ThemeStyles.HeadingStyle}>Project requirements</Heading>
            <Box sx={{ ...ThemeStyles.MarginTop180, ...ThemeStyles.ParagraphStyle }}>
                <Text >
                    Application where to add company events like Christmas party , game nights, Team lunch.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    We should have multiple roles, one admin that can manage the events.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    The users that can be notified and see the upcoming events.
                </Text>
                <Text > &nbsp;</Text>
                <Text >
                    We should be able to create groups of users that we want to invite all to certain events.
                </Text>
                <Text >
                    Invitation can be done by user or by group. each user should be identified by email.
                </Text>
            </Box>
        </SlideTemplate1>
    );

}

export { Slide4 };