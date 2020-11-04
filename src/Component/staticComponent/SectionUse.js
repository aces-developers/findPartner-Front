import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'


export default function Ues(props) {
    return (
        <>
            <Container>
                <h4 style={{textAlign:"center"}}>How it works</h4>
                <Row>
                    <Col xs={6} md={4}>
                    <Image style={{width:"220px",height:"220px"}}  src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                    </Col>{' '}
                    <Col xs={6} md={4}>
                        <Image style={{width:"220px",height:"220px"}} src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                    </Col>{' '}
                    <Col xs={6} md={4}>
                    <Image style={{width:"220px",height:"220px"}} src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                    </Col>
                </Row>
            </Container>



        </>
    )
}
