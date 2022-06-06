import { getApiUrl } from "./instance";

test("api url", () => {
  const getItem = jest.fn(() => "http://localhost:8000");
  const storage = {
    getItem,
  };
  const res = getApiUrl(storage);
  expect(res).toBe("https://api.example.com");
  expect(storage.getItem.mock.calls.length).toBe(0);
});
