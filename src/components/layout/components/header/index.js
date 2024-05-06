import React from 'react'
import Classnames from 'classnames/bind'
import styles from './header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faCircleXmark , faSpinner , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = Classnames.bind(styles)



 function Header() {
    

 
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <div className={cx('logo')}>
                  <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                  <input placeholder='Search account and videos' spellCheck={false}></input>
                  <button className={cx('clear')}>{
                        <FontAwesomeIcon icon={faCircleXmark}/>
               
                  }</button>
                           <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                  <button className={cx('search-btn')}>{
           <FontAwesomeIcon className={cx('loading')} icon={faMagnifyingGlass}/>

                  } </button>

                </div>
        </div>

    </header>;

}

export default Header