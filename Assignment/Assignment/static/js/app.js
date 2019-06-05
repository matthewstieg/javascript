var tableData = data;
tbody = d3.select("tbody")

function displayData(tableData){ 
    tbody.text("")
    tableData.forEach(function(closeEncounter){
    new_tr = tbody.append("tr")
    Object.entries(closeEncounter).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}
displayData(tableData)

var dateInput = d3.select("#datetime")
var filterButton = d3.select("#filter-btn")
var resetButton = d3.select("#reset-btn")

function clickSelect(){
    d3.event.preventDefault();
    var new_table = tableData.filter(closeEncounter => closeEncounter.datetime===dateInput.property("value"));
    displayData(new_table);
}
function resetTable(){
    d3.event.preventDefault();
    displayData(tableData);
}

filterButton.on("click", clickSelect)
resetButton.on("click", resetTable)