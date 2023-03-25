//listen the form

document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    //local storage test

    // localStorage.setItem('test','Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));

    // Test if bookmarks is null

    if(localStorage.getItem('bookmarks') === null){

        //initialise  array

        var bookmarks = [];
        //add  to array
        bookmarks.push(bookmark);
        //Set to LocalStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        //Get bookmarks from local storage
        var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        //re-set it to local storage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    }
     

 







    // prevent the flashing and going
    e.preventDefault();
}

// fetch bookmarks

function fetchBookmarks(){
    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
    //get output id
    var bookmarkResults = document.getElementById('bookmarksResults');
    // Build output
    bookmarkResults.innerHTML ='';
    for(var i=0; i< bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML +=  '<div class="well">'+
                                      '<h3>'+name+
                                      '<a class ="btn btn-default" target="_blank" href="'+url+'">Visit</a>'
                                      '</h3>'+
                                      '</div>';

    }

}