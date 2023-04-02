// import { PersonProps } from './Person.type'
import { Name } from "./Person.type"

type PersonProps = {
  name: Name
}

export default function Person(props: PersonProps) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
