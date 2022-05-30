const NodeRSA = require("node-rsa");

export async function getKeys() { // gera chaves pública e privada
  const key = new NodeRSA({ b: 1024 });
  return [key.exportKey("private"), key.exportKey("public"), key];
}
