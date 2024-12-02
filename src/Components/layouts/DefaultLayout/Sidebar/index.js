import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(style);

function Sidebar() {
    return ( 
        <aside className={cs('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;