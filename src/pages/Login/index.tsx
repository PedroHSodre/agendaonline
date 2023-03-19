import { useEffect } from "react";
import { Container } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('agenda::token')) {
            console.log('tem token')
            navigate('home');
        } else {
            console.log('Não tem token')
        }
    }, [])

    return (
        <Container>
            <LoginForm />
        </Container>
    )
}