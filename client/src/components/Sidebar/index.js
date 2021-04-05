import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggleOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
      <Icon onClick={toggleOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggleOpen}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
