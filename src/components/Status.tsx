type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
export default function Status(props: StatusProps) {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if(props.status === 'success') {
        message = 'Data fetch successfully!'
    } else if (props.status === 'error') {
        message = "Error fetch data."
    }
  return (
      <div>
          <h2>{ message }</h2>
    </div>
  )
}
