import React, { useState } from "react";
import { ButtonContainer, Container, Header, InputContainer, Subtitle, Title } from "./styled";
import InputClean from "../../../components/inputClean";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import { IAuthRequest } from "../../../types/auth";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = async () => {
        const data: IAuthRequest = {
            email,
            password
        }

        if(data.email && data.password) navigate('/home');
    }

    return (
        <Container>
            <Header>
                <div>
                    <Title>
                        Minha Agenda
                    </Title>
                </div>
                <div>
                    <Subtitle>
                        Faça seu Login
                    </Subtitle>
                </div>
            </Header>
            <InputContainer>
                <InputClean 
                    data-testid="login_email"
                    label="Email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    style={{
                        marginBottom: 46
                    }}
                />
                <InputClean 
                    data-testid="login_password"
                    label="Senha"
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    style={{
                        marginBottom: 46
                    }}
                />
            </InputContainer>
            <ButtonContainer>
                <Button
                    text="Fazer login"
                    onClick={handleLogin}
                />
            </ButtonContainer>
        </Container>
    )
}