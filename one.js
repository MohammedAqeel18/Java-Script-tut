function addFiles(){
 
    var files = document.getElementById('files').files;
    var fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear the list before adding new files
    
    for (var i = 0; i < files.length; i++) {
        var fileItem = document.createElement('li');
        fileItem.textContent = files[i].name;
        fileList.appendChild(fileItem);
    }   
    
}