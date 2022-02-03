// Start Burger Menu

let bar = document.querySelector('.burger-menu');
let ul = document.querySelector('div.links ul');
// -500%
bar.onclick = () => {
    let ul = document.querySelector('header div.links ul');
    if (ul.style.display == 'flex') {

        ul.style.top = '-500%';
        setTimeout(() => { ul.style.display = 'none' }, 600);




    } else {
        ul.style.display = 'flex';
        setTimeout(() => { ul.style.top = '75px'; }, 200);
    }

}



// End Burger Menu


// Start Main Title 

let jobName = ['FRONT END DEVELOPER', 'BACK END DEVELOPER', 'FULL STACK DEVELOPER'];

let counter = 0;


setInterval(() => {
    let title = document.querySelector('.main-title');

    if (counter == 3) {
        counter = 0;
    }

    title.innerHTML = jobName[counter];
    counter++;

}, 3000);



// End Main Title