const searchBar = document.getElementById('searchbar');

searchBar.addEventListener('input', function () {
    const searchQuery = searchBar.value.toLowerCase();
    filterRecipes(searchQuery);
})

function filterRecipes(searchQuery) {
    const recipeResults = document.querySelectorAll('.wrapper');

    recipeResults.forEach((card) => {
        const recipeName = card.querySelector('.wrappertitle').textContent.toLowerCase();
        const recipeDesc = card.querySelector('.wrapperdesc').textContent.toLowerCase();
        const recipeTags = card.querySelector('.invtags').textContent.toLowerCase();

        if (recipeName.includes(searchQuery) || recipeDesc.includes(searchQuery) || recipeTags.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}