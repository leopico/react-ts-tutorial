import Greet from "../components/Greet";

export default function CustomComponent(props: React.ComponentProps<typeof Greet>) {
    return (
        <div>{props.name} {props.isLoggedIn} {props.messageCount}</div>
    )
}
