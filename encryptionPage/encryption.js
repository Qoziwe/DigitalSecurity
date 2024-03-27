const fadeIn = (el, timeout) => {
  // el.style.opacity = 0;
  el.style.opacity = 0;
  // el.style.display = display || "block";
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout, href) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = "none";
    window.location.href = href;
  }, timeout);
};

const block = document.querySelector("body");
const btn = document.getElementById("user");

window.addEventListener("load", function () {
  fadeIn(block, 1000);
});

if (localStorage.getItem("login") != null) {
  document.getElementById("user").innerHTML = localStorage.getItem("login");
} else {
  document.getElementById("user").innerHTML = "Войти / Зарегистрироваться";
}

let enc1 = document.getElementById("md5");
let enc2 = document.getElementById("crc32");
let enc3 = document.getElementById("sha1");
let enc4 = document.getElementById("sha256");
let enc5 = document.getElementById("sha512");

// MD5
var MD5 = function (d) {
  d = unescape(encodeURIComponent(d));
  result = M(V(Y(X(d), 8 * d.length)));
  return result.toLowerCase();
};
function M(d) {
  for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
    (_ = d.charCodeAt(r)), (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
  return f;
}
function X(d) {
  for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
  for (m = 0; m < 8 * d.length; m += 8)
    _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
  return _;
}
function V(d) {
  for (var _ = "", m = 0; m < 32 * d.length; m += 8)
    _ += String.fromCharCode((d[m >> 5] >>> m % 32) & 255);
  return _;
}
function Y(d, _) {
  (d[_ >> 5] |= 128 << _ % 32), (d[14 + (((_ + 64) >>> 9) << 4)] = _);
  for (
    var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0;
    n < d.length;
    n += 16
  ) {
    var h = m,
      t = f,
      g = r,
      e = i;
    (f = md5_ii(
      (f = md5_ii(
        (f = md5_ii(
          (f = md5_ii(
            (f = md5_hh(
              (f = md5_hh(
                (f = md5_hh(
                  (f = md5_hh(
                    (f = md5_gg(
                      (f = md5_gg(
                        (f = md5_gg(
                          (f = md5_gg(
                            (f = md5_ff(
                              (f = md5_ff(
                                (f = md5_ff(
                                  (f = md5_ff(
                                    f,
                                    (r = md5_ff(
                                      r,
                                      (i = md5_ff(
                                        i,
                                        (m = md5_ff(
                                          m,
                                          f,
                                          r,
                                          i,
                                          d[n + 0],
                                          7,
                                          -680876936
                                        )),
                                        f,
                                        r,
                                        d[n + 1],
                                        12,
                                        -389564586
                                      )),
                                      m,
                                      f,
                                      d[n + 2],
                                      17,
                                      606105819
                                    )),
                                    i,
                                    m,
                                    d[n + 3],
                                    22,
                                    -1044525330
                                  )),
                                  (r = md5_ff(
                                    r,
                                    (i = md5_ff(
                                      i,
                                      (m = md5_ff(
                                        m,
                                        f,
                                        r,
                                        i,
                                        d[n + 4],
                                        7,
                                        -176418897
                                      )),
                                      f,
                                      r,
                                      d[n + 5],
                                      12,
                                      1200080426
                                    )),
                                    m,
                                    f,
                                    d[n + 6],
                                    17,
                                    -1473231341
                                  )),
                                  i,
                                  m,
                                  d[n + 7],
                                  22,
                                  -45705983
                                )),
                                (r = md5_ff(
                                  r,
                                  (i = md5_ff(
                                    i,
                                    (m = md5_ff(
                                      m,
                                      f,
                                      r,
                                      i,
                                      d[n + 8],
                                      7,
                                      1770035416
                                    )),
                                    f,
                                    r,
                                    d[n + 9],
                                    12,
                                    -1958414417
                                  )),
                                  m,
                                  f,
                                  d[n + 10],
                                  17,
                                  -42063
                                )),
                                i,
                                m,
                                d[n + 11],
                                22,
                                -1990404162
                              )),
                              (r = md5_ff(
                                r,
                                (i = md5_ff(
                                  i,
                                  (m = md5_ff(
                                    m,
                                    f,
                                    r,
                                    i,
                                    d[n + 12],
                                    7,
                                    1804603682
                                  )),
                                  f,
                                  r,
                                  d[n + 13],
                                  12,
                                  -40341101
                                )),
                                m,
                                f,
                                d[n + 14],
                                17,
                                -1502002290
                              )),
                              i,
                              m,
                              d[n + 15],
                              22,
                              1236535329
                            )),
                            (r = md5_gg(
                              r,
                              (i = md5_gg(
                                i,
                                (m = md5_gg(
                                  m,
                                  f,
                                  r,
                                  i,
                                  d[n + 1],
                                  5,
                                  -165796510
                                )),
                                f,
                                r,
                                d[n + 6],
                                9,
                                -1069501632
                              )),
                              m,
                              f,
                              d[n + 11],
                              14,
                              643717713
                            )),
                            i,
                            m,
                            d[n + 0],
                            20,
                            -373897302
                          )),
                          (r = md5_gg(
                            r,
                            (i = md5_gg(
                              i,
                              (m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691)),
                              f,
                              r,
                              d[n + 10],
                              9,
                              38016083
                            )),
                            m,
                            f,
                            d[n + 15],
                            14,
                            -660478335
                          )),
                          i,
                          m,
                          d[n + 4],
                          20,
                          -405537848
                        )),
                        (r = md5_gg(
                          r,
                          (i = md5_gg(
                            i,
                            (m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438)),
                            f,
                            r,
                            d[n + 14],
                            9,
                            -1019803690
                          )),
                          m,
                          f,
                          d[n + 3],
                          14,
                          -187363961
                        )),
                        i,
                        m,
                        d[n + 8],
                        20,
                        1163531501
                      )),
                      (r = md5_gg(
                        r,
                        (i = md5_gg(
                          i,
                          (m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467)),
                          f,
                          r,
                          d[n + 2],
                          9,
                          -51403784
                        )),
                        m,
                        f,
                        d[n + 7],
                        14,
                        1735328473
                      )),
                      i,
                      m,
                      d[n + 12],
                      20,
                      -1926607734
                    )),
                    (r = md5_hh(
                      r,
                      (i = md5_hh(
                        i,
                        (m = md5_hh(m, f, r, i, d[n + 5], 4, -378558)),
                        f,
                        r,
                        d[n + 8],
                        11,
                        -2022574463
                      )),
                      m,
                      f,
                      d[n + 11],
                      16,
                      1839030562
                    )),
                    i,
                    m,
                    d[n + 14],
                    23,
                    -35309556
                  )),
                  (r = md5_hh(
                    r,
                    (i = md5_hh(
                      i,
                      (m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060)),
                      f,
                      r,
                      d[n + 4],
                      11,
                      1272893353
                    )),
                    m,
                    f,
                    d[n + 7],
                    16,
                    -155497632
                  )),
                  i,
                  m,
                  d[n + 10],
                  23,
                  -1094730640
                )),
                (r = md5_hh(
                  r,
                  (i = md5_hh(
                    i,
                    (m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174)),
                    f,
                    r,
                    d[n + 0],
                    11,
                    -358537222
                  )),
                  m,
                  f,
                  d[n + 3],
                  16,
                  -722521979
                )),
                i,
                m,
                d[n + 6],
                23,
                76029189
              )),
              (r = md5_hh(
                r,
                (i = md5_hh(
                  i,
                  (m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487)),
                  f,
                  r,
                  d[n + 12],
                  11,
                  -421815835
                )),
                m,
                f,
                d[n + 15],
                16,
                530742520
              )),
              i,
              m,
              d[n + 2],
              23,
              -995338651
            )),
            (r = md5_ii(
              r,
              (i = md5_ii(
                i,
                (m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844)),
                f,
                r,
                d[n + 7],
                10,
                1126891415
              )),
              m,
              f,
              d[n + 14],
              15,
              -1416354905
            )),
            i,
            m,
            d[n + 5],
            21,
            -57434055
          )),
          (r = md5_ii(
            r,
            (i = md5_ii(
              i,
              (m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571)),
              f,
              r,
              d[n + 3],
              10,
              -1894986606
            )),
            m,
            f,
            d[n + 10],
            15,
            -1051523
          )),
          i,
          m,
          d[n + 1],
          21,
          -2054922799
        )),
        (r = md5_ii(
          r,
          (i = md5_ii(
            i,
            (m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359)),
            f,
            r,
            d[n + 15],
            10,
            -30611744
          )),
          m,
          f,
          d[n + 6],
          15,
          -1560198380
        )),
        i,
        m,
        d[n + 13],
        21,
        1309151649
      )),
      (r = md5_ii(
        r,
        (i = md5_ii(
          i,
          (m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070)),
          f,
          r,
          d[n + 11],
          10,
          -1120210379
        )),
        m,
        f,
        d[n + 2],
        15,
        718787259
      )),
      i,
      m,
      d[n + 9],
      21,
      -343485551
    )),
      (m = safe_add(m, h)),
      (f = safe_add(f, t)),
      (r = safe_add(r, g)),
      (i = safe_add(i, e));
  }
  return Array(m, f, r, i);
}
function md5_cmn(d, _, m, f, r, i) {
  return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}
