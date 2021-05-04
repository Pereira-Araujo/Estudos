import axios from 'axios'
import {useState, useEffect} from 'react'
import {Container,Card, BlockLeft,BlockRight, RandomButtom,TagContainer,Tag} from './style'

import Chuck_Avatar from '../assets/chuck_image.jfif'


function Home() {
    const [categories, setCategories] = useState([])
    const [random, setRandom] = useState('')
     
    const getRandom = ()=>{
        axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          setRandom(response.data.value)
        })
    }

    const getCategories= ()=>{
        axios.get('https://api.chucknorris.io/jokes/categories').then((response)=>{
          setCategories(response.data)
        })
          }



    useEffect(()=>{
        getCategories()
    })

   const categoriesMapped = categories.map((category)=>{
    return(
        <Tag>{category}</Tag>
       
    )})
    
    return (
      <Container>
     <BlockLeft>
         <Card>
         <h1>Chuck Norris Jokes</h1>
         <img alt={'Rosto do chuck Norris sorrindo'} src={Chuck_Avatar}/>
         <RandomButtom onClick={getRandom}>Random</RandomButtom>
         </Card>
         <TagContainer>
         {categoriesMapped}
        </TagContainer>
     </BlockLeft>
     <BlockRight>
     {random}
     </BlockRight>

      </Container>
    );
  }
  
  export default Home;
  