import React, { useState } from 'react';

import { Wrapper, Header, Title, Landing, Cover, Enter, Button } from '../styles/globalStyle';

import cover from '../assets/cutout.png';
import Layout from '../components/Layout';

export default function Home() {

    const handleEnter = () => {
        console.log('clicked');
        
    }

    return(
        <Layout>
            <Header><Title>matirickjones.com</Title></Header>
            <Enter>
                <Button onClick={handleEnter}>Enter</Button>
            </Enter>
            <Cover><Title>Cover</Title></Cover>
        </Layout>
    )
}