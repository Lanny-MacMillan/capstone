import {useState} from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const Add = (props) => {
    let emptyActivity = {name: '', date: '', description: '', image: '', location: '', price: '', notes:''}
    


    const [activity, setActivity] = useState(emptyActivity)
    const navigate = useNavigate();

    const handleChange = (event) => {
        setActivity({...activity, [event.target.name]: event.target.value})
    }
    const handleSubmitAddMore = (event) => {
        event.preventDefault()
        console.log(activity)
        props.handleCreate(activity)
        setActivity({name: '', date: '', description: '', image: '', location: '', price: '', notes:''})

    }
    const handleSubmitExit = (event) => {
        event.preventDefault()
        console.log(activity)
        props.handleCreate(activity)
        setActivity({name: '', date: '', description: '', image: '', location: '', price: '', notes:''})
        navigate(-1)
    }
    return (
        <>
        

    <Typography variant="h4">Add New Event</Typography>
    <div className="containerAdd">
    <form>
        <TextField
            style={{ width: "400px", margin: "5px", align: 'center'}}
            className='addTitle'
            type="text"
            label="Name"
            variant="outlined"
            name="name" 
            value={activity.name}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            type="text"
            label="Date"
            variant="outlined"
            name="date" 
            value={activity.date}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            id="full-width-text-field"
            multiline
            rows={5}
            maxRows={10}
            type="text"
            label="Description"
            variant="outlined"
            name="description" 
            value={activity.description}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            type="text"
            label="Image"
            variant="outlined"
            name="image" 
            value={activity.image}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            type="text"
            label="Location"
            variant="outlined"
            name="location" 
            value={activity.location}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            type="number"
            label="Price"
            variant="outlined"
            name="price" 
            value={activity.price}
            onChange={handleChange}
        />
        <br />
        <TextField
            style={{ width: "400px", margin: "5px" }}
            multiline
            rows={5}
            maxRows={10}
            type="text"
            label="Notes"
            variant="outlined"
            name="notes" 
            value={activity.notes}
            onChange={handleChange}
        />
        <br />
        <Button id='Button' onClick={handleSubmitExit} type="submit" variant="contained">Save and Exit</Button>
        <Button id='Button' onClick={handleSubmitAddMore} type="submit" variant="contained">Save and Add Next</Button>

    </form>
        </div>

        </>
    )
}

export default Add