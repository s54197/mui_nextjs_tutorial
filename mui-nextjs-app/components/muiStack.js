import { Box, Stack, Divider } from "@mui/material";

// stack is used to handle one dimension layout which is by default in column direction (flex=cross axis)
const MuiStack = () => {
    return (
        <>
        {/* use box instead of division in MUI */}
        <Stack direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
            <Box
                display='flex'
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    padding: '16px',
                    height: '100px',
                    width: '300px',
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
                width='300px'
                p={2}
            >
                Narisha Husna Binti Kamarudin
            </Box>
        </Stack>
        </>
    )
}

export default MuiStack