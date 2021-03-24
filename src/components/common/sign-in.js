import React, { useState } from "react";
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
import { ReactComponent as SignInSVG } from "../animations/svg/sign-in.svg";
import { ReactComponent as DogSVG } from "../animations/svg/dog.svg";
import { useAuth } from "../../contexts/AuthContext";

export default function SignIn() {
  const [error, setError] = useState("");
  const {
    signIn,
    currentUser,
    loading,
    setLoading,
    setIsUserLoggedIn,
    startSignInSpinner,
    signInWithGoogle,
    signInWithFacebook,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignInWithFacebook() {
    try {
      setLoading(true);
      // startSignInSpinner(true);
      await signInWithFacebook();
    } catch {
      return setError("Wystąpił błąd przy logowaniu");
    }

    setIsUserLoggedIn(true);
    setTimeout(() => {
      startSignInSpinner(false);
      setLoading(false);
      setTimeout(successMessage(), 5);
    }, 3000);
  }

  async function handleSignInWithGoogle() {
    try {
      setLoading(true);
      startSignInSpinner(true);
      await signInWithGoogle();
    } catch {
      return setError("Wystąpił błąd przy logowaniu");
    }

    setIsUserLoggedIn(true);
    setTimeout(() => {
      startSignInSpinner(false);
      setLoading(false);
      setTimeout(successMessage(), 5);
    }, 3000);
  }

  async function handleSignIn() {
    try {
      setLoading(true);
      startSignInSpinner(true);
      await signIn(email, password);
    } catch {
      return setError("Wystąpił błąd przy logowaniu");
    }

    setIsUserLoggedIn(true);
    setTimeout(() => {
      startSignInSpinner(false);
      setLoading(false);
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
          <span style={{ marginTop: "10px" }}>Zalogowano</span>
          <DogSVG />
        </div>
      ),
      duration: 3,
      style: {
        zIndex: "1060",
      },
    });
  };

  return (
    <>
      <section>
        <Row justify="center">
          <Col span={24}>
            <div>
              <h1>Zaloguj się</h1>
            </div>
            <div className="have-an-account">
              <span>
                Nie masz konta?
                <Link style={{ marginLeft: "5px", fontWeight: "normal" }}>
                  Zarejestruj się
                </Link>
              </span>
            </div>
            <div className="sign-in-buttons">
              <Button
                className="sign-in-google"
                shape="round"
                icon={<GoogleIcon />}
                onClick={handleSignInWithGoogle}
              >
                <span style={{ marginLeft: "20px" }}>Zaloguj przez Google</span>
              </Button>
              <Button
                className="sign-in-facebook"
                shape="round"
                icon={<FacebookIcon />}
                onClick={handleSignInWithFacebook}
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
            <Form onFinish={handleSignIn}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Wpisz swój e-mail!" }]}
              >
                <Input
                  placeholder="E-mail"
                  className="sign-in-input"
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
                  className="sign-in-input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Zapamiętaj mnie</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  block={true}
                  htmlType="submit"
                  shape="round"
                  className="sign-in-button"
                  icon={<SignInSVG />}
                  loading={loading}
                >
                  <span style={{ marginLeft: "10px" }}>Zaloguj się</span>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
    </>
  );
}
