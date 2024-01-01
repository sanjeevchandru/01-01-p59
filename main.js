document.write("22. to remove a character at the specified position in a given string and return the modified string."+"<br>");
function test22(str,p){
    var x=[];
    // str=str.toString().split();
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])!=p){
            x.push(str[i]);
        }
    }
    return x.join("");
}
document.write("Position  :4 ,original:chandru ,Ans :"+test22("chandru",4)+"<br>");
document.write("Position  :3 ,original :sanjeev, Ans :"+test22("sanjeev",3)+"<br>")