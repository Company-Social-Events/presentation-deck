import React from 'react';

import { Box, Grid} from 'theme-ui'
const Layout = ({ children }) => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            padding:'45px 40px' 
        }}>
            <Grid sx={{gridTemplateRows:'1fr auto', width:'100%', height:'100%'}}>
           { children}
           </Grid>
        </Box>


    );
}

export { Layout };