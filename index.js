const seq = [
    { char: "a", value: "01" }, { char: "b", value: "02" },
    { char: "c", value: "03" }, { char: "d", value: "04" },
    { char: "e", value: "05" }, { char: "f", value: "06" },
    { char: "g", value: "07" }, { char: "h", value: "08" },
    { char: "i", value: "09" }, { char: "j", value: "10" },
    { char: "k", value: "11" }, { char: "l", value: "12" },
    { char: "m", value: "13" }, { char: "n", value: "14" },
    { char: "o", value: "15" }, { char: "p", value: "16" },
    { char: "q", value: "17" }, { char: "r", value: "18" },
    { char: "s", value: "19" }, { char: "t", value: "20" },
    { char: "u", value: "21" }, { char: "v", value: "22" },
    { char: "w", value: "23" }, { char: "x", value: "24" },
    { char: "y", value: "25" }, { char: "z", value: "26" }
];
const data = "".toLowerCase();
console.log("Original: " + data);
var output = '';
var output2 = '';
var current = 0;
for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < seq.length; j++) {
        if (seq[j].char == data.charAt(i)) {
            output += seq[j].value + " ";
        }
    }
}
console.log("Encoded: " + output);
var pairs = output.split(" ");
pairs.forEach(pair => {
    for (var k = 0; k < seq.length; k++) {
        if (seq[k].value == pair) {
            output2 += seq[k].char + " ";
        }
    }
});
console.log("Decoded: " + output2);