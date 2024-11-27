import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images'
import { Wrapper as PopperWrapper } from '../../../Popper'
import Button from '../../../Button';


import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faSearch, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../../../AccountItem';
// Correctly map over the class names to access styles
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        
    })

    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo' />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <PopperWrapper>
                            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}>
                                    Account
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input type='text' placeholder='Search' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div> 
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button outline>Register</Button>
                    <Button primary >Login</Button>
                    <Button rounded className={cx('Get-app')}>Get App</Button>
                </div>
            </div>
        </header>
     );
}

export default Header;