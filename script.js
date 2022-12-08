// get clicks from li
var clicks = document.querySelectorAll('li');

let i = 0;
clicks.forEach(function(click) {
    if(i == 0) {
        click.classList.add('active');
        i++;
    }
    
    click.addEventListener('click', function() {
        clicks.forEach(function(click) {
        click.classList.remove('active');
        });
        click.classList.add('active');
    });
});
