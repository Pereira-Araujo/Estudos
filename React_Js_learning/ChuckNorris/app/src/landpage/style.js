
import styled from 'styled-components'


export const Container = styled.main`
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;

`
export const BlockRight = styled.main`
width:60%;
height:80%;
margin-left:0.5rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
overflow-y: auto;

`

export const Card = styled.div`
width:21rem;
display:flex;
flex-direction:column;
align-items:center;
`
 export const BlockLeft = styled.section`
margin-left:2rem;
`

export const RandomButtom = styled.section`
width:19rem;
padding:1rem;
text-align:center;
border:1px solid orange;
`


export const TagContainer = styled.section`

width:20rem;
height:14rem;
padding:0.5rem;
display:flex;
justify-content:space-around;
flex-wrap: wrap;
background:whitesmoke;

`

export const Tag = styled.p`
border:1px solid orange;
padding:0.5rem;
margin-top:0;
`

export const Search = styled.input`
border:coral solid 1px;
outline:none;
float:right;
`