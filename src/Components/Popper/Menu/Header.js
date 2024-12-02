import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({title, onBack}) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h2 className={cx('header-title')}>{title}</h2>
        </header>
    );
}

export default Header;