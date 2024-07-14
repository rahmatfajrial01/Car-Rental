import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail.jsx";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { TRANSACTION_DATA_INIT } from "../states/constants.jsx";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle.jsx";

const TransactionPageDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const transactionDelete = useDetail(["transactions"], TRANSACTION_DATA_INIT);

  useEffect(() => {
    transactionDelete.onGet(id);
  }, [id]);

  return (
    <>
      <Container className="mt-3">
        <ManagerWidgetTitle title={"Delete Transaction"} />
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{transactionDelete.state.name}</Card.Title>
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
                    transactionDelete.onDelete(id).then(() => navigate("../"));
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

export default TransactionPageDelete;
