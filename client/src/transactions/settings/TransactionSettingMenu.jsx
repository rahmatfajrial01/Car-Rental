import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { CREATE_TRANSACTIONS, READ_TRANSACTIONS } from "../states/constants";
import { NavLink } from "react-bootstrap";
import { FaFileInvoiceDollar } from "react-icons/fa";

const TransactionSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_TRANSACTIONS, CREATE_TRANSACTIONS]}
      or={true}
    >
      <li className="nav-item">
        <ManagerWidgetRBAC context={context} permissions={[READ_TRANSACTIONS]}>
          <NavLink
            className="d-flex align-items-center text-muted "
            href="#transactions"
          >
            <span>
              <FaFileInvoiceDollar className="me-2" />
              Transactions
            </span>
          </NavLink>
        </ManagerWidgetRBAC>
      </li>
    </ManagerWidgetRBAC>
  );
};

export default TransactionSettingMenu;
