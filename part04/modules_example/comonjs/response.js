function decrypt(data) {
    return data+'decryted Data';
}

function receive(data) {
    const decryptedData = decrypt(data);
    return decryptedData;
}

module.exports= {
    receive
}