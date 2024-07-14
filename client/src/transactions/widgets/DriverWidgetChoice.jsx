import { useEffect } from "react";
import useList from "../../utils/hooks/useList";
import { Button, Card, Table } from "react-bootstrap";
import ManagerWidgetFilter from "../../managers/widgets/ManagerWidgetFilter";
import { FaPlusCircle } from "react-icons/fa";
import ManagerWidgetPagination from "../../managers/widgets/ManagerWidgetPagination";
import PropTypes from "prop-types";

const DriverWidgetChoice = ({ callback }) => {
  const driverList = useList(["drivers"]);

  useEffect(() => {
    driverList.onAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Driver Choice</Card.Title>
        <ManagerWidgetFilter
          fields={[{ value: "name", text: "Name" }]}
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
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {driverList.states.map((driver) => (
            <tr key={driver._id}>
              <td>{driver.name}</td>
              <td>{driver.price}</td>
              <td>{driver.stock}</td>
              <td>
                <Button onClick={() => callback(driver)} size="sm">
                  <FaPlusCircle />
                </Button>
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
  );
};

DriverWidgetChoice.propTypes = {
  callback: PropTypes.func,
};

export default DriverWidgetChoice;
