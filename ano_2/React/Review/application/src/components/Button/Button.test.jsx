import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button/>", () => {
  //  verificando a existência e o texto do botão
  it("should render the button with a text", () => {
    render(<Button text="load more posts" />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  // verificando a função
  it("should call the function", () => {
    const fn = jest.fn(); // mock da função
    render(<Button text="load more posts" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    userEvent.click(button); 
    expect(fn).toHaveBeenCalled()
  });
});
