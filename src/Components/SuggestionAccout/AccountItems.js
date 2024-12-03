import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestionAccounts.module.scss'
import Image from '../img';

const cx = classNames.bind(styles);

function AccountItems() {
    return ( 
        <div className={cx('account-item')}>
            <Image alt='' className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9759622a32bfc45bf7be8add7fa1d831~c5_100x100.jpeg?lk3s=30310797&nonce=71149&refresh_token=801d0f7b0aaa3439ad2aff0cac43d21a&x-expires=1732521600&x-signature=AGuh%2Bnh7VmNheH3%2B%2FZ6gzXkD6Yc%3D&shp=30310797&shcp=-'></Image>
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>Hoàng Thảo Vân</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                </h4>
                <p className={cx('name')}>hthaovan_81</p>
            </div>
        </div>
        
    );
}

AccountItems.propTypes = {
     
}

export default AccountItems;