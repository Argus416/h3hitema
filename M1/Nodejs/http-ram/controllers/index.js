import cache from "../cache/index.js"
import cacheServices from "../class/CacheServices.js"
import crypto from "crypto"

export const homePage = (req, res, next)=>{
    console.log(cache);
    const todos = cacheServices.getTodos()
    res.send({
        data :todos
    })
}


export const addTodo = (req, res, next) =>{
    const { content } = req.body
    const data = {
        id: crypto.randomUUID(),
        content: content,
        created_at : Date.now(),
        status: false,
    }
    cacheServices.addTodos(data);
    const todos = cacheServices.getTodos()
    res.json({todos})
}

export const updateTodo = (req, res, next) =>{
    const { todoId } = req.params
    const { data } = req.body

    const todos = cacheServices.updateTodo(todoId, data)

    res.json({ todos })
}



export const deleteTodo = (req, res, next) =>{
    const { todoId } = req.params
    cacheServices.removeTodo(todoId)    

    const todos = cacheServices.getTodos()

    res.json({ todos })
}
