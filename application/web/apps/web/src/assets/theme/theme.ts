import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
            default: '#130017'
        },
    },
    typography: {
        fontFamily: [
            "Changa",
            "sans-serif"
        ].join(',')
    }
})