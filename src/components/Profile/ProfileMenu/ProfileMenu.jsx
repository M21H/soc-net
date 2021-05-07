import React from "react";
import style from "./ProfileMenu.module.css";
import { NavLink } from "react-router-dom";

import PublicIcon from "@material-ui/icons/Public";
import InfoIcon from "@material-ui/icons/Info";
import PhotoIcon from "@material-ui/icons/Photo";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PostAddIcon from "@material-ui/icons/PostAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ProfileMenuItem from "./ProfileMenuItem/ProfileMenuItem";

const ProfileMenu = () => {
  const navStyle = { textDecoration: "inherit", color: "inherit" };

  return (
    <div className={style.profileMenu}>
      <div className={style.profileMenu__container}>
        <NavLink
          to="/profile/overview"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="Overview" Icon={PublicIcon} />
        </NavLink>
        <NavLink
          to="/profile/info"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="Info" Icon={InfoIcon} />
        </NavLink>
        <NavLink
          to="/profile/media"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="Media" Icon={PhotoIcon} />
        </NavLink>
        <NavLink
          to="/profile/activity"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="Activity" Icon={DirectionsRunIcon} />
        </NavLink>

        <NavLink
          to="/profile/posts"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="Posts" Icon={PostAddIcon} />
        </NavLink>
        <NavLink
          to="/profile/more"
          style={navStyle}
          activeClassName={style.profileMenu__active}
        >
          <ProfileMenuItem title="More" Icon={MoreHorizIcon} />
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileMenu;
