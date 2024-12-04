import classNames from "classnames/bind";
import styles from './SuggestionAccounts.module.scss'
import PropTypes from 'prop-types';

import AccountItems from "./AccountItems";

const cx = classNames.bind(styles);
function SuggestionAccounts({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>

            <p className={cx('more-btn')}>See all</p>
        </div>
     );
}

SuggestionAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestionAccounts;