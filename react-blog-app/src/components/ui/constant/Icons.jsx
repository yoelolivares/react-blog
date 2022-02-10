import './Icons.scss';
import { FaBeer } from 'react-icons/fa';

export default function Icon(props) {
    let icon;

    switch (props.icon) {
        case 'FaBeer':
            icon = <FaBeer />;
            break;
    }

    return <i className="icon">{icon}</i>;
}