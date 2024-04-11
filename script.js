
document.getElementById("searchbar").addEventListener("keypress", function(event){
  if(event.key == "Enter"){
  search(event)}
})
  


document.getElementById('search').addEventListener('click', function(event) {
    
  search(event)
});

function search(event){
  event.preventDefault()
  window.location.href = "https://www.google.com/search?q=" + document.getElementById("searchbar").value;
}

// the function search is defined in line 14. search is then reused in line 4 & 11.

