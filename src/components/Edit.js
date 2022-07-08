import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Edit = (props) => {
    const [activity, setActivity] = useState({...props.activity})

    const handleChange = (event) => {
        setActivity({...activity, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(activity)
        props.handleUpdate(activity)
    }
    return (
        <>
        <Button id='Button' type="button" variant="outlined" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit Activity
        </Button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Activity</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
        <TextField
            style={{ width: "400px", margin: "5px", align: 'center'}}
            id='modalText'
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
            id='modalText'
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
            id='modalText'
            // id="full-width-text-field"
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
            id='modalText'
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
            id='modalText'
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
            id='modalText'
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
            id='modalText'
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
        {/* <Button id='Button' onClick={handleSubmit} data-bs-dismiss="modal" type="submit" variant="contained">Save and Exit</Button><br/> */}

            <div class="modal-footer">
            <Button id='Button' onClick={handleSubmit} data-bs-dismiss="modal" type="submit" variant="contained">Save and Exit</Button><br/>

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Edit


