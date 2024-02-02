function getRecipeID() {
    const recipeCode = document.title;
    return recipeCode.toLowerCase();
}

function addRating() {
    const username = document.getElementById('username').value
    const ratingValue = document.getElementById('rating').value
    const comment = document.getElementById('comment').value

    if (!username) {
        alert('Please write your username');
        return;
    }

    if (!ratingValue) {
        alert('Please select a rating.');
        return;
    }

    const recipeID = getRecipeID();
    let ratings = getRatings(recipeID);

    const newRating = {
        username: username,
        rating: ratingValue,
        comment: comment
    };

    ratings.push(newRating);
    localStorage.setItem(recipeID, JSON.stringify(ratings));

    renderRatings();
}

function noRatings() {
    const recipeID = getRecipeID();
    let ratings = getRatings(recipeID);
    if (!ratings || ratings.length === 0) {
        console.log(recipeID);
        ratings = getDefaultRatings(recipeID);
    }
}

noRatings()

function giveStars() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-rating');
            stars.forEach(s => s.classList.remove('glow'));
            for(let i = 1; i <= ratingValue; i++) {
                stars[i - 1].classList.add('glow');
            }
            document.getElementById('rating').value = ratingValue;
        });
    });
}

function getRatings(recipeID) {
    const ratingsJSON = localStorage.getItem(recipeID);
    return ratingsJSON ? JSON.parse(ratingsJSON) : null;
}

function getDefaultRatings(recipeID) { // Long snippet because it is used for adding the default ratings of EACH recipe.
    console.log(recipeID);
    let ratings = [];
    
    if (recipeID === 'carbonara') {
        console.log(recipeID);
        ratings = [
            {
                username: 'Enzo Colamego',
                rating: '5',
                comment: 'Muito bom!!'
            },
            {
                username: 'Luana',
                rating: '5',
                comment: 'Adorei! Fiz para minha família e todos adoraram'
            },
            {
                username: 'Lucas',
                rating: '5',
                comment: 'Maravilhoso, não tem erro família... Segue que dá certo. Sou um pão pra essas coisas mas fiz aqui e ficou muito bom'
            },
            {
                username: 'Raquel',
                rating: '4'
            },
            {
                username: 'Tom',
                rating: '4'
            },
            {
                username: 'Juliano',
                rating: '4'
            },
            {
                username: 'Yuri',
                rating: '5'
            },
            {
                username: 'Johnny',
                rating: '5'
            },
            {
                username: 'Mohamed',
                rating: '4'
            },
            {
                username: 'Momo',
                rating: '5'
            },
            {
                username: 'Jimin',
                rating: '1'
            }
        ];
    } 
    if (recipeID === 'red velvet') {
        console.log(recipeID);
        ratings = [
            {
                username: 'Enzo Colamego',
                rating: '5',
                comment: 'Muito bom!!'
            },
            {
                username: 'Wendy',
                rating: '5',
                comment: 'Ameiii <3 gosto tanto do bolo quanto do grupo'
            },
            {
                username: 'Alline',
                rating: '5',
            },
            {
                username: 'Heloísa',
                rating: '5'
            },
            {
                username: 'Leo',
                rating: '3'
            },
            {
                username: 'Irene',
                rating: '5'
            },
            {
                username: 'Victoria',
                rating: '5'
            },
            {
                username: 'Mari',
                rating: '5'
            },
            {
                username: 'Junior',
                rating: '4'
            },
            {
                username: 'Giovana',
                rating: '5'
            }
        ];
    }
    if (recipeID === 'mojito') {
        console.log(recipeID);
        ratings = [
            {
                username: 'Enzo Colamego',
                rating: '5',
                comment: 'Muito bom!!'
            },
            {
                username: 'Giovana',
                rating: '5',
                comment: 'Muito bom família, pode fazer aí'
            },
            {
                username: 'Remília',
                rating: '5',
                comment: 'Concordo com a de cima'
            },
            {
                username: 'Aisha',
                rating: '5'
            },
            {
                username: 'Kim',
                rating: '5'
            },
            {
                username: 'Livinho',
                rating: '5'
            },
            {
                username: 'Kaka',
                rating: '5'
            },
            {
                username: 'Bruno',
                rating: '4'
            },
            {
                username: 'Junior',
                rating: '4'
            },
            {
                username: 'Pedro',
                rating: '4'
            },
            {
                username: 'Jimin',
                rating: '1'
            }
        ];
    }
    if (recipeID === 'rosquinhas') {
        console.log(recipeID);
        ratings = [
            {
                username: 'Enzo Colamego',
                rating: '2',
                comment: 'Achei que a massa ficou muito dura, pouco crocante e sem sabor!!'
            },
            {
                username: 'Giovana',
                rating: '5',
                comment: 'Muito bom família, pode fazer aí'
            },
            {
                username: 'Remília',
                rating: '5',
                comment: 'Concordo com a de cima'
            },
            {
                username: 'Luquinhas',
                rating: '5',
                comment: 'adoro rosquinha.'
            },
            {
                username: 'Aisha',
                rating: '5'
            },
            {
                username: 'Kim',
                rating: '5'
            },
            {
                username: 'Jair',
                rating: '1'
            },
            {
                username: 'Yves',
                rating: '3'
            },
            {
                username: 'Miguel',
                rating: '5'
            },
            {
                username: 'Sarah',
                rating: '5'
            },
            {
                username: 'Jimin',
                rating: '1'
            }
        ];
    } else {
        ratings = [
            {
                username: 'Enzo Colamego',
                rating: '5',
                comment: 'Muito bom!!'
            },
            {
                username: 'Giovana',
                rating: '5',
                comment: 'Muito bom família, pode fazer aí'
            },
            {
                username: 'Remília',
                rating: '4',
                comment: 'Concordo com a de cima'
            },
        ];
    }

    localStorage.setItem(recipeID, JSON.stringify(ratings));
    renderRatings();

    return ratings;
}

