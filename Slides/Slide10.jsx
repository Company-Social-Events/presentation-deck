import React from 'react';
import { SlideTemplate2 } from './index';
import { Link } from 'theme-ui'
import { Heading, Box,Text } from 'theme-ui'
const Slide10 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',

    };
    const ParagraphStyle = {
        fontsize: '32px'

    };
 
    
    return (
        <SlideTemplate2>
            <Heading sx = {HeadingStyle}>
            To Do
            </Heading>

            <Box sx = {{marginTop : '180px'}}>
        
        <Text sx = {ParagraphStyle}>
        There are a couple of things to do until next session:
        </Text>

        <ul>
       <li> <Text sx = {ParagraphStyle}>
         Create GitHub account (  <Link href="#!">https://github.com/</Link>)
       </Text></li>

        
        <li>
        <Text sx={ParagraphStyle}>
        Install Git bash (<Link href="#!">https://git-scm.com/downloads</Link>)
        </Text>
        </li>

        <li>
            <Text sx={ParagraphStyle}>
            Install NodeJS(<Link href="#!">https://nodejs.org/en/download</Link>)
            </Text>
        </li>
        <li>
            <Text sx = {ParagraphStyle}>Install VSCode (<Link href="#!">https://code.visualstudio.com/</Link>)</Text>
        </li>
        <li>
            <Text sx ={ParagraphStyle}>Clone & run the boilerplates</Text>
        </li>
        
        
        </ul>

        <Text sx = {ParagraphStyle}> &nbsp;</Text>

        <ul>
            <li>
            <Text sx={ParagraphStyle}>
            Frontend repository ( <Link href="#!">https://github.com/adriankarp/mern-frontend-boilerplate</Link>)
            </Text>
            </li>
            <li>
             <Text sx={ParagraphStyle}>
             Backend repository(<Link href="#!">https://github.com/adriankarp/mern-backend-boilerplate</Link>)
                </Text>   
            </li>

        </ul>
            </Box>


        </SlideTemplate2>

    );
}

export { Slide10 };