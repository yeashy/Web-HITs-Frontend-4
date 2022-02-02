import { instance } from './newsAPI';

function login() {
    return instance.post('auth', {
        username: "yeashy",
        password: "5632"
    }).then(response => {
        return response.data.accessToken;
    })
}

function getToDo() {
    return instance.get('todolist', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        return response.data;
    })
}

function createList(name) {
    return instance.post('todolist', {
        name: name
    },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            return response.status;
        })
}

function deleteList(id) {
    return instance.delete('todolist', {
        data: {
            id: id
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        return response.status;
    })
}

function createItem(id, name, priority, listId, description) {
    return instance.post('todoitem', {
        id: id,
        name: name,
        description: description,
        priority: parseInt(priority),
        listId: parseInt(listId)
    },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            return response.status;
        })
}

function checkItem(ownerId, id) {
    return instance.post('todoitem/check', {
        ownerId: ownerId,
        id: id
    },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            return response.status;
        })
}

function deleteItem(ownerId, id) {
    return instance.delete('todoitem', {
        data: {
            ownerId: ownerId,
            id: id
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        return response.status;
    })
}

export const todoAPI = {
    login: login,
    getToDo: getToDo,
    createList: createList,
    deleteList: deleteList,
    createItem: createItem,
    checkItem: checkItem,
    deleteItem: deleteItem
}