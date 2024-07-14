import { FaTractor, FaCar } from "react-icons/fa";
import PermissionSettingMenu from "../../permissions/settings/PermissionSettingMenu";
import RoleSettingMenu from "../../roles/setttings/RoleSettingMenu";
import UserSettingMenu from "../../users/settings/UserSettingMenu";
import { NavLink } from "react-bootstrap";
import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import OrderSettingMenu from "../../orders/settings/OrderSettingMenu";
import ProductSettingMenu from "../../products/settings/ProductSettingMenu";
import DriverSettingMenu from "../../drivers/settings/DriverSettingMenu";
import CarSettingMenu from "../../cars/settings/CarSettingMenu";
import TransactionSettingMenu from "../../transactions/settings/TransactionSettingMenu";
import { BiSolidLogOut } from "react-icons/bi";

const ManagerNavigationSidebar = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <div className="sidebar  col-md-3 col-lg-2 p-0  ">
      <div
        className="offcanvas-md offcanvas-end bg-white "
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        style={{ height: "100vh", position: "fixed", paddingRight: "50px" }}
      >
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Service Management</span>
          </h6>
          <ul className="nav flex-column mb-auto">
            <DriverSettingMenu />
            <CarSettingMenu />
            <TransactionSettingMenu />
            {/* <OrderSettingMenu />
            <ProductSettingMenu /> */}
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>User Management</span>
          </h6>
          <ul className="nav flex-column mb-auto">
            <PermissionSettingMenu />
            <RoleSettingMenu />
            <UserSettingMenu />
          </ul>

          {/* <hr className="my-3" /> */}

          <ul className="nav flex-column mb-auto">
            {/* <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FaTractor />
                Settings
              </a>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center gap-2 text-muted"
                onClick={() => {
                  context.auth.signOut();
                }}
              >
                <BiSolidLogOut />
                Sign out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerNavigationSidebar;
