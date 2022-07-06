import {useState, useEffect} from'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const axios = require("axios");


const LocalInfo = (props) => {
    const [news, setNews] = useState([])
    const [showNews, setShowNews] = useState(true)
    const [showArticle, setShowArticle] = useState(false)
    const [query, setQuery] = useState('')

    const navigate = useNavigate();


{/* ============================= SEARCH BAR ============================= */}

    function handleOnSearch({ currentTarget = {} })  {
        const { value } = currentTarget;
        setQuery(value)
    }
    const fuse = new Fuse(news, {
        keys: [
            'title',
            'author',
            'summary',
            'published_date'
        ],
        includeScore: true
    })
    const handleClear = () => {
        setQuery('')
    }
    const results = fuse.search(query)
    const newsResults = query ? results.map(result => result.item) : news

    function handleOnSearch({ currentTarget = {} })  {
        const { value } = currentTarget;
        setQuery(value)
    }
    const Search = () => {
        return (
            <>
            <form className="d-flex">
                <input className="form-control me-2" type='text' placeholder="Search News" value={query} id='query' onChange={handleOnSearch}/>
                <button className="btn btn-outline-success" type="submit" onChange={handleOnSearch}>Search</button>
            </form>
            </>
        )
    }
{/* ===================================================================== */}

    const getNews= () => {
        axios
        .request(options)
        .then(function (response) {
            setNews(response.data.articles)
            console.log(response.data.articles);
        })
        .catch(function (error) {
            console.log(error)
            console.error(error);
        });
        
    }
    // console.log(props.activities[0].location)

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {
            // q: (props.activities[0].location), 
            q: 'Venice, Italy', 
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '4e0e7d2a56msh62686108837c30cp15097ejsn8e5d3e6f2a27',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
    }

    const DisplayAll = () => {
        return (
            <>
            {/* <Search /> */}
            <div className='localMapContainer'>
            {newsResults.map((article) => {
            return(
                <Card sx={{ maxWidth: 400, m:4 }} key={article._id}>
                <CardMedia
                    component="img"
                    height="240"
                    image={article.media}
                    alt={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {/* {article.summary} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button> */}
                    <Button id='Button' variant="contained" onClick={() => {showPage(article)}} className="btn btn-link" role="button">Learn More</Button>

                </CardActions>
                </Card>
            )
            })}
        </div>
        </>
        )

    }

    const DisplayOne = () => {
        return (
            <>
            <div className='localMapContainer'>
            {newsResults.map((article) => {
            return(
            <Card sx={{ maxWidth: 700, m:4 }} key={article._id}>
                <CardMedia
                    component="img"
                    height="240"
                    image={article.media}
                    alt={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {article.title}<br/>
                    -{article.author}-
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {article.summary}<br/>
                    {article.published_date}<br/>
                    {article.twitter_account}<br/>
                    <br/>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Click for full article</button>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => {backOption()}}size="small">Back</Button>
                    {/* <Button size="small">Share</Button> */}

                </CardActions>
                <div className="modal-dialog">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <iframe  className="iFrame" src={article.link}>
                                    </iframe>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            )
            })}
        </div>
        </>
        )
    }

    const backOption = () => {
        setShowNews(true)
        setShowArticle(false)
        getNews()
        // navigate(-1)
    }

    const showPage = (selectedArticle) => {
        setShowNews(false)
        setShowArticle(true)
        setNews(news.filter(article => article._id == selectedArticle._id))
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
        <div className='containerAdd'>
        <h1 id='newsTitle'>Local News</h1>
        </div>
        <div className='containerAdd'>
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}
        >
        <TextField
            helperText="Fuzzy Search News by Title, Author, Article and Date Fields"
            id='query'
            value={query}
            label="Search News"
            onChange={handleOnSearch}
        />
            <Button onClick={handleClear} className="materialBtn">
                Clear
            </Button>
        </Box>
        </div>
        {showNews ? <DisplayAll/> : null}
        {showArticle ? <DisplayOne/> : null}
        </>
    )
}

export default LocalInfo

