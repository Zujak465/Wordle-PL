var miejsce1
var miejsce2
var miejsce3
var miejsce4
var miejsce5

var miejsce6
var miejsce7
var miejsce8
var miejsce9
var miejsce10

var miejsce11
var miejsce12
var miejsce13
var miejsce14
var miejsce15

var miejsce16
var miejsce17
var miejsce18
var miejsce19
var miejsce20

var miejsce21
var miejsce22
var miejsce23
var miejsce24
var miejsce25
var miejsce26
var miejsce27
var miejsce28
var miejsce29
var miejsce30
var pas
var postep = 0
var firstletter 
    var secondletter 
    var thirdletter
    var fourthletter 
    var fifthletter

document.addEventListener("DOMContentLoaded", function() {
    var pasek = document.getElementById("szukajka");
    var ilosc = slowa.length
    var slowo = Math.floor(Math.random()*ilosc)
    var losowe = slowa[slowo]

    console.log(losowe)
    console.log(ilosc)

document.addEventListener("keydown",function(event){
    if(pasek){
    if(event.key==='Enter'){
        var pas = pasek.value
        var dlugosc=pas.length;
         firstletter = pas.charAt(0)
     secondletter = pas.charAt(1)
     thirdletter = pas.charAt(2)
     fourthletter = pas.charAt(3)
     fifthletter = pas.charAt(4)
        if(dlugosc<5){
            console.log(dlugosc)
        }
        else if (postep ===0 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo1").style.backgroundColor="lime"
                pierwszaliterag()
            }
            
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo1").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo1").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo2").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(1)!==pas.charAt(1)){
                document.getElementById("tlo2").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo2").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo3").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo3").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo3").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo4").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo4").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo4").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo5").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo5").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo5").style.backgroundColor="black"
                piataliterab()
            }
        
            miejsce1 = pas.charAt(0)
             miejsce2 = pas.charAt(1)
             miejsce3 = pas.charAt(2)
             miejsce4 = pas.charAt(3)
             miejsce5 = pas.charAt(4)
             document.getElementById("nr1").innerHTML = miejsce1
             document.getElementById("nr2").innerHTML = miejsce2
             document.getElementById("nr3").innerHTML = miejsce3
             document.getElementById("nr4").innerHTML = miejsce4
             document.getElementById("nr5").innerHTML = miejsce5
             pasek.value=""
             postep +=1
             
             if(pas.charAt(0)===losowe.charAt(0) && pas.charAt(1)===losowe.charAt(1) && pas.charAt(2)===losowe.charAt(2) && pas.charAt(3)===losowe.charAt(3) && pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
             }
        }
        else if (postep ===1 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo6").style.backgroundColor="lime"
                pierwszaliterag()
            }
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo6").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo6").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo7").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(1)!==pas.charAt(1)){
                document.getElementById("tlo7").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo7").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo8").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo8").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo8").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo9").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo9").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo9").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo10").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo10").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo10").style.backgroundColor="black"
                piataliterab()
            }
            miejsce6 = pas.charAt(0)
             miejsce7 = pas.charAt(1)
             miejsce8 = pas.charAt(2)
             miejsce9 = pas.charAt(3)
             miejsce10 = pas.charAt(4)
             document.getElementById("nr6").innerHTML = miejsce6
             document.getElementById("nr7").innerHTML = miejsce7
             document.getElementById("nr8").innerHTML = miejsce8
             document.getElementById("nr9").innerHTML = miejsce9
             document.getElementById("nr10").innerHTML = miejsce10
             pasek.value=""
             postep +=1
             if(pas.charAt(0)===losowe.charAt(0) && pas.charAt(1)===losowe.charAt(1) && pas.charAt(2)===losowe.charAt(2) && pas.charAt(3)===losowe.charAt(3) && pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
             }
        }
        else if (postep ===2 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo11").style.backgroundColor="lime"
                pierwszaliterag()
            }
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo11").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo11").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo12").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(0)!==pas.charAt(1)){
                document.getElementById("tlo12").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo12").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo13").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo13").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo13").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo14").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo14").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo14").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo15").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo15").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo15").style.backgroundColor="black"
                piataliterab()
            }
            miejsce11 = pas.charAt(0)
             miejsce12 = pas.charAt(1)
             miejsce13 = pas.charAt(2)
             miejsce14 = pas.charAt(3)
             miejsce15 = pas.charAt(4)
             document.getElementById("nr11").innerHTML = miejsce11
             document.getElementById("nr12").innerHTML = miejsce12
             document.getElementById("nr13").innerHTML = miejsce13
             document.getElementById("nr14").innerHTML = miejsce14
             document.getElementById("nr15").innerHTML = miejsce15
             pasek.value=""
             postep +=1
             if(pas.charAt(0)===losowe.charAt(0) && pas.charAt(1)===losowe.charAt(1) && pas.charAt(2)===losowe.charAt(2) && pas.charAt(3)===losowe.charAt(3) && pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
             }
             
        }
        else if (postep ===3 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo16").style.backgroundColor="lime"
                pierwszaliterag()
            }
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo16").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo16").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo17").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(1)!==pas.charAt(1)){
                document.getElementById("tlo17").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo17").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo18").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo18").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo18").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo19").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo19").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo19").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo20").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo20").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo20").style.backgroundColor="black"
                piataliterab()
            }
            miejsce16 = pas.charAt(0)
             miejsce17 = pas.charAt(1)
             miejsce18 = pas.charAt(2)
             miejsce19 = pas.charAt(3)
             miejsce20 = pas.charAt(4)
             document.getElementById("nr16").innerHTML = miejsce16
             document.getElementById("nr17").innerHTML = miejsce17
             document.getElementById("nr18").innerHTML = miejsce18
             document.getElementById("nr19").innerHTML = miejsce19
             document.getElementById("nr20").innerHTML = miejsce20
             pasek.value=""
             postep +=1
             if(pas.charAt(0)===losowe.charAt(0) && pas.charAt(1)===losowe.charAt(1) && pas.charAt(2)===losowe.charAt(2) && pas.charAt(3)===losowe.charAt(3) && pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
             }
        }
        else if (postep ===4 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo21").style.backgroundColor="lime"
                pierwszaliterag()
            }
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo21").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo21").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo22").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(1)!==pas.charAt(1)){
                document.getElementById("tlo22").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo22").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo23").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo23").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo23").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo24").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo24").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo24").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo25").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo25").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo25").style.backgroundColor="black"
                piataliterab()
            }
            miejsce21 = pas.charAt(0)
             miejsce22 = pas.charAt(1)
             miejsce23 = pas.charAt(2)
             miejsce24 = pas.charAt(3)
             miejsce25 = pas.charAt(4)
             document.getElementById("nr21").innerHTML = miejsce21
             document.getElementById("nr22").innerHTML = miejsce22
             document.getElementById("nr23").innerHTML = miejsce23
             document.getElementById("nr24").innerHTML = miejsce24
             document.getElementById("nr25").innerHTML = miejsce25
             pasek.value=""
             postep +=1
             if(pas.charAt(0)===losowe.charAt(0) && pas.charAt(1)===losowe.charAt(1) && pas.charAt(2)===losowe.charAt(2) && pas.charAt(3)===losowe.charAt(3) && pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
             }
        }
        else if (postep ===5 && slowa.includes(pas)){
            if(pas.charAt(0)===losowe.charAt(0)){
                document.getElementById("tlo26").style.backgroundColor="lime"
                pierwszaliterag()
            }
            else if(losowe.includes(pas.charAt(0)) && losowe.charAt(0)!==pas.charAt(0)){
                document.getElementById("tlo26").style.backgroundColor="yellow"
                pierwszaliteray()
            }
            else if(pas.charAt(0)!==losowe.charAt(0)){
                document.getElementById("tlo26").style.backgroundColor="black"
                pierwszaliterab()
            }
            if(pas.charAt(1)===losowe.charAt(1)){
                document.getElementById("tlo27").style.backgroundColor="lime"
                drugaliterag()
            }
            else if(losowe.includes(pas.charAt(1)) && losowe.charAt(1)!==pas.charAt(1)){
                document.getElementById("tlo27").style.backgroundColor="yellow"
                drugaliteray()
            }
            else if(pas.charAt(1)!==losowe.charAt(1)){
                document.getElementById("tlo27").style.backgroundColor="black"
                drugaliterab()
            }
            if(pas.charAt(2)===losowe.charAt(2)){
                document.getElementById("tlo28").style.backgroundColor="lime"
                trzecialiterag()
            }
            else if(losowe.includes(pas.charAt(2)) && losowe.charAt(2)!==pas.charAt(2)){
                document.getElementById("tlo28").style.backgroundColor="yellow"
                trzecialiteray()
            }
            else if(pas.charAt(2)!==losowe.charAt(2)){
                document.getElementById("tlo28").style.backgroundColor="black"
                trzecialiterab()
            }
            if(pas.charAt(3)===losowe.charAt(3)){
                document.getElementById("tlo29").style.backgroundColor="lime"
                czwartaliterag()
            }
            else if(losowe.includes(pas.charAt(3)) && losowe.charAt(3)!==pas.charAt(3)){
                document.getElementById("tlo29").style.backgroundColor="yellow"
                czwartaliteray()
            }
            else if(pas.charAt(3)!==losowe.charAt(3)){
                document.getElementById("tlo29").style.backgroundColor="black"
                czwartaliterab()
            }
            if(pas.charAt(4)===losowe.charAt(4)){
                document.getElementById("tlo30").style.backgroundColor="lime"
                piataliterag()
            }
            else if(losowe.includes(pas.charAt(4)) && losowe.charAt(4)!==pas.charAt(4)){
                document.getElementById("tlo30").style.backgroundColor="yellow"
                piataliteray()
            }
            else if(pas.charAt(4)!==losowe.charAt(4)){
                document.getElementById("tlo30").style.backgroundColor="black"
                piataliterab()
            }
            miejsce26 = pas.charAt(0)
             miejsce27 = pas.charAt(1)
             miejsce28 = pas.charAt(2)
             miejsce29 = pas.charAt(3)
             miejsce30 = pas.charAt(4)
             document.getElementById("nr26").innerHTML = miejsce26
             document.getElementById("nr27").innerHTML = miejsce27
             document.getElementById("nr28").innerHTML = miejsce28
             document.getElementById("nr29").innerHTML = miejsce29
             document.getElementById("nr30").innerHTML = miejsce30
             pasek.value=""
             document.getElementById("title").innerHTML=losowe
             document.getElementById("slowko").innerHTML=losowe
             document.getElementById("win").style.display="flex"
             setTimeout(function(){
                document.getElementById("win").style.display="none"
             },2000)
             document.getElementById("szukajka").disabled
        }
        
    }}
})

