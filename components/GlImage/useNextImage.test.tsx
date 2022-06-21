import { renderHook, act } from "@testing-library/react-hooks";
import useNextImage from "./useNextImage";

const getArray = (count: number) => {
  return new Array(count).fill("bla").map((_i, index) => index + "");
};

describe("useNextImage", () => {
  it("should have correct state even", () => {
    const { result } = renderHook(() => useNextImage({ images: getArray(4) }));

    expect(result.current.preparedImages).toStrictEqual(["0", "1"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["2", "1"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["2", "3"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["0", "3"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["0", "1"]);
  });
  it("should have correct state odd", () => {
    const { result } = renderHook(() => useNextImage({ images: getArray(5) }));

    expect(result.current.preparedImages).toStrictEqual(["0", "1"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["2", "1"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["2", "3"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["4", "3"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["4", "0"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["1", "0"]);
    act(() => {
      result.current.next();
    });
    expect(result.current.preparedImages).toStrictEqual(["1", "2"]);
  });
});
