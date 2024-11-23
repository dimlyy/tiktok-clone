import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Correctly map over the class names to access styles
const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo' />
                </div>
                <div className={cx('search')}>
                    <input type='text' placeholder='Search' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                      <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    <button className={cx('search-btn')}>
                      <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
                <div className={cx('action')}>

                </div>
            </div>
        </header>
     );
}

export default Header;