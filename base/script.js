document.addEventListener("DOMContentLoaded", () => {
    const $startButton = document.getElementById("start-button");
    const $stopButton = document.getElementById("stop-button");
    const $resetButton = document.getElementById("reset-button");

    const sw = new Stopwatch();

    $startButton.addEventListener("click", () => {
        const $timer = document.getElementById("timer");
        sw.start();
        intervalID = setInterval(() => {
            $timer.textContent = sw.elapsedTime;
        }, 100);
    });

    $stopButton.addEventListener("click", () => {
        sw.stop();
    });

    $resetButton.addEventListener("click", () => {
        sw.reset();
    });
});
