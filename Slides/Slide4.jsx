import React from 'react';
import {SlideTemplate1} from "./index";
import { Heading,Text,Box } from 'theme-ui'



const Slide4 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',

    };
    const ParagraphStyle = {
        fontsize: '32px'

    };



    return (
        <SlideTemplate1>
            <Heading sx = {HeadingStyle}>Project requirements</Heading>


            <Box sx = {{marginTop : '180px'}}> 
            
                <Text sx ={ParagraphStyle}>
                Application where to add company events like Christmas party , game nights, Team lunch. 
                </Text>
                <Text sx = {ParagraphStyle}> &nbsp;</Text>


                <Text sx = {ParagraphStyle}>
                We should have multiple roles, one admin that can manage the events. 
                </Text>
                
                <Text sx = {ParagraphStyle}> &nbsp;</Text>

                <Text sx = {ParagraphStyle}>
                The users that can be notified and see the upcoming events. 
                </Text>
                <Text sx = {ParagraphStyle}> &nbsp;</Text>
                <Text sx = {ParagraphStyle}>
                We should be able to create groups of users that we want to invite all to certain events. 
                </Text>
                <Text sx = {ParagraphStyle}>
                Invitation can be done by user or by group. each user should be identified by email.
                </Text>


            </Box>



        </SlideTemplate1>
    
    );

}

export { Slide4 };