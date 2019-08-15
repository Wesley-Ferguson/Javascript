const Mark = {
    fullName: 'Mark Rowe',
    weight: 86,
    height: 1.82,
    calcBmi: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi
    }

};

const John = {
    fullName: 'John Doe',
    weight: 105,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi
    }
};


// Mark.calcBmi();
// John.calcBmi();
// console.log(Mark.bmi, John.bmi);


if (Mark.calcBmi() > John.calcBmi()) {
    console.log(Mark.fullName + ' is the fattest with a BMI of ' + Mark.bmi);
}else if (Mark.bmi === John.bmi) {
    console.log(Mark.fullName + ' and ' + John.fullName + ' are equally as fat with an average BMI of ' + ((Mark.bmi + John.bmi)/2));
}else {
    console.log(John.fullName + ' is the fattest with a BMI of ' + John.bmi);
};

console.log(Mark.bmi, John.bmi);

