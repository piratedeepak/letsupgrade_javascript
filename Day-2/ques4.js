function dis(str) {
    str.forEach(element => {
        if (element.includes("a") === true) {
            console.log(element);
        }
    });

}
var arr = ["aada", "ddd", "rra", "sss"];
dis(arr);