import React from 'react'
import Header from '../components/header'
import Sidebar from '../DefaulLayout/Sidebar'
import Styles from './DefaulLayout.module.scss'
import classNames from 'classnames/bind'

const  cx=classNames.bind(Styles)


 function DefaulLayout({ children  }) {
    

    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
              <Sidebar/>
              <div className={cx('content')}>{children}</div>
               </div>
        </div>
    )
}

export default DefaulLayout