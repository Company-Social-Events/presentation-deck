import React from 'react';
import { Heading, Flex} from 'theme-ui'
import { Styles, SlideTemplate1} from './index';
const Slide1 = () => {


    return (
        <SlideTemplate1>
            <Flex sx={Styles.centeredFlex}>
                <Heading>
                    Proiecte Colective
                </Heading>
            </Flex>
        </SlideTemplate1>
    );
}

export { Slide1 };