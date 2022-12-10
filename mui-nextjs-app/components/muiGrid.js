import { Grid, Box } from "@mui/material"

// grid using css flexbox module
// grid consists of 12 columns
// 5 breakpoints = xs: mobile, sm: tablet, md: pc/laptop, lg & xl: large screen

const MuiGrid = () => {
    return (
        <>
            {/* spacing at grid will add 2*8px=16px between column and row */}
            <Grid container my={4} rowSpacing={4} columnSpacing={2}>
                {/* xs={6} means mobile and above will occupy 6 columns*/}
                {/* <Grid item xs={12} sm={6}><Box bgcolor='primary.main' p={2}>Item 1</Box></Grid>
                <Grid item xs={12} sm={6}><Box bgcolor='primary.main' p={2}>Item 2</Box></Grid>
                <Grid item xs={12} sm={6}><Box bgcolor='primary.main' p={2}>Item 3</Box></Grid>
                <Grid item xs={12} sm={6}><Box bgcolor='primary.main' p={2}>Item 4</Box></Grid> */}

                {/* To divide all of the items to equal width just specify breakpoint without grid size eg: xs */}
                <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 1</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 2</Box></Grid>
                {/* specify xs='auto', width will be based on content size  */}
                <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 3</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 4</Box></Grid>
            </Grid>
        </>
    )
}

export default MuiGrid