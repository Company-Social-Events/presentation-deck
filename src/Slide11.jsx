import React from 'react';
import { SlideTemplate2, Styles} from './index';
import { Text, Flex, Link  } from 'theme-ui'

const Slide11 = () => {
    return (
       <SlideTemplate2  pageNumber={11}>
            <Flex sx={Styles.centeredFlex}>
            <Text>Thank you</Text>
            <Text>&nbsp;</Text>
            <Text>For any questions don't hesitate to use our slack channel</Text>
            <Text>&nbsp;</Text>
            <Link href="https://tm-ro-ibm.slack.com/archives/C04UWS90LQK">https://tm-ro-ibm.slack.com/archives/C04UWS90LQK</Link>
            </Flex>
       </SlideTemplate2>
    );
}

export { Slide11 };