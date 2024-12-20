import Button from "../../Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        seperate: data.seperate
    })
    return ( 
        <Button
        className={classes}
        to={data.to}
        leftIcon={data.icon}
        onClick={onClick}
        >
            {data.title}
        </Button>
     );
}

export default MenuItem;