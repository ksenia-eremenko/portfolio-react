import React from "react"

const SocialLink = (props: any) => {
    return (
        <a href="/" className="icon" target="_blank">
            {props.icon}
        </a>
    )
}

export default SocialLink;