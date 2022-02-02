import { Button, Card, ListGroup } from 'react-bootstrap';
import Item from './Item';

var List2 = (props) => {
    return (
        <div className="mb-0">
            <Card.Title as="h4" className="d-flex justify-content-between">
                {props.name}
                <Button variant="danger">
                    <i class="fas fa-trash-alt"></i>&#160;Удалить список
                </Button>
            </Card.Title>
            <Card.Text>
                <ListGroup id={props.listId}>
                    <ListGroup.Item className="p-0" id="item-template">
                        <Item title="привет" date ="01.04.2003" description = "лорем ипсум" priority="1" checked="0"/>
                        <Item title="пока" date ="22.22.2022" description = "здравствуйте" priority="2" checked="1"/>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </div>
    )
}

export default List2;