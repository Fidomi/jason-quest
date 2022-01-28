import CustomLink from "../Link/index";
import { ContainerNavBar } from "./Navbar.style";

const Navbar = (props) => {
    return (
        <ContainerNavBar>
            {props.pathes &&
                props.pathes.map((path, index) => (
                    <CustomLink key={index} path={path[1]} color={props.color}>
                        {path[0]}
                    </CustomLink>
                ))}
        </ContainerNavBar>
    );
};

export default Navbar;
