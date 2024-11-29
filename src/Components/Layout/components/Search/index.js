import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';


const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!searchValue.trim()){
            setSearchResults([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResults(res.data);
                setLoading(false);
            })
    },[searchValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    }

    const handleHideResults = () => {
        setShowResults(false);
    }

    return ( 
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            placement='bottom'
            render={attrs => (
                <PopperWrapper>
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-title')}>
                            Account
                        </h4>
                        {searchResults.map(result => {
                            return (
                                <AccountItem key={result.id} data={result}/>
                            )
                        })}
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                ref={inputRef}
                value={searchValue}
                type='text'
                placeholder='Search'
                spellCheck={false}
                onFocus={() => setShowResults(true)}
                onChange={e=> setSearchValue(e.target.value)}
                onKeyDown={e=> {
                    if(e.key==='Enter'){
                        handleClear();                    }
                }}
                />
                {!!searchValue && !loading &&
                    <button
                    className={cx('clear')}
                    onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                <button
                onClick={handleClear}
                className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;
