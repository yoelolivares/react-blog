import './button.scss';
import React from 'react';
import IconObj from './Icons';

export default function Button(props) {
    const addIcon = props.iconName !== undefined && props.iconName !== '' ? IconObj.createIcon(props.iconName, false, null) : '';

    return <button className="button" type={props.type}>{addIcon} {props.text}</button>
}