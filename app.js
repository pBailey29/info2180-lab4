document.addEventListener("DOMContentLoaded", () => {  
    
    document.getElementById('searchButton').addEventListener('click', function () {
        console.log("hello")
        fetch(`superheroes.php`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(superheroes => {
                alert(superheroes);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
})
