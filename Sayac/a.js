function btngeri()
{
document.getElementById("txtsonuc").value=document.getElementById("txtsonuc").value - 5;
document.getElementById("psonuc").innerHTML=document.getElementById("psonuc").innerHTML- 5
}
function btnileri()
{
document.getElementById("txtsonuc").value=parseInt(document.getElementById("txtsonuc").value) + 5;
document.getElementById("psonuc").innerHTML=parseInt(document.getElementById("psonuc").innerHTML)+ 5
}