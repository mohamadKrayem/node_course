import * as request from "./request.mjs";
import { receive } from "./response.mjs";

function makeRequest(url, data) {
    const encryptedData = request.request(url, data);
    console.log(encryptedData);
    return receive(data);
}

const req = makeRequest("google.com", "hello ");
console.log(req);
