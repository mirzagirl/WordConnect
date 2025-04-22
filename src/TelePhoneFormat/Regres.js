const regexTests = [
  {
    regex: /^[0-9]+$/,
    value: "12345",
    desc: "Only numbers                     ",
  },
  {
    regex: /^\d$/, // /^[0-9]$/
    value: "9",
    desc: "Exactly one digit                       ",
  },
  {
    regex: /^[A-Za-z]+$/,
    value: "abcXYZ",
    desc: "Only letters                 ",
  },
  {
    regex: /^[A-Za-z]{2,}$/,
    value: "ab",
    desc: "At least two letters         ",
  },
  {
    regex: /^[A-Za-z0-9]+$/,
    value: "abc123",
    desc: "Alphanumeric only                            ",
  },
  {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
    value: "abc1",
    desc: "At least one letter & one number                                        ",
  },
  {
    regex: /^[^A-Za-z0-9]+$/,
    value: "!@#$",
    desc: "Only special chars                                            ",
  },
  {
    regex: /^\s+$/,
    value: "   ",
    desc: "Only whitespace                            ",
  },
  {
    regex: /^\S+$/,
    value: "abc",
    desc: "No whitespace                                 ",
  },
  {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    value: "user@example.com",
    desc: "Email validation",
  },
  {
    regex: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
    value: "http://example.com",
    desc: "URL validation",
  },
  {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    value: "pass1234",
    desc: "Password validation",
  },
  {
    regex: /^\d{4}-\d{2}-\d{2}$/,
    value: "2024-04-19",
    desc: "Date format YYYY-MM-DD",
  },
  {
    regex: /^[6-9]\d{9}$/,
    value: "9876543210",
    desc: "Indian Mobile Number                                            ",
  },
];

regexTests.forEach(({ regex, value, desc }) => {
  console.log(`${desc} (${value}): ${regex.test(value)}`);
});

// Replace special characters
const specialStr = "ab!c12#3";
const cleanStr = specialStr.replace(/[^A-Za-z0-9]/g, "");
console.log(`Original: ${specialStr}, Cleaned: ${cleanStr}`);

// If you want to remove special characters from anywhere, use:
// js
// Copy
// Edit
// "#%BSUHIuu2121".replace(/[^A-Za-z0-9]/g, "");
// // Output: "BSUHIuu2121"
// This uses the global (g) flag.

// It replaces every non-alphanumeric character with an empty string.

// Let me know if you want this version added to your Regex Examples file!

// Special Characters in Regex (need to be escaped)
const allSpecialCharRegex = /[^A-Za-z0-9\s]/g;
const sample = "Hello@World#123!$";
const specials = sample.match(allSpecialCharRegex);
console.log("Special characters in sample:", specials);
