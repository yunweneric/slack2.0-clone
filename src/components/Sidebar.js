import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Yunwen Channel</h2>
          <h3>
            <FiberManualRecordIcon />
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div``;
const SidebarInfo = styled.div``;
const SidebarHeader = styled.div``;
