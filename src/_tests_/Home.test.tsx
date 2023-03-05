import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import MySchedule from "../components/mySchedule";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import moment from "moment";

describe('test home page',() => {
    it('shoulde render header correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <MySchedule />
            </ThemeProvider>
        );
        const title = screen.getByText('Minha Agenda');
        const subtitle = screen.getByText('Agenda do dia')

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });
    it('should render correctly date', () => {
        render(
            <ThemeProvider theme={theme}>
                <MySchedule />
            </ThemeProvider>
        );

        const todayStr = screen.getByRole('today_str');
        const today = moment().format('DD/MM/YYYY');

        expect(today).toEqual(todayStr.innerHTML.replace('Dia: ', ''));

    });
})