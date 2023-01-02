import styled from 'styled-components';


export const Dropdown = styled.div`
margin-right: 2vw;
position: relative;
`

export const DropdownCart = styled.div`
position: absolute;
display: ${props => props.toggleCart ? "block" : "none"};
margin-top: 4vh;
right: 0;
width: 15vw;
border: solid black 1.5px;
padding: 5px;
max-height: 80vh;
overflow: auto;
`
export const AlternateSolution = styled.div`
border: solid green 2px;
margin-left: 1rem;
`