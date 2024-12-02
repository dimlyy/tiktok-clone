import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { useRebound } from '../../../hooks';
import { searchService } from '../../../../services';


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

    const reboundValue = useRebound(searchValue, 800)

    useEffect(() => {
        if(!reboundValue.trim()){
            setSearchResults([]);
            return;
        }
        
        const fetchApi = async () => {
            setLoading(true); 
            const result = await searchService(reboundValue);
            setSearchResults(result);
            setLoading(false);
        }

        fetchApi();      

    },[reboundValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    }

    const handleHideResults = () => {
        setShowResults(false);
    }

    const handleOnchange  = (e) => {
        const searchValue = e.target.value;
        if (searchValue.charAt(0) !== ' '){
            setSearchValue(searchValue);
        }
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
                onChange={handleOnchange}
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
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleClear}
                className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;
