export const fetchHandler = async (url, options = {}) => {
  try {
    const fetchCall = await fetch(url, options);
    if (!fetchCall.ok) {
      throw new Error(
        `Fetch failed with status - ${res.status}, ${res.statusText}`
      );
    }
    const isJson = (fetchCall.headers.get("content-type") || "").includes(
      "application/json"
    );
    if (isJson) {
      return [await fetchCall.json(), null];
    } else {
      return [await fetchCall.text(), null];
    }
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};
