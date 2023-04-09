import React from 'react';
import { Box, Grid } from 'theme-ui'
import { Flex, Text } from "theme-ui";


const SlideTemplate2 = ({ children, pageNumber }) => {
    return (<Box sx={{
        width: '100%',
        height: '100%',
        padding: '45px 40px'
    }}>
        <Grid sx={{ gridTemplateRows: '1fr auto', width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                {children}
            </Box>
        </Grid>
        <Footer pageNumber={pageNumber} />
    </Box>);
}


const Footer = ({ pageNumber }) => {
    const TextStyle = {
        fontSize: '12px'
    }
    return (
        <Flex sx={{ justifyContent: 'space-between', height: '20px' }}>
            <Text sx={TextStyle}> IBM iX / © IBM Corporation </Text>
            <Text sx={TextStyle}>{pageNumber}</Text>
        </Flex>
    );
}

export { SlideTemplate2 };