import React from 'react'
import Classnames from 'classnames/bind'
import styles from './header.module.scss';

const cx = Classnames.bind(styles)

 function Header() {
    

 
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

        </div>

    </header>;

}

export default Header