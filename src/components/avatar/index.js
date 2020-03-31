import React, { Component } from 'react';
import styled from "styled-components";

const Avatar = () => {
        return (
            <div>
                <Image src="https://c1.lestechnophiles.com/www.numerama.com/content/uploads/2019/05/trou-noir-espace-univers-astronomie.jpg?resize=1212,712"
                        alt=""/>
            </div>
        );
    }

const Image = styled.img`
    width: 40px; 
    height: 40px; 
    border-radius: 3px;
`;

export default Avatar;