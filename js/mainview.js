function updateViewMain(){
    model.app.currentPage = 'mainsite';
    document.getElementById('content').innerHTML = `
    <div id="mainView">
        <div id="tunerHead">
        
        <h1>TUNER</h1>

        </div>

            <div>
                ${createButtons()}
                <button onclick="goToScales()">SCALES</button>

            </div>

            <form>
            <label for="tunings">Choose a tuning:</label>
            <select onchange="setChosen(this.value)" id="tunings" name="tuningson">
            <option value="0" ${model.chosenTuning == 0 ? "selected" : ""}>E Standard</option>
            <option value="1" ${model.chosenTuning == 1 ? "selected" : ""}>Eb Standard</option>
            <option value="2" ${model.chosenTuning == 2 ? "selected" : ""}>Drop D</option>
            </select>
            
            </form>
    </div>

    `;


};

/* model.tunings[model.chosenTuning] */
/* <select onchange="setChosen()" id="tunings" name="tuningson"></select> */

function setChosen(chosen) {
    model.chosenTuning = chosen;
    updateViewMain();
}
/* function setChosen() {
    model.chosenTuning = parseInt(document.getElementById("tunings").value);
    updateViewMain();
} */

function createButtons() {
    let html = '';
    
    for(let i = 0; i < model.tunings[model.chosenTuning].buttons.length; i ++) {
        let buttons = model.tunings[model.chosenTuning].buttons;
        html += `<button class="noteButtons">${buttons[i]}</button>`;
    }
    
    return html;
    
};