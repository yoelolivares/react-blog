import './button.scss';
import Icon from './Icons';

export default function Button(props) {
    const icon = props.iconName ? <Icon icon={props.iconName}/> : '';

    return <button className="button" type={props.type}>{props.text} {icon}</button>
}