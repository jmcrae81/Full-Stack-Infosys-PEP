import { render, screen } from '@testing-library/react';
import Counter from './counterComponent/Counter';
import {fireEvent} from '@testing-library/react';

describe('My first test suite', ()=>{
  
  test('Adds 1 to {counter}',()=>{
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
    const incrementButton = screen.getByTestId("increment");

    fireEvent.click(incrementButton);
    expect(counter).toHaveTextContent("1");
  });

  
  test('Subtracts 1 from {counter}', ()=>{
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
    const decrementButton = screen.getByTestId("decrement");

    fireEvent.click(decrementButton);
    expect(counter).toHaveTextContent("-1");
  });
});
