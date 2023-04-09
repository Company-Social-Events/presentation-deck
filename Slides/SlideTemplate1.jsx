import React from 'react';
import { Box, Grid} from 'theme-ui'
import {IBMiXLogo,IBMLogo} from "./index";
import { Flex, Image } from "theme-ui";


const SlideTemplate1 = ({ children }) => {
    return (<Box sx={{
        width: '100%',
        height: '100%',
        padding: '45px 40px'
    }}>
        <Grid sx={{ gridTemplateRows: '1fr auto', width: '100%', height: '100%' }}>
            <Box sx={{width: '100%', height: '100%'}}>
            {children}
            </Box>
            <Footer />
        </Grid>
    </Box>);    
}

const Footer = () => {
    return (
        <Flex sx={{ justifyContent: 'space-between', height:'70px'}}>
            <Image src={IBMiXLogo} alt="ibm ix logo" />
            <Image src={IBMLogo} alt="ibm logo" />
        </Flex>
    );
}

export  {SlideTemplate1};