giveStars();

function renderRatings() {
    const recipeID = getRecipeID();
    const ratings = getRatings(recipeID) || [];
    const ratingList = document.getElementById('rating-list');
    const averageRating = calculateAvgRating(ratings);
    ratingList.innerHTML = '';

    ratings.forEach(rating => {
        const ratingArea = document.createElement('div');
        ratingArea.classList.add('user-rating');

        const ratingExhibit = document.createElement('p');
        ratingExhibit.innerHTML = `<strong>${rating.username}</strong> deu ${rating.rating} estrela(s) de 5`;

        if (comment !== '') {
            const commentArea = document.createElement('p');
            commentArea.textContent = rating.comment;
            ratingArea.appendChild(commentArea);
        }

        ratingArea.appendChild(ratingExhibit);
        ratingList.appendChild(ratingArea);
    })

    renderAvgRating(averageRating);
}

function calculateAvgRating(ratings) {
    if (ratings.length === 0) {
        return 0;
    }

    const finalRating = ratings.reduce((sum, rating) => sum + (+rating.rating), 0);
    return finalRating / ratings.length;
}

function renderAvgRating(averageRating) {
    const starsContainer = document.getElementById('stars-container');
    starsContainer.innerHTML = '';
    const roundRating = Math.round(averageRating * 100) / 100;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        if (roundRating >= i) {
            star.classList.add('full');
            star.classList.add('glow');
        } else if (roundRating >= i - 0.5) {
            star.classList.add('half');
            star.classList.add('glow');
        }
        starsContainer.appendChild(star);
     }

     const ratingNumber = document.createElement('span');
     ratingNumber.id = 'rating-number';
     ratingNumber.textContent = roundRating.toFixed(2);
     starsContainer.appendChild(ratingNumber);
}

renderRatings();