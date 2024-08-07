let clientsEstimations = [];

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

analyzeEstimations(clientsEstimations);


function askClientToGiveEstimation(){
    let score = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    console.log(score);
    if ( isNaN(score) || (score < 0) || (score > 10) ) {
        alert('Оценка не принята')
        return
    } else {
        clientsEstimations.push(score)
    }
}

function analyzeEstimations(scoresArray) {

    let goodEstimations = scoresArray.filter(item => item >= 5).length;

    console.log(goodEstimations);

    let notGoodEstimations = scoresArray.filter(item => item < 5).length;

    console.log(notGoodEstimations);

    alert(`Всего положительных оценок: ${goodEstimations}; всего отрицательных оценок: ${notGoodEstimations}`)

}