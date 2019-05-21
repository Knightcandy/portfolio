import React from 'react';

import Container from './Container/Container';

import headerImg from '../../assets/img/photo.jpg';

const headerData = {
    title: 'Rabin Shrestha',
    subtitle: 'Web Developer',
    image: headerImg
}

const Portfolio = ()=>{
    return(
        <main className="portfolio">
            <Container header={ headerData } />
        </main>
    )
}

export default Portfolio;