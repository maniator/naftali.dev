import React from "react";
import * as C from "../components";

function YoutubeLink ({ id, title }) {
    return (
        <C.Link href={`//youtu.be/${id}`}>
            <img 
                src={`//i.ytimg.com/vi_webp/${id}/sddefault.webp`}
                alt={title}
                title={title}
                width="100%"
            />
        </C.Link>
    )
}

export default YoutubeLink;
