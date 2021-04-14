const GameShow = () => {  

const [games,setGames] = useState([])

const getGames = async() => {
    try{
      let res = await axios.get('/api/games/')
      setGames(res.data)
    }catch(err){
      alert("Error Failed to get games")
    }
}


useEffect(()=>{
  getGames()
},[])


export default GameShow;