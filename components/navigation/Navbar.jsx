import { NavLink } from "./NavLink"
export const Navbar = () => {
    return (
        <nav className="main-nav">
            <NavLink link="home" active={true}/>
            <NavLink link="cash"/>
            <NavLink link="investing"/>
            <NavLink link="account"/>
        </nav>
    )
}
