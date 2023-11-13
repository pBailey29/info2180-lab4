document.addEventListener("DOMContentLoaded", () => {  
    let resultDiv = document.getElementById('result');
    let searchInput = document.getElementById('hero-data');

    document.getElementById('searchButton').addEventListener('click', function () {
        fetch(`superheroes.php?query=${searchInput.value}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(superheroes => {
                resultDiv.innerHTML = superheroes
            })
            .catch(error => alert(error))
    });
})
