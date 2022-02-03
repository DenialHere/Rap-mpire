var shopSearch = document.getElementById('shop');
var albumList = document.getElementById('albums');




shopSearch.addEventListener('keyup', albumSearch);



function albumSearch(e)
{
     var text = e.target.value.toLowerCase();
     var items = albumList.getElementsByTagName('li');

Array.from(items).forEach(function(item){
    var itemname = item.firstChild.textContent;
    if (itemname.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }
    else {
        item.style.display = 'none';


    }


});
}





