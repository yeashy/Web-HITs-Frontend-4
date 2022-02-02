import { Card, Form, Button } from "react-bootstrap";
import { todoAPI } from "./api/todoAPI";
import React from "react";
import { getToDoThunk, editItemActionCreator } from "./store/todoReducer";
import { useDispatch, useSelector } from "react-redux";

var ItemForm = (props) => {

    var state = useSelector((state) => state.todoSection.editItem)
    
    let nameRef = React.createRef();
    let priorityRef = React.createRef();
    let listIdRef = React.createRef();
    let descriptionRef = React.createRef();

    const dispatch = useDispatch();

    function handleSubmit(id){
        todoAPI.createItem(id, nameRef.current.value, priorityRef.current.value, listIdRef.current.value, descriptionRef.current.value)
            .then(()=>{
                dispatch(getToDoThunk());
                onSubmit();
            })
    }

    const onChange = () => {
        dispatch(editItemActionCreator(state.id, nameRef.current.value, descriptionRef.current.value, priorityRef.current.value, listIdRef.current.value, state.btnLabel))
    }

    function onSubmit(){
        dispatch(editItemActionCreator(null, "", "", 1, 1, "Создать"))
    }

    return (
        <Card className="mb-3">
            <Card.Header className="text-uppercase">Создать Элемент ToDo</Card.Header>
            <Form onSubmit={function(e){
                e.preventDefault();
                alert('Форма была успешно отправлена на сервер!');
                handleSubmit(state.id);
                return false;
            }}>
                <Card.Body>
                    <Card.Text>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Название</Form.Label>
                            <Form.Control type="text" required autoComplete="off" ref={nameRef} value={state.name} onChange={onChange}/>
                        </Form.Group>
                        <div className="d-flex justify-content-between" id="media-change1">
                            <div className="col-6 p-0 mr-3 d-inline">
                                <div className="mb-2">
                                    <label for="exampleInputEmail1" className="form-label">Приоритет</label>
                                    <select name="List" id="priority" className="form-control" ref={priorityRef} onChange={onChange} value={state.priority}>
                                        <option value="1">Обычный</option>
                                        <option value="2" className="bg-warning">Важный</option>
                                        <option value="3" className="bg-danger">Критичный</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mx-2"></div>
                            <div className="col p-0 pr-3 d-inline">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Список</label>
                                    <select name="List" id="list-ch" className="form-control" ref={listIdRef} onChange={onChange} value={state.listId}>
                                        {
                                                props.todoLists.map((value, index)=>{
                                                    return <option value={value.id} key={value.id}>{"Список дел №" + ++index + " - " + value.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control as="textarea" rows={3} required autoComplete="off" ref={descriptionRef} onChange={onChange} value={state.description}/>
                        </Form.Group>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" type="reset">Очистить</Button>
                    <Button variant="success" type="submit" className="mx-2" >{state.btnLabel}</Button>
                </Card.Footer>
            </Form>
        </Card >
    )
}

export default ItemForm;