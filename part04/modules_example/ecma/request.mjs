function request(url, data) {
    const encryptedData= encrypt(data);
    return encryptedData;
}

function encrypt(data) {
    const encryptedData = data+" encrypted"
    return encryptedData;
}

export {
    request
}
