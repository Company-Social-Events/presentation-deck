import React from 'react';
import { Heading, Text, Image, Flex, Box } from 'theme-ui'
import { SlideTemplate2, MERNStackImgs, ThemeStyles, DashBullet } from './index';

const Styles = {
    ...ThemeStyles,
    MernColumn: { flexDirection: 'column', justifyContent: 'flex-end' },
    Icons: {
        React: { width: '145px', height: '95px' },
        MongoDB: { width: '95px', height: '95px', marginBottom: '20px' },
        ExpressJS: { width: '145px', height: '65px', marginBottom: '45px' },
        NodeJS: { width: '145px', height: '40px', marginBottom: '60px' },
        nextjs: { width: '135px', height: '85px' },
    }
}

const Slide5 = () => {

    return (
        <SlideTemplate2 pageNumber={5}>
            <Heading>
                Introduction to the MERN Stack
            </Heading>
            <Box style={{ ...Styles.MarginTop110, ...Styles.ParagraphStyle }}>
                <Text>The MERN stack is a popular web development stack that consists of four technologies:</Text>
                <Text>&nbsp;</Text>
                <Flex sx={Styles.JustifyBetween}>
                    <ul >
                        <DashBullet style={Styles.ListItemStyle}>MongoDB</DashBullet>
                        <DashBullet style={Styles.ListItemStyle}>ExpressJS</DashBullet>
                        <DashBullet style={Styles.ListItemStyle}>ReactJS</DashBullet>
                        <DashBullet style={Styles.ListItemStyle}>NodeJS</DashBullet>
                    </ul>
                    <Flex sx={{ marginLeft: '32px' }}>
                        <Flex sx={Styles.MernColumn}>
                            <Image src={MERNStackImgs.reactjs} alt="reactjs" sx={Styles.Icons.React} />
                        </Flex>
                        <Flex sx={{ ...Styles.MernColumn, alignItems: 'center' }}>
                            <Image src={MERNStackImgs.mongodb} alt="mongodb" sx={Styles.Icons.MongoDB} />
                            <Image src={MERNStackImgs.nextjs} alt="nextjs" sx={Styles.Icons.nextjs} />
                        </Flex >
                        <Flex sx={Styles.MernColumn}>
                            <Image src={MERNStackImgs.expressJS} alt="expressjs" sx={Styles.Icons.ExpressJS} />
                            <Image src={MERNStackImgs.nodejs} alt="nodejs" sx={Styles.Icons.NodeJS} />
                        </Flex>
                    </Flex>
                </Flex>
                <Text >&nbsp;</Text>
                <Text >&nbsp;</Text>
                <Text >Each component of the MERN stack has a specific role in building web applications.</Text>
            </Box>

        </SlideTemplate2>

    );
}

export { Slide5 };