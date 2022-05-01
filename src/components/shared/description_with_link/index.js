import React from 'react';

const DescriptionWithLink = (props) => {
    return (
        <div>
            <p>{props.description}</p>
            <a href={props.url} >{props.url}</a>
        </div>
    )
}

export default DescriptionWithLink;