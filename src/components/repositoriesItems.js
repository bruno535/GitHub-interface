import React from "react";
import styled from "styled-components";

export function RepositoryItem({ name, linkToRepo, fullName }){
  return (
    <Wrapper>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>Nome completo:</WrapperFullName>
      <WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperLink>
    </Wrapper>
  );
};

// style ------------------
const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 3px solid #ff2626;
  margin: 16px 8px;
  width: 350px;
  height: 150px;
  align-content: center;
  background-color: #fff;
  color:black`;

const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;`;

const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;`;

const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #ff2626;`;
