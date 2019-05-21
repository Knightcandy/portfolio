import React from 'react';

import './Container.scss';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const Container = (props)=>{
    return(
        <section className="portfolio__container">
            <Header data={ props.header }/>
            <Content />
            <Footer />
        </section>
    )
}

export default Container;