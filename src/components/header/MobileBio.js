import React from "react"

import "./header.css"
import willjw3 from "../../images/willjw3.jpeg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <img src={willjw3}  className="ml-4 mt-2" style={{ maxWidth: `105px`, maxHeight: `105px`, borderRadius: `10%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <h2 className="mr-4 mt-4" >{props.author}</h2>
        </div>
    )
}

export default MobileBio