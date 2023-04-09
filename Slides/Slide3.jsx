import React from 'react';
import { Heading, Grid, Box, Avatar, Flex, Text} from 'theme-ui'
import { Footer2,Mentors } from './index';

const Slide3 = () => {
    const HeadingStyle = {
        fontsize: '48px',
        fontWeight: 'bold',
    };
    const MentorsGridStyle = {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '50px 85px'
    }

   
        

    return (
      <>
            <Box>
                <Heading sx={HeadingStyle}> Mentors Team</Heading>
                <Flex sx={{justifyContent:'center',marginTop: '50px',}}>

                <Grid sx={MentorsGridStyle}>
                    {Mentors.map((mentor, index) => 
                        <TeamMember key={index} name={mentor.name} image={mentor.img} />
                        )}
                </Grid>
                </Flex>
            </Box>
            <Footer2 pageNumber={3}/>
        </>

    );
}

const TeamMember = ({ name,  image }) => {
    return (
        <Flex sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap:'20px'
        }}>
            <Avatar src={image} sx={{
                backgroundColor: '#d2dad6',
                width: '7vw',
                height: '7vw',
                padding:'5px',
                border:'4px solid #4b4b4b'
            }} />
            <Text sx={{fontSize:'18px', fontWeight:'bold'}}>{name}</Text>
        </Flex>
    );
}


export { Slide3 };