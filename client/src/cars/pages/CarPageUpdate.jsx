import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail";
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

const CarPageUpdate = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const carUpdate = useDetail(
    ["cars"],
    CAR_DATA_INIT,
    CAR_FIELD_GUIDE,
    CAR_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    carUpdate.onGet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, context.auth.isAuthenticated]);

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"Update Car"} />
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
                    value={carUpdate.state.name}
                    onChange={carUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carUpdate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={carUpdate.validation.get("name")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Number Plate</Form.Label>
                  <Form.Control
                    name="numberPlate"
                    type="text"
                    required
                    minLength={3}
                    value={carUpdate.state.numberPlate}
                    onChange={carUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carUpdate.guide}
                    field={"numberPlate"}
                  />
                  <ManagerWidgetValidation
                    messages={carUpdate.validation.get("numberPlate")}
                  />
                </Form.Group>
             
                <Form.Group className="mb-3">
                  <Form.Label>Driver Cost</Form.Label>
                  <Form.Control
                    name="driverCost"
                    type="text"
                    required
                    minLength={3}
                    value={carUpdate.state.driverCost}
                    onChange={carUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carUpdate.guide}
                    field={"driverCost"}
                  />
                  <ManagerWidgetValidation
                    messages={carUpdate.validation.get("driverCost")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Car Cost</Form.Label>
                  <Form.Control
                    name="carCost"
                    type="text"
                    required
                    minLength={3}
                    value={carUpdate.state.carCost}
                    onChange={carUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={carUpdate.guide}
                    field={"carCost"}
                  />
                  <ManagerWidgetValidation
                    messages={carUpdate.validation.get("carCost")}
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
              carUpdate.onUpdate(id).then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CarPageUpdate;
