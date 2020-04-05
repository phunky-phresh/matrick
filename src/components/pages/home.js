import React from 'react';

import { Wrapper, Header, Title, Landing, Cover, Enter, Button } from '../styles/globalStyle';

import cover from '../assets/cutout.png';

export default function Home() {

    return(
        <Landing>
            <Header><Title>matirickjones.com</Title></Header>
            <Enter>
                <Button>Enter</Button>
            </Enter>
            <Cover><Title>Cover</Title></Cover>
        </Landing>
    )
}