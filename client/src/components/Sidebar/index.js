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
          <SidebarLink
            to="about"
            onClick={toggleOpen}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-79}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="discover"
            onClick={toggleOpen}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-79}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggleOpen}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-79}
          >
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
