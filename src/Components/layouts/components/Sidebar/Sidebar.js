import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '../../../../Config'

import { HomeIcon, HomeIconActive, FollowingUser, LiveIcon, FollowingUserAcitve, LiveIconActive  } from '../../../Icon';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(style);

function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
           <Menu className={cx('menu')}>
                <MenuItem title='For you' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive/>}/>
                <MenuItem title='Following' to={config.routes.following} icon={<FollowingUser/>} activeIcon={<FollowingUserAcitve/>}/>
                <MenuItem title='Live Now' to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveIconActive/>}/>
           </Menu>
        </aside>
    );
}

export default Sidebar;