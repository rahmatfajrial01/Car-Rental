import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import useAPI from "../../utils/hooks/useAPI";
import useAccess from "../../utils/hooks/useAccess";
import { Route, Routes } from "react-router-dom";
import CarPageList from "../pages/CarPageList";
import ManagerPage403 from "../../managers/pages/ManagerPage403";
import ManagerWidgetLayoutProtected from "../../managers/widgets/ManagerWidgetLayoutProtected";
import {
  CREATE_CARS,
  DELETE_CARS,
  READ_CARS,
  UPDATE_CARS,
} from "../states/constants";
import CarPageCreate from "../pages/CarPageCreate";
import CarPageUpdate from "../pages/CarPageUpdate";
import CarPageDelete from "../pages/CarPageDelete";

const CarSettingRouter = () => {
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
            [READ_CARS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CarPageList />
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
            [CREATE_CARS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CarPageCreate />
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
            [UPDATE_CARS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CarPageUpdate />
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
            [DELETE_CARS],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CarPageDelete />
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

export default CarSettingRouter;
