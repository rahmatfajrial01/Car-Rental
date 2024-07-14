import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail.jsx";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { CAR_DATA_INIT } from "../states/constants.jsx";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle.jsx";

const CarPageDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carDelete = useDetail(["cars"], CAR_DATA_INIT);

  useEffect(() => {
    carDelete.onGet(id);
  }, [id]);

  return (
    <>
      <Container className="mt-3">
        <ManagerWidgetTitle title={"Delete Car"} />
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{carDelete.state.name}</Card.Title>
                <Card.Text>
                  Are you sure you want to delete this data?
                </Card.Text>
                <Button
                  onClick={() => navigate("../")}
                  variant={"outline-dark"}
                  className={"me-2"}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    carDelete.onDelete(id).then(() => navigate("../"));
                  }}
                  variant={"outline-danger"}
                >
                  Yes, Sure!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarPageDelete;
