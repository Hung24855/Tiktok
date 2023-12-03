import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import logo from "../../../../assets/images/logo.svg";
import PopperWrapper from "../../../Popper/Wrapper";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);
const Header = () => {
  const [searchResult, setSearchresult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchresult([]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Logo"></img>
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
};

export default Header;
