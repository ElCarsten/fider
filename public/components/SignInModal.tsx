import React, { useState, useEffect } from "react";
import { Modal, SignInControl, LegalFooter } from "@fider/components/common";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.StatelessComponent<SignInModalProps> = props => {
  const [confirmationAddress, setConfirmationAddress] = useState("");

  useEffect(() => {
    if (confirmationAddress) {
      setTimeout(() => setConfirmationAddress(""), 5000);
    }
  }, [confirmationAddress]);

  const onEmailSent = (email: string): void => {
    setConfirmationAddress(email);
  };

  const closeModal = () => {
    setConfirmationAddress("");
    props.onClose();
  };

  const content = confirmationAddress ? (
    <>
      <p>
        Wir haben Dir eine Bestätigungs-Email geschickt <b>{confirmationAddress}</b>. <br /> Klicke den Link in der Mail,
        um Dich anzumelden.
      </p>
      <p>
        <a href="#" onClick={closeModal}>
          OK
        </a>
      </p>
    </>
  ) : (
    <SignInControl useEmail={true} onEmailSent={onEmailSent} />
  );

  return (
    <Modal.Window isOpen={props.isOpen} onClose={closeModal}>
      <Modal.Header>Melde Dich an um Vorschläge zu machen.</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <LegalFooter />
    </Modal.Window>
  );
};
