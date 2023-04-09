import React from 'react';
import { Flex, Text } from "theme-ui";

const Footer2 = ({ pageNumber }) => {
    const TextStyle = {
        fontSize: '12px'
    }
    return (
        <Flex sx={{ justifyContent: 'space-between', height:'20px' }}>
            <Text sx={TextStyle}> IBM iX / © IBM Corporation </Text>
            <Text sx={TextStyle}>{pageNumber}</Text>
        </Flex>
    );
}

export { Footer2 };