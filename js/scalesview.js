function updateViewScales() {
    model.app.currentPage = 'scalessite';
    document.getElementById('content').innerHTML = `
    
    <div id="ScalesPage">
    
        <div onclick="goToMain()" id="scalesHead">
        
        <h1 id="header">Scales</h1>


        </div>
        
        <div>${createScales()}</div>

        <input onchange="updateNewScaleName(this.value)" placeholder="Scale name" type="text">
        <textarea onchange="updateNewScaleTab(this.value)"  placeholder="Scale tab"></textarea>         
        <button onclick="addScale()">Add Scale</button>
        


    </div>

    `;

};

/* "updateNewScaleTab(this.value)" på input nr 2 */

function createScales() {
    let html = '';
    for(let i = 0; i < model.scales.length; i ++) {
        let scales = model.scales[i];
        html += `${scales.scaleName}
        <pre>${scales.scaleTab}</pre>
        </br>
        <button onclick="setEditing(${i})">${model.scales[i].editing === true ? "Close editing": "Modify scale"}</button>
        ${model.scales[i].editing === true ? `<input onchange="updateNewScaleName(this.value)" placeholder="New scale name"></input>` : ""}
        ${model.scales[i].editing === true ? `<textarea onchange="updateNewScaleTab(this.value)" placeholder="Edit tab"></textarea>` : ""}
        ${model.scales[i].editing === true ? `<button onclick="editScale(${i})">Modify</button>` : ""}
        <button onclick="deleteScale(${i})">Delete Scale</button>
        </br>
        </br>`;
    }
    return html;



};






/* input onchange="updateEditingScaleName(this.value)
input onchange="updateEditingScaleTab(this.value)  */


{/* <textarea rows = "5" cols = "60" name = "description">
            Enter details here...
         </textarea> */}