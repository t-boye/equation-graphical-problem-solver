function plot() {
    // Get the function from the input
    let func = document.querySelector("#func").value;

    // Create an array of x values
    let xValues = [];
    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
    }

    // Evaluate the function for each x value
    let yValues = xValues.map(x => eval(func));

    // Plot the graph
    let ctx = document.querySelector("#graph").getContext("2d");
    let chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: func,
                data: yValues,
                borderColor: "red",
                fill: false
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom"
                }]
            }
        }
    });
}