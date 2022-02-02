import { Card, Form, Button } from "react-bootstrap";
import { todoAPI } from './api/todoAPI';
import { useDispatch } from "react-redux";
import { getToDoThunk } from "./store/todoReducer";
import React from "react";



var ListForm = () => {
    let nameRef = React.createRef();

    const dispatch = useDispatch()

    function HandleSubmit() {
        todoAPI.createList(nameRef.current.value)
            .then(() => {
                dispatch(getToDoThunk());
                nameRef.current.value = "";
            })
    }
    return (
        <Card className="mb-3">
            <Card.Header className="text-uppercase">Создать список ToDo</Card.Header>
            <Form id="form" onSubmit={function (e) {
                e.preventDefault();
                alert('Форма была успешно отправлена на сервер!');
                HandleSubmit();
                return false;
            }}>
                <Card.Body>
                    <Card.Text>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Название</Form.Label>
                            <Form.Control type="text" required autoComplete="off" ref={nameRef} />
                        </Form.Group>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" type="reset">Очистить</Button>
                    <Button variant="success" type="submit" className="mx-2">Создать</Button>
                </Card.Footer>
            </Form>
        </Card >
    )
}

export default ListForm;