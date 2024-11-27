import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  styles from './AccountItem.module.scss'
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9759622a32bfc45bf7be8add7fa1d831~c5_100x100.jpeg?lk3s=30310797&nonce=71149&refresh_token=801d0f7b0aaa3439ad2aff0cac43d21a&x-expires=1732521600&x-signature=AGuh%2Bnh7VmNheH3%2B%2FZ6gzXkD6Yc%3D&shp=30310797&shcp=-' alt=''/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Hoàng Thảo Vân</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>thaovan81</span>
            </div>
        </div>
    );
}

export default AccountItem;