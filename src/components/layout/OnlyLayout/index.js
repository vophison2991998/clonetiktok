import React from 'react'
import Header from '../components/header/index'


 function OnlyLayout({ children  }) {
    

    return (
         <div>
            <Header />
            <div className="container">
         

                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default OnlyLayout