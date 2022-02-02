import { Tab, Card, Nav } from 'react-bootstrap'
import List from './List1';

var Wrapper = (props) => {
    return (
        <Tab.Container>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" className="justify-content-center flex-grow-1">
                        {
                            props.todoLists.map((value, index) => {
                                return <Nav.Item className="col-6">
                                    <Nav.Link eventKey={value.id} className="d-flex flex-grow-1 justify-content-center text-dark" >{"Список дел №" + ++index + " - " + value.name}</Nav.Link>
                                </Nav.Item>
                            })
                        }
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Tab.Content>
                        {
                            props.todoLists.map((value, index) => {
                                return <Tab.Pane eventKey={value.id}>
                                            <List name={"Список дел №" + ++index + " - " + value.name} items={value.items} key={value.id} ownerId={value.ownerId} id={value.id}/>
                                        </Tab.Pane>
                            })
                        }
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    )
}

export default Wrapper;