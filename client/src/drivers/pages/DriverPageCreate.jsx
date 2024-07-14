import { useNavigate } from "react-router-dom";
import useCreate from "../../utils/hooks/useCreate";
import {
  DRIVER_DATA_INIT,
  DRIVER_FIELD_GUIDE,
  DRIVER_FIELD_VALIDATION,
} from "../states/constants";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";

const DriverPageCreate = () => {
  const navigate = useNavigate();
  const driverCreate = useCreate(
    ["drivers"],
    DRIVER_DATA_INIT,
    DRIVER_FIELD_GUIDE,
    DRIVER_FIELD_VALIDATION
  );

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"New Driver"} />

        <Row className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    value={driverCreate.state.name}
                    onChange={driverCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={driverCreate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={driverCreate.validation.get("name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="noHp"
                    type="text"
                    required
                    minLength={3}
                    value={driverCreate.state.noHp}
                    onChange={driverCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={driverCreate.guide}
                    field={"noHp"}
                  />
                  <ManagerWidgetValidation
                    messages={driverCreate.validation.get("noHp")}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <ManagerWidgetAction>
        <>
          <Button variant="outline-dark" onClick={() => navigate("../")}>
            Back
          </Button>

          <Button
            onClick={() => {
              driverCreate.onCreate().then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default DriverPageCreate;
