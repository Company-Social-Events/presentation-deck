import React from 'react';
import { Image, Flex } from 'theme-ui'
import { IBMLogo ,SlideTemplate2, Styles} from './index';
const Slide12 = () => {
    return (
        <SlideTemplate2 pageNumber={12}>
        <Flex sx={Styles.centeredFlex}>
            <Image src={IBMLogo} sx={{height:'175px'}} />
        </Flex>
   </SlideTemplate2>

    );
}

export { Slide12 };