import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail";
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

const DriverPageUpdate = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const driverUpdate = useDetail(
    ["drivers"],
    DRIVER_DATA_INIT,
    DRIVER_FIELD_GUIDE,
    DRIVER_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    driverUpdate.onGet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, context.auth.isAuthenticated]);

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"Update Driver"} />
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
                    value={driverUpdate.state.name}
                    onChange={driverUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={driverUpdate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={driverUpdate.validation.get("name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="noHp"
                    type="text"
                    required
                    minLength={3}
                    value={driverUpdate.state.noHp}
                    onChange={driverUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={driverUpdate.guide}
                    field={"noHp"}
                  />
                  <ManagerWidgetValidation
                    messages={driverUpdate.validation.get("noHp")}
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
              driverUpdate.onUpdate(id).then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default DriverPageUpdate;
