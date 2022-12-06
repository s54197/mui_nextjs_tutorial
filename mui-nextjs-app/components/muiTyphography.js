import { Typography } from "@mui/material"

const MuiTypography = () => {
    return (
        <>
            <Typography variant="h1" align="center">Header 1</Typography>
            <Typography variant="h2" align="center">Header 2</Typography>
            <Typography variant="h3" align="center">Header 3</Typography>
            {/* can specify the specific tag using properties component, eg Typo with variant h4 but want to use h1 tag */}
            <Typography variant="h4" align="center" component="h1">Header 4</Typography>
            <Typography variant="h5" align="center">Header 5</Typography>
            <Typography variant="h6" align="center">Header 6</Typography>
            <Typography variant="subtitle1" align="center">Subtitle 1</Typography>
            <Typography variant="subtitle2" align="center">Subtitle 2</Typography>
            <Typography variant="body1" align="center">To add Next.js to your project, you will not need to load the react and react-dom scripts from unpkg.com anymore. Instead, you can install these packages locally using the Node Package Manager: npm.</Typography>
            <Typography variant="body2" align="center">To add Next.js to your project, you will not need to load the react and react-dom scripts from unpkg.com anymore. Instead, you can install these packages locally using the Node Package Manager: npm.</Typography>
        </>
    )
}

export default MuiTypography