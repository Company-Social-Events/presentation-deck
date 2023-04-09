import React from 'react';
import { Heading, Text, Box } from 'theme-ui'
import { Footer1 } from './Footer1';
const Slide2 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',
    };
    const ParagraphStyle = {
        fontsize: '32px'

    };


    return (
        <>
            <Box>
                <Heading sx={HeadingStyle}> About us</Heading>
                <Box sx={{ marginTop: '180px' }}>
                    <Text sx={ParagraphStyle}> 
                        IBM iX is a global digital consulting
                        company that helps clients transform their businesses through
                        innovative digital strategies and solutions.
                    </Text>
                    <Text sx={ParagraphStyle}>&nbsp;</Text>
                    <Text sx={ParagraphStyle}>
                        With a team of over 60,000 professionals
                        in more than 170 countries, IBM iX combines creativity, technology,
                        and industry expertise to deliver exceptional customer experiences
                        and drive business growth.
                    </Text>
                </Box>
            </Box>
            <Footer1 />
        </>


    );
}

export { Slide2 };