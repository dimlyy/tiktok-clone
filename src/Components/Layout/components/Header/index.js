import styles from './Header.module.scss';
import classNames from 'classnames/bind';

// Correctly map over the class names to access styles
const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
     );
}

export default Header;