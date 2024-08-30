import React from "react";
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { menuItems } from "../../../data/chapterList";

import GitTutorial from "./chapter_1/GitTutorial";
import GiSetupTutorial from "./chapter_1/GitSetupTutorial";
import GitConfigure from "./chapter_1/GitConfigure";
import GitRepo from "./chapter_1/GitRepo";
import GitStatus from "./chapter_1/GitStatus";
import StagingAndCommit from "./chapter_1/StagingAndCommit";
import GitCommitLog from "./chapter_1/GitCommitLog";
import PrevVersionCommit from "./chapter_1/PrevVersionCommit";
import CreateBranchTutorial from "./chapter_1/CreateBanchTutorial";
import BranchModificationTutorial from "./chapter_1/BranchModificationTutorial";
import MergingMainBranchTutorial from "./chapter_1/MergingMainBranchTutorial";
import CommitDifferenceTutorial from "./chapter_1/CommitDifferenceTutorial";
import SearchProjectTutorial from "./chapter_3/SearchProjectTutorial";
import ProjectForkTutorial from "./chapter_3/ProjectForkTutorial";
import ContributeTutorial from "./chapter_3/ContributeTutorial";
import MergeConflictTutorial from "./chapter_4/MergeConflictTutorial";
import GitRestoreTutorial from "./chapter_4/GitRestoreTutorial";
import GitResetTutorial from "./chapter_4/gitResetTutorial";
import GitRebaseTutorial from "./chapter_4/GitRebaseTutorial";
import GitStashTutorial from "./chapter_4/GitStashTutorial";
import GitSquashTutorial from "./chapter_4/GitSquashingTutorial";
import GitRevertTutorial from "./chapter_4/GitReverttutorial";
const components = {
  git:GitTutorial,
  git_setup:GiSetupTutorial,
  git_configure:GitConfigure,
  repo_set:GitRepo,
  status:GitStatus,
  staging:StagingAndCommit,
  git_log:GitCommitLog,
  prev_commit:PrevVersionCommit,
  create_branch:CreateBranchTutorial,
  branch_modification:BranchModificationTutorial,
  merge_branch:MergingMainBranchTutorial,
  commit_disparity:CommitDifferenceTutorial,
  searching_project:SearchProjectTutorial,
  project_fork:ProjectForkTutorial,
  contribute:ContributeTutorial,
  merge_conflict:MergeConflictTutorial,
  git_restore:GitRestoreTutorial,
  git_stash:GitStashTutorial,
  git_reset:GitResetTutorial,
  git_revert:GitRevertTutorial,
  git_rebase:GitRebaseTutorial,
  git_squashing:GitSquashTutorial,
 
  // Add other mappings here
};

const GithubHomePage = () => {
  const renderTopics = (topics) => {
    return topics.map((topic) => {
      const Component = components[topic.id];

      if (!Component) {
        console.error(`Component not found for id: ${topic.id}`);
        return (
          <Element name={topic.id} key={topic.id}>
            <div className="text-red-500">Component not found: {topic.topicName}</div>
          </Element>
        );
      }

      return (
        <Element name={topic.id} key={topic.id}>
          <Component />
        </Element>
      );
    });
  };

  return (
    <div className="w-full h-auto flex flex-col gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-yellow-50 self-center">
        <FaGithub className="w-full h-full" />
      </div>
      <p className="text-yellow-50 text-3xl text-center">Git & Github</p>
      {menuItems
        .filter((item) => item.title === "Git & Github")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default GithubHomePage;
