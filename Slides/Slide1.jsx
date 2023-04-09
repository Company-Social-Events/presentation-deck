import React from 'react';
import { Heading, Flex} from 'theme-ui'
import { SlideTemplate1 } from './SlideTemplate1';
const Slide1 = () => {
    return (
        <SlideTemplate1>
            <Flex sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
            >
                <Heading>
                    Proiecte Colective
                </Heading>
            </Flex>
        </SlideTemplate1>
    );
}

export { Slide1 };