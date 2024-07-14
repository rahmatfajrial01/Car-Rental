import { Container, Nav, NavDropdown } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts.jsx";
import PermissionSettingMenu from "../../permissions/settings/PermissionSettingMenu.jsx";
import RoleSettingMenu from "../../roles/setttings/RoleSettingMenu.jsx";
import UserSettingMenu from "../../users/settings/UserSettingMenu.jsx";
import ProductSettingMenu from "../../products/settings/ProductSettingMenu.jsx";
import OrderSettingMenu from "../../orders/settings/OrderSettingMenu.jsx";

function ManagerNavigationBase() {
  const context = useContext(UtilStateContextBase);

  return (
    // <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">POS Lite</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav classNameName="me-auto">
    //         <Nav.Link href="#/">Dashboard</Nav.Link>
    //         <PermissionSettingMenu />
    //         <RoleSettingMenu />
    //         <UserSettingMenu />
    //         <ProductSettingMenu />
    //         <OrderSettingMenu />
    //         <NavDropdown title="Settings" id="basic-nav-dropdown">
    //           <NavDropdown.Item
    //             onClick={() => {
    //               context.auth.signOut();
    //             }}
    //           >
    //             Sign Out
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
      data-bs-theme="dark"
    >
      <a
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        href="#"
      >
        Company name
      </a>

      <ul className="navbar-nav flex-row d-md-none">
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle search"
          >
            <svg className="bi">
              <use xlink:href="#search"></use>
            </svg>
          </button>
        </li>
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="bi"></svg>
          </button>
        </li>
      </ul>

      <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </header>
  );
}

export default ManagerNavigationBase;
