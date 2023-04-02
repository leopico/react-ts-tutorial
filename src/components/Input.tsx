type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value, handleChange}: InputProps) {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value);
        
    // }
  return (
    <div>
        <input  type="text" onChange={ handleChange }/>
    </div>
  )
}
