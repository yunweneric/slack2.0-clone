import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./sidebarOption";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import AppsIcon from "@material-ui/icons/Apps";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Tech Squard Channel</h2>
          <h3>
            <FiberManualRecordIcon />
            Yunwen Eric
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption title="Threads" Icon={InsertCommentIcon} />
      <SidebarOption title="Mentions & Reactions" Icon={InboxIcon} />
      <SidebarOption title="Saved Items" Icon={DraftsIcon} />
      <SidebarOption title="Channel browser" Icon={BookmarkBorderIcon} />
      <SidebarOption title="People & user group" Icon={PeopleAltIcon} />
      <SidebarOption title="Apps" Icon={AppsIcon} />
      <SidebarOption title="File Browser" Icon={FileCopyIcon} />
      <SidebarOption title="Show less" Icon={ExpandLessIcon} />
      <hr />
      <SidebarOption title="Channels" Icon={ExpandMoreIcon} />
      <hr />
      <SidebarOption title=" Add Channel" addChannelOption Icon={AddIcon} />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 260px;
  border-top: 1px solid #49274b;
  margin-top: 60px;
  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    align-items: center;
    font-weight: 400;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;
