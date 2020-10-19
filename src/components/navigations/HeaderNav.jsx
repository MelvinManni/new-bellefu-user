import React from "react";
import { Navbar, Nav, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import SideNav from "./SideNav";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import cookie from "react-cookies";
import { useEffect } from "react";
import { googleTranslate } from "../../Utils/Translate/googleTranslate";
import i18next from "i18next";

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (CHANGE CONTRY)
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Change Contry
  </Tooltip>
);
//THIS IS A HEADER COMPOENT
export default function HeaderNav() {
  const { t } = useTranslation();

  const handleTranslate = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      <Navbar style={styles.head} className=" shadow-sm ">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} style={styles.logo} />
        </Navbar.Brand>
        <Navbar.Brand>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
            <Button variant="outline-warning" style={styles.contrey_btn}>
              <Trans i18nKey="country">country</Trans>
            </Button>
          </OverlayTrigger>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link
            as={Link}
            to="/user_dashboard"
            className={`${Cookie.get("user") ? "d-none d-lg-block  d-md-none" : "d-none d-lg-none  d-md-none"}`}
            style={styles.auth}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/user_dashboard"
            onClick={logout}
            className={`${Cookie.get("user") ? "d-none d-lg-block  d-md-none" : "d-none d-lg-none  d-md-none"}`}
            style={styles.auth}
          >
            LogOut
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/login"
            className={`${Cookie.get("user") ? "d-none d-lg-none  d-md-none" : "d-none d-lg-block  d-md-none"}`}
            style={styles.auth}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/register"
            className={`${Cookie.get("user") ? "d-none d-lg-none  d-md-none" : "d-none d-lg-block  d-md-none"}`}
            style={styles.auth}
          >
            Register
          </Nav.Link>
          <Navbar.Brand className="d-none d-lg-block  d-md-none">
            <Link to="/post_ad">
              <Button variant="warning" style={styles.post_free_add_btn}>
                Post Free Ad
              </Button>
            </Link>
          </Navbar.Brand>
          <Navbar.Brand styles={styles.language}>
            <Button
              onClick={() => {
                handleTranslate("en");
              }}
              variant="warning"
              style={styles.post_free_add_btn}
            >
              EN
            </Button>
            <Button
              onClick={() => {
                handleTranslate("ko");
              }}
              variant="warning"
              style={styles.post_free_add_btn}
            >
              KO
            </Button>
          </Navbar.Brand>
          <Navbar.Brand className="d-lg-none d-xs-block  d-sm-block d-md-block">
            <SideNav />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

//LOGOUT
const logout = () => {
  Cookie.remove("user");
  window.location.reload();
};

//THE COMPONET STYLES GOES HERE.....
const styles = {
  head: {
    backgroundColor: "#76ba1b",
  },
  post_free_add_btn: {
    color: "white",
    backgroundColor: "#ffa500",
    border: "none",
  },
  auth: {
    color: "white",
  },
  contrey_btn: {
    color: "white",
    fontSize: "0.6em",
  },
  logo: {
    height: "30px",
    backgroundColor: "white",
    borderRadius: "5px",
  },

  nav_icon: {
    border: "5px solid red",
  },
};
