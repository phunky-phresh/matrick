import styled from 'styled-components';

 export const colors = {
    main: '#ffd0fd',
    contact: '#719FC6',
    video: '#5887B0',
    music: '43749C',
}

export const Container = styled.div`
    height: 100vh;    
    background-color: ${colors.main};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 450px) {
        justify-content: center;
    }
`

export const Title = styled.h1`
    margin: 0;
`

export const Enter = styled.div`
    justify-content: center;
    display: flex;
`
export const Button = styled.button`
    border-radius: 10px;
`

export const Cover = styled.div`
    background-color: ${colors.main};
    text-align: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`