import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import {useGithub} from '../hooks/github-hooks';
import {RepositoryItem} from './repositoriesItems';

export function Repositories(){
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <WrapperTabList>
            <WrapperTab>Repositorios</WrapperTab>
            <WrapperTab>Favoritado</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};
//style ----------------
const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

const WrapperTab = styled(Tab)`
  border-radius: 8px;
  border: 3px solid #ff2626;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  margin: 8px;
  background-color:red;
  font-weight: bold;
}


  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }`;
WrapperTab.tabsRole = "Tab";

const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }`;
WrapperTabPanel.tabsRole = "TabPanel";

const WrapperList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
