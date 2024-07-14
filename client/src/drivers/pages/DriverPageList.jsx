import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate } from "react-router-dom";
import useList from "../../utils/hooks/useList";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
  NavLink,
} from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetFilter from "../../managers/widgets/ManagerWidgetFilter";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import {
  CREATE_DRIVERS,
  DELETE_DRIVERS,
  UPDATE_DRIVERS,
} from "../states/constants";
import ManagerWidgetPagination from "../../managers/widgets/ManagerWidgetPagination";

const DriverPageList = () => {
  const navigate = useNavigate();
  const context = useContext(UtilStateContextBase);
  const driverList = useList(["drivers"]);

  useEffect(() => {
    driverList.onAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-4">
      <ManagerWidgetTitle title={"Drivers"}>
        <ManagerWidgetRBAC context={context} permissions={[CREATE_DRIVERS]}>
          <Button onClick={() => navigate("new")}>+ New Driver</Button>
        </ManagerWidgetRBAC>
      </ManagerWidgetTitle>

      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <ManagerWidgetFilter
                fields={[
                  { value: "name", text: "Name" },
                  { value: "noHp", text: "No Handphone" },
                ]}
                callback={(value) => {
                  driverList.filter.current.field = value.field;
                  driverList.filter.current.value = value.value;
                  driverList.filter.current.page = 1;
                  driverList.onAll();
                }}
              />
            </Card.Body>
            <Table striped borderless responsive hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nohp</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {driverList.states.map((driver) => (
                  <tr key={driver._id}>
                    <td>{driver.name}</td>
                    <td>{driver.noHp}</td>
                    <td>
                      <div
                        style={{ width: "200px" }}
                        className={`${
                          driver.isAvailable == true
                            ? "bg-success"
                            : "bg-danger"
                        }   p-1 text-white text-center`}
                      >
                        {driver.isAvailable == true
                          ? "tersedia"
                          : "tidak tersedia"}
                      </div>
                    </td>
                    <td>
                      <div className={"d-flex justify-content-start gap-3"}>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[UPDATE_DRIVERS]}
                        >
                          <NavLink
                            className={"text-secondary"}
                            href={`#/drivers/update/${driver._id}`}
                          >
                            edit
                          </NavLink>
                        </ManagerWidgetRBAC>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[DELETE_DRIVERS]}
                        >
                          <NavLink
                            className={"text-secondary"}
                            href={`#/drivers/delete/${driver._id}`}
                          >
                            delete
                          </NavLink>
                        </ManagerWidgetRBAC>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Card.Footer>
              <ManagerWidgetPagination
                pagination={driverList.pagination}
                callback={(value) => {
                  driverList.filter.current.page = value;
                  driverList.onAll();
                }}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DriverPageList;
