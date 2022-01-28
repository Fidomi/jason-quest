import { StyledSideMenu, ColumContainer, SideMenuLink } from "./SideMenu.style";

const SideMenu = (props) => (
    <StyledSideMenu height={props.height}>
        <ColumContainer>
            {props.pathes &&
                props.pathes.map((path, index) => (
                    <SideMenuLink key={index} to={path[1]} color="--white">
                        {path[0]}
                    </SideMenuLink>
                ))}
        </ColumContainer>
    </StyledSideMenu>
);

export default SideMenu;
