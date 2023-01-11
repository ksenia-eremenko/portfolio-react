import React from "react"
import SocialLink from "./SocialLink"
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <SocialLink icon={<MailIcon />} />
      <SocialLink icon={<TelegramIcon />} />
    </div>
  )
}

export default SocialLinks;