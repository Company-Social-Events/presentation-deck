import React from 'react';
import { Heading, Flex} from 'theme-ui'
import { Footer1 } from './Footer1';
const Slide1 = () => {
    return (
        <>
            <Flex sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Heading>
                    Proiecte Colective
                </Heading>
            </Flex>
            <Footer1 />
        </>
    );
}

export { Slide1 };