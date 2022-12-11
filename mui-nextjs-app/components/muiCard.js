import { Card, Box, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

const MuiCard = () => {
    return (
        <>
            <Box width='300px'>
                <Card>
                    <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='unsplash img'></CardMedia>
                    <CardContent>
                        <Typography component='div' variant='h5'>
                            React
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>SHARE</Button>
                        <Button size='small'>LEARN MORE</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default MuiCard