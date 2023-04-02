type ButtonClickProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export default function ButtonClick(props: ButtonClickProps) {
  // const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(event.target);
  // }
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event, 2)}>Click</button>
    </div>
  )
}