var pierwszaliterag = function(){
    switch (firstletter) {
        case 'a':
        document.getElementById("literkaa").style.color="green";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="green";
        break;
        case 'b':
        document.getElementById("literkab").style.color="green";
        break;
        case 'c':
        document.getElementById("literkac").style.color="green";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="green";
        break;
        case 'd':
        document.getElementById("literkad").style.color="green";
        break;
        case 'e':
        document.getElementById("literkae").style.color="green";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="green";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="green";
        break;
        case 'g':
        document.getElementById("literkag").style.color="green";
        break;
        case 'h':
        document.getElementById("literkah").style.color="green";
        break;
        case 'i':
        document.getElementById("literkai").style.color="green";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="green";
        break;
        case 'k':
        document.getElementById("literkak").style.color="green";
        break;
        case 'l':
        document.getElementById("literkal").style.color="green";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="green";
        break;
        case 'm':
        document.getElementById("literkam").style.color="green";
        break;
        case 'n':
        document.getElementById("literkan").style.color="green";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="green";
        break;
        case 'o':
        document.getElementById("literkao").style.color="green";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="green";
        break;
        case 'p':
        document.getElementById("literkap").style.color="green";
        break;
        case 'r':
        document.getElementById("literkar").style.color="green";
        break;
        case 's':
        document.getElementById("literkas").style.color="green";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="green";
        break;
        case 't':
        document.getElementById("literkat").style.color="green";
        break;
        case 'u':
        document.getElementById("literkau").style.color="green";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="green";
        break;
        case 'y':
        document.getElementById("literkay").style.color="green";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="green";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="green";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="green";
        break;
        
    default:
        break;
}
}
var drugaliterag = function(){
    switch (secondletter) {
        case 'a':
        document.getElementById("literkaa").style.color="green";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="green";
        break;
        case 'b':
        document.getElementById("literkab").style.color="green";
        break;
        case 'c':
        document.getElementById("literkac").style.color="green";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="green";
        break;
        case 'd':
        document.getElementById("literkad").style.color="green";
        break;
        case 'e':
        document.getElementById("literkae").style.color="green";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="green";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="green";
        break;
        case 'g':
        document.getElementById("literkag").style.color="green";
        break;
        case 'h':
        document.getElementById("literkah").style.color="green";
        break;
        case 'i':
        document.getElementById("literkai").style.color="green";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="green";
        break;
        case 'k':
        document.getElementById("literkak").style.color="green";
        break;
        case 'l':
        document.getElementById("literkal").style.color="green";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="green";
        break;
        case 'm':
        document.getElementById("literkam").style.color="green";
        break;
        case 'n':
        document.getElementById("literkan").style.color="green";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="green";
        break;
        case 'o':
        document.getElementById("literkao").style.color="green";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="green";
        break;
        case 'p':
        document.getElementById("literkap").style.color="green";
        break;
        case 'r':
        document.getElementById("literkar").style.color="green";
        break;
        case 's':
        document.getElementById("literkas").style.color="green";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="green";
        break;
        case 't':
        document.getElementById("literkat").style.color="green";
        break;
        case 'u':
        document.getElementById("literkau").style.color="green";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="green";
        break;
        case 'y':
        document.getElementById("literkay").style.color="green";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="green";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="green";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="green";
        break;
        
    default:
        break;
}
}
var trzecialiterag = function(){
    switch (thirdletter) {
        case 'a':
        document.getElementById("literkaa").style.color="green";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="green";
        break;
        case 'b':
        document.getElementById("literkab").style.color="green";
        break;
        case 'c':
        document.getElementById("literkac").style.color="green";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="green";
        break;
        case 'd':
        document.getElementById("literkad").style.color="green";
        break;
        case 'e':
        document.getElementById("literkae").style.color="green";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="green";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="green";
        break;
        case 'g':
        document.getElementById("literkag").style.color="green";
        break;
        case 'h':
        document.getElementById("literkah").style.color="green";
        break;
        case 'i':
        document.getElementById("literkai").style.color="green";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="green";
        break;
        case 'k':
        document.getElementById("literkak").style.color="green";
        break;
        case 'l':
        document.getElementById("literkal").style.color="green";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="green";
        break;
        case 'm':
        document.getElementById("literkam").style.color="green";
        break;
        case 'n':
        document.getElementById("literkan").style.color="green";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="green";
        break;
        case 'o':
        document.getElementById("literkao").style.color="green";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="green";
        break;
        case 'p':
        document.getElementById("literkap").style.color="green";
        break;
        case 'r':
        document.getElementById("literkar").style.color="green";
        break;
        case 's':
        document.getElementById("literkas").style.color="green";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="green";
        break;
        case 't':
        document.getElementById("literkat").style.color="green";
        break;
        case 'u':
        document.getElementById("literkau").style.color="green";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="green";
        break;
        case 'y':
        document.getElementById("literkay").style.color="green";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="green";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="green";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="green";
        break;
        
    default:
        break;
}
}
var czwartaliterag = function(){
    switch (fourthletter) {
        case 'a':
        document.getElementById("literkaa").style.color="green";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="green";
        break;
        case 'b':
        document.getElementById("literkab").style.color="green";
        break;
        case 'c':
        document.getElementById("literkac").style.color="green";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="green";
        break;
        case 'd':
        document.getElementById("literkad").style.color="green";
        break;
        case 'e':
        document.getElementById("literkae").style.color="green";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="green";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="green";
        break;
        case 'g':
        document.getElementById("literkag").style.color="green";
        break;
        case 'h':
        document.getElementById("literkah").style.color="green";
        break;
        case 'i':
        document.getElementById("literkai").style.color="green";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="green";
        break;
        case 'k':
        document.getElementById("literkak").style.color="green";
        break;
        case 'l':
        document.getElementById("literkal").style.color="green";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="green";
        break;
        case 'm':
        document.getElementById("literkam").style.color="green";
        break;
        case 'n':
        document.getElementById("literkan").style.color="green";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="green";
        break;
        case 'o':
        document.getElementById("literkao").style.color="green";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="green";
        break;
        case 'p':
        document.getElementById("literkap").style.color="green";
        break;
        case 'r':
        document.getElementById("literkar").style.color="green";
        break;
        case 's':
        document.getElementById("literkas").style.color="green";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="green";
        break;
        case 't':
        document.getElementById("literkat").style.color="green";
        break;
        case 'u':
        document.getElementById("literkau").style.color="green";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="green";
        break;
        case 'y':
        document.getElementById("literkay").style.color="green";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="green";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="green";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="green";
        break;
        
    default:
        break;
}
}
var piataliterag = function(){
    switch (fifthletter) {
        case 'a':
        document.getElementById("literkaa").style.color="green";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="green";
        break;
        case 'b':
        document.getElementById("literkab").style.color="green";
        break;
        case 'c':
        document.getElementById("literkac").style.color="green";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="green";
        break;
        case 'd':
        document.getElementById("literkad").style.color="green";
        break;
        case 'e':
        document.getElementById("literkae").style.color="green";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="green";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="green";
        break;
        case 'g':
        document.getElementById("literkag").style.color="green";
        break;
        case 'h':
        document.getElementById("literkah").style.color="green";
        break;
        case 'i':
        document.getElementById("literkai").style.color="green";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="green";
        break;
        case 'k':
        document.getElementById("literkak").style.color="green";
        break;
        case 'l':
        document.getElementById("literkal").style.color="green";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="green";
        break;
        case 'm':
        document.getElementById("literkam").style.color="green";
        break;
        case 'n':
        document.getElementById("literkan").style.color="green";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="green";
        break;
        case 'o':
        document.getElementById("literkao").style.color="green";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="green";
        break;
        case 'p':
        document.getElementById("literkap").style.color="green";
        break;
        case 'r':
        document.getElementById("literkar").style.color="green";
        break;
        case 's':
        document.getElementById("literkas").style.color="green";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="green";
        break;
        case 't':
        document.getElementById("literkat").style.color="green";
        break;
        case 'u':
        document.getElementById("literkau").style.color="green";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="green";
        break;
        case 'y':
        document.getElementById("literkay").style.color="green";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="green";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="green";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="green";
        break;
        
    default:
        break;
}
}
var pierwszaliteray = function(){
    switch (firstletter) {
        case 'a':
            if(document.getElementById("literkaa").style.color!=="green"){
        document.getElementById("literkaa").style.color="yellow";}
        break;
        case 'ą':
            if(document.getElementById("literkaa2").style.color!=="green"){
        document.getElementById("literkaa2").style.color="yellow";}
        break;
        case 'b':
            if(document.getElementById("literkab").style.color!=="green"){
        document.getElementById("literkab").style.color="yellow";}
        break;
        case 'c':
            if(document.getElementById("literkac").style.color!=="green"){
        document.getElementById("literkac").style.color="yellow";}
        break;
        case 'ć':
            if(document.getElementById("literkac2").style.color!=="green"){
        document.getElementById("literkac2").style.color="yellow";}
        break;
        case 'd':
            if(document.getElementById("literkad").style.color!=="green"){
        document.getElementById("literkad").style.color="yellow";}
        break;
        case 'e':
            if(document.getElementById("literkae").style.color!=="green"){
        document.getElementById("literkae").style.color="yellow";}
        break;
        case 'ę':
            if(document.getElementById("literkae2").style.color!=="green"){
        document.getElementById("literkae2").style.color="yellow";}
        break;
        case 'f':
            if(document.getElementById("literkaf").style.color!=="green"){
        document.getElementById("literkaf").style.color="yellow";}
        break;
        case 'g':
            if(document.getElementById("literkag").style.color!=="green"){
        document.getElementById("literkag").style.color="yellow";}
        break;
        case 'h':
            if(document.getElementById("literkah").style.color!=="green"){
        document.getElementById("literkah").style.color="yellow";}
        break;
        case 'i':
            if(document.getElementById("literkai").style.color!=="green"){
        document.getElementById("literkai").style.color="yellow";}
        break;
        case 'j':
            if(document.getElementById("literkaj").style.color!=="green"){
        document.getElementById("literkaj").style.color="yellow";}
        break;
        case 'k':
            if(document.getElementById("literkak").style.color!=="green"){
        document.getElementById("literkak").style.color="yellow";}
        break;
        case 'l':
            if(document.getElementById("literkal").style.color!=="green"){
        document.getElementById("literkal").style.color="yellow";}
        break;
        case 'ł':
            if(document.getElementById("literkal2").style.color!=="green"){
        document.getElementById("literkal2").style.color="yellow";}
        break;
        case 'm':
            if(document.getElementById("literkam").style.color!=="green"){
        document.getElementById("literkam").style.color="yellow";}
        break;
        case 'n':
            if(document.getElementById("literkan").style.color!=="green"){
        document.getElementById("literkan").style.color="yellow";}
        break;
        case 'ń':
            if(document.getElementById("literkan2").style.color!=="green"){
        document.getElementById("literkan2").style.color="yellow";}
        break;
        case 'o':
            if(document.getElementById("literkao").style.color!=="green"){
        document.getElementById("literkao").style.color="yellow";}
        break;
        case 'ó':
            if(document.getElementById("literkao2").style.color!=="green"){
        document.getElementById("literkao2").style.color="yellow";}
        break;
        case 'p':
            if(document.getElementById("literkap").style.color!=="green"){
        document.getElementById("literkap").style.color="yellow";}
        break;
        case 'r':
            if(document.getElementById("literkar").style.color!=="green"){
        document.getElementById("literkar").style.color="yellow";}
        break;
        case 's':
            if(document.getElementById("literkas").style.color!=="green"){
        document.getElementById("literkas").style.color="yellow";}
        break;
        case 'ś':
            if(document.getElementById("literkas2").style.color!=="green"){
        document.getElementById("literkas2").style.color="yellow";}
        break;
        case 't':
            if(document.getElementById("literkat").style.color!=="green"){
        document.getElementById("literkat").style.color="yellow";}
        break;
        case 'u':
            if(document.getElementById("literkau").style.color!=="green"){
        document.getElementById("literkau").style.color="yellow";}
        break;
        case 'w':
            if(document.getElementById("literkaw").style.color!=="green"){
        document.getElementById("literkaw").style.color="yellow";}
        break;
        case 'y':
            if(document.getElementById("literkay").style.color!=="green"){
        document.getElementById("literkay").style.color="yellow";}
        break;
        case 'z':
            if(document.getElementById("literkaz").style.color!=="green"){
        document.getElementById("literkaz").style.color="yellow";}
        break;
        case 'ź':
            if(document.getElementById("literkaz2").style.color="green"){
        document.getElementById("literkaz2").style.color="yellow";}
        break;
        case 'ż':
            if(document.getElementById("literkaz3").style.color!=="green"){
        document.getElementById("literkaz3").style.color="yellow";}
        break;
        
    default:
        break;
}
}
var drugaliteray = function(){
    switch(secondletter){
        case 'a':
            if(document.getElementById("literkaa").style.color!=="green"){
        document.getElementById("literkaa").style.color="yellow";}
        break;
        case 'ą':
            if(document.getElementById("literkaa2").style.color!=="green"){
        document.getElementById("literkaa2").style.color="yellow";}
        break;
        case 'b':
            if(document.getElementById("literkab").style.color!=="green"){
        document.getElementById("literkab").style.color="yellow";}
        break;
        case 'c':
            if(document.getElementById("literkac").style.color!=="green"){
        document.getElementById("literkac").style.color="yellow";}
        break;
        case 'ć':
            if(document.getElementById("literkac2").style.color!=="green"){
        document.getElementById("literkac2").style.color="yellow";}
        break;
        case 'd':
            if(document.getElementById("literkad").style.color!=="green"){
        document.getElementById("literkad").style.color="yellow";}
        break;
        case 'e':
            if(document.getElementById("literkae").style.color!=="green"){
        document.getElementById("literkae").style.color="yellow";}
        break;
        case 'ę':
            if(document.getElementById("literkae2").style.color!=="green"){
        document.getElementById("literkae2").style.color="yellow";}
        break;
        case 'f':
            if(document.getElementById("literkaf").style.color!=="green"){
        document.getElementById("literkaf").style.color="yellow";}
        break;
        case 'g':
            if(document.getElementById("literkag").style.color!=="green"){
        document.getElementById("literkag").style.color="yellow";}
        break;
        case 'h':
            if(document.getElementById("literkah").style.color!=="green"){
        document.getElementById("literkah").style.color="yellow";}
        break;
        case 'i':
            if(document.getElementById("literkai").style.color!=="green"){
        document.getElementById("literkai").style.color="yellow";}
        break;
        case 'j':
            if(document.getElementById("literkaj").style.color!=="green"){
        document.getElementById("literkaj").style.color="yellow";}
        break;
        case 'k':
            if(document.getElementById("literkak").style.color!=="green"){
        document.getElementById("literkak").style.color="yellow";}
        break;
        case 'l':
            if(document.getElementById("literkal").style.color!=="green"){
        document.getElementById("literkal").style.color="yellow";}
        break;
        case 'ł':
            if(document.getElementById("literkal2").style.color!=="green"){
        document.getElementById("literkal2").style.color="yellow";}
        break;
        case 'm':
            if(document.getElementById("literkam").style.color!=="green"){
        document.getElementById("literkam").style.color="yellow";}
        break;
        case 'n':
            if(document.getElementById("literkan").style.color!=="green"){
        document.getElementById("literkan").style.color="yellow";}
        break;
        case 'ń':
            if(document.getElementById("literkan2").style.color!=="green"){
        document.getElementById("literkan2").style.color="yellow";}
        break;
        case 'o':
            if(document.getElementById("literkao").style.color!=="green"){
        document.getElementById("literkao").style.color="yellow";}
        break;
        case 'ó':
            if(document.getElementById("literkao2").style.color!=="green"){
        document.getElementById("literkao2").style.color="yellow";}
        break;
        case 'p':
            if(document.getElementById("literkap").style.color!=="green"){
        document.getElementById("literkap").style.color="yellow";}
        break;
        case 'r':
            if(document.getElementById("literkar").style.color!=="green"){
        document.getElementById("literkar").style.color="yellow";}
        break;
        case 's':
            if(document.getElementById("literkas").style.color!=="green"){
        document.getElementById("literkas").style.color="yellow";}
        break;
        case 'ś':
            if(document.getElementById("literkas2").style.color!=="green"){
        document.getElementById("literkas2").style.color="yellow";}
        break;
        case 't':
            if(document.getElementById("literkat").style.color!=="green"){
        document.getElementById("literkat").style.color="yellow";}
        break;
        case 'u':
            if(document.getElementById("literkau").style.color!=="green"){
        document.getElementById("literkau").style.color="yellow";}
        break;
        case 'w':
            if(document.getElementById("literkaw").style.color!=="green"){
        document.getElementById("literkaw").style.color="yellow";}
        break;
        case 'y':
            if(document.getElementById("literkay").style.color!=="green"){
        document.getElementById("literkay").style.color="yellow";}
        break;
        case 'z':
            if(document.getElementById("literkaz").style.color!=="green"){
        document.getElementById("literkaz").style.color="yellow";}
        break;
        case 'ź':
            if(document.getElementById("literkaz2").style.color="green"){
        document.getElementById("literkaz2").style.color="yellow";}
        break;
        case 'ż':
            if(document.getElementById("literkaz3").style.color!=="green"){
        document.getElementById("literkaz3").style.color="yellow";}
        break;
        
    default:
        break;
    }
}
var trzecialiteray = function(){
    switch (thirdletter) {
        case 'a':
            if(document.getElementById("literkaa").style.color!=="green"){
        document.getElementById("literkaa").style.color="yellow";}
        break;
        case 'ą':
            if(document.getElementById("literkaa2").style.color!=="green"){
        document.getElementById("literkaa2").style.color="yellow";}
        break;
        case 'b':
            if(document.getElementById("literkab").style.color!=="green"){
        document.getElementById("literkab").style.color="yellow";}
        break;
        case 'c':
            if(document.getElementById("literkac").style.color!=="green"){
        document.getElementById("literkac").style.color="yellow";}
        break;
        case 'ć':
            if(document.getElementById("literkac2").style.color!=="green"){
        document.getElementById("literkac2").style.color="yellow";}
        break;
        case 'd':
            if(document.getElementById("literkad").style.color!=="green"){
        document.getElementById("literkad").style.color="yellow";}
        break;
        case 'e':
            if(document.getElementById("literkae").style.color!=="green"){
        document.getElementById("literkae").style.color="yellow";}
        break;
        case 'ę':
            if(document.getElementById("literkae2").style.color!=="green"){
        document.getElementById("literkae2").style.color="yellow";}
        break;
        case 'f':
            if(document.getElementById("literkaf").style.color!=="green"){
        document.getElementById("literkaf").style.color="yellow";}
        break;
        case 'g':
            if(document.getElementById("literkag").style.color!=="green"){
        document.getElementById("literkag").style.color="yellow";}
        break;
        case 'h':
            if(document.getElementById("literkah").style.color!=="green"){
        document.getElementById("literkah").style.color="yellow";}
        break;
        case 'i':
            if(document.getElementById("literkai").style.color!=="green"){
        document.getElementById("literkai").style.color="yellow";}
        break;
        case 'j':
            if(document.getElementById("literkaj").style.color!=="green"){
        document.getElementById("literkaj").style.color="yellow";}
        break;
        case 'k':
            if(document.getElementById("literkak").style.color!=="green"){
        document.getElementById("literkak").style.color="yellow";}
        break;
        case 'l':
            if(document.getElementById("literkal").style.color!=="green"){
        document.getElementById("literkal").style.color="yellow";}
        break;
        case 'ł':
            if(document.getElementById("literkal2").style.color!=="green"){
        document.getElementById("literkal2").style.color="yellow";}
        break;
        case 'm':
            if(document.getElementById("literkam").style.color!=="green"){
        document.getElementById("literkam").style.color="yellow";}
        break;
        case 'n':
            if(document.getElementById("literkan").style.color!=="green"){
        document.getElementById("literkan").style.color="yellow";}
        break;
        case 'ń':
            if(document.getElementById("literkan2").style.color!=="green"){
        document.getElementById("literkan2").style.color="yellow";}
        break;
        case 'o':
            if(document.getElementById("literkao").style.color!=="green"){
        document.getElementById("literkao").style.color="yellow";}
        break;
        case 'ó':
            if(document.getElementById("literkao2").style.color!=="green"){
        document.getElementById("literkao2").style.color="yellow";}
        break;
        case 'p':
            if(document.getElementById("literkap").style.color!=="green"){
        document.getElementById("literkap").style.color="yellow";}
        break;
        case 'r':
            if(document.getElementById("literkar").style.color!=="green"){
        document.getElementById("literkar").style.color="yellow";}
        break;
        case 's':
            if(document.getElementById("literkas").style.color!=="green"){
        document.getElementById("literkas").style.color="yellow";}
        break;
        case 'ś':
            if(document.getElementById("literkas2").style.color!=="green"){
        document.getElementById("literkas2").style.color="yellow";}
        break;
        case 't':
            if(document.getElementById("literkat").style.color!=="green"){
        document.getElementById("literkat").style.color="yellow";}
        break;
        case 'u':
            if(document.getElementById("literkau").style.color!=="green"){
        document.getElementById("literkau").style.color="yellow";}
        break;
        case 'w':
            if(document.getElementById("literkaw").style.color!=="green"){
        document.getElementById("literkaw").style.color="yellow";}
        break;
        case 'y':
            if(document.getElementById("literkay").style.color!=="green"){
        document.getElementById("literkay").style.color="yellow";}
        break;
        case 'z':
            if(document.getElementById("literkaz").style.color!=="green"){
        document.getElementById("literkaz").style.color="yellow";}
        break;
        case 'ź':
            if(document.getElementById("literkaz2").style.color="green"){
        document.getElementById("literkaz2").style.color="yellow";}
        break;
        case 'ż':
            if(document.getElementById("literkaz3").style.color!=="green"){
        document.getElementById("literkaz3").style.color="yellow";}
        break;
        
    default:
        break;
}
}
var czwartaliteray =function(){
switch (fourthletter) {
    case 'a':
            if(document.getElementById("literkaa").style.color!=="green"){
        document.getElementById("literkaa").style.color="yellow";}
        break;
        case 'ą':
            if(document.getElementById("literkaa2").style.color!=="green"){
        document.getElementById("literkaa2").style.color="yellow";}
        break;
        case 'b':
            if(document.getElementById("literkab").style.color!=="green"){
        document.getElementById("literkab").style.color="yellow";}
        break;
        case 'c':
            if(document.getElementById("literkac").style.color!=="green"){
        document.getElementById("literkac").style.color="yellow";}
        break;
        case 'ć':
            if(document.getElementById("literkac2").style.color!=="green"){
        document.getElementById("literkac2").style.color="yellow";}
        break;
        case 'd':
            if(document.getElementById("literkad").style.color!=="green"){
        document.getElementById("literkad").style.color="yellow";}
        break;
        case 'e':
            if(document.getElementById("literkae").style.color!=="green"){
        document.getElementById("literkae").style.color="yellow";}
        break;
        case 'ę':
            if(document.getElementById("literkae2").style.color!=="green"){
        document.getElementById("literkae2").style.color="yellow";}
        break;
        case 'f':
            if(document.getElementById("literkaf").style.color!=="green"){
        document.getElementById("literkaf").style.color="yellow";}
        break;
        case 'g':
            if(document.getElementById("literkag").style.color!=="green"){
        document.getElementById("literkag").style.color="yellow";}
        break;
        case 'h':
            if(document.getElementById("literkah").style.color!=="green"){
        document.getElementById("literkah").style.color="yellow";}
        break;
        case 'i':
            if(document.getElementById("literkai").style.color!=="green"){
        document.getElementById("literkai").style.color="yellow";}
        break;
        case 'j':
            if(document.getElementById("literkaj").style.color!=="green"){
        document.getElementById("literkaj").style.color="yellow";}
        break;
        case 'k':
            if(document.getElementById("literkak").style.color!=="green"){
        document.getElementById("literkak").style.color="yellow";}
        break;
        case 'l':
            if(document.getElementById("literkal").style.color!=="green"){
        document.getElementById("literkal").style.color="yellow";}
        break;
        case 'ł':
            if(document.getElementById("literkal2").style.color!=="green"){
        document.getElementById("literkal2").style.color="yellow";}
        break;
        case 'm':
            if(document.getElementById("literkam").style.color!=="green"){
        document.getElementById("literkam").style.color="yellow";}
        break;
        case 'n':
            if(document.getElementById("literkan").style.color!=="green"){
        document.getElementById("literkan").style.color="yellow";}
        break;
        case 'ń':
            if(document.getElementById("literkan2").style.color!=="green"){
        document.getElementById("literkan2").style.color="yellow";}
        break;
        case 'o':
            if(document.getElementById("literkao").style.color!=="green"){
        document.getElementById("literkao").style.color="yellow";}
        break;
        case 'ó':
            if(document.getElementById("literkao2").style.color!=="green"){
        document.getElementById("literkao2").style.color="yellow";}
        break;
        case 'p':
            if(document.getElementById("literkap").style.color!=="green"){
        document.getElementById("literkap").style.color="yellow";}
        break;
        case 'r':
            if(document.getElementById("literkar").style.color!=="green"){
        document.getElementById("literkar").style.color="yellow";}
        break;
        case 's':
            if(document.getElementById("literkas").style.color!=="green"){
        document.getElementById("literkas").style.color="yellow";}
        break;
        case 'ś':
            if(document.getElementById("literkas2").style.color!=="green"){
        document.getElementById("literkas2").style.color="yellow";}
        break;
        case 't':
            if(document.getElementById("literkat").style.color!=="green"){
        document.getElementById("literkat").style.color="yellow";}
        break;
        case 'u':
            if(document.getElementById("literkau").style.color!=="green"){
        document.getElementById("literkau").style.color="yellow";}
        break;
        case 'w':
            if(document.getElementById("literkaw").style.color!=="green"){
        document.getElementById("literkaw").style.color="yellow";}
        break;
        case 'y':
            if(document.getElementById("literkay").style.color!=="green"){
        document.getElementById("literkay").style.color="yellow";}
        break;
        case 'z':
            if(document.getElementById("literkaz").style.color!=="green"){
        document.getElementById("literkaz").style.color="yellow";}
        break;
        case 'ź':
            if(document.getElementById("literkaz2").style.color="green"){
        document.getElementById("literkaz2").style.color="yellow";}
        break;
        case 'ż':
            if(document.getElementById("literkaz3").style.color!=="green"){
        document.getElementById("literkaz3").style.color="yellow";}
        break;
        
    default:
        break;
}}
var piataliteray = function(){
    switch (fifthletter) {
        case 'a':
            if(document.getElementById("literkaa").style.color!=="green"){
        document.getElementById("literkaa").style.color="yellow";}
        break;
        case 'ą':
            if(document.getElementById("literkaa2").style.color!=="green"){
        document.getElementById("literkaa2").style.color="yellow";}
        break;
        case 'b':
            if(document.getElementById("literkab").style.color!=="green"){
        document.getElementById("literkab").style.color="yellow";}
        break;
        case 'c':
            if(document.getElementById("literkac").style.color!=="green"){
        document.getElementById("literkac").style.color="yellow";}
        break;
        case 'ć':
            if(document.getElementById("literkac2").style.color!=="green"){
        document.getElementById("literkac2").style.color="yellow";}
        break;
        case 'd':
            if(document.getElementById("literkad").style.color!=="green"){
        document.getElementById("literkad").style.color="yellow";}
        break;
        case 'e':
            if(document.getElementById("literkae").style.color!=="green"){
        document.getElementById("literkae").style.color="yellow";}
        break;
        case 'ę':
            if(document.getElementById("literkae2").style.color!=="green"){
        document.getElementById("literkae2").style.color="yellow";}
        break;
        case 'f':
            if(document.getElementById("literkaf").style.color!=="green"){
        document.getElementById("literkaf").style.color="yellow";}
        break;
        case 'g':
            if(document.getElementById("literkag").style.color!=="green"){
        document.getElementById("literkag").style.color="yellow";}
        break;
        case 'h':
            if(document.getElementById("literkah").style.color!=="green"){
        document.getElementById("literkah").style.color="yellow";}
        break;
        case 'i':
            if(document.getElementById("literkai").style.color!=="green"){
        document.getElementById("literkai").style.color="yellow";}
        break;
        case 'j':
            if(document.getElementById("literkaj").style.color!=="green"){
        document.getElementById("literkaj").style.color="yellow";}
        break;
        case 'k':
            if(document.getElementById("literkak").style.color!=="green"){
        document.getElementById("literkak").style.color="yellow";}
        break;
        case 'l':
            if(document.getElementById("literkal").style.color!=="green"){
        document.getElementById("literkal").style.color="yellow";}
        break;
        case 'ł':
            if(document.getElementById("literkal2").style.color!=="green"){
        document.getElementById("literkal2").style.color="yellow";}
        break;
        case 'm':
            if(document.getElementById("literkam").style.color!=="green"){
        document.getElementById("literkam").style.color="yellow";}
        break;
        case 'n':
            if(document.getElementById("literkan").style.color!=="green"){
        document.getElementById("literkan").style.color="yellow";}
        break;
        case 'ń':
            if(document.getElementById("literkan2").style.color!=="green"){
        document.getElementById("literkan2").style.color="yellow";}
        break;
        case 'o':
            if(document.getElementById("literkao").style.color!=="green"){
        document.getElementById("literkao").style.color="yellow";}
        break;
        case 'ó':
            if(document.getElementById("literkao2").style.color!=="green"){
        document.getElementById("literkao2").style.color="yellow";}
        break;
        case 'p':
            if(document.getElementById("literkap").style.color!=="green"){
        document.getElementById("literkap").style.color="yellow";}
        break;
        case 'r':
            if(document.getElementById("literkar").style.color!=="green"){
        document.getElementById("literkar").style.color="yellow";}
        break;
        case 's':
            if(document.getElementById("literkas").style.color!=="green"){
        document.getElementById("literkas").style.color="yellow";}
        break;
        case 'ś':
            if(document.getElementById("literkas2").style.color!=="green"){
        document.getElementById("literkas2").style.color="yellow";}
        break;
        case 't':
            if(document.getElementById("literkat").style.color!=="green"){
        document.getElementById("literkat").style.color="yellow";}
        break;
        case 'u':
            if(document.getElementById("literkau").style.color!=="green"){
        document.getElementById("literkau").style.color="yellow";}
        break;
        case 'w':
            if(document.getElementById("literkaw").style.color!=="green"){
        document.getElementById("literkaw").style.color="yellow";}
        break;
        case 'y':
            if(document.getElementById("literkay").style.color!=="green"){
        document.getElementById("literkay").style.color="yellow";}
        break;
        case 'z':
            if(document.getElementById("literkaz").style.color!=="green"){
        document.getElementById("literkaz").style.color="yellow";}
        break;
        case 'ź':
            if(document.getElementById("literkaz2").style.color="green"){
        document.getElementById("literkaz2").style.color="yellow";}
        break;
        case 'ż':
            if(document.getElementById("literkaz3").style.color!=="green"){
        document.getElementById("literkaz3").style.color="yellow";}
        break;
        
    default:
        break;
}
}
var pierwszaliterab = function(){
    switch (firstletter) {
        case 'a':
        document.getElementById("literkaa").style.color="black";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="black";
        break;
        case 'b':
        document.getElementById("literkab").style.color="black";
        break;
        case 'c':
        document.getElementById("literkac").style.color="black";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="black";
        break;
        case 'd':
        document.getElementById("literkad").style.color="black";
        break;
        case 'e':
        document.getElementById("literkae").style.color="black";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="black";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="black";
        break;
        case 'g':
        document.getElementById("literkag").style.color="black";
        break;
        case 'h':
        document.getElementById("literkah").style.color="black";
        break;
        case 'i':
        document.getElementById("literkai").style.color="black";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="black";
        break;
        case 'k':
        document.getElementById("literkak").style.color="black";
        break;
        case 'l':
        document.getElementById("literkal").style.color="black";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="black";
        break;
        case 'm':
        document.getElementById("literkam").style.color="black";
        break;
        case 'n':
        document.getElementById("literkan").style.color="black";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="black";
        break;
        case 'o':
        document.getElementById("literkao").style.color="black";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="black";
        break;
        case 'p':
        document.getElementById("literkap").style.color="black";
        break;
        case 'r':
        document.getElementById("literkar").style.color="black";
        break;
        case 's':
        document.getElementById("literkas").style.color="black";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="black";
        break;
        case 't':
        document.getElementById("literkat").style.color="black";
        break;
        case 'u':
        document.getElementById("literkau").style.color="black";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="black";
        break;
        case 'y':
        document.getElementById("literkay").style.color="black";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="black";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="black";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="black";
        break;
        
    default:
        break;
}
}
var drugaliterab = function(){
    switch (secondletter) {
        case 'a':
        document.getElementById("literkaa").style.color="black";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="black";
        break;
        case 'b':
        document.getElementById("literkab").style.color="black";
        break;
        case 'c':
        document.getElementById("literkac").style.color="black";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="black";
        break;
        case 'd':
        document.getElementById("literkad").style.color="black";
        break;
        case 'e':
        document.getElementById("literkae").style.color="black";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="black";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="black";
        break;
        case 'g':
        document.getElementById("literkag").style.color="black";
        break;
        case 'h':
        document.getElementById("literkah").style.color="black";
        break;
        case 'i':
        document.getElementById("literkai").style.color="black";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="black";
        break;
        case 'k':
        document.getElementById("literkak").style.color="black";
        break;
        case 'l':
        document.getElementById("literkal").style.color="black";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="black";
        break;
        case 'm':
        document.getElementById("literkam").style.color="black";
        break;
        case 'n':
        document.getElementById("literkan").style.color="black";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="black";
        break;
        case 'o':
        document.getElementById("literkao").style.color="black";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="black";
        break;
        case 'p':
        document.getElementById("literkap").style.color="black";
        break;
        case 'r':
        document.getElementById("literkar").style.color="black";
        break;
        case 's':
        document.getElementById("literkas").style.color="black";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="black";
        break;
        case 't':
        document.getElementById("literkat").style.color="black";
        break;
        case 'u':
        document.getElementById("literkau").style.color="black";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="black";
        break;
        case 'y':
        document.getElementById("literkay").style.color="black";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="black";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="black";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="black";
        break;
        
    default:
        break;
}
}
var trzecialiterab = function(){
    switch (thirdletter) {
        case 'a':
        document.getElementById("literkaa").style.color="black";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="black";
        break;
        case 'b':
        document.getElementById("literkab").style.color="black";
        break;
        case 'c':
        document.getElementById("literkac").style.color="black";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="black";
        break;
        case 'd':
        document.getElementById("literkad").style.color="black";
        break;
        case 'e':
        document.getElementById("literkae").style.color="black";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="black";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="black";
        break;
        case 'g':
        document.getElementById("literkag").style.color="black";
        break;
        case 'h':
        document.getElementById("literkah").style.color="black";
        break;
        case 'i':
        document.getElementById("literkai").style.color="black";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="black";
        break;
        case 'k':
        document.getElementById("literkak").style.color="black";
        break;
        case 'l':
        document.getElementById("literkal").style.color="black";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="black";
        break;
        case 'm':
        document.getElementById("literkam").style.color="black";
        break;
        case 'n':
        document.getElementById("literkan").style.color="black";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="black";
        break;
        case 'o':
        document.getElementById("literkao").style.color="black";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="black";
        break;
        case 'p':
        document.getElementById("literkap").style.color="black";
        break;
        case 'r':
        document.getElementById("literkar").style.color="black";
        break;
        case 's':
        document.getElementById("literkas").style.color="black";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="black";
        break;
        case 't':
        document.getElementById("literkat").style.color="black";
        break;
        case 'u':
        document.getElementById("literkau").style.color="black";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="black";
        break;
        case 'y':
        document.getElementById("literkay").style.color="black";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="black";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="black";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="black";
        break;
        
    default:
        break;
}
}
var czwartaliterab = function(){
    switch (fourthletter) {
        case 'a':
        document.getElementById("literkaa").style.color="black";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="black";
        break;
        case 'b':
        document.getElementById("literkab").style.color="black";
        break;
        case 'c':
        document.getElementById("literkac").style.color="black";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="black";
        break;
        case 'd':
        document.getElementById("literkad").style.color="black";
        break;
        case 'e':
        document.getElementById("literkae").style.color="black";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="black";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="black";
        break;
        case 'g':
        document.getElementById("literkag").style.color="black";
        break;
        case 'h':
        document.getElementById("literkah").style.color="black";
        break;
        case 'i':
        document.getElementById("literkai").style.color="black";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="black";
        break;
        case 'k':
        document.getElementById("literkak").style.color="black";
        break;
        case 'l':
        document.getElementById("literkal").style.color="black";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="black";
        break;
        case 'm':
        document.getElementById("literkam").style.color="black";
        break;
        case 'n':
        document.getElementById("literkan").style.color="black";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="black";
        break;
        case 'o':
        document.getElementById("literkao").style.color="black";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="black";
        break;
        case 'p':
        document.getElementById("literkap").style.color="black";
        break;
        case 'r':
        document.getElementById("literkar").style.color="black";
        break;
        case 's':
        document.getElementById("literkas").style.color="black";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="black";
        break;
        case 't':
        document.getElementById("literkat").style.color="black";
        break;
        case 'u':
        document.getElementById("literkau").style.color="black";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="black";
        break;
        case 'y':
        document.getElementById("literkay").style.color="black";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="black";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="black";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="black";
        break;
        
    default:
        break;
}
}
var piataliterab = function(){
    switch (fifthletter) {
        case 'a':
        document.getElementById("literkaa").style.color="black";
        break;
        case 'ą':
        document.getElementById("literkaa2").style.color="black";
        break;
        case 'b':
        document.getElementById("literkab").style.color="black";
        break;
        case 'c':
        document.getElementById("literkac").style.color="black";
        break;
        case 'ć':
        document.getElementById("literkac2").style.color="black";
        break;
        case 'd':
        document.getElementById("literkad").style.color="black";
        break;
        case 'e':
        document.getElementById("literkae").style.color="black";
        break;
        case 'ę':
        document.getElementById("literkae2").style.color="black";
        break;
        case 'f':
        document.getElementById("literkaf").style.color="black";
        break;
        case 'g':
        document.getElementById("literkag").style.color="black";
        break;
        case 'h':
        document.getElementById("literkah").style.color="black";
        break;
        case 'i':
        document.getElementById("literkai").style.color="black";
        break;
        case 'j':
        document.getElementById("literkaj").style.color="black";
        break;
        case 'k':
        document.getElementById("literkak").style.color="black";
        break;
        case 'l':
        document.getElementById("literkal").style.color="black";
        break;
        case 'ł':
        document.getElementById("literkal2").style.color="black";
        break;
        case 'm':
        document.getElementById("literkam").style.color="black";
        break;
        case 'n':
        document.getElementById("literkan").style.color="black";
        break;
        case 'ń':
        document.getElementById("literkan2").style.color="black";
        break;
        case 'o':
        document.getElementById("literkao").style.color="black";
        break;
        case 'ó':
        document.getElementById("literkao2").style.color="black";
        break;
        case 'p':
        document.getElementById("literkap").style.color="black";
        break;
        case 'r':
        document.getElementById("literkar").style.color="black";
        break;
        case 's':
        document.getElementById("literkas").style.color="black";
        break;
        case 'ś':
        document.getElementById("literkas2").style.color="black";
        break;
        case 't':
        document.getElementById("literkat").style.color="black";
        break;
        case 'u':
        document.getElementById("literkau").style.color="black";
        break;
        case 'w':
        document.getElementById("literkaw").style.color="black";
        break;
        case 'y':
        document.getElementById("literkay").style.color="black";
        break;
        case 'z':
        document.getElementById("literkaz").style.color="black";
        break;
        case 'ź':
        document.getElementById("literkaz2").style.color="black";
        break;
        case 'ż':
        document.getElementById("literkaz3").style.color="black";
        break;
        
    default:
        break;
}
}
})



