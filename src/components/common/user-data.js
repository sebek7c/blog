import React, { useState } from "react";
import {
  Col,
  Row,
  Avatar,
  Button,
  Badge,
  Dropdown,
  Menu,
  Spin,
  Divider,
  message,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ReactComponent as SignOutSVG } from "../animations/svg/log-out.svg";
import { ReactComponent as SettingsSVG } from "../animations/svg/settings.svg";
import { ReactComponent as WhaleSVG } from "../animations/svg/whale.svg";
import { useAuth } from "../../contexts/AuthContext";
import SettingsModal from "./settings-modal";

export default function UserData() {
  const {
    currentUser,
    signOut,
    setIsUserLoggedIn,
    isUserLoggedIn,
    startSignOutSpinner,
  } = useAuth();
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  async function handleSignOut() {
    setError("");

    try {
      startSignOutSpinner(true);
      await signOut();
    } catch {
      setError("Wystąpił błąd podczas wylogowywania");
    }
    setTimeout(() => {
      setTimeout(successMessage(), 5);
      startSignOutSpinner(false);
    }, 3000);
    setIsUserLoggedIn(false);
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
          <span style={{ marginTop: "10px" }}>Wylogowano</span>
          <WhaleSVG />
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
      <Divider />
      <Row align="middle">
        <Col flex={1}>
          <Badge status="success" />
          <Button className="user-data-signout">
            {currentUser ? (
              <Avatar size={28} src={currentUser.photoURL} />
            ) : (
              <Avatar size={28} />
            )}
          </Button>
        </Col>
        <Col flex={22} />
        <Col flex={1}>
          <Button className="user-data-signout" onClick={showModal}>
            <SettingsSVG />
          </Button>
          <Button className="user-data-signout" onClick={handleSignOut}>
            <SignOutSVG />
          </Button>
        </Col>
        <SettingsModal
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      </Row>
      <Divider />
    </>
  );
}
