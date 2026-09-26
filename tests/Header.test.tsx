import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("expone la navegación principal y el contacto", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", {
      name: "Navegación principal",
    });

    expect(within(navigation).getByRole("link", { name: "Inicio" }).getAttribute("href")).toBe("#inicio");
    expect(within(navigation).getByRole("link", { name: "Productos" }).getAttribute("href")).toBe("#productos");
    expect(within(navigation).getByRole("link", { name: "Experiencia" }).getAttribute("href")).toBe("#sobre-mi");
    expect(within(navigation).getByRole("link", { name: "Contacto" }).getAttribute("href")).toBe("#contacto");
    expect(screen.getByRole("link", { name: /Hablemos/ }).getAttribute("href")).toBe("mailto:soporte@zehrty.dev");
  });
});
