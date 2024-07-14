import { useNavigate } from "react-router-dom";
import useCreate from "../../utils/hooks/useCreate";
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
import useList from "../../utils/hooks/useList";
import useRupiah from "../../utils/hooks/useRupiah";

import { useEffect, useMemo, useState } from "react";

const TransactionPageCreate = () => {
  const navigate = useNavigate();
  const transactionCreate = useCreate(
    ["transactions"],
    TRANSACTION_DATA_INIT,
    TRANSACTION_FIELD_GUIDE,
    TRANSACTION_FIELD_VALIDATION
  );
  const carList = useList(["cars"]);
  const driverList = useList(["drivers"]);

  let [detailDriver, setDetailDriver] = useState({});

  useEffect(() => {
    carList.onAll();
    driverList.onAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateDate = useMemo(() => {
    const date = new Date(transactionCreate.state.tanggalMulai);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }, [transactionCreate.state.tanggalMulai]);

  const getDifferentDay = (date2, date1) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = Date.parse(date2);
    const secondDate = Date.parse(date1);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays;
  };

  useEffect(() => {
    let tes;
    tes = carList?.states?.filter(
      (item) => item._id === transactionCreate.state.carId
    );
    setDetailDriver(tes);
  }, [transactionCreate.state.carId]);

  // console.log(transactionCreate.state.carId);
  // console.log(detailCart);
  // const handleChangeDriver = (event) => {
  //   setDetailDriver(
  //     driverList.states.find(
  //       (item) => item?._id === transactionCreate.state.carId
  //     )
  //   );
  // };
  // console.log(transactionCreate.state.carId);

  // const [selectedOption, setSelectedOption] = useState("hide");
  // const [isVisible, setIsVisible] = useState(false);

  // const handleSelectChange = (e) => {
  //   setSelectedOption(e.target.value);
  //   setIsVisible(e.target.value === "show");
  // };

  return (
    <>
      <Container className="mt-4">
        <ManagerWidgetTitle title={"New Transaction"} />

        <Row className="mb-3">
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
                          minLength={3}
                          value={transactionCreate.state.noKtp}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"noKtp"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get("noKtp")}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          required
                          minLength={3}
                          value={transactionCreate.state.name}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"name"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get("name")}
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
                          minLength={3}
                          value={transactionCreate.state.address}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"address"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get("address")}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>No Handphone</Form.Label>
                        <Form.Control
                          name="noHp"
                          type="text"
                          required
                          minLength={3}
                          value={transactionCreate.state.noHp}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"noHp"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get("noHp")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* ======== */}

              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col xs={7}>
                      <Form.Label>
                        Car Name -- Plate Number -- Car Cost -- Driver Cost
                      </Form.Label>
                      <Form.Select
                        name="carId"
                        onChange={transactionCreate.input.handler}
                        value={transactionCreate.state.carId}
                        aria-label="Default select example"
                      >
                        <option>Choose Car</option>
                        {carList.states
                          .filter((item) => item.isAvailable === true)
                          .map((car) => (
                            <option key={car._id} value={car._id}>
                              ( {car.name} ){"--"}( {car.numberPlate} ){"--"}({" "}
                              {useRupiah(car.carCost)} ){"--"}({" "}
                              {useRupiah(car.driverCost)} )
                            </option>
                          ))}
                      </Form.Select>

                      <ManagerWidgetGuide
                        guide={transactionCreate.guide}
                        field={"carId"}
                      />
                      <ManagerWidgetValidation
                        messages={transactionCreate.validation.get("carId")}
                      />
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Driver Name</Form.Label>
                        <Form.Select
                          name="driverId"
                          onChange={transactionCreate.input.handler}
                          value={transactionCreate.state.driverId}
                          aria-label="Default select example"
                        >
                          <option>Choose Driver</option>
                          {driverList.states
                            .filter((item) => item.isAvailable === true)
                            .map((driver) => (
                              <option key={driver._id} value={driver._id}>
                                {driver.name}
                              </option>
                            ))}
                        </Form.Select>
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"driverId"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
                            "driverId"
                          )}
                        />
                      </Form.Group>
                    </Col>
                    {/* <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Number Plate</Form.Label>
                        <Form.Control
                          className="bg-black-50"
                          name="numberPlate"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          defaultValue={detailCart?.numberPlate}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"numberPlate"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
                            "numberPlate"
                          )}
                        />
                      </Form.Group>
                    </Col> */}
                    {/* <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Driver Cost</Form.Label>
                        <Form.Control
                          name="driverCost"
                          type="text"
                          required
                          readOnly
                          minLength={3}
                          defaultValue={detailCart?.driverCost}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"driverCost"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
                            "driverCost"
                          )}
                        />
                      </Form.Group>
                    </Col> */}

                    {/* <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Car Cost</Form.Label>
                        <Form.Control
                          name="carCost"
                          type="number"
                          required
                          readOnly
                          minLength={3}
                          defaultValue={detailCart?.carCost}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"carCost"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get("carCost")}
                        />
                      </Form.Group>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>

              {/* ======== */}
              {/* 
              <Card className="mb-3">
                <Card.Body>
                  <Row > */}
              {/* <Col>
                      <Form.Label>Rental Type</Form.Label>
                      <Form.Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        aria-label="Default select example"
                      >
                        <option value="show">With Driver</option>
                        <option value="hide">Only Car</option>
                      </Form.Select>
                    </Col> */}
              {/* <Col>
                      <Form.Group
                        className="mb-3"
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        {isVisible ? <Form.Label>Driver Cost</Form.Label> : ""}

                        <Form.Control
                          name="driverCost"
                          type={isVisible ? "number" : "hidden"}
                          required
                          placeholder="choose car name"
                          readOnly
                          minLength={3}
                          defaultValue={detailCart?.driverCost}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"driverCost"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
                            "driverCost"
                          )}
                        />
                      </Form.Group>
                    </Col> */}
              {/* <Col>
                      {isVisible && (
                        <Form.Group className="mb-3">
                          <Form.Label>Driver Name</Form.Label>
                          <Form.Select
                            name="driverId"
                            onChange={transactionCreate.input.handler}
                            value={transactionCreate.state.driverId}
                            aria-label="Default select example"
                          >
                            <option>Choose Driver</option>
                            {driverList.states.map((driver) => (
                              <option key={driver._id} value={driver._id}>
                                {driver.name}
                              </option>
                            ))}
                          </Form.Select>
                          <ManagerWidgetGuide
                            guide={transactionCreate.guide}
                            field={"driverId"}
                          />
                          <ManagerWidgetValidation
                            messages={transactionCreate.validation.get(
                              "driverId"
                            )}
                          />
                        </Form.Group>
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card> */}

              {/* =============== */}
              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        // value={selectedOption}
                        // onChange={handleSelectChange}
                      >
                        <Form.Label>Tanggal Mulai Rental</Form.Label>
                        <Form.Control
                          name="tanggalMulai"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          required
                          value={transactionCreate.state.tanggalMulai}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"tanggalMulai"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
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
                        {/* {typeof transactionCreate.state.tanggalMulai} */}

                        <Form.Control
                          name="tanggalSelesai"
                          min={calculateDate}
                          type="date"
                          required
                          value={transactionCreate.state.tanggalSelesai}
                          onChange={transactionCreate.input.handler}
                        />
                        <ManagerWidgetGuide
                          guide={transactionCreate.guide}
                          field={"tanggalSelesai"}
                        />
                        <ManagerWidgetValidation
                          messages={transactionCreate.validation.get(
                            "tanggalSelesai"
                          )}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Label>Jumlah Hari</Form.Label>
                      <Form.Control
                        name="a"
                        type="number"
                        readOnly
                        minLength={3}
                        value={
                          transactionCreate.state.tanggalSelesai &&
                          transactionCreate.state.tanggalMulai
                            ? getDifferentDay(
                                transactionCreate.state.tanggalSelesai,
                                transactionCreate.state.tanggalMulai
                              )
                            : 0
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label>Total Biaya</Form.Label>
                      <Form.Control
                        name="b"
                        type="text"
                        readOnly
                        minLength={3}
                        value={
                          transactionCreate.state.tanggalSelesai &&
                          transactionCreate.state.tanggalMulai &&
                          transactionCreate.state.driverId &&
                          transactionCreate.state.carId &&
                          getDifferentDay(
                            transactionCreate.state.tanggalSelesai,
                            transactionCreate.state.tanggalMulai
                          ) > 0
                            ? useRupiah(
                                getDifferentDay(
                                  transactionCreate.state.tanggalSelesai,
                                  transactionCreate.state.tanggalMulai
                                ) *
                                  detailDriver[0]?.carCost +
                                  detailDriver[0]?.driverCost
                              )
                            : 0
                        }
                      />
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

          <Button
            onClick={() => {
              transactionCreate.onCreate().then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default TransactionPageCreate;
