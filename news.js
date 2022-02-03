art1 = document.getElementById('art-1-hide');
art1Click = document.getElementById('art-1-click');
art2 = document.getElementById('art-2-hide');
art2Click = document.getElementById('art-2-click');
art3 = document.getElementById('art-3-hide');
art3Click = document.getElementById('art-3-click');
art4 = document.getElementById('art-4-hide');
art4Click = document.getElementById('art-4-click');
line = document.getElementById('page');
arts = document.getElementsByClassName('articles');

line.addEventListener('change',   lperpage )
art1Click.addEventListener('click', show);
art2Click.addEventListener('click', show2);
art3Click.addEventListener('click', show3);
art4Click.addEventListener('click', show4);

function show (e){
    e.preventDefault();
    if (art1.id == 'art-1-hide')
    {
        art1.id = 'art-1-show';
        art1Click.textContent = 'Show Less';
    }
    else {
        art1.id = 'art-1-hide'
        art1Click.textContent = 'Show More';

    }


}
function show2 (e){
    e.preventDefault();
    if (art2.id == 'art-2-hide')
    {
        art2.id = 'art-2-show';
        art2Click.textContent = 'Show Less';
    }
    else {
        art2.id = 'art-2-hide'
        art2Click.textContent = 'Show More';

    }


}
function show3 (e){
    e.preventDefault();
    if (art3.id == 'art-3-hide')
    {
        art3.id = 'art-3-show';
        art3Click.textContent = 'Show Less';
    }
    else {
        art3.id = 'art-3-hide'
        art3Click.textContent = 'Show More';

    }


}

function show4 (e){
    e.preventDefault();
    if (art4.id == 'art-4-hide')
    {
        art4.id = 'art-4-show';
        art4Click.textContent = 'Show Less';
    }
    else {
        art4.id = 'art-4-hide'
        art4Click.textContent = 'Show More';

    }


}

function lperpage (){

    console.log(line.value)
    if (line.value == '1'){
        arts[0].style = 'grid-template-columns: repeat(1, 1fr)';

    }
    if (line.value == '2'){
        arts[0].style = 'grid-template-columns: repeat(2, 1fr)';
    }
    if (line.value == '3'){
        arts[0].style = 'grid-template-columns: repeat(3, 1fr)';
    }
    else {
        
    } 
}
