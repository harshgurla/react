// import { useQuery } from '@tanstack/react-query';
import { Form } from 'react-router'

const TodoList = () => {

    const fetchTodos = () => {
        return axios.get("https://backendapi-cwp7.onrender.com/api")
    }
console.log(fetchTodos.response)

    const handleAddTodo = (e) => {
        e.preventDefault();
        const Todo = {
            title: FormData.get("title")
        };


    }
    return (
        <>
            <h1>Todo lIst </h1>
            <Form method="post" OnSubmit={handleAddTodo} name={title} required >
            <input type="text" placeholder='Enter todo' />
            <button type='submit'>Add Todo</button>
            </Form>
        </>
    )
}

export default TodoList;