import { todoAPI } from "../api/todoAPI";

const LOGIN = "LOGIN";
const GET_TODO = "GET_TODO";
const EDIT_ITEM = "EDIT_ITEM";

const todoReducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOGIN:
            console.log(newState);
            localStorage.setItem('token', action.token)
            return newState;
        case GET_TODO:
            newState.todoLists = action.todo;
            console.log(newState);
            return newState;
        case EDIT_ITEM:
            newState.todoLists = [...state.todoLists];
            newState.editItem = {
                id: action.id,
                name: action.name,
                description: action.description,
                priority: action.priority,
                listId: action.listId,
                btnLabel: action.btnLabel
            }
            console.log(newState.editItem);
            return newState;
        default:
            return newState;
    }
}

let initialState = {
    todoLists: [],
    token: '',
    editItem: {
        id: null,
        name: "",
        description: "",
        priority: 1,
        listId: 1,
        btnLabel: "Создать"
    }
};

export function loginThunk() {
    return (dispatch) => {
        todoAPI.login().then(data => {
            dispatch(login(data));
        })
    };
}

export function getToDoThunk() {
    return (dispatch) => {
        todoAPI.getToDo().then(data => {
            dispatch(getToDo(data));
        })
    }
}

export function login(token) {
    return { type: LOGIN, token: token }
}

export function getToDo(todo) {
    return { type: GET_TODO, todo: todo }
}

export function editItemActionCreator(id, name, description, priority, listId, label){
    return {
        type: EDIT_ITEM,
        id: id,
        name: name,
        description: description,
        priority: priority,
        listId: listId,
        btnLabel: label
    }
}

export default todoReducer;