function md5_ff(d, _, m, f, r, i, n) {
  return md5_cmn((_ & m) | (~_ & f), d, _, r, i, n);
}
function md5_gg(d, _, m, f, r, i, n) {
  return md5_cmn((_ & f) | (m & ~f), d, _, r, i, n);
}
function md5_hh(d, _, m, f, r, i, n) {
  return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}
function md5_ii(d, _, m, f, r, i, n) {
  return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}
function safe_add(d, _) {
  var m = (65535 & d) + (65535 & _);
  return (((d >> 16) + (_ >> 16) + (m >> 16)) << 16) | (65535 & m);
}
function bit_rol(d, _) {
  return (d << _) | (d >>> (32 - _));
}

// CRC32
var makeCRCTable = function () {
  var c;
  var crcTable = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c;
  }
  return crcTable;
};

var crc32 = function (str) {
  var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
  var crc = 0 ^ -1;

  for (var i = 0; i < str.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xff];
  }

  return (crc ^ -1) >>> 0;
};

// SHA1
function sha1(str) {
  var hash;
  try {
    var crypto = require("crypto");
    var sha1sum = crypto.createHash("sha1");
    sha1sum.update(str);
    hash = sha1sum.digest("hex");
  } catch (e) {
    hash = undefined;
  }
  if (hash !== undefined) {
    return hash;
  }
  var _rotLeft = function (n, s) {
    var t4 = (n << s) | (n >>> (32 - s));
    return t4;
  };
  var _cvtHex = function (val) {
    var str = "";
    var i;
    var v;
    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;
      str += v.toString(16);
    }
    return str;
  };
  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xefcdab89;
  var H2 = 0x98badcfe;
  var H3 = 0x10325476;
  var H4 = 0xc3d2e1f0;
  var A, B, C, D, E;
  var temp;
  // utf8_encode
  str = unescape(encodeURIComponent(str));
  var strLen = str.length;
  var wordArray = [];
  for (i = 0; i < strLen - 3; i += 4) {
    j =
      (str.charCodeAt(i) << 24) |
      (str.charCodeAt(i + 1) << 16) |
      (str.charCodeAt(i + 2) << 8) |
      str.charCodeAt(i + 3);
    wordArray.push(j);
  }
  switch (strLen % 4) {
    case 0:
      i = 0x080000000;
      break;
    case 1:
      i = (str.charCodeAt(strLen - 1) << 24) | 0x0800000;
      break;
    case 2:
      i =
        (str.charCodeAt(strLen - 2) << 24) |
        (str.charCodeAt(strLen - 1) << 16) |
        0x08000;
      break;
    case 3:
      i =
        (str.charCodeAt(strLen - 3) << 24) |
        (str.charCodeAt(strLen - 2) << 16) |
        (str.charCodeAt(strLen - 1) << 8) |
        0x80;
      break;
  }
  wordArray.push(i);
  while (wordArray.length % 16 !== 14) {
    wordArray.push(0);
  }
  wordArray.push(strLen >>> 29);
  wordArray.push((strLen << 3) & 0x0ffffffff);
  for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
    for (i = 0; i < 16; i++) {
      W[i] = wordArray[blockstart + i];
    }
    for (i = 16; i <= 79; i++) {
      W[i] = _rotLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    }
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for (i = 0; i <= 19; i++) {
      temp =
        (_rotLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) &
        0x0ffffffff;
      E = D;
      D = C;
      C = _rotLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 20; i <= 39; i++) {
      temp =
        (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) & 0x0ffffffff;
      E = D;
      D = C;
      C = _rotLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 40; i <= 59; i++) {
      temp =
        (_rotLeft(A, 5) +
          ((B & C) | (B & D) | (C & D)) +
          E +
          W[i] +
          0x8f1bbcdc) &
        0x0ffffffff;
      E = D;
      D = C;
      C = _rotLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 60; i <= 79; i++) {
      temp =
        (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) & 0x0ffffffff;
      E = D;
      D = C;
      C = _rotLeft(B, 30);
      B = A;
      A = temp;
    }
    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }
  temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4);
  return temp.toLowerCase();
}

