import { Box } from "@mui/material";


const MuiBox = () => {
    return (
        <>
        {/* use box instead of division in MUI */}
        <Box
            display='flex'
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                padding: '16px',
                height: '100px',
                '&:hover': { backgroundColor: 'primary.light' }
            }}
        >
            Azri Bin Mohamad
        </Box>
        {/* p={2} equals to 2*8px=16px */}
        <Box
            display='flex'
            bgcolor='success.main'
            height='100px'
            p={2}
        >
            Narisha Husna Binti Kamarudin
        </Box>
        </>
    )
}

export default MuiBox