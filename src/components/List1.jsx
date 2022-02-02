import { Button, Card, ListGroup } from 'react-bootstrap';
import Item from './Item';
import { getFormattedDate } from './News-holder';
import { todoAPI } from './api/todoAPI';
import { getToDoThunk } from './store/todoReducer';
import { useDispatch } from 'react-redux';

var List = (props) => {

    const dispatch = useDispatch();

    function handleClick(id) {
        todoAPI.deleteList(id).then(() => {
            dispatch(getToDoThunk());
        })
    }

    return (
        <div className="mb-0">
            <Card.Title as="h4" className="d-flex justify-content-between">
                {props.name}
                <Button variant="danger" onClick={() => handleClick(props.id)}>
                    <i className="fas fa-trash-alt"></i>&#160;Удалить список
                </Button>
            </Card.Title>
            <Card.Text>
                <ListGroup id={props.id}>
                    <ListGroup.Item className="p-0" id="item-template">
                        {
                            props.items.map((value) => {
                                return <Item title={value.name} date={getFormattedDate(value.createDateTime)} description={value.description} priority={value.priority} checked={value.isDone} ownerId={props.ownerId} id={value.id} key={value.id} listId={props.id}/>
                            })
                        }
                    </ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </div>
    )
}

export default List;