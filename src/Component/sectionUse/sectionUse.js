import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'


export default function Ues(props) {
    return (
        <>
            <Container>
                <h4 style={{ textAlign: "center" }}>How it works</h4>
                <Row>
                    <Col xs={6} md={4}>

                        <Image style={{ padding:"10px",width: "220px", height: "220px" }} src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                        <h4 style={{ padding:"5px"}} > Post a Project</h4>
                        <p>

                            Tell us about your project. FindPartner connects you with the perfect partner around the world, or near you.
                       </p>

                    </Col>{' '}
                    <Col xs={6} md={4}>
                        <Image style={{ width: "220px", height: "220px" }} src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                        <h4 > Applications come to you</h4>
                        <p>
                            Whatever your needs, there will be a partner to join your project
                         </p>
                    </Col>{' '}
                    <Col xs={6} md={4}>
                        <Image style={{ width: "220px", height: "220px" }} src="https://images.homedepot-static.com/productImages/be3590cc-04a5-4c9e-a97c-86753e795a25/svn/nuwallpaper-wallpaper-rolls-nu2220-64_400.jpg" roundedCircle />
                       <h4 >Choose a partner</h4>
                        <p>
                        Use FindPartner to chat and 
                        Collaborate easily
                      </p>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

