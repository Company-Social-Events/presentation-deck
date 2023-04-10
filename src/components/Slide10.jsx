import React from 'react';
import { SlideTemplate2, ThemeStyles, DashBullet } from './index';
import { Heading, Text, Link } from 'theme-ui'
import { Flex } from '@theme-ui/components';
const Slide10 = () => {
    return (
        <SlideTemplate2 pageNumber={10}>
            <Heading >
                To Do
            </Heading>
            <Flex sx={{...ThemeStyles.CenteredFlex, ...{alignItems:'flex-start'}, ...ThemeStyles.ParagraphStyle}}>
                <Text >
                    There are a couple of things to do until next session:
                </Text>
                <ul>
                    <DashBullet> <Text >
                        Create GitHub account (  <Link href="#!">https://github.com/</Link>)
                    </Text></DashBullet>
                    <DashBullet>
                        <Text >
                            Install Git bash (<Link href="#!">https://git-scm.com/downloads</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text >
                            Install NodeJS(<Link href="#!">https://nodejs.org/en/download</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text >Install VSCode (<Link href="#!">https://code.visualstudio.com/</Link>)</Text>
                    </DashBullet>
                    <DashBullet>
                        <Text >Clone & run the boilerplates</Text>
                    </DashBullet>
                </ul>
                <Text > &nbsp;</Text>
                <ul>
                    <DashBullet>
                        <Text >
                            Frontend repository ( <Link href="#!">https://github.com/adriankarp/mern-frontend-boilerplate</Link>)
                        </Text>
                    </DashBullet>
                    <DashBullet>
                        <Text >
                            Backend repository(<Link href="#!">https://github.com/adriankarp/mern-backend-boilerplate</Link>)
                        </Text>
                    </DashBullet>
                </ul>
            </Flex>
        </SlideTemplate2>
    );
}

export { Slide10 };