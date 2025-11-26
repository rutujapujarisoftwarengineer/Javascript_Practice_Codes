// let student = {
//     name : "Rutuja",
//     marks : 92,
//     printMarks : function() {
//         console.log("Marks = ", this.marks);
// }
// };

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary : 60000,
};

karanArjun.__proto__ = employee;