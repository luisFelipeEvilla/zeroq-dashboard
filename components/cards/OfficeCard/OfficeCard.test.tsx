import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OfficeCard from "./OfficeCard";
import { describe } from "node:test";
import OfficeData from "@/app/mock/offices.json";
import { formatMinutes } from "@/utils";

describe("OfficeCard", () => {
  const mockOffice = OfficeData[0];
  const waitingPeople = mockOffice.lines.reduce(
    (acc, line) => acc + line.waiting,
    0
  );
  const elapsed =
    mockOffice.lines.reduce((acc, line) => acc + line.elapsed, 0) /
    mockOffice.lines.length;

  it("should render the OfficeCard component", () => {
    render(<OfficeCard {...mockOffice} isLoading={false} />);

    // should render the office name
    expect(screen.getByText(mockOffice.name)).toBeInTheDocument();

    // should render the waiting
    expect(screen.getByText(waitingPeople)).toBeInTheDocument();

    // should render the elapsed time
    expect(screen.getByText(formatMinutes(elapsed))).toBeInTheDocument();
  });
});
