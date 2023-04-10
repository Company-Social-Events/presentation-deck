import React from 'react';
import { Image, Flex } from 'theme-ui'
import { IBMLogo ,SlideTemplate2, ThemeStyles} from './index';
const Slide12 = () => {
    return (
        <SlideTemplate2 pageNumber={12}>
        <Flex sx={ThemeStyles.CenteredFlex}>
            <Image src={IBMLogo} sx={{height:'175px'}} />
        </Flex>
   </SlideTemplate2>

    );
}

export { Slide12 };