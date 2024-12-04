import classNames from 'classnames/bind';

import styles from './AccoutPreview.module.scss'
import Image from '../../img';
import {Wrapper as PopperWrapper} from '../../Popper'
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview({props}) {
    return ( 
        <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('wrapper')}>
                        <header className={cx('header')}>
                            <Image className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9759622a32bfc45bf7be8add7fa1d831~c5_100x100.jpeg?lk3s=30310797&nonce=71149&refresh_token=801d0f7b0aaa3439ad2aff0cac43d21a&x-expires=1732521600&x-signature=AGuh%2Bnh7VmNheH3%2B%2FZ6gzXkD6Yc%3D&shp=30310797&shcp=-'/>
                            <Button className={cx('follow-btn')} primary>Follow</Button>
                       </header>
                       <div className={cx('body')}>
                            <h4 className={cx('nickname')}>
                                <strong>Hoàng Thảo Vân</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                            </h4>
                            <p className={cx('name')}>hthaovan_81</p>
                            <p className={cx('analyze')}>
                                <strong className={cx('value')}>8.2M </strong>
                                <span className={cx('label')}>Follows</span>
                                <strong className={cx('value')}>18.2M </strong>
                                <span className={cx('label')}>Likes</span>
                            </p>
                       </div>
                    </div>
                </PopperWrapper>
         </div>
    );
}

export default AccountPreview;