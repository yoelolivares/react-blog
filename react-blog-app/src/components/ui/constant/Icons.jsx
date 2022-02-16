import './Icons.scss';
import React from 'react';
import * as BsIcons from "react-icons/bs";

const IconObj = {
    createIcon: (name, props, children) => {
        const el = React.createElement(BsIcons[name], props = false, children = null)
        
        return <i className="icon">{el}</i>;
    }
};

export default IconObj;