// SHA256
var sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }

  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = "length";
  var i, j;
  var result = "";

  var words = [];
  var asciiBitLength = ascii[lengthProperty] * 8;

  var hash = (sha256.h = sha256.h || []);
  var k = (sha256.k = sha256.k || []);
  var primeCounter = k[lengthProperty];

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += "\x80";
  while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00";
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return;
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;

  // process each chunk
  for (j = 0; j < words[lengthProperty]; ) {
    var w = words.slice(j, (j += 16));
    var oldHash = hash;
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      var i2 = i + j;
      var w15 = w[i - 15],
        w2 = w[i - 2];

      // Iterate
      var a = hash[0],
        e = hash[4];
      var temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
        ((e & hash[5]) ^ (~e & hash[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | // s1
              0);
      var temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? 0 : "") + b.toString(16);
    }
  }
  return result;
};

// SHA512
/*
 * Secure Hash Algorithm (SHA512)
 * http://www.happycode.info/
 */

function SHA512(str) {
  function int64(msint_32, lsint_32) {
    this.highOrder = msint_32;
    this.lowOrder = lsint_32;
  }

  var H = [
    new int64(0x6a09e667, 0xf3bcc908),
    new int64(0xbb67ae85, 0x84caa73b),
    new int64(0x3c6ef372, 0xfe94f82b),
    new int64(0xa54ff53a, 0x5f1d36f1),
    new int64(0x510e527f, 0xade682d1),
    new int64(0x9b05688c, 0x2b3e6c1f),
    new int64(0x1f83d9ab, 0xfb41bd6b),
    new int64(0x5be0cd19, 0x137e2179),
  ];

  var K = [
    new int64(0x428a2f98, 0xd728ae22),
    new int64(0x71374491, 0x23ef65cd),
    new int64(0xb5c0fbcf, 0xec4d3b2f),
    new int64(0xe9b5dba5, 0x8189dbbc),
    new int64(0x3956c25b, 0xf348b538),
    new int64(0x59f111f1, 0xb605d019),
    new int64(0x923f82a4, 0xaf194f9b),
    new int64(0xab1c5ed5, 0xda6d8118),
    new int64(0xd807aa98, 0xa3030242),
    new int64(0x12835b01, 0x45706fbe),
    new int64(0x243185be, 0x4ee4b28c),
    new int64(0x550c7dc3, 0xd5ffb4e2),
    new int64(0x72be5d74, 0xf27b896f),
    new int64(0x80deb1fe, 0x3b1696b1),
    new int64(0x9bdc06a7, 0x25c71235),
    new int64(0xc19bf174, 0xcf692694),
    new int64(0xe49b69c1, 0x9ef14ad2),
    new int64(0xefbe4786, 0x384f25e3),
    new int64(0x0fc19dc6, 0x8b8cd5b5),
    new int64(0x240ca1cc, 0x77ac9c65),
    new int64(0x2de92c6f, 0x592b0275),
    new int64(0x4a7484aa, 0x6ea6e483),
    new int64(0x5cb0a9dc, 0xbd41fbd4),
    new int64(0x76f988da, 0x831153b5),
    new int64(0x983e5152, 0xee66dfab),
    new int64(0xa831c66d, 0x2db43210),
    new int64(0xb00327c8, 0x98fb213f),
    new int64(0xbf597fc7, 0xbeef0ee4),
    new int64(0xc6e00bf3, 0x3da88fc2),
    new int64(0xd5a79147, 0x930aa725),
    new int64(0x06ca6351, 0xe003826f),
    new int64(0x14292967, 0x0a0e6e70),
    new int64(0x27b70a85, 0x46d22ffc),
    new int64(0x2e1b2138, 0x5c26c926),
    new int64(0x4d2c6dfc, 0x5ac42aed),
    new int64(0x53380d13, 0x9d95b3df),
    new int64(0x650a7354, 0x8baf63de),
    new int64(0x766a0abb, 0x3c77b2a8),
    new int64(0x81c2c92e, 0x47edaee6),
    new int64(0x92722c85, 0x1482353b),
    new int64(0xa2bfe8a1, 0x4cf10364),
    new int64(0xa81a664b, 0xbc423001),
    new int64(0xc24b8b70, 0xd0f89791),
    new int64(0xc76c51a3, 0x0654be30),
    new int64(0xd192e819, 0xd6ef5218),
    new int64(0xd6990624, 0x5565a910),
    new int64(0xf40e3585, 0x5771202a),
    new int64(0x106aa070, 0x32bbd1b8),
    new int64(0x19a4c116, 0xb8d2d0c8),
    new int64(0x1e376c08, 0x5141ab53),
    new int64(0x2748774c, 0xdf8eeb99),
    new int64(0x34b0bcb5, 0xe19b48a8),
    new int64(0x391c0cb3, 0xc5c95a63),
    new int64(0x4ed8aa4a, 0xe3418acb),
    new int64(0x5b9cca4f, 0x7763e373),
    new int64(0x682e6ff3, 0xd6b2b8a3),
    new int64(0x748f82ee, 0x5defb2fc),
    new int64(0x78a5636f, 0x43172f60),
    new int64(0x84c87814, 0xa1f0ab72),
    new int64(0x8cc70208, 0x1a6439ec),
    new int64(0x90befffa, 0x23631e28),
    new int64(0xa4506ceb, 0xde82bde9),
    new int64(0xbef9a3f7, 0xb2c67915),
    new int64(0xc67178f2, 0xe372532b),
    new int64(0xca273ece, 0xea26619c),
    new int64(0xd186b8c7, 0x21c0c207),
    new int64(0xeada7dd6, 0xcde0eb1e),
    new int64(0xf57d4f7f, 0xee6ed178),
    new int64(0x06f067aa, 0x72176fba),
    new int64(0x0a637dc5, 0xa2c898a6),
    new int64(0x113f9804, 0xbef90dae),
    new int64(0x1b710b35, 0x131c471b),
    new int64(0x28db77f5, 0x23047d84),
    new int64(0x32caab7b, 0x40c72493),
    new int64(0x3c9ebe0a, 0x15c9bebc),
    new int64(0x431d67c4, 0x9c100d4c),
    new int64(0x4cc5d4be, 0xcb3e42b6),
    new int64(0x597f299c, 0xfc657e2a),
    new int64(0x5fcb6fab, 0x3ad6faec),
    new int64(0x6c44198c, 0x4a475817),
  ];

  var W = new Array(64);
  var a, b, c, d, e, f, g, h, i, j;
  var T1, T2;
  var charsize = 8;

  function utf8_encode(str) {
    return unescape(encodeURIComponent(str));
  }

  function str2binb(str) {
    var bin = [];
    var mask = (1 << charsize) - 1;
    var len = str.length * charsize;

    for (var i = 0; i < len; i += charsize) {
      bin[i >> 5] |=
        (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
    }

    return bin;
  }

  function binb2hex(binarray) {
    var hex_tab = "0123456789abcdef";
    var str = "";
    var length = binarray.length * 4;
    var srcByte;

    for (var i = 0; i < length; i += 1) {
      srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
      str +=
        hex_tab.charAt((srcByte >> 4) & 0xf) + hex_tab.charAt(srcByte & 0xf);
    }

    return str;
  }

  function safe_add_2(x, y) {
    var lsw, msw, lowOrder, highOrder;

    lsw = (x.lowOrder & 0xffff) + (y.lowOrder & 0xffff);
    msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
    lowOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    lsw = (x.highOrder & 0xffff) + (y.highOrder & 0xffff) + (msw >>> 16);
    msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
    highOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    return new int64(highOrder, lowOrder);
  }

  function safe_add_4(a, b, c, d) {
    var lsw, msw, lowOrder, highOrder;

    lsw =
      (a.lowOrder & 0xffff) +
      (b.lowOrder & 0xffff) +
      (c.lowOrder & 0xffff) +
      (d.lowOrder & 0xffff);
    msw =
      (a.lowOrder >>> 16) +
      (b.lowOrder >>> 16) +
      (c.lowOrder >>> 16) +
      (d.lowOrder >>> 16) +
      (lsw >>> 16);
    lowOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    lsw =
      (a.highOrder & 0xffff) +
      (b.highOrder & 0xffff) +
      (c.highOrder & 0xffff) +
      (d.highOrder & 0xffff) +
      (msw >>> 16);
    msw =
      (a.highOrder >>> 16) +
      (b.highOrder >>> 16) +
      (c.highOrder >>> 16) +
      (d.highOrder >>> 16) +
      (lsw >>> 16);
    highOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    return new int64(highOrder, lowOrder);
  }

  function safe_add_5(a, b, c, d, e) {
    var lsw, msw, lowOrder, highOrder;

    lsw =
      (a.lowOrder & 0xffff) +
      (b.lowOrder & 0xffff) +
      (c.lowOrder & 0xffff) +
      (d.lowOrder & 0xffff) +
      (e.lowOrder & 0xffff);
    msw =
      (a.lowOrder >>> 16) +
      (b.lowOrder >>> 16) +
      (c.lowOrder >>> 16) +
      (d.lowOrder >>> 16) +
      (e.lowOrder >>> 16) +
      (lsw >>> 16);
    lowOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    lsw =
      (a.highOrder & 0xffff) +
      (b.highOrder & 0xffff) +
      (c.highOrder & 0xffff) +
      (d.highOrder & 0xffff) +
      (e.highOrder & 0xffff) +
      (msw >>> 16);
    msw =
      (a.highOrder >>> 16) +
      (b.highOrder >>> 16) +
      (c.highOrder >>> 16) +
      (d.highOrder >>> 16) +
      (e.highOrder >>> 16) +
      (lsw >>> 16);
    highOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

    return new int64(highOrder, lowOrder);
  }

  function maj(x, y, z) {
    return new int64(
      (x.highOrder & y.highOrder) ^
        (x.highOrder & z.highOrder) ^
        (y.highOrder & z.highOrder),
      (x.lowOrder & y.lowOrder) ^
        (x.lowOrder & z.lowOrder) ^
        (y.lowOrder & z.lowOrder)
    );
  }

  function ch(x, y, z) {
    return new int64(
      (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
      (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
    );
  }

  function rotr(x, n) {
    if (n <= 32) {
      return new int64(
        (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
        (x.lowOrder >>> n) | (x.highOrder << (32 - n))
      );
    } else {
      return new int64(
        (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
        (x.highOrder >>> n) | (x.lowOrder << (32 - n))
      );
    }
  }

  function sigma0(x) {
    var rotr28 = rotr(x, 28);
    var rotr34 = rotr(x, 34);
    var rotr39 = rotr(x, 39);

    return new int64(
      rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
      rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
    );
  }

  function sigma1(x) {
    var rotr14 = rotr(x, 14);
    var rotr18 = rotr(x, 18);
    var rotr41 = rotr(x, 41);

    return new int64(
      rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
      rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
    );
  }

  function gamma0(x) {
    var rotr1 = rotr(x, 1),
      rotr8 = rotr(x, 8),
      shr7 = shr(x, 7);

    return new int64(
      rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
      rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
    );
  }

  function gamma1(x) {
    var rotr19 = rotr(x, 19);
    var rotr61 = rotr(x, 61);
    var shr6 = shr(x, 6);

    return new int64(
      rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
      rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
    );
  }

  function shr(x, n) {
    if (n <= 32) {
      return new int64(
        x.highOrder >>> n,
        (x.lowOrder >>> n) | (x.highOrder << (32 - n))
      );
    } else {
      return new int64(0, x.highOrder << (32 - n));
    }
  }

  str = utf8_encode(str);
  strlen = str.length * charsize;
  str = str2binb(str);

  str[strlen >> 5] |= 0x80 << (24 - (strlen % 32));
  str[(((strlen + 128) >> 10) << 5) + 31] = strlen;

  for (var i = 0; i < str.length; i += 32) {
    a = H[0];
    b = H[1];
    c = H[2];
    d = H[3];
    e = H[4];
    f = H[5];
    g = H[6];
    h = H[7];

    for (var j = 0; j < 80; j++) {
      if (j < 16) {
        W[j] = new int64(str[j * 2 + i], str[j * 2 + i + 1]);
      } else {
        W[j] = safe_add_4(
          gamma1(W[j - 2]),
          W[j - 7],
          gamma0(W[j - 15]),
          W[j - 16]
        );
      }

      T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
      T2 = safe_add_2(sigma0(a), maj(a, b, c));
      h = g;
      g = f;
      f = e;
      e = safe_add_2(d, T1);
      d = c;
      c = b;
      b = a;
      a = safe_add_2(T1, T2);
    }

    H[0] = safe_add_2(a, H[0]);
    H[1] = safe_add_2(b, H[1]);
    H[2] = safe_add_2(c, H[2]);
    H[3] = safe_add_2(d, H[3]);
    H[4] = safe_add_2(e, H[4]);
    H[5] = safe_add_2(f, H[5]);
    H[6] = safe_add_2(g, H[6]);
    H[7] = safe_add_2(h, H[7]);
  }

  var binarray = [];
  for (var i = 0; i < H.length; i++) {
    binarray.push(H[i].highOrder);
    binarray.push(H[i].lowOrder);
  }
  return binb2hex(binarray);
}

function encryptionGenerate() {
  var encsum = 0;
  if (enc1.checked == true) {
    encsum++;
  }
  if (enc2.checked == true) {
    encsum++;
  }
  if (enc3.checked == true) {
    encsum++;
  }
  if (enc4.checked == true) {
    encsum++;
  }
  if (enc5.checked == true) {
    encsum++;
  }
  console.log(encsum);

  if (encsum > 1) {
    alert("Пожалуйста выберите только один шифр");
  }
  if (encsum == 0) {
    alert("Выберите один вариант шифровки");
  } else {
    if (enc1.checked == true) {
      localStorage.setItem(
        "encryption",
        MD5(document.getElementById("encryptioninput").value)
      );
      document.getElementById("encryptioninput").value = MD5(
        document.getElementById("encryptioninput").value
      );
    }
    if (enc2.checked == true) {
      localStorage.setItem(
        "encryption",
        crc32(document.getElementById("encryptioninput").value)
      );
      document.getElementById("encryptioninput").value = crc32(
        document.getElementById("encryptioninput").value
      );
    }
    if (enc3.checked == true) {
      localStorage.setItem(
        "encryption",
        sha1(document.getElementById("encryptioninput").value)
      );
      document.getElementById("encryptioninput").value = sha1(
        document.getElementById("encryptioninput").value
      );
    }
    if (enc4.checked == true) {
      localStorage.setItem(
        "encryption",
        sha256(document.getElementById("encryptioninput").value)
      );
      document.getElementById("encryptioninput").value = sha256(
        document.getElementById("encryptioninput").value
      );
    }
    if (enc5.checked == true) {
      localStorage.setItem(
        "encryption",
        SHA512(document.getElementById("encryptioninput").value)
      );
      document.getElementById("encryptioninput").value = SHA512(
        document.getElementById("encryptioninput").value
      );
    }
  }
}

if (localStorage.getItem("encryption") != null) {
  document.getElementById("encryptioninput").value =
    localStorage.getItem("encryption");
}

function encryptionCopy() {
  var content = document.getElementById("encryptioninput").value;
  navigator.clipboard.writeText(content);
  document.getElementById("encryptioninput").value = "Скопировано";
}
