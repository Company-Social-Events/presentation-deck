import React from 'react';
import { Heading, Text, Box } from 'theme-ui'
import { SlideTemplate1, Styles } from './index';

const Slide2 = () => {


    return (
        <SlideTemplate1>
                <Heading sx={Styles.HeadingStyle}> About us</Heading>
                <Box sx={Styles.MarginTop180}>
                    <Text sx={Styles.ParagraphStyle}> 
                        IBM iX is a global digital consulting
                        company that helps clients transform their businesses through
                        innovative digital strategies and solutions.
                    </Text>
                    <Text sx={Styles.ParagraphStyle}>&nbsp;</Text>
                    <Text sx={Styles.ParagraphStyle}>
                        With a team of over 60,000 professionals
                        in more than 170 countries, IBM iX combines creativity, technology,
                        and industry expertise to deliver exceptional customer experiences
                        and drive business growth.
                    </Text>
                </Box>
        </SlideTemplate1>


    );
}

export { Slide2 };