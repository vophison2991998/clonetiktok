import React from 'react'
import Header from '../components/header'
import Sidebar from './Sidebar'

 function DefaulLayout({ children  }) {
    

    return (
         <div>
            <Header />
            <div className="container">
              <Sidebar/>

                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaulLayout