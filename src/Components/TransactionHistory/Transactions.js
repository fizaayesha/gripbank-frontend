import React, { useState, useEffect } from "react";
import "./Transactions.css";
import axios from "axios";
// import * as Reactbootstrap from 'react-bootstrap';
import avatar from "../Assets/use-avatar.svg";

//Transaction history page
const Transactions = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios
      .get("https://lit-ravine-16724.herokuapp.com/transactions/")
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
    console.log(transaction);
  }, [transaction]);
  return (
    <>
      <div className="users">
        <div className="user">
          {transaction.map((trans) => (
            <div className="body" key={trans._id}>
              <img src={avatar} alt="avatar" style={{ width: "10rem" }} />
              <div className="box">
                <h6>Transaction Id: {trans.transactionId}</h6>
                <h6>
                  Sender:
                  {trans.sender}
                </h6>
                <h6>Receiver: {trans.receiver}</h6>
                <h6>Amount: Rs. {trans.amount}</h6>
                <h6>Date: {trans.date}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2022 Grip Bank</p>
      </div>
    </>
  );
};

export default Transactions;
