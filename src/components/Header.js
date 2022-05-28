import React from 'react';
import './Header.css';

export default()=>{
    return(

            <header className='black'>
                <div className='header--logo'>
                    <a href="/">
                        <img alt="Netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" />
                    </a>
                </div>
                <div className='header--user'>
                <a href="/">
                        <img alt="User-logo" src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"/>
                </a>
                </div>

            </header>
    
    );

}