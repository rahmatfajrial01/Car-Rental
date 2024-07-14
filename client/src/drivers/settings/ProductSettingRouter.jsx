import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import useAPI from "../../utils/hooks/useAPI";
import useAccess from "../../utils/hooks/useAccess";
import { Route, Routes } from "react-router-dom";
import DriverPageList from "../pages/DriverPageList";
import ManagerPage403 from "../../managers/pages/ManagerPage403";
import ManagerWidgetLayoutProtected from "../../managers/widgets/ManagerWidgetLayoutProtected";
import {
  CREATE_DRIVERS,
  DELETE_DRIVERS,
  READ_DRIVERS,
  UPDATE_DRIVERS,
} from "../states/constants";
import DriverPageCreate from "../pages/DriverPageCreate";
import DriverPageUpdate from "../pages/DriverPageUpdate";
import DriverPageDelete from "../pages/DriverPageDelete";

const DriverSettingRouter = () => {
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
            [READ_DRIVERS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <DriverPageList />
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
            [CREATE_DRIVERS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <DriverPageCreate />
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
            [UPDATE_DRIVERS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <DriverPageUpdate />
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
            [DELETE_DRIVERS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <DriverPageDelete />
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

export default DriverSettingRouter;
