import {render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskForm from "./components/TaskForm";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
})

test('renders add task button', () => {
    render(<TaskForm/>)
    const btnElement = screen.getByText(/add task/i);
    expect(btnElement).toBeInTheDocument();
})