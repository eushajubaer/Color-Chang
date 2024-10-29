import React from 'react'

const Heading = ({ text }) => {
    let eusha = text.replace("$", "<span class='one'>").replace("$", "</span>");

    return <h1 dangerouslySetInnerHTML={{ __html : eusha }}></h1>;
};

export default Heading;
