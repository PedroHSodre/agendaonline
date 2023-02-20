import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Container, Input, Label } from "./styled";

type Props = {
    "data-testid": string;
    label: string;
    style?: object;
    value: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function InputClean(props: Props) {
    return (
        <Container>
            {
                props.label ? (
                    <Label>
                        {props.label}
                    </Label>
                ) : null
            }
            <Input {...props} />
        </Container>
    )
}