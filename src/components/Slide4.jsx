import React from 'react';
import {SlideTemplate1, Styles} from "./index";
import { Heading,Text,Box } from 'theme-ui'



const Slide4 = () => {
    return (
        <SlideTemplate1>
            <Heading sx = {Styles.HeadingStyle}>Project requirements</Heading>
            <Box sx = {Styles.MarginTop180}> 
                <Text sx ={Styles.ParagraphStyle}>
                Application where to add company events like Christmas party , game nights, Team lunch. 
                </Text>
                <Text sx = {Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx = {Styles.ParagraphStyle}>
                We should have multiple roles, one admin that can manage the events. 
                </Text>
                <Text sx = {Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx = {Styles.ParagraphStyle}>
                The users that can be notified and see the upcoming events. 
                </Text>
                <Text sx = {Styles.ParagraphStyle}> &nbsp;</Text>
                <Text sx = {Styles.ParagraphStyle}>
                We should be able to create groups of users that we want to invite all to certain events. 
                </Text>
                <Text sx = {Styles.ParagraphStyle}>
                Invitation can be done by user or by group. each user should be identified by email.
                </Text>
            </Box>
        </SlideTemplate1>
    );

}

export { Slide4 };