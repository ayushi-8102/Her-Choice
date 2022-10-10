
import { Box, styled } from '@mui/material';

import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products }) => {
    const adURL = 'https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg';

    return (
        <Component>
            <LeftComponent>
                <Slide 
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} style={{width: 217}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;