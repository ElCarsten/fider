import React from "react";
import { Modal, Checkbox } from "@fider/components/common";
import { useFider } from "@fider/hooks";

interface LegalAgreementProps {
  onChange: (agreed: boolean) => void;
}

export const TermsOfService: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <a href="https://gastro.split-app.de/tos" target="_blank">
        AGB's
      </a>
    );
  }
  return null;
};

export const PrivacyPolicy: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <a href="https://gastro.split-app.de/privacy" target="_blank">
        Datenschutzerklärung
      </a>
    );
  }
  return null;
};

export const LegalNotice: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <p className="info">
        Wenn Du Dich anmeldest aktzeptierst Du unsere <PrivacyPolicy /> und <TermsOfService />.
      </p>
    );
  }
  return null;
};

export const LegalFooter: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <Modal.Footer align="center">
        <LegalNotice />
      </Modal.Footer>
    );
  }
  return null;
};

export const LegalAgreement: React.FunctionComponent<LegalAgreementProps> = props => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <Checkbox field="legalAgreement" onChange={props.onChange}>
        I have read and agree to the <PrivacyPolicy /> and <TermsOfService />.
      </Checkbox>
    );
  }
  return null;
};
