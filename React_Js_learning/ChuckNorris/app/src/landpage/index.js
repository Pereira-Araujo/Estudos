import axios from 'axios'
import {useState, useEffect} from 'react'

import {Container,Card, BlockLeft,BlockRight, RandomButtom,TagContainer,Tag} from './style'

import Chuck_Avatar from '../assets/chuck_image.jfif'


function Home() {
   let jokeCategory

    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')
    const [random, setRandom] = useState('')
    const [filter, setFilter]= useState([])
    const [change, setChange] = useState(false)
     
    const getRandom = ()=>{
        axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          setRandom(response.data.value)
          setChange(false)

        })
    }

    const onChangeFind = (event)=>{
      setSearch(event.target.value)

    }

    const find = ()=>{
      axios.get(`https://api.chucknorris.io/jokes/search?query=${search}`).then((response)=>{
        setChange(true)
        setFilter(response.data.result)
        setSearch('')
      })
    }

    const getCategories= ()=>{
        axios.get('https://api.chucknorris.io/jokes/categories').then((response)=>{
          setCategories(response.data)
        })
          }

    const changeCategories = (joke) =>{
     
       jokeCategory = joke

      getJokesByCategories()

    }      

    const  getJokesByCategories = async ()=>{

      const result = await axios.get(`https://api.chucknorris.io/jokes/random?category=${jokeCategory}`)
      setRandom(result.data.value)
      setChange(false)

        }
   

   const categoriesMapped = categories.map((nameCategory)=>{
    return(
        <Tag key={nameCategory} onClick={() => changeCategories(nameCategory)}>{nameCategory}</Tag>
       
    )})

    const searchFiltered = filter.map((item)=>{
      return <p>{item.value}</p>
        
    })

       useEffect(()=>{
           getCategories()
      },[])

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
         <input onChange={onChangeFind} value={search}/><button onClick={find}>go</button>
        </TagContainer>
     </BlockLeft>
     <BlockRight>

     
     {change === false ? (<>{random}</>):(<>{searchFiltered}</>) }
    </BlockRight>
      </Container>
    );
  }
  
  export default Home;
  