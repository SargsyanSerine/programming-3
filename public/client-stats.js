
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
    tableHTML = "<tr><td>Ժամանակ</td><td>Խոտ</td><td>Խոտակեր</td><td>Գիշատիչ</td><td>Թակարդ</td><td>Մարդ</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.grasscount+"</td>";
        tableHTML+="<td>"+st.eatgrasscount+"</td>";
        tableHTML+="<td>"+st.gishatichcount+"</td>";
        tableHTML+="<td>"+st.takardcount+"</td>";
        tableHTML+="<td>"+st.mardcount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})


