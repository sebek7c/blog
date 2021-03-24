import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Divider,
  Form,
  Input,
  Button,
  Checkbox,
  message,
} from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../animations/svg/google.svg";
import { ReactComponent as FacebookIcon } from "../animations/svg/facebook.svg";
import { ReactComponent as SignUpSVG } from "../animations/svg/sign-up.svg";
import { ReactComponent as RocketSVG } from "../animations/svg/rocket.svg";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp({ setAccountCreated }) {
  const [error, setError] = useState("");
  const {
    signup,
    currentUser,
    loading,
    setLoading,
    startSignUpSpinner,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  async function handleSignUp() {
    if (password !== passwordConf) {
      return setError("Hasła różnią się od siebie");
    }

    try {
      setError("");
      setLoading(true);
      startSignUpSpinner(true);
      await signup(email, password, passwordConf);
    } catch {
      setError("Wystąpił błąd przy tworzeniu nowego użytkownika");
    }

    setTimeout(() => {
      startSignUpSpinner(false);
      setLoading(false);
      setAccountCreated(true);
      setTimeout(successMessage(), 5);
    }, 3000);
  }

  const successMessage = () => {
    message.success({
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span style={{ marginTop: "10px" }}>
            Rejestracja przebiegła pomyślnie
          </span>
          <RocketSVG />
        </div>
      ),
      duration: 4,
      style: {
        zIndex: "1008",
      },
    });
  };

  return (
    <>
      <section>
        <Row justify="center">
          <Col span={24}>
            <div>
              <h1>Utwórz konto</h1>
            </div>
            <div className="have-an-account">
              <span>
                Masz już konto?
                <Link style={{ marginLeft: "5px", fontWeight: "normal" }}>
                  Zaloguj się
                </Link>
              </span>
            </div>
            <div className="sign-up-buttons">
              <Button
                className="sign-up-google"
                shape="round"
                icon={<GoogleIcon />}
              >
                <span style={{ marginLeft: "20px" }}>Zaloguj przez Google</span>
              </Button>
              <Button
                className="sign-up-facebook"
                shape="round"
                icon={<FacebookIcon />}
              >
                <span style={{ marginLeft: "20px" }}>
                  Zaloguj przez Facebook
                </span>
              </Button>
            </div>
            <div>
              <Divider orientation="horizontal">lub</Divider>
            </div>
            {error}
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Form onFinish={handleSignUp}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Wpisz swoj email!" }]}
              >
                <Input
                  placeholder="E-mail"
                  className="sign-up-input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Wpisz swoje hasło!" }]}
              >
                <Input.Password
                  placeholder="Hasło"
                  className="sign-up-input"
                  visibilityToggle="false"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password-confirm"
                rules={[{ required: true, message: "Potwierdź swoje hasło!" }]}
              >
                <Input.Password
                  placeholder="Potwierdź Hasło"
                  visibilityToggle="false"
                  className="sign-up-input"
                  onChange={(e) => {
                    setPasswordConf(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ marginTop: "28px" }}
              >
                <Checkbox>Zapamiętaj mnie</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  block={true}
                  htmlType="submit"
                  shape="round"
                  className="sign-up-button"
                  icon={<SignUpSVG />}
                  loading={loading}
                >
                  <span style={{ marginLeft: "10px" }}>Utwórz konto</span>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
    </>
  );
}

SignUp.propTypes = {
  setAccountCreated: PropTypes.func,
};
