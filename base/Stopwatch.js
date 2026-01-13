class Stopwatch {
    #elapsedTimeInSeconds = 0;
    #intervalID = null;

    start() {
        this.#intervalID = setInterval(() => {
            this.#elapsedTimeInSeconds++;
        }, 1000);
    }

    stop() {
        clearInterval(this.#intervalID);
    }

    reset() {
        this.#elapsedTimeInSeconds = 0;
    }

    static formatTime(timeInSeconds) {
        const hour = Math.floor(timeInSeconds / 3600);
        const min = Math.floor((timeInSeconds % 3600) / 60);
        const sec = timeInSeconds - hour * 3600 - min * 60;

        return `${Stopwatch.zeroPadding(hour)}:${Stopwatch.zeroPadding(
            min
        )}:${Stopwatch.zeroPadding(sec)}`;
    }

    static zeroPadding(originalValue, desiredAlmountDigits = 2) {
        let stringValue = String(originalValue);
        const zerosRequired = desiredAlmountDigits - stringValue.length;

        for (let i = 0; i < zerosRequired; i++) {
            stringValue = "0" + stringValue;
        }
        return stringValue;
    }

    get elapsedTime() {
        return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
    }
}
