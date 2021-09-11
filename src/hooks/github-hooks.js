import { useContext } from "react";
import { GithubContext } from '../providers/github-provider';

export function useGithub(){
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred };
};