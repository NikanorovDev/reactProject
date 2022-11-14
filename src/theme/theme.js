import { createTheme } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';

const theme = createTheme({
    status: {
        danger: orange[500],
    },

    palette: {
        mode: 'dark',
        primary: blue,
        secondary: green
    }

});

export default theme
