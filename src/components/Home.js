import {useState, useEffect, Link} from'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Edit from '../components/Edit'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
    const [activities, setActivities] = useState([])
    const [showActivities, setShowActivities] = useState(true)
    const [showActivity, setShowActivity] = useState(false)
    const [activity, setActivity] = useState([])
    const { loading = false } = props;
    const navigate = useNavigate();

    const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=`
    const APIBaseURL = 'https://glacial-tor-04352.herokuapp.com/api/events'

    const getActivities = () => {
        axios
            .get(APIBaseURL)
            .then(response => setActivities(response.data),
            (err)=> console.error(err)
            )
            .catch((error)=> console.error(error))
    }
    const DisplayAll = () => {
        return (
            <>
        <div className='container'>
            {activities.map((activity) => {
            return(
                <Card sx={{ maxWidth: 600, m: 1 }}>
                <CardHeader
                    title={
                    loading ? (
                        <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <>
                        {activity.name}
                        </>
                    )
                    }
                    subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        <>
                        Date of Visit: {activity.date}
                        </>
                    )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                    component="img"
                    height="140"
                    image={activity.image}
                    alt={activity.name}
                    />
                )}
        
                <CardContent>
                    {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                    ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                            <>
                        {activity.description}
                        <br/>
                        <Button id='Button' variant="contained" onClick={() => {showPage(activity)}} className="btn btn-link" role="button">Expand</Button>

                            </>
                        }
                    </Typography>
                    
                    )}
                </CardContent>
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
        <div className='container'>
            {activities.map((activity) => {
            return(
                <Card sx={{ height: 1800, maxWidth: 900, m: 1 }}>
                <CardHeader
                    title={
                    loading ? (
                        <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <>
                        <h3 id='title'>{activity.name}</h3>
                        <br/>
                        <h6>${activity.price}.00</h6>
                        </>
                    )
                    }
                    subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        <>
                        Event Date: {activity.date}
                        </>
                    )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 390 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                    component="img"
                    height="340"
                    image={activity.image}
                    alt={activity.name}
                    />
                )}
        
                <CardContent>
                    {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                    ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                        <>
                        <p>{activity.description}</p>
                        <h7 id='textColor'>Notes to Self:</h7><br/>
                        {activity.notes}
                        <br/>
                        <Edit handleUpdate={handleUpdate} activity={activity}/>
                        <Button id='Button' type="button" variant="outlined"  data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete Activity
                        </Button>
                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this Event Permanantly?
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                        <Button data-bs-dismiss="modal" onClick={() => {handleDelete(activity)}}>
                        Delete</Button>
                    </div>
                    </div>
                </div>
                </div>
                <Button id='Button' type="button" variant="outlined" onClick={homePage}>Back</Button>

                        </>
                        
                        }
                    </Typography>
                    )}

                </CardContent>
                {loading ? (
                    <Skeleton sx={{ height: 690 }} animation="wave" variant="rectangular" />
                ) : (
                    <div className="mapsApi">
                    <h5 id='title'>{activity.location}</h5>
                {/*============= GOOGLE MAPS API =============*/}
                    <iframe
                        className="map"
                        width='100%'
                        height='100%'
                        loading='lazy'
                        src={`${googleURL} + ${activity.location}`}>
                    </iframe>
                {/*============= GOOGLE MAPS API =============*/}
                    </div>
                )}

                {/* <div className="mapsApi">
                <h5>{activity.location}</h5>
                <iframe
                    className="map"
                    width='100%'
                    height='100%'
                    loading='lazy'
                    src={`${googleURL} + ${activity.location}`}>
                </iframe>
                </div> */}
                </Card>
                
            )
            })}
        </div>
        </>
        )
    }

    const homePage = () => {
        getActivities()
        setShowActivities(true)
        setShowActivity(false)
    }
    const showPage = (selectedActivity) => {
        setShowActivities(false)
        setShowActivity(true)
        setActivities(activities.filter(activity => activity.id == selectedActivity.id))
    }
    

    const handleUpdate =(editActivity) => {
        console.log('before .put App.js')
        axios   
        // id updates ID in DB, editActivity brings the info from that function
            .put(APIBaseURL + '/' + editActivity.id, editActivity)
            .then((response) => {
                setActivities(activities.map((activity) => {
                    console.log(activity.id)
                    return activity.id !== editActivity.id ? activity : response.data
            }))
            // getActivities()
        })
    }

    const handleDelete = (deletedActivity) => {
        axios
            .delete(APIBaseURL + '/' + deletedActivity.id)
            .then((response) => {
                // Instead of pulling data and reloading this filters the data on page and removes the {deletedActivity.id}
                // setActivities(activities.filter(activity => activity.id !== deletedActivity.id))
                homePage()
            })
    }


    useEffect(() => {
    getActivities()
    }, [])
    return (
        <>
        <h1 id='title'>Vacation Events</h1>
        {showActivities ? <DisplayAll/> : null}
        {showActivity ? <DisplayOne/> : null}     
        
        </>
    )
}

export default Home