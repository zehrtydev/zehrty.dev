import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TechStack } from "@/components/TechStack";

describe("TechStack", () => {
  it("selecciona la siguiente tecnología desde el control de navegación", () => {
    render(<TechStack />);

    fireEvent.click(screen.getByRole("button", { name: "Tecnología siguiente" }));

    expect(screen.getByRole("button", { name: "Next.js" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("button", { name: "TypeScript" }).getAttribute("aria-pressed")).toBe("false");
  });
});
