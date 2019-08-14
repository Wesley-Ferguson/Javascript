const Mark = {
    fullName: 'Mark Rowe',
    weight: 81,
    height: 1.82,
    bmi: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi
    }

};

const John = {
    fullName: 'John Doe',
    weight: 105,
    height: 1.95,
    bmi: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi
    }
};

console.log(Mark.bmi());
console.log(John.bmi());