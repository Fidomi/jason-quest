import { BurgerMenuWrapper, BurgerLine, MenuWrapper } from "./BurgerMenu.style";

const BurgerMenu = (props) => (
    <MenuWrapper>
        <BurgerMenuWrapper
            open={props.open}
            onClick={() => props.setOpen(!props.open)}>
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
        </BurgerMenuWrapper>
    </MenuWrapper>
);

export default BurgerMenu;
