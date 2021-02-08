import { NavLink } from "./NavLink"
export const Navbar = ({active}) => {
    return (
        <nav className="main-nav">
            <NavLink link="home" active={active === "home" ? true : false}/>
            <NavLink link="cash" active={active === "cash" ? true : false}/>
            <NavLink link="investing" active={active === "investing" ? true : false}/>
            <NavLink link="account" active={active === "account" ? true : false}/>
        </nav>
    )
}
