import React from 'react';
import { SlideTemplate2, Styles, DashBullet } from './index';
import { Heading, Box, Text, Link } from 'theme-ui'
const Slide10 = () => {
    return (
        <SlideTemplate2 pageNumber={10}>
            <Heading sx={Styles.HeadingStyle}>
                To Do
            </Heading>
            <Box sx={Styles.MarginTop180}>
                <Text sx={Styles.ParagraphStyle}>
                    There are a couple of things to do until next session:
                </Text>
                <ul>
                    <DashBullet> <Text sx={Styles.ParagraphStyle}>
                        Create GitHub account (  <Link href="#!">https://github.com/</Link>)
                    </Text></DashBullet>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>
                            Install Git bash (<Link href="#!">https://git-scm.com/downloads</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>
                            Install NodeJS(<Link href="#!">https://nodejs.org/en/download</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>Install VSCode (<Link href="#!">https://code.visualstudio.com/</Link>)</Text>
                    </DashBullet>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>Clone & run the boilerplates</Text>
                    </DashBullet>
                </ul>
                <Text sx={Styles.ParagraphStyle}> &nbsp;</Text>
                <ul>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>
                            Frontend repository ( <Link href="#!">https://github.com/adriankarp/mern-frontend-boilerplate</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text sx={Styles.ParagraphStyle}>
                            Backend repository(<Link href="#!">https://github.com/adriankarp/mern-backend-boilerplate</Link>)
                        </Text>
                    </DashBullet>
                </ul>
            </Box>
        </SlideTemplate2>
    );
}

export { Slide10 };