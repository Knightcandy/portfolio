import React from 'react';

import './Header.scss';

const Header = (props)=> {
    let headerContents = props.data;

    return (
        <header>
            <div className="header">
                <div className="header__img">
                    <div className="img-container">
                        <figure>
                            <img src={headerContents.image} alt={headerContents.title} />
                        </figure>
                    </div>
                </div>
                <div className="header__text">
                    <div className="header__text--title">
                        <h1>{ headerContents.title }</h1>
                    </div>
                    <div className="header__text--subtitle">
                        <p>{ headerContents.subtitle }</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;