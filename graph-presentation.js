const equation = prompt("Enter equation:", "");
const equations = equation.split(";");
const traces = [];

for (const equation of equations) {
    try {
        const f1 = math.parse(equation);

        var x, y;

        x = [];
        y = [];
        for (var i = -5; i <= 5; i += 0.1) {
            x.push(i);
            y.push(f1.evaluate({
                x: i
            }));
        }

        traces.push({
            x: x,
            y: y,
            mode: 'lines',
            line: {
                color: 'blue',
                simplify: false
            },
            type: 'scatter',
            name: equation
        });
    } catch (error) {
        let errorMessage;
        switch (error.message) {
            case "Unexpected end of expression":
                errorMessage = "Equation incomplete, please enter a complete equation.";
                break;
            case "Unexpected operator":
                errorMessage = "Operator missing or incorrect, please enter a valid equation.";
                break;
            default:
                errorMessage = `Invalid equation: ${error.message}`;
        }
        alert(errorMessage);
    }
}

if (traces.length > 0) {
    Plotly.newPlot("plotContainer2", traces, {
        title: "Plot of Equations",
        xaxis: {
            title: "X-axis"
        },
        yaxis: {
            title: "Y-axis"
        },
        showlegend: true,
        showgrid: true
    });
}