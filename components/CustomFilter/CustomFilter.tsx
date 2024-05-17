
interface FilterProp {
    title: string
}

export const CustomFilter = ({title} : FilterProp) => {
  return (
    <div>{title}</div>
  )
}
