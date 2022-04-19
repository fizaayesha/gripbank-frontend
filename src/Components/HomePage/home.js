import React from "react";
import one from "../Assets/one.svg";
import logo1 from "../Assets/logo1.svg";

function Home() {
  return (
    <>
      <div
        style={{ background: "gray" }}
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={one}
              className="d-block w-100"
              alt="bg1"
              style={{ width: "35rem", height: "35rem" }}
            />
            <div className="carousel-caption d-md-block" id="my">
              <img
                src={logo1}
                alt="logo"
                style={{ width: "15rem", height: "15rem" }}
              />
              <h1>GRIP BANK</h1>
              <p>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
                Banks are “special” because they manage the payment system
                through which most economic payments are made. They are the
                functional equivalent of the water company connecting the
                transfer of water to and from all of our homes.
              </p>
              <a
                className="btn btn-dark"
                href="https://internship.thesparksfoundation.info/"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2022 Grip Bank</p>
      </div>
    </>
  );
}

export default Home;
