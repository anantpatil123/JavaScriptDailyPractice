function zigzagConversion(s, numRows) {
    if (numRows === 1) return s;

    const rows = new Array(Math.min(numRows, s.length)).fill('');
    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}

// Example usage:
let s = "PAYPALISHIRING";
let numRows = 3;
console.log(zigzagConversion(s, numRows)); // Output: "PAHNAPLSIIGYIR"