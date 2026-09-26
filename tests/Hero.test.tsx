import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("muestra la propuesta de valor y sus CTA", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Más que automatizar:.*construir productos útiles\./,
      }),
    ).toBeDefined();
    expect(screen.getByRole("link", { name: /Conversemos/ }).getAttribute("href")).toBe("mailto:soporte@zehrty.dev");
    expect(screen.getByRole("link", { name: "Ver proyectos" }).getAttribute("href")).toBe("#productos");
    expect(screen.getByRole("complementary", { name: "Principios de Zehrtydev" })).toBeDefined();
  });
});
