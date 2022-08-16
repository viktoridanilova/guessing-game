class GuessingGame {
    constructor() {
        this.minimum = 0;
        this.maximum = 0;
    }

    setRange(minimum, maximum) {
        this.minimum = minimum;
        this.maximum = maximum;
    }

    guess() {
        this.value = Math.ceil(this.minimum + (this.maximum - this.minimum)/2);
        return this.value;
    }

    lower() {
        this.maximum = this.guess();
    }

    greater() {
        this.minimum = this.guess();
    }
}

module.exports = GuessingGame;