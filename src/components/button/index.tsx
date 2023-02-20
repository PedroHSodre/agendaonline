import { MouseEventHandler } from "react";
import { Btn, Container } from "./styled"

type Props = {
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}
export default function Button(props: Props) {
    return (
        <Container>
            <Btn {...props}>
                {props.text}
            </Btn>
        </Container>
    )
}