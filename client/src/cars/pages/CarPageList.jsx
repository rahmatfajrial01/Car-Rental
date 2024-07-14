import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate } from "react-router-dom";
import useList from "../../utils/hooks/useList";
import useRupiah from "../../utils/hooks/useRupiah";
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
import { CREATE_CARS, DELETE_CARS, UPDATE_CARS } from "../states/constants";
import ManagerWidgetPagination from "../../managers/widgets/ManagerWidgetPagination";

const CarPageList = () => {
  const navigate = useNavigate();
  const context = useContext(UtilStateContextBase);
  const carList = useList(["cars"]);

  useEffect(() => {
    carList.onAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-4">
      <ManagerWidgetTitle title={"Cars"}>
        <ManagerWidgetRBAC context={context} permissions={[CREATE_CARS]}>
          <Button onClick={() => navigate("new")}>+ New Car</Button>
        </ManagerWidgetRBAC>
      </ManagerWidgetTitle>

      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <ManagerWidgetFilter
                fields={[
                  { value: "name", text: "Name" },
                  { value: "numberPlate", text: "Number Plate" },
                ]}
                callback={(value) => {
                  carList.filter.current.field = value.field;
                  carList.filter.current.value = value.value;
                  carList.filter.current.page = 1;
                  carList.onAll();
                }}
              />
            </Card.Body>
            <Table striped borderless responsive hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number Plate</th>
                  <th>Driver Cost</th>
                  <th>Car Cost</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {carList.states.map((car) => (
                  <tr key={car._id}>
                    <td>{car.name}</td>
                    <td>{car.numberPlate}</td>
                    <td>{useRupiah(car.driverCost)}</td>
                    <td>{useRupiah(car.carCost)}</td>
                    <td>
                      <div
                        className={`${
                          car.isAvailable == true ? "bg-success" : "bg-danger"
                        }   p-1 text-white text-center`}
                      >
                        {car.isAvailable == true
                          ? "tersedia"
                          : "tidak tersedia"}
                      </div>
                    </td>
                    <td>
                      <div className={"d-flex justify-content-start gap-3"}>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[UPDATE_CARS]}
                        >
                          <NavLink
                            className={"text-secondary"}
                            href={`#/cars/update/${car._id}`}
                          >
                            edit
                          </NavLink>
                        </ManagerWidgetRBAC>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[DELETE_CARS]}
                        >
                          <NavLink
                            className={"text-secondary"}
                            href={`#/cars/delete/${car._id}`}
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
                pagination={carList.pagination}
                callback={(value) => {
                  carList.filter.current.page = value;
                  carList.onAll();
                }}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarPageList;
