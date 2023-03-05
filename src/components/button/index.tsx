import { MouseEventHandler } from "react";
import { Btn, Container } from "./styled"

type Props = {
    text: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    style?: object
}
export default function Button(props: Props) {
    const { style, ...restProps} = props;
    return (
        <Container style={style}>
            <Btn {...restProps}>
                {props.text}
            </Btn>
        </Container>
    )
}