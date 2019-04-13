Chart.defaults.global.legend.display = false;
var line = document.getElementById('myChart-1').getContext('2d');
var bar = document.getElementById('myChart-2').getContext('2d');
var lineChart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(139, 142, 191, 0.35)',
            pointBackgroundColor: "white",
            pointstyle:'circle',
            borderColor: '#8b8ebf',
            radius: 6,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var barChart = new Chart(bar, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(139, 142, 191, 0.35)',
            pointBackgroundColor: "white",
            pointstyle:'circle',
            borderColor: '#8b8ebf',
            radius: 6,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgba(139, 142, 191, 0.35)',
//             pointBackgroundColor: "white",
//             pointstyle:'circle',
//             borderColor: '#8b8ebf',
//             radius: 6,
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });
