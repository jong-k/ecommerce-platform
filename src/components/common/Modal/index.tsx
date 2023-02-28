import Button from "../Button";
import Input from "../Input";
import styles from "./index.module.scss";
import {
  ISSUE_FORM_LABEL,
  ISSUE_FORM_NAME,
  ISSUE_FORM_PLACEHOLDER,
  ISSUE_MODAL_TITLE,
  ISSUE_STATE,
} from "../../../enums";
import { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className={styles.modal}>
        <header>
          <h2>Issue 수정</h2>
          <Button onClick={closeModal}>X</Button>
        </header>
        <div>
          <Input
            title={ISSUE_FORM_LABEL.TITLE}
            name={ISSUE_FORM_NAME.TITLE}
            placeholder={ISSUE_FORM_PLACEHOLDER.TITLE}
            value={}
          />
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Modal;
