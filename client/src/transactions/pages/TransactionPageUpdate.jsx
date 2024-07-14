import { useContext, useEffect, useRef } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail";
import {
  TRANSACTION_DATA_INIT,
  TRANSACTION_FIELD_GUIDE,
  TRANSACTION_FIELD_VALIDATION,
} from "../states/constants";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";
import useFormatDate from "../../utils/hooks/useFormatDate";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";
import useRupiah from "../../utils/hooks/useRupiah";

const TransactionPageUpdate = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const transactionUpdate = useDetail(
    ["transactions"],
    TRANSACTION_DATA_INIT,
    TRANSACTION_FIELD_GUIDE,
    TRANSACTION_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    transactionUpdate.onGet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, context.auth.isAuthenticated]);
  console.log(transactionUpdate.state);

  const getDifferentDay = (date2, date1) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = Date.parse(date2);
    const secondDate = Date.parse(date1);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays;
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"Transaction"}>
          <Button onClick={handlePrint}>
            <FaPrint /> Print
          </Button>
        </ManagerWidgetTitle>

        <Row ref={componentRef} className="mb-3">
          <Col>
            <Row>
              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>No Ktp</Form.Label>
                        <Form.Control
                          name="noKtp"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state.noKtp}
                          onChange={transactionUpdate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"noKtp"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get("noKtp")}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state.name}
                          onChange={transactionUpdate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"name"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get("name")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name="address"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state.address}
                          onChange={transactionUpdate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"address"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get("address")}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>No Handphone</Form.Label>
                        <Form.Control
                          name="noHp"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state.noHp}
                          onChange={transactionUpdate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"noHp"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get("noHp")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Car Name</Form.Label>
                        <Form.Control
                          name=""
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state?.carId?.name}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Number Plate</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state?.carId?.numberPlate}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Driver Name</Form.Label>
                        <Form.Control
                          name="address"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={transactionUpdate.state?.driverId?.name}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Car Cost</Form.Label>
                        <Form.Control
                          name=""
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={useRupiah(
                            transactionUpdate.state?.carId?.carCost
                          )}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Driver Cost</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={useRupiah(
                            transactionUpdate.state?.carId?.driverCost
                          )}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Jumlah Hari</Form.Label>
                        <Form.Control
                          name="address"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={getDifferentDay(
                            transactionUpdate.state.tanggalSelesai,
                            transactionUpdate.state.tanggalMulai
                          )}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Total Biaya</Form.Label>
                        <Form.Control
                          name="address"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={useRupiah(
                            getDifferentDay(
                              transactionUpdate.state.tanggalSelesai,
                              transactionUpdate.state.tanggalMulai
                            ) *
                              transactionUpdate.state.carId.carCost +
                              transactionUpdate.state.carId.driverCost
                          )}
                          // onChange={transactionUpdate.input.handler}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* ======== */}

              {/* =============== */}
              <Card>
                <Card.Body>
                  <Row style={{ height: "90px" }}>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        // value={selectedOption}
                        // onChange={handleSelectChange}
                      >
                        <Form.Label>Tanggal Mulai Rental</Form.Label>
                        <Form.Control
                          name="tanggalMulai"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={useFormatDate(
                            transactionUpdate.state.tanggalMulai
                          )}
                          onChange={transactionUpdate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"tanggalMulai"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get(
                            "tanggalMulai"
                          )}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        // value={selectedOption}
                        // onChange={handleSelectChange}
                      >
                        <Form.Label>Tanggal Rental Selesai</Form.Label>
                        <Form.Control
                          name="tanggalSelesai"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          value={useFormatDate(
                            transactionUpdate.state.tanggalSelesai
                          )}
                          onChange={transactionUpdate.input.handler}
                        />
                        {/* <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"tanggalSelesai"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get(
                            "tanggalSelesai"
                          )}
                        /> */}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className="mb-3"
                        // value={selectedOption}
                        // onChange={handleSelectChange}
                      >
                        <Form.Label>Status Pinjam</Form.Label>
                        <Form.Control
                          name="tanggalSelesai"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          onChange={transactionUpdate.input.handler}
                          value={transactionUpdate.state.status}
                        />
                        {/* <Form.Select
                          name="status"
                          onChange={transactionUpdate.input.handler}
                          value={transactionUpdate.state.status}
                          aria-label="Default select example"
                        >
                          <option value="dipinjam">dipinjam</option>
                          <option value="selesai">selesai</option>
                        </Form.Select> */}
                        <ManagerWidgetGuide
                          guide={transactionUpdate.guide}
                          field={"status"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionUpdate.validation.get("status")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>

      <ManagerWidgetAction>
        <>
          <Button variant="outline-dark" onClick={() => navigate("../")}>
            Back
          </Button>

          {transactionUpdate.state.status === "selesai" ? (
            ""
          ) : (
            <Button
              onClick={() => {
                transactionUpdate.onUpdate(id).then(() => navigate("../"));
              }}
            >
              Selesai Pinjam
            </Button>
          )}
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default TransactionPageUpdate;
