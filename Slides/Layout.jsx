import React from 'react';
import IBMiXLogo from "./assets/imgs/ibm-ix-logo.png";
import IBMLogo from "./assets/imgs/ibm-logo.svg";
import { Flex, Grid, Image } from 'theme-ui'
const Layout = ({ children }) => {
    return (
        <Grid sx={{
            width: '100%',
            height: '100%',
            gridTemplateRows: '1fr 100px',
        }}>
           { children}
            <Flex sx={{ justifyContent:'space-between', padding:'15px 40px'}}>
            <Image src={IBMiXLogo} alt="ibm ix logo"/>
            <Image src={IBMLogo} alt="ibm logo"/>
            </Flex>

        </Grid>

    );
}

export { Layout };