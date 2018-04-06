
var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>timestamp</td><td>GrassCount</td><td>EatgrassCount</td><td>EatgrassCount</td><td>GishatichCount</td><td>TakardCount</td><td>TakardCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.GrassCount+"</td>";
        tableHTML+="<td>"+st.EatgrassCount+"</td>";
        tableHTML+="<td>"+st.GishatichCount+"</td>";
        tableHTML+="<td>"+st.TakardCount+"</td>";
        tableHTML+="<td>"+st.MardCount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
   console.log(statistics);
})

