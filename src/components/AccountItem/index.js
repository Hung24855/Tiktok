import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/54b1f7876ea52083b0e13ae587377a61~c5_100x100.jpeg?x-expires=1701745200&x-signature=ES48KRpESoBYeNrHzbT8obHeJVw%3D"
        alt="Hoa"
        className={cx("avatar")}
      ></img>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon
            className={cx("check-icon")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </p>
        <span className={cx("username")}>Anhnv</span>
      </div>
    </div>
  );
};

export default AccountItem;
