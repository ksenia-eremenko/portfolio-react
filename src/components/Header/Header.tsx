import React from "react";
import Nav from "../Nav/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";
import avatar from "../../assets/avatar.png"
import classNames from "classnames";

type HeaderType = {
  setOpenMenu: (openMenu: boolean) => void
  openMenu: boolean
}

const Header = ({ setOpenMenu, openMenu }: HeaderType) => {

  return (
    <header className="header">
      <div className="in">
        <div className="logo">
          <div className="photo">
            <img src={avatar} alt="" />
          </div>
          <a href="/" className="logo-text">Ksenia Eremenko</a>
        </div>
        <div className="nav-wrapper">
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className={classNames(
              "menu-icon",
              { active: openMenu }
            )}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
          </div>
        </div>
        <div className="bottom">
          <SocialLinks />
          <div className="copyright b-title bt10 color3">ⓒ 2023 Все права защищены.</div>
        </div>
      </div>
    </header>
  )
}

export default Header