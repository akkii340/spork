import React, { useState, useRef, useContext } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import "./ProfilePic.css";
import { IconButton } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import Context from "./Context";

export default function ProfilePic({ editMode }) {
  const [isHover, setIsHover] = useState(false);
  const { tab, dispatch } = useContext(Context);

  const fileInput = useRef(null);

  const profilePic = useSpring({
    transform: tab === 1 ? "translate3d(0,-210px,0) scale(0.8)" : "translate3d(0px,0px,0) scale(1)",
    position: tab === 1 ? "absolute" : "static",
    width: tab === 1 ? 200 : "",
    height: tab === 1 ? 200 : 200 /* we cannot go from 100% to 200px so 200 -> 200 for now */
  });

  const profilePicWrapper = useSpring({ height: tab === 1 ? 0 : 200 });

  const newPic = useSpring({ opacity: isHover ? 1 : 0 });

  function handleUpload(e) {
    if (e.target.files[0]) {
      dispatch({ type: "message", payload: { type: "success", text: "You uploaded the file!" } });
    }
  }

  function handleUploadClick() {
    fileInput.current.click();
  }

  return (
    <animated.div
      className="profile-pic-wrapper"
      style={profilePicWrapper}
      onMouseEnter={() => {
        if (editMode) setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <animated.img
        src={
          "https://cdn.vox-cdn.com/thumbor/AVRKydHKlpRjC2ZwpxquoY_Bntk=/0x26:640x453/1200x800/filters:focal(0x26:640x453)/cdn.vox-cdn.com/uploads/chorus_image/image/34182115/sonic.0.jpg"
        }
        style={profilePic}
      />
      <animated.div className="profile-pic-new" style={newPic}>
        <IconButton onClick={handleUploadClick}>
          <Image color="secondary" />
        </IconButton>
      </animated.div>
      <input type="file" ref={fileInput} onChange={handleUpload} style={{ display: "none" }} />
    </animated.div>
  );
}
