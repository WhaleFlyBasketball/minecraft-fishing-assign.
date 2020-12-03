function simulateCatch(cod, salmon, tropical){
    let randNum = Math.random();
    if (randNum < cod) {
      numCod++;
      codSpanEl.innerHTML = numCod;
      resultImgEl.src = "img/Raw-Cod.png";
    } else if (randNum < salmon) {
      numSalmon++;
      salmonSpanEl.innerHTML = numSalmon;
      resultImgEl.src = "img/Raw-Salmon.png";
    } else if (randNum < tropical) {
      numTropical++;
      tropicalSpanEl.innerHTML = numTropical;
      resultImgEl.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      pufferSpanEl.innerHTML = numPuffer;
      resultImgEl.src = "img/Pufferfish.png";
    }
}