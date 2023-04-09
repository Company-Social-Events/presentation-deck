import React from 'react';
import {IBMiXLogo,IBMLogo} from "./index";
import { Flex, Image } from "theme-ui";

const Footer1 = () => {
    return (
        <Flex sx={{ justifyContent: 'space-between', height:'70px'}}>
            <Image src={IBMiXLogo} alt="ibm ix logo" />
            <Image src={IBMLogo} alt="ibm logo" />
        </Flex>
    );
}

export  {Footer1};