import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images'
import Button from '../../../Button';
import { Menu as MenuPopper } from '../../../Popper';

import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileIcon, UploadIcon } from '../../../Icon';
import Image from '../../../img';
import Search from '../Search';
// Correctly map over the class names to access styles
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'Languages',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard Shortcuts'
    }
]

function Header() {
    const [searchResults, setSearchResults] = useState([])

    const currentUser = true;

    const handleOnChange = (prop) => {
        console.log(prop)
    }

    useEffect(()=> {
        setTimeout(() => {
            setSearchResults([1,2,3]);
        }, 3000)
    })

    const USER_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View Profiles',
            to: '/user/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}/>,
            title: 'Keyboard Shortcuts'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get Coins',
            to: '/Coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Settings',
            to: '/Settingx'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Sign Out',
            to: '/Logout',
            seperate: true
        },
    ]

    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo' />
                </div>
                <Search/>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                            delay={[0, 300]}
                            content='Upload Video'
                            placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('header-icon')}/>
                                </button>
                            </Tippy>
                            <Tippy
                            delay={[0, 300]}
                            content='Profile'
                            placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <ProfileIcon className={cx('header-icon')}/>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                          <Button text>Upload</Button>
                          <Button outline>Register</Button>
                          <Button primary >Login</Button>
                          <Button rounded className={cx('Get-app')}>Get App</Button>
                        </>
                    )}
                    <MenuPopper onChange={handleOnChange} items={currentUser ? USER_ITEMS : MENU_ITEMS}> 
                        {currentUser ? (
                                <Image
                                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9759622a32bfc45bf7be8add7fa1d831~c5_100x100.jpeg?lk3s=30310797&nonce=71149&refresh_token=801d0f7b0aaa3439ad2aff0cac43d21a&x-expires=1732521600&x-signature=AGuh%2Bnh7VmNheH3%2B%2FZ6gzXkD6Yc%3D&shp=30310797&shcp=-'
                                className={cx('user-avatar')}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                                </button>
                        )}
                    </MenuPopper>
                </div>
            </div>
        </header>
     );
}

export default Header;