export default function isNotWhiteSpace(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    let stri = [...str];
    if (
      // !(code > 47 && code < 58) && // numeric (0-9)
      // !(code > 64 && code < 91) && // upper alpha (A-Z)
      // !(code > 96 && code < 123) // lower alpha (a-z)
      code === 32 ||
      stri[i] === "\n"
    ) {
      return false;
    }
  }
  return true;
}
