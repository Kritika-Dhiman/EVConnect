
const header=document.querySelector("header");
const hamburger=document.querySelector(".hamburger-on");
const navLinks=document.querySelector(".nav-links");
let hamburgerOpen= false;

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

hamburger.addEventListener("click",function(){
    if(!hamburgerOpen){
        navLinks.classList.toggle("show-navlinks");
        hamburger.classList.toggle("hamburger-off");
    }else{
        navLinks.classList.remove("show-navlinks");
        hamburger.classList.remove("hamburger-off")
        hamburgerOpen=false;
    }
})


const ctx = document.getElementById('customerChart').getContext('2d');

    const data = [
        { month: 'January', customers: 100 },
        { month: 'February', customers: 150 },
        { month: 'March', customers: 180 },
        { month: 'April', customers: 200 },
        { month: 'May', customers: 190 },
        { month: 'June', customers: 250 },
        { month: 'July', customers: 340 },
        { month: 'August', customers: 400 },
        { month: 'September', customers: 500 },
    ];

    const customerChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(row => row.month),
            datasets: [{
                label: 'Number of Customers',
                data: data.map(row => row.customers),
                borderColor: '#4ECB71', // Line color
                backgroundColor: 'rgba(78, 203, 113, 0.4)', // Optional: add some transparency to the fill
                borderWidth: 2,
                fill: true, // Fill the area under the line
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Customers',
                        color: '#000',
                    },
                    ticks: {
                        color: '#000', 
                    },
                    grid: {
                        color: '#fff' 
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                        color: '#000',
                    },
                    ticks: {
                        color: '#000', 
                    },
                    grid: {
                        color: '#fff' 
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            responsive: true,
            maintainAspectRatio: false, // Allow responsive resizing
        }
});



