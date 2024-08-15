import API_URL from "./apiURL";

const API = {};

API.get = (endpoint) => callFetch(endpoint, "GET", null);
API.post = (endpoint, record) => callFetch(endpoint, "POST", record);
API.put = (endpoint, record) => callFetch(endpoint, "PUT", record);
API.delete = (endpoint) => callFetch(endpoint, "DELETE", null);

const responseIsSuccessful = (response) =>
  response.status >= 200 && response.status < 300;

const callFetch = async (endpoint, method, record) => {
  const endpointAddress = `${API_URL}${endpoint}`;
  // Build request object
  // method can be PUT, DELETE, GET, POST. just a string, so easy to pass
  // it as argument to decide which one to use.
  let request = { method }; // equivalent to method: method: accesses the relevant method
  if (record)
    // if record exists: request was the object { method : POST or PUT} and gets
    // appended the body and headers (passed as arguments) to complete the request sent
    // to the server
    request = {
      ...request,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(record), // stringify = turn into an ASCII string
    };

  // Call the fetch
  try {
    let result = null;
    const response = await fetch(endpointAddress, request);
    if (response.status !== 204) result = await response.json();
    if (!responseIsSuccessful(response)) {
      console.log(
        `API fetch with ${method} FAILED, returned ${response.result} with endpoint ${endpoint}, record ${JSON.stringify(record)} message ${message}`,
      );
    } else {
      // console.log(`API fetch with ${method} is OK`);
      // console.log(response.result);
      // console.log(`endpoint was ${endpoint}`);
      // console.log(`record was ${JSON.stringify(record)}`);
    }
    return responseIsSuccessful(response)
      ? { isSuccess: true, result } // equivalent to result: result
      : { isSuccess: false, message: result.message };
  } catch (error) {
    console.error("API: Error occured in callFetch:");
    console.error(error);
    return { isSuccess: false, message: error.message };
  }
};
export default API;
