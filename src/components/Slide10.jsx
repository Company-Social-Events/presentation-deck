import React from 'react';
import { SlideTemplate2, ThemeStyles, DashBullet } from './index';
import { Heading, Text, Link } from 'theme-ui'
import { Flex } from '@theme-ui/components';

const HelpLinks = [
    {name: 'Create GitHub account', url: 'https://github.com/'},
    {name: 'Install Git bash', url: 'https://git-scm.com/downloads'},
    {name: 'Install NodeJS', url: 'https://nodejs.org/en/download'},
    {name: 'Install VSCode', url: 'https://code.visualstudio.com/'}
]

const Repos = [
    {name: 'Frontend repository', url: 'https://github.com/adriankarp/mern-frontend-boilerplate'},
    {name: 'Backend repository', url: 'https://github.com/adriankarp/mern-backend-boilerplate'}
]

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
                    {HelpLinks.map((link) => (
                        <DashBullet> <Text > {link.name}
                            (  <Link href={link.url}>{link.url}</Link>)
                        </Text></DashBullet>
                    ))}
                    <DashBullet>
                        <Text >Clone & run the boilerplates</Text>
                    </DashBullet>
                </ul>
                <Text > &nbsp;</Text>
                <ul>
                {Repos.map((link) => (
                        <DashBullet> <Text > {link.name}
                            (  <Link href={link.url}>{link.url}</Link>)
                        </Text></DashBullet>
                    ))}
                </ul>
            </Flex>
        </SlideTemplate2>
    );
}

export { Slide10 };