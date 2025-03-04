import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts.jsx";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import { READ_ROLES } from "../states/constants.jsx";
import { NavLink } from "react-bootstrap";
import {
  CREATE_PERMISSIONS,
  READ_PERMISSIONS,
} from "../../permissions/states/constants.jsx";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";

const RoleSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_ROLES, CREATE_PERMISSIONS, READ_PERMISSIONS]}
    >
      <li className="nav-item">
        <ManagerWidgetRBAC context={context} permissions={[READ_ROLES]}>
          <NavLink
            className="d-flex align-items-center text-muted"
            href="#roles"
          >
            <span>
              <BsFillFileEarmarkRuledFill className="me-2" />
              Roles
            </span>
          </NavLink>
        </ManagerWidgetRBAC>
      </li>
    </ManagerWidgetRBAC>
  );
};

export default RoleSettingMenu;
