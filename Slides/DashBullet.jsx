import React from "react";
import styled from "@emotion/styled";

const DashBullet = ({
  ...props
}) => {
  const Li = styled.li`
    list-style: none;
    display:flex;
    &:before {
      position: relative;   
      margin-left: -1.3rem;
      left: -1rem;
      content: "-";
    }
  `;
  return <Li>{props.children}</Li>;
};

export { DashBullet };