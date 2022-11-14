import { Send } from "@mui/icons-material";
import { Checkbox, Fab, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
// import store from "../store"
import { changeName, exampleAction } from '../store/profile/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    const { showName, name } = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [value, setValue] = useState(name)


    const toggleShowName = useCallback(() => {
        dispatch(exampleAction)

    }, [dispatch])

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handelButton = () => {
        dispatch(changeName(value))
        toast.success('Name Added Successfully')
    }


    return (
        <div>
            <ToastContainer />
            <h1>Profile</h1>

            <FormGroup>
                <FormControlLabel control={
                    <Checkbox
                        checked={showName}
                        onClick={toggleShowName}
                    />}
                    label='Toggle Your Name' />
            </FormGroup>
            {showName && <div>
                <TextField
                    value={value}
                    onChange={handleInput}
                />

                <Fab color='primary'
                    className='button'
                    type={'button'}
                    onClick={handelButton}
                >
                    <Send />
                </Fab>
            </div>}
        </div >
    )
}

export default Profile