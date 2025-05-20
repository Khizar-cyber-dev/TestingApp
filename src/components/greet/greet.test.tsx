import { render, screen } from "@testing-library/react"
import Greet from "./Greet"


test("Greeting test", () => {
    render(<Greet />);
    const textElement = screen.getByText("Greet");
    expect(textElement).toBeInTheDocument
});

test("test the greeting name", () => {
    render(<Greet name="Khizar"/>);
    const textElement = screen.getByText("Greet Khizar");
    expect(textElement).toBeInTheDocument
});