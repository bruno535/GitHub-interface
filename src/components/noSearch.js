import React from "react";
import styled from "styled-components"

export function NoSearch(){
  return (
    <Wrapper>
      <h1>Pesquise um usuario acima</h1>
    </Wrapper>
  );
};

//style --------------
const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;

