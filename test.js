const { encrypt, decrypt } = require('./script');

// Example payload
const payload = { userId: 123, role: 'admin' };

// Encrypt the payload
const encryptedData = encrypt(payload);
console.log('Encrypted Data:', encryptedData);

// Decrypt the token
const decodedPayload = decrypt(encryptedData);
console.log('Decoded Payload:', decodedPayload);