import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import useAPI from "../../utils/hooks/useAPI";
import useAccess from "../../utils/hooks/useAccess";
import { Route, Routes } from "react-router-dom";
import TransactionPageList from "../pages/TransactionPageList";
import ManagerPage403 from "../../managers/pages/ManagerPage403";
import ManagerWidgetLayoutProtected from "../../managers/widgets/ManagerWidgetLayoutProtected";
import {
  CREATE_TRANSACTIONS,
  DELETE_TRANSACTIONS,
  READ_TRANSACTIONS,
  UPDATE_TRANSACTIONS,
} from "../states/constants";
import TransactionPageCreate from "../pages/TransactionPageCreate";
import TransactionPageUpdate from "../pages/TransactionPageUpdate";
import TransactionPageDelete from "../pages/TransactionPageDelete";

const TransactionSettingRouter = () => {
  const context = useContext(UtilStateContextBase);
  const api = useAPI();
  const access = useAccess(context, api);

  useEffect(() => {
    access.verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.auth.isAuthenticated]);

  return (
    <Routes>
      <Route
        index
        element={
          access.has(
            [READ_TRANSACTIONS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <TransactionPageList />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="new"
        element={
          access.has(
            [CREATE_TRANSACTIONS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <TransactionPageCreate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="update/:id"
        element={
          access.has(
            [UPDATE_TRANSACTIONS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <TransactionPageUpdate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="delete/:id"
        element={
          access.has(
            [DELETE_TRANSACTIONS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <TransactionPageDelete />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />
    </Routes>
  );
};

export default TransactionSettingRouter;
