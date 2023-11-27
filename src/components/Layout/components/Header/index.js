import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "../../../../assets/images/logo.svg";

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={cx("search")}>
          <input
            placeholder="Search account and Videos..."
            spellCheck="false"
          ></input>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
          <button className={cx("loading")}>
            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
          </button>

          <button className={cx("search-tbn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>

        <div className={cx("action")}></div>
      </div>
    </header>
  );
};

export default Header;
