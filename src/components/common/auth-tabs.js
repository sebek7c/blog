import React, { useState } from "react";
import { Tabs, Carousel, Col, Row, Modal, Button, Spin } from "antd";
import SignUp from "../common/sign-up";
import SignIn from "../common/sign-in";
import PropTypes from "prop-types";
import { useAuth } from "../../contexts/AuthContext";

const { TabPane } = Tabs;

export default function AuthTabs({ openAuthTabs, setOpenAuthTabs }) {
  const [accountCreated, setAccountCreated] = useState(false);
  const { signUpSpinner } = useAuth();
  const closeModal = () => {
    setOpenAuthTabs(false);
  };

  return (
    <>
      <Modal
        visible={openAuthTabs}
        onCancel={closeModal}
        zIndex={1007}
        footer={null}
      >
        <Tabs defaultActiveKey={accountCreated ? "1" : "2"}>
          <TabPane tab="Zaloguj się" key="1">
            <SignIn />
          </TabPane>
          <TabPane tab="Utwórz konto" key="2">
            {signUpSpinner ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50vh",
                }}
              >
                <Spin size="large" />
              </div>
            ) : (
              <SignUp setAccountCreated={setAccountCreated} />
            )}
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
}

AuthTabs.propTypes = {
  openAuthTabs: PropTypes.bool,
  setOpenAuthTabs: PropTypes.func,
};
