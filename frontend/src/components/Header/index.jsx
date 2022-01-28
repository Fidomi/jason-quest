import React from "react";
import StyledHeader, { HeaderContainer, NavContainer } from "./Header.style";
import Navbar from "../Navbar/index";
import device from "../../utils/style/devices";
import SideMenu from "../SideMenu/index";
import BurgerMenu from "../BurgerMenu/index";

const Header = (props) => {
    const isTablet = window.matchMedia(device.tablet).matches;
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (isTablet) {
            setOpen(false);
        }
    }, [isTablet]);

    return (
        <HeaderContainer>
            <StyledHeader>
                <h1>ARGO</h1>
                <NavContainer>
                    <Navbar pathes={props.pathes} />
                </NavContainer>
                <BurgerMenu
                    open={open}
                    setOpen={setOpen}
                    isTablet={isTablet}
                    pathes={props.pathes}
                />
                {open && <SideMenu isTablet={isTablet} pathes={props.pathes} />}
            </StyledHeader>
        </HeaderContainer>
    );
};

export default Header;
