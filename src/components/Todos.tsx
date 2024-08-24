import { Todo as TodoI, useTodosStore } from '../stores/useTodosStore'
import { Todo } from './Todo'
import { ReactSortable } from 'react-sortablejs'
import { Filters } from './Filters'

export const Todos: React.FC = () => {
  const { todos, addTodo, clear } = useTodosStore()
  const itemsLeft = todos.filter(todo => !todo.completed).length
  const setTodos = (newTodos: TodoI[]): void => useTodosStore.setState({ todos: newTodos })

  const handlerSubmit: React.FormEventHandler = (evt): void => {
    evt.preventDefault()
    const { target: form } = evt
    if (!(form instanceof HTMLFormElement)) return
    const formData = new FormData(form)
    const todo = formData.get('todo')
    if (typeof todo !== 'string' || todo === '') return
    form.reset()
    addTodo({
      id: crypto.randomUUID(),
      title: todo,
      completed: false
    })
  }

  return (
    <div className='space-y-4 md:space-y-6'>
      <form
        className='flex rounded-md bg-white dark:bg-dark-very-dark-desaturated-blue overflow-hidden [&>*]:py-3.5 md:[&>*]:py-[1.1rem]'
        method='post'
        onSubmit={handlerSubmit}
      >
        <button
          className='w-14 after:block after:size-5 after:mx-auto after:rounded-full after:border after:border-light-dark-grayish-blue md:w-[4.4rem] md:after:size-6'
          type='submit'
        />
        <input
          className='flex-grow bg-inherit focus:outline-none'
          type='text'
          name='todo'
          placeholder='Create a new todo...'
        />
      </form>
      {todos.length !== 0 && (
        <>
          <div className='rounded-md bg-white dark:bg-dark-very-dark-desaturated-blue overflow-hidden shadow-2xl'>
            <ReactSortable
              list={todos}
              setList={setTodos}
              animation={150}
              handle='.handle'
            >
              {todos.map((todo) => {
                return (
                  <Todo key={todo.id} {...todo} />
                )
              })}
            </ReactSortable>
            <div className='flex justify-between items-center p-3.5 text-light-dark-grayish-blue bg-inherit md:text-sm md:px-6'>
              <div>
                {itemsLeft} {itemsLeft === 1 ? 'item left' : 'items left'}
              </div>
              <div className='hidden md:flex md:gap-x-4'>
                <Filters />
              </div>
              <button className='hover:text-light-very-dark-grayish-blue dark:hover:text-white' onClick={clear}>
                Clear Completed
              </button>
            </div>
          </div>
          <div className='p-3.5 font-semibold text-sm bg-white dark:bg-dark-very-dark-desaturated-blue rounded-md md:hidden'>
            <div className='flex justify-between items-center gap-x-4 w-3/5 mx-auto'>
              <Filters />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
