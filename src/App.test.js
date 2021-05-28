import {render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
})

test('renders add task button', () => {
    render(<TaskForm/>)
    const btnElement = screen.getByText(/add task/i);
    expect(btnElement).toBeInTheDocument();
})

test("renders task list header to page", () => {
    render(<TaskList/>)
    const header = screen.getByText(/what do you have to get done today?/i);
    expect(header).toBeInTheDocument();
})

test("renders task list header to page", () => {
    render(<TaskList/>)
    const header = screen.getByText(/what do you have to get done today?/i);
    expect(header).toBeInTheDocument();
})


test("renders task list subheader to page", () => {
    render(<TaskList/>)
    const subheader = screen.getByText(/Dont procrastinate!/i);
    expect(subheader).toBeInTheDocument();
})