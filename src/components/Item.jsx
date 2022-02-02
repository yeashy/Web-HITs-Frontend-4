import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { todoAPI } from './api/todoAPI';
import { getToDoThunk, editItemActionCreator } from './store/todoReducer';

let itemstyle = {
    paddingRight: 0 + "px",
    paddingLeft: 0.5 + "rem",
    paddingTop: 0 + "px",
    paddingBottom: 0 + "px"
};

function setBg(pr) {
    let bg;
    if (pr === 1) bg = "bg-light";
    if (pr === 2) bg = "bg-warning";
    if (pr === 3) bg = "bg-danger";
    return bg;
}

var Item = (props) => {

    const dispatch = useDispatch();
    
    function handleCheck(ownerId, id){
        todoAPI.checkItem(ownerId, id).then(()=>{
            dispatch(getToDoThunk());
        })
    }

    function handleEdit(id, name, description, priority, listId, btnLabel){
        dispatch(editItemActionCreator(id, name, description, priority, listId, btnLabel))
    }

    function handleDelete(ownerId, id){
        todoAPI.deleteItem(ownerId, id).then(()=>{
            dispatch(getToDoThunk())
        })
    }

    if (props.checked === false) {
        return (
            <div style={itemstyle} className={setBg(props.priority)}>
                <div className="col-12 bg-white p-1 d-flex align-items-center justify-content-between" id="media-change">
                    <div className="col-10">
                        <h4 className="mx-3 text-uppercase d-inline item-title">{props.title}</h4>
                        <h4 className="mx-3 text-secondary d-inline item-date">{props.date}</h4>
                        <p className="mx-3 my-2 item-description">{props.description}</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <ButtonGroup className="px-2">
                            <Button variant="outline-success" onClick={()=>handleCheck(props.ownerId, props.id)}><i className="fas fa-check"></i></Button>
                            <Button variant="outline-warning" onClick={()=>handleEdit(props.id, props.title, props.description, props.priority, props.listId, "Редактировать")}><i className="fas fa-pen"></i></Button>
                            <Button variant="outline-danger" onClick={()=>handleDelete(props.ownerId, props.id)}><i className="fas fa-trash"></i></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={itemstyle} className={setBg(props.priority)}>
                <div className="col-12 p-1 d-flex align-items-center justify-content-between" id="media-change" style={{ backgroundColor: "#C3E5CB" }}>
                    <div className="col-10">
                        <h4 className="mx-3 text-uppercase d-inline item-title">{props.title}</h4>
                        <h4 className="mx-3 text-secondary d-inline item-date">{props.date}</h4>
                        <p className="mx-3 my-2 item-description">{props.description}</p>
                    </div>
                    <h1 className="d-flex justify-content-end mb-0">
                        <i className="fas fa-check text-success"></i>
                    </h1>
                </div>
            </div>
        )
    }

}

export default Item;