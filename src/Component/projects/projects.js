import React, { useEffect,useState } from "react";
import { loadProjects,handleSearch} from '../../store/projects/project.store';
import { connect, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import { ButtonGroup, DropdownButton, Dropdown,Form} from 'react-bootstrap';
import PCard from './p-Card';
import Figure from 'react-bootstrap/Figure'

function Project(props) {

    const [q, setq] = useState('')
    const [search, setsearch] = useState('title')
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('hellllllllo',q)
        const load = async () => {
            await dispatch(loadProjects());
        };
        load();
    }, [dispatch]);

    const handlesubmit = (q,search)=>{
        const searching = async (q,search)=>{
            await dispatch(handleSearch(q,search))
        }
        searching()
        // dispatch(handleSearch(q,search))
    }

    const onChangeHandler = (e) => {
        console.log('whynot',e)
        setq(e.target.value );
        console.log('maybe',q)
        
    }

    const onChanges = (e) => {
        console.log(e)
        setsearch(e.target.value );
        console.log('search',search)
    }

    return (
        <>
            {console.log(props)}
            <Card>
                <Form  onSubmit={ handlesubmit(q,search)}>
                <input onChange={onChangeHandler} placeholder='Search' ></input>
                <span  >
                    <Button type="submit">Search</Button>
                    {/* <Figure>
                        <Figure.Image
                            width={25}
                            height={25}
                            alt="171x180"
                            src="https://img.icons8.com/nolan/64/google-web-search.png"
                        />
                    </Figure> */}
                    
                </span>
               
                    {
                        

                        <div onChange={onChanges} key={`inline-${'radio'}`} className="mb-3">
                        <Form.Check name='query' inline label="title" type={'radio'} id={`inline-${'radio'}-1`} />
                        <Form.Check name='query' inline label="category" type={'radio'} id={`inline-${'radio'}-2`} />
                        <Form.Check
                          inline
                          label="Budget "
                          name='query'
                          type={'radio'}
                          id={`inline-${'radio'}-3`}
                        />
                      </div>
                        
                  }
                
                {/* <ButtonGroup>
                
                    <DropdownButton as={ButtonGroup} title="Search by" id="bg-vertical-dropdown-2">
                        <Dropdown.Item eventKey="title" >title</Dropdown.Item>
                        <Dropdown.Item eventKey="categoty" >category</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup> */}
                </Form>
                {props.projects.map(item => {
                    return <div style={{ float: "left", margin: "30px", padding: "10px" }}>
                        <PCard Item={item} />
                    </div>
                })}
            </Card>



        </>
    )
}

const mapStateToProps = (state) => ({
    projects: state.projects.projects,
});
export default connect(mapStateToProps)(Project);


//   return (
//     <>
//       
//     </>