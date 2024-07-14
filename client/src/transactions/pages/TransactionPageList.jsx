import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate } from "react-router-dom";
import useList from "../../utils/hooks/useList";
import useRupiah from "../../utils/hooks/useRupiah";
import useFormatDate from "../../utils/hooks/useFormatDate";

import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
  NavLink,
} from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetFilter from "../../managers/widgets/ManagerWidgetFilter";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import {
  CREATE_TRANSACTIONS,
  DELETE_TRANSACTIONS,
  UPDATE_TRANSACTIONS,
} from "../states/constants";
import ManagerWidgetPagination from "../../managers/widgets/ManagerWidgetPagination";

const TransactionPageList = () => {
  const navigate = useNavigate();
  const context = useContext(UtilStateContextBase);
  const transactionsList = useList(["transactions"]);

  useEffect(() => {
    transactionsList.onAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDifferentDay = (date2, date1) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = Date.parse(date2);
    const secondDate = Date.parse(date1);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays;
  };

  return (
    <Container className="mt-4">
      <ManagerWidgetTitle title={"Transactions"}>
        <ManagerWidgetRBAC
          context={context}
          permissions={[CREATE_TRANSACTIONS]}
        >
          <Button onClick={() => navigate("new")}>+ New Transaction</Button>
        </ManagerWidgetRBAC>
      </ManagerWidgetTitle>

      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <ManagerWidgetFilter
                fields={[
                  { value: "name", text: "Name" },
                  { value: "status", text: "Status" },
                ]}
                callback={(value) => {
                  transactionsList.filter.current.field = value.field;
                  transactionsList.filter.current.value = value.value;
                  transactionsList.filter.current.page = 1;
                  transactionsList.onAll();
                }}
              />
            </Card.Body>
            <Table striped borderless responsive hover>
              <thead>
                <tr>
                  <th>Name Peminjam</th>
                  <th>Mobil</th>
                  <th>Plat Nomor</th>
                  {/* <th>Car Cost</th>
                  <th>Driver</th>
                  <th>Driver Cost</th> */}
                  <th>Tanggal Mulai</th>
                  <th>Tanggal Selesai</th>
                  <th>Hari</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactionsList.states.map((transactions) => (
                  <tr key={transactions._id}>
                    <td>{transactions.name}</td>
                    <td>{transactions.carId?.name}</td>
                    <td>{transactions.carId?.numberPlate}</td>
                    {/* <td>{useRupiah(transactions.carId?.carCost)}</td>
                    <td>{transactions.driverId?.name}</td>
                    <td>{useRupiah(transactions.carId?.driverCost)}</td> */}
                    <td>{useFormatDate(transactions.tanggalMulai)}</td>
                    <td>{useFormatDate(transactions.tanggalSelesai)}</td>
                    <td>
                      {getDifferentDay(
                        transactions.tanggalSelesai,
                        transactions.tanggalMulai
                      )}
                    </td>
                    <td>
                      {useRupiah(
                        getDifferentDay(
                          transactions.tanggalSelesai,
                          transactions.tanggalMulai
                        ) *
                          transactions.carId?.carCost +
                          transactions.carId?.driverCost
                      )}
                    </td>
                    <td>
                      <div
                        className={`${
                          transactions.status == "selesai"
                            ? "bg-success"
                            : "bg-danger"
                        }   p-1  text-white text-center`}
                      >
                        {transactions.status}
                      </div>
                    </td>
                    <td>
                      <div className={"d-flex justify-content-start gap-3"}>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[UPDATE_TRANSACTIONS]}
                        >
                          <NavLink
                            className={"text-secondary"}
                            href={`#/transactions/update/${transactions._id}`}
                          >
                            preview
                          </NavLink>
                        </ManagerWidgetRBAC>
                        <ManagerWidgetRBAC
                          context={context}
                          permissions={[DELETE_TRANSACTIONS]}
                        >
                          {/* <NavLink
                            className={"text-secondary"}
                            href={`#/transactions/delete/${transactions._id}`}
                          >
                            delete
                          </NavLink> */}
                        </ManagerWidgetRBAC>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Card.Footer>
              <ManagerWidgetPagination
                pagination={transactionsList.pagination}
                callback={(value) => {
                  transactionsList.filter.current.page = value;
                  transactionsList.onAll();
                }}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionPageList;
