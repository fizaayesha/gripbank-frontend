import React from "react";
import about1 from "../Assets/about1.svg";
import about3 from "../Assets/about3.svg";
import about2 from "../Assets/about2.svg";
import box1 from "../Assets/box1.svg";
import box2 from "../Assets/box2.svg";
import box3 from "../Assets/box3.svg";
import "./About.css";
function About() {
  return (
    <>
      <div
        style={{ background: "gray" }}
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={about1}
              className="d-block w-100"
              alt="about1"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>Credit Card</h5>
              <p>Credit Card is safer than carrying cash</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={about2}
              className="d-block w-100"
              alt="about2"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>GRIP BANK Life Insurance</h5>
              <p>
                GRIP BANK provide funds for your kids' school or college
                education
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={about3}
              className="d-block w-100"
              alt="about3"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>GRIP BANK, anytime anywhere</h5>
              <p>
                Online transactions are not bound by the geographical limits,
                you can transact anytime, anywhere
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-group">
        <div className="card bg-secondary" id="box" style={{ margin: "20px" }}>
          <img src={box1} className="card-img-top" alt="box1" />
          <div
            className="card-body text-light"
            style={{ background: "rgb(75 119 197)" }}
          >
            <h5 className="card-title">Loans</h5>
            <p className="card-text">
              Grip Bank provide loans at very low interest rates. The rates you
              pay will be cheaper than other types of highinterest loans. Grip
              Bank loans offer significantly lower interest rates than you will
              find with credit cards.
            </p>
          </div>
        </div>
        <div className="card bg-secondary" id="box" style={{ margin: "20px" }}>
          <img src={box2} className="card-img-top" alt="box2" />
          <div
            className="card-body text-light"
            style={{ background: "rgb(75 119 197)" }}
          >
            <h5 className="card-title">Money is Safe</h5>
            <p className="card-text">
              A saving account is an interest-bearing deposit account held at a
              bank. There is a chance that your cash might get lost or stolen if
              you carry it with you. However, a savings account is insured for
              upto certain limit
            </p>
          </div>
        </div>
        <div className="card bg-secondary" id="box" style={{ margin: "20px" }}>
          <img src={box3} className="card-img-top" alt="box3" />
          <div
            className="card-body text-light"
            style={{ background: "rgb(75 119 197)" }}
          >
            <h5 className="card-title">Online Banking</h5>
            <p className="card-text">
              Banking online means accessing your bank account and carrying out
              financial transactions through the internet on your smartphone,
              tablet or computer. It's quick, usually free and allows you to do
              tasks, such as paying bills and transferring money, without having
              to visit or call your bank. Grip Bank provides you the facility of
              online banking anywhere anytime.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2022 Grip Bank</p>
      </div>
    </>
  );
}

export default About;
