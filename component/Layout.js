import react from "react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  StoryContent,
} from "carbon-components-react";

import { Fade16 } from "@carbon/icons-react";
import { HeaderNavigation } from "carbon-components-react";
import { HeaderMenuItem } from "carbon-components-react";
import { HeaderMenu } from "carbon-components-react";
import { HeaderGlobalBar } from "carbon-components-react";
import { HeaderGlobalAction } from "carbon-components-react";
import { Search20 } from "@carbon/icons-react";
import { AppSwitcher20 } from "@carbon/icons-react";

export default function Layout() {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-Link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search">
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Search" tooltipAlignment="end">
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side Navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}
              >
                <SideNavItems>
                  <HeaderMenuItem>Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                  <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-Link 3</HeaderMenuItem>
                  </HeaderMenu>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
    </>
  );
}
