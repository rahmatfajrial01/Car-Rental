import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail.jsx";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { PRODUCT_DATA_INIT } from "../states/constants.jsx";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle.jsx";

const ProductPageDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productDelete = useDetail(["products"], PRODUCT_DATA_INIT);

  useEffect(() => {
    productDelete.onGet(id);
  }, [id]);

  return (
    <>
      <Container className="mt-3">
        <ManagerWidgetTitle title={"Delete Product"} />
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{productDelete.state.name}</Card.Title>
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
                    productDelete.onDelete(id).then(() => navigate("../"));
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

export default ProductPageDelete;
