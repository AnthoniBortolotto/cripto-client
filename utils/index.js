const NodeRSA = require("node-rsa");

export async function getKeys() {
  const key = new NodeRSA({ b: 512 });
  const keys = await key.generateKeyPair();
  return [keys.exportKey('private'), keys.exportKey('public'), keys];
}

/* const crypto = import("node:crypto");

export async function getKeysCrypto() {
  await crypto.generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "top secret",
      },
    },
    (err, publicKey, privateKey) => {
      // Handle errors and use the generated key pair.
    }
  );
} */
