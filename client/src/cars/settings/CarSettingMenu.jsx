import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { CREATE_CARS, READ_CARS } from "../states/constants";
import { NavLink } from "react-bootstrap";
import { FaCarSide } from "react-icons/fa";

const CarSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_CARS, CREATE_CARS]}
      or={true}
    >
      <li className="nav-item">
        <ManagerWidgetRBAC context={context} permissions={[READ_CARS]}>
          <NavLink
            className="d-flex align-items-center text-muted"
            href="#cars"
          >
            <span>
              <FaCarSide className="me-1" /> Cars
            </span>
          </NavLink>
        </ManagerWidgetRBAC>
      </li>
    </ManagerWidgetRBAC>
  );
};

export default CarSettingMenu;
