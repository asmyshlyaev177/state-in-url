// jest-environment-jsdom ships no TextEncoder/TextDecoder; react-router reaches
// for them at import time.
const { TextDecoder, TextEncoder } = require('node:util');

globalThis.TextEncoder ??= TextEncoder;
globalThis.TextDecoder ??= TextDecoder;
