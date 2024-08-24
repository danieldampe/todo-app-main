import { Todo as Props, useTodosStore } from '../stores/useTodosStore'
import Cross from '../assets/images/icon-cross.svg?react'
import Check from '../assets/images/icon-check.svg?react'
import { useFilterStore } from '../stores/useFilterStore'

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const { filter } = useFilterStore()
  const { markTodo, removeTodo } = useTodosStore()
  const display = (
    (filter === 'COMPLETED' && completed) ||
    (filter === 'ACTIVE' && !completed) ||
    (filter === 'ALL')
  )

  return (
    <div className={`${display ? 'flex' : 'hidden'} items-center border-b border-[#cbcad0] dark:border-[#323449] bg-inherit [&>*]:py-3.5 md:[&>*]:py-[1.1rem] md:[&>button]:hover:visible`}>
      <label className='relative w-14 after:block after:size-5 after:mx-auto after:rounded-full after:border after:border-light-dark-grayish-blue cursor-pointer has-[input:checked]:after:bg-check md:w-[4.8rem] md:after:size-6'>
        <input
          className='hidden'
          type='checkbox'
          checked={completed}
          onChange={() => markTodo(id)}
        />
        {completed && <Check className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-[40%]' />}
      </label>
      <div className='handle w-4/5'>
        <p className={completed ? 'line-through text-light-dark-grayish-blue' : ''}>
          {title}
        </p>
      </div>
      <button
        className='flex justify-center items-center w-14 md:w-16 md:invisible'
        onClick={() => removeTodo(id)}
      >
        <Cross className='scale-[.65] md:scale-100' />
      </button>
    </div>
  )
}
