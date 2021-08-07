import {TextField} from '@material-ui/core';
const CustomTextField = (props) => {
    return(
        <>
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                {...props}
            />
        </>
    )
}

export default CustomTextField;