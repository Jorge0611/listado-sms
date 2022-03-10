import { Fade16 } from "@carbon/icons-react";
import { SkipToContent } from "carbon-components-react";
import { HeaderName } from "carbon-components-react";
import { SideNavItems } from "carbon-components-react";
import { SideNavLink } from "carbon-components-react";
import { Content } from "carbon-components-react";
import { SideNavMenuItem } from "carbon-components-react";
import { SideNavMenu } from "carbon-components-react";
import { SideNav } from "carbon-components-react";
import { HeaderMenuButton } from "carbon-components-react";
import { Header } from "carbon-components-react";
import { HeaderContainer } from "carbon-components-react";

export default function Navabar() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavMenu renderIcon={Fade16} title={"Category title"}>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu
                  renderIcon={Fade16}
                  title={"Category title"}
                  isActive={true}
                >
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu renderIcon={Fade16} title={"Category title"}>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                  <SideNavMenuItem>Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink renderIcon={Fade16}>Link</SideNavLink>
                <SideNavLink renderIcon={Fade16}>Link</SideNavLink>
                <SideNavLink renderIcon={Fade16}>Link</SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
}
