import cache from "../cache/index.js"

const TODOS_KEY = 'todos'
class CacheServices{
    todos = []

    constructor() {
        cache.set(TODOS_KEY, [])
    }

    getTodos(){
        return this.todos
    }

    addTodos(data){
        cache.set(TODOS_KEY, [...this.todos , data])
        this.todos = cache.get(TODOS_KEY)
    }

    updateTodo(id,data){
        this.todos = this.todos.map(todo =>{
            if(todo.id === id){
                console.log(data)
                todo = { ...todo,...data}
            }

            return todo
        })

        console.log(this.todos)


        cache.set(TODOS_KEY, this.todos)
    }

    removeTodo(id){
        if(this.todos.length){
            let todos = this.getTodos();
            console.log(todos.length);
            todos = todos.filter(todo => todo.id !== id)
            cache.set(TODOS_KEY, [...todos])
            this.todos = todos
        }
    }
}

const cacheServices = new CacheServices()

export default cacheServices