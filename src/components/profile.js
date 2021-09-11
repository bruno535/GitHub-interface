import React from "react";
import styled from "styled-components";

import {useGithub} from '../hooks/github-hooks';

export function Profile(){
  const { githubState } = useGithub();

  return (
    <Wrapper>
      <WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <WrapperUserGeneric>
            <h3>Nome de usuario:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Compania:</h3>
            <span>{githubState.user.company}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Local:</h3>
            <span>{githubState.user.location}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Email:</h3>
            <a href={githubState.user.email} target="_blank" rel="noreferrer">
              {githubState.user.email}
            </a>
          </WrapperUserGeneric>
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repositorios</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </WrapperStatusCount>
      </WrapperInfoUser>
    </Wrapper>
  );
};

// style ---------
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;`;
const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }`;
const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }`;
const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #ff2626;
    font-weight: bold;
  }`;
const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;`;

