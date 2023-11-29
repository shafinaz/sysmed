import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { isUserValid, signout } from "../src/lib/pocketbase";
import { Button, Form, Row, Col } from 'antd';

export default function RootLayout() {
  const { pathname } = useLocation();
  const showSignUpButtonPatient = !isUserValid && pathname !== "/signup" && pathname !== "/login/doctor" && pathname !== "/login/admin";
  const LoginButtonDoctor = !isUserValid && pathname !== "/signup" && pathname !== "/login/patient" && pathname !== "/login/admin" && pathname !== "/";
  const LoginButtonAdmin = !isUserValid && pathname !== "/signup" && pathname !== "/login/patient" && pathname !== "/login/doctor" && pathname !== "/";
  const showLogInButton = !isUserValid && pathname === "/signup";

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <>
      <div>
        {showSignUpButtonPatient ? (
          <>
          <Row justify="end">
            <Col xs={24} sm={20} md={16} lg={12} xl={8}>
              <Form.Item {...tailLayout}>
                <Link to={{pathname: "/login/doctor"}}>
                  <Button type="link">Log In Doctor</Button>
                </Link>
                <Link to={{pathname: "/login/admin"}}>
                  <Button type="link">Log In Admin</Button>
                </Link>
                <Link to={{pathname: "/signup"}}>
                  <Button type="primary">Sign Up</Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
          </>
        ) : (LoginButtonDoctor ? (
          <>
          <Row justify="end">
            <Col xs={24} sm={20} md={16} lg={12} xl={8}>
              <Form.Item {...tailLayout}>
                <Link to={{pathname: "/login/patient"}}>
                  <Button type="link">Log In Patient</Button>
                </Link>
                <Link to={{pathname: "/login/admin"}}>
                  <Button type="link">Log In Admin</Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
          </>
        ) : (LoginButtonAdmin ? (
          <>
          <Row justify="end">
            <Col xs={24} sm={20} md={16} lg={12} xl={8}>
              <Form.Item {...tailLayout}>
                <Link to={{pathname: "/login/doctor"}}>
                  <Button type="link">Log In Doctor</Button>
                </Link>
                <Link to={{pathname: "/login/patient"}}>
                  <Button type="link">Log In Patient</Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
          </>
        ) : (showLogInButton ? (
          <>
          <Row justify="end">
            <Col xs={24} sm={20} md={16} lg={12} xl={8}>
              <Form.Item {...tailLayout}>
                <Link to={{pathname: "/login/patient"}}>
                  <Button type="primary">Log In</Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
          </>
        ) : (
          <>
            <Row justify="start" align="top">
              <Col>
                <img src="/header.jpg" alt="Header Image" style={{ height: "20vh", width: "auto" }}/>
              </Col>
              <Col xs={24} sm={20} md={16} lg={12} xl={14}>
                <Row justify="end" align="bottom">
                  <Col>
                    <Button type="primary" onClick={signout}>Log Out</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        ))))}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
