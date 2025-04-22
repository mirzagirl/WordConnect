import React, { useState } from "react";
import "./index.css";
// Regex (/\D/g) removes all non-digit characters, ensuring only numbers are processed.
export function TelephoneFormat() {
  const [phoneValue, setPhoneValue] = useState("");

  function formatPhoneNumber(value) {
    console.log("value. ", value);
    const numbers = value.replace(/\D/g, ""); // Remove non-digits
    console.log("number. ", numbers);
    let formattedNumber = "";

    if (numbers.length <= 3) {
      formattedNumber = numbers;
    } else if (numbers.length <= 10) {
      formattedNumber = `+(${numbers.slice(0, 3)}) - ${numbers.slice(3)}`;
    } else {
      formattedNumber = `+(${numbers.slice(0, 3)}) - ${numbers.slice(3, 10)}`;
    }

    return formattedNumber;
  }

  function handleChange(e) {
    const input = e.target.value;
    const numbersOnly = input.replace(/\D/g, "");

    // Allow max 10 digits after area code
    if (numbersOnly.length <= 10) {
      const formatted = formatPhoneNumber(numbersOnly);
      setPhoneValue(formatted);
    }
  }

  return (
    <div className="format">
      <input value={phoneValue} onChange={handleChange} />
      <p>Example: +(123) - 4567890</p>
    </div>
  );
}
