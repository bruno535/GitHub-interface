import React from "react";
import {Header} from "./header";
import styled from "styled-components";

export function Layout({ children }){
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  );
};

// style ------------
const WrapperLayout = styled.section`
  margin-top: 50px;`;
