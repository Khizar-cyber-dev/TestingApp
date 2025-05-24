import { render, screen } from "@testing-library/react"
import App from "./App";

describe("App Component", () => {
    
test("Title test", () => {
    render(<App name="Khizar"/>);
    const textElement = screen.getByText("My Course list");
    expect(textElement).toBeInTheDocument();
});

test("test the title name", () => {
    render(<App name="Khizar"/>);
    const textElement = screen.getByText("Khizar");
    expect(textElement).toBeInTheDocument();
});

test("Test by Element", () => {
    render(<App name=""/>);
    const elementTest = screen .getAllByRole("button");
    expect(elementTest).toBeDefined();
});

});