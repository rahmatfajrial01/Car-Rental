import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { CREATE_DRIVERS, READ_DRIVERS } from "../states/constants";
import { NavLink } from "react-bootstrap";
import { FaAddressCard } from "react-icons/fa";

const DriverSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_DRIVERS, CREATE_DRIVERS]}
      or={true}
    >
      <li className="nav-item">
        <ManagerWidgetRBAC context={context} permissions={[READ_DRIVERS]}>
          <NavLink
            className="d-flex align-items-center text-muted"
            href="#drivers"
          >
            <span>
              <FaAddressCard className="me-1" /> Drivers
            </span>
          </NavLink>
        </ManagerWidgetRBAC>
      </li>
    </ManagerWidgetRBAC>
  );
};

export default DriverSettingMenu;
