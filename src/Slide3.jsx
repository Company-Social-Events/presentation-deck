import React from 'react';
import { Heading, Grid, Avatar, Flex, Text} from 'theme-ui'
import { Mentors, SlideTemplate2, Styles } from './index';

const Slide3 = () => {
    return (
      <SlideTemplate2  pageNumber={3}>
                <Heading sx={Styles.HeadingStyle}> Mentors Team</Heading>
                <Flex sx={{justifyContent:'center',marginTop: '50px',}}>

                <Grid sx={Styles.MentorsGridStyle}>
                    {Mentors.map((mentor, index) => 
                        <MentorshipMember key={index} name={mentor.name} image={mentor.img} />
                        )}
                </Grid>
                </Flex>
        </SlideTemplate2>

    );
}

const MentorshipMember = ({ name,  image }) => {
    const styles = {
        MentorShipGroup : {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap:'20px'
        },
        Avatar : {
            backgroundColor: '#d2dad6',
            width: '7vw',
            height: '7vw',
            padding:'5px',
            border:'4px solid #4b4b4b'
        },
        MentorName : {fontSize:'18px', fontWeight:'bold'}

    }

    return (
        <Flex sx={styles.MentorShipGroup}>
            <Avatar src={image} sx={styles.Avatar} />
            <Text sx={styles.MentorName}>{name}</Text>
        </Flex>
    );
}


export { Slide3 };