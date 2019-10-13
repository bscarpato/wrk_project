jQuery(document).ready(function($) {
    //radar
    var ctxR = document.getElementById("radarChart").getContext('2d');
    var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Zona Leste", "Zona Oeste", "Zona Norte", "Zona Sul", "Centro", "ABC"],
        datasets: [{
                label: "Demandas para Pedreiro",
                data: [9473, 3425, 6530, 4438, 2147, 7431],
                backgroundColor: [
                    'rgba(30,144,255, .2)',
                ],
                borderColor: [
                    'rgba(0,191,255, .7)',
                ],
                borderWidth: 2
            },
            {
                label: "Lojas de produtos de Construção (x100)",
                data: [2800, 4800, 4000, 9600, 1200, 2700],
                backgroundColor: [
                    'rgba(0, 250, 220, .2)',
                ],
                borderColor: [
                    'rgba(0, 213, 132, .7)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
    });




    //line
    var ctxL = document.getElementById("lineChart").getContext('2d');
    var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
            datasets: [
                {
                    label: "Demanda de serviços na plataforma",
                    data: [25, 128, 190, 145, 394, 688, 797],
                    backgroundColor: [
                        'rgba(30,144,255, .2)',
                    ],
                    borderColor: [
                        'rgba(0,191,255, .7)',
                    ],
                    borderWidth: 2
                },
                {
                    label: "Quantidade de profissionais cadastrados na plataforma",
                    data: [8, 14, 34, 63, 83, 90, 144],
                    backgroundColor: [
                        'rgba(0, 250, 220, .2)',
                    ],
                    borderColor: [
                        'rgba(0, 213, 132, .7)',
                    ],
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true
        }
        }
    );





    //polar
    var ctxPA = document.getElementById("polarChart").getContext('2d');
    var myPolarChart = new Chart(ctxPA, {
        type: 'polarArea',
        data: {
            labels: ["✫", "✫✫", "✫✫✫", "✫✫✫✫", "✫✫✫✫✫"],
            datasets: [{
                data: [136, 164, 488, 784, 752],
                backgroundColor: [
                    "rgba(219, 0, 0, 0.5)", 
                    "rgba(255,140,0, 0.5)", 
                    "rgba(255, 195, 15, 0.5)",
                    "rgba(102,205,170, 0.5)",
                    "rgba(0, 165, 2, 0.5)"
                ],
                hoverBackgroundColor: [
                    "rgba(219, 0, 0, 0.7)", 
                    "rgba(255,140,0, 0.7)", 
                    "rgba(255, 195, 15, 0.7)",
                    "rgba(102,205,170, 0.7)",
                    "rgba(0, 165, 2, 0.7)"
                ]
            }]
        },
        options: {
            responsive: true
        }
    });





});

