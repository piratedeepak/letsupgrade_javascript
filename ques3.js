function search(str, item) {
    var n = str.indexOf(item);
    console.log(`"${item}" is present at ${n} position in the array.`);
}
let arr = ["Delhi", "Haryana", "Tamil Nadu", "Uttarakhand", "Gujarat"];
search(arr, "Tamil Nadu");