import React from 'react';

const BrandList = [
    
    {
        image: './images/brand/brand-06.png'
    },
    {
        image: './images/brand/brand-07.png'
    },
    {
        image: './images/brand/brand-08.png'
    },
    {
        image: './images/brand/brand-09.png'
    },
]

const BrandTwo = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandTwo;
