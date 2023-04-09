import React from 'react';
import { Heading, Text, Image, Flex, Box} from 'theme-ui'
import { SlideTemplate2, MERNStackImgs } from './index';


const Slide5 = () => {
    const listItemStyle = {
        paddingLeft: '10px',
    }
    return (
        <SlideTemplate2>
            <Heading>
                Introduction to the MERN Stack
            </Heading>
            <Box style={{marginTop:'110px'}}>
            <Text>The MERN stack is a popular web development stack that consists of four technologies:</Text>
            <Text>&nbsp;</Text>
            <Flex sx={{justifyContent:'space-between'}}>
                <ul style={{listStyleType:'- ' }}>
                    <li style={listItemStyle}>MongoDB</li>
                    <li style={listItemStyle}>ExpressJS</li>
                    <li style={listItemStyle}>ReactJS</li>
                    <li style={listItemStyle}>NodeJS</li>
                </ul>
                <Flex sx={{marginLeft:'32px'}}>
                    <Flex sx={{flexDirection:'column', justifyContent:'flex-end'}}>
                        <Image src={MERNStackImgs.reactjs} alt="reactjs" sx={{width:'145px', height:'95px'}}  />
                    </Flex>
                    <Flex sx={{flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
                        <Image src={MERNStackImgs.mongodb} alt="mongodb" sx={{width:'95px', height:'95px', marginBottom:'20px'}} />
                        <Image src={MERNStackImgs.nextjs} alt="nextjs" sx={{width:'135px', height:'85px'}} />
                    </Flex >
                    <Flex sx={{flexDirection:'column', justifyContent:'flex-end'}}>
                        <Image src={MERNStackImgs.expressJS} alt="expressjs" sx={{width:'145px', height:'65px', marginBottom:'45px'}} />
                        <Image src={MERNStackImgs.nodejs} alt="nodejs" sx={{width:'145px', height:'40px', marginBottom:'60px'}} />
                    </Flex>
                </Flex>
            </Flex>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <Text>Each component of the MERN stack has a specific role in building web applications.</Text>
            </Box>

        </SlideTemplate2>

    );
}

export { Slide5 };