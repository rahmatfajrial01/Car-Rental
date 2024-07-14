import { useNavigate } from "react-router-dom";
import useCreate from "../../utils/hooks/useCreate";
import {
  CAR_DATA_INIT,
  CAR_FIELD_GUIDE,
  CAR_FIELD_VALIDATION,
} from "../states/constants";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";

const CarPageCreate = () => {
  const navigate = useNavigate();
  const carCreate = useCreate(
    ["cars"],
    CAR_DATA_INIT,
    CAR_FIELD_GUIDE,
    CAR_FIELD_VALIDATION
  );

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"New Car"} />

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
                    value={carCreate.state.name}
                    onChange={carCreate.input.handler}
                  />
                  <ManagerWidgetGuide guide={carCreate.guide} field={"name"} />
                  <ManagerWidgetValidation
                    messages={carCreate.validation.get("name")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Number Plate</Form.Label>
                  <Form.Control
                    name="numberPlate"
                    type="text"
                    required
                    minLength={3}
                    value={carCreate.state.numberPlate}
                    onChange={carCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carCreate.guide}
                    field={"numberPlate"}
                  />
                  <ManagerWidgetValidation
                    messages={carCreate.validation.get("numberPlate")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Driver Cost</Form.Label>
                  <Form.Control
                    name="driverCost"
                    type="number"
                    required
                    minLength={3}
                    value={carCreate.state.driverCost}
                    onChange={carCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carCreate.guide}
                    field={"driverCost"}
                  />
                  <ManagerWidgetValidation
                    messages={carCreate.validation.get("driverCost")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Car Cost</Form.Label>
                  <Form.Control
                    name="carCost"
                    type="number"
                    required
                    id="dengan-rupiah"
                    minLength={3}
                    value={carCreate.state.carCost}
                    onChange={carCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carCreate.guide}
                    field={"carCost"}
                  />
                  <ManagerWidgetValidation
                    messages={carCreate.validation.get("carCost")}
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
              carCreate.onCreate().then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CarPageCreate;
