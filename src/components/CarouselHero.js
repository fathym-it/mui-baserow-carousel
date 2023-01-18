import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

function CarouselHero(props)
{
    const theme = useTheme();
    var items = [
        {
            name: "Geo Intelligence",
            description: "IoT + AI + Data providing pin point geo intelligence anywhere in the world. Hello world.",
            bgimage: "static/worldnetwork.png",
            bgposition: "bottom center",
            bgsize: "cover",
            bgattach: "local",
            background: "#CCCCCC"
        },
        {
            name: "Vertical Solutions",
            description: "There's a solution for every problem.",
            bgimage: "static/solutionsworldwide.png",
            bgposition: "center center",
            bgsize: "cover",
            bgattach: "local",
            background: "#6EEEFF"
        },
        {
            name: "Cloud Native IoT + AI + Geo Data",
            description: "The power of synergistic data applications",
            bgimage: "static/geobackgroundtest.png",
            bgposition: "center center",
            bgsize: "cover",
            bgattach: "local",
            background: "#00FF00"
        }
    ]

    return (
        <Carousel
        indicatorIconButtonProps={{
            style: {
                color: theme.palette.primary.secondary
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: theme.palette.primary
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '1rem',
            }
    
        }}
    >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box sx={{ bgcolor: props.item.background,
            backgroundImage: `url('${props.item.bgimage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${props.item.bgposition}`,
            backgroundSize: `${props.item.bgsize}`,
            backgroundAttachment: `${props.item.bgattach}`,
            height: '50vh',
            width: '100%',
            p: '3.5rem' }}>
            <h2 style={{ textShadow: '1.5px 1.5px 3px rgba(0, 0, 0, 0.5)' }} >{props.item.name}</h2>
            <p style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }} >{props.item.description}</p>

            <Button className="CheckButton" variant="contained">
                Check it out!
            </Button>
        </Box>
    )
}

export default CarouselHero;