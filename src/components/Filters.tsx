import { Filter, useFilterStore } from '../stores/useFilterStore'

export const Filters: React.FC = () => {
  const { filter, change } = useFilterStore()

  return (
    Object.entries(Filter).map(([key, value], index) => (
      <div
        key={index}
        className={`cursor-pointer ${filter === key ? 'text-blue-500' : ''}`}
        onClick={() => change(key as keyof typeof Filter)}
      >
        {value}
      </div>
    ))
  )
}
