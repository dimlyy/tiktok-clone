import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/animations/scale.css';

import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '../../Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFc = () => {

}
function Menu({children, items = [],hideOnClick=false, onChange = defaultFc }) {
    
    const [history, setHistory] = useState([{data : items}])
    const current = history[history.length - 1]; 

    const renderItem = () => {
         return current.data.map((item, index) => {
            const isParent = !!item.children;

            return <MenuItem
            key={index}
            data={item}
            onClick={()=> {
                if (isParent){
                    setHistory((prev) => [...prev, item.children]);
                }else {
                    onChange(item);
                }
            }}
            />
        })
    }

    return ( 
        <Tippy
        offset={[30, 6]}
        delay={[0, 800]}
        hideOnClick={hideOnClick}
        interactive
        placement='bottom-end'
        render={attrs => (
            <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                <PopperWrapper className={cx('menu-container')}>
                    <div className={cx('list-container')}>
                        {history.length > 1 && <Header onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1));
                        }}
                        title={current.title}/>}
                       <div className={cx('menu-scrollable')}>{renderItem()}</div>
                    </div>
               </PopperWrapper>
            </div>
        )}
        onHide={() => setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
     );
}

export default Menu;