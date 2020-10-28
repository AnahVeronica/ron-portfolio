import React from "react";
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">
            <a className=" text-primary"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-info"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={26} style={{ color: "info" }} />
                </span>
            </a>
        </div>
    )
}

export default MobileSocialLinks;