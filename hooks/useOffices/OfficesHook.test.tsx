import { renderHook, act, waitFor } from "@testing-library/react";
import { getOfficesService } from "../../services/offices";
import useOffices from "./OfficesHook";

jest.mock("../../services/offices");

describe("useOffices", () => {
  const mockOffices = [
    { id: 1, name: "Office 1" },
    { id: 2, name: "Office 2" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch offices and return the correct values", async () => {
    (getOfficesService as jest.Mock).mockResolvedValue(mockOffices);

    const { result } = renderHook(() => useOffices({}));

    // initial data fetch
    await waitFor(() => {
      expect(result.current.offices).toEqual(mockOffices);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
    });

    // fetch data manually
    act(() => {
      result.current.fetchData();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.offices).toEqual(mockOffices);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
    });
  });

  it("should handle error when fetching offices", async () => {
    const errorMessage = "Failed to fetch offices";
    // @ts-ignore
    getOfficesService.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useOffices({}));
  
    await waitFor(() => {
      expect(result.current.offices).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
    });
  });
});
