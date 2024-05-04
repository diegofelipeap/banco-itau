import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #ec7000;
`
export const Container = styled.div`
    width: 100%;
`
export const ContainerItens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`
export const Img = styled.img`
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    cursor: pointer;
    list-style: none;
`
export const ButtonItemMenu = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    font-weight: bold;
    color: white;
    cursor: pointer;
    gap: 10px;
`
export const DivButtonAccess = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    padding: 0 20px;
    background-color: #106eb0;
    cursor: pointer;
    border-radius: 3px;
`
export const ButtonAccess = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: bold;
    height: 100%;
`