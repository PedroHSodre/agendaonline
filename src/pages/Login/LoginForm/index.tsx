import React, { useState } from "react";
import { ButtonContainer, Container, Header, InputContainer, Subtitle, Title } from "./styled";
import InputClean from "../../../components/inputClean";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import { IAuthRequest } from "../../../types/auth";
import api from "../../../configs/api";
import { toast } from "react-toastify";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = async () => {
        const data: IAuthRequest = {
            email,
            password
        }

        try {
            const response = await api.post('/auth', data);

            if(response.data) {
                localStorage.setItem('agenda::user', response.data.data.user);
                localStorage.setItem('agenda::token', response.data.data.token);
                toast.success(response.data.message);
                navigate('/home')
            }
        } catch(err: any) {
            console.log(err);
            toast.error(err.response.data.message);
        }
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