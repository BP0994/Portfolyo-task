"use client";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>
                © 2024
                Naven by
                <a className="no-underline"
                  href="https://themeforest.net/user/dynamiclayers"
                  target="_blank"
                >{"  "}
                  DynamicLayers
                </a>
              </p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social text-right">
                <a className="no-underline" href="#" >
                  <i className="ti-facebook"></i>
                </a>
                <a className="no-underline" href="#">
                  <i className="ti-twitter"></i>
                </a>
                <a className="no-underline" href="#">
                  <i className="ti-instagram"></i>
                </a>
                <a className="no-underline" href="#">
                  <i className="ti-linkedin"></i>
                </a>
                <a className="no-underline" href="#">
                  <i className="ti-youtube"></i>
                </a>
              </div>
              {/* <!-- /.footer-social --> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- /.footer-section --> */}
    </div>
  );
};

export default Footer;
