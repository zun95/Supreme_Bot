function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function putcart(){
  document.querySelector('input[type="submit"][value="カートに入れる"]').click();
  console.log("Cart Inserted");
}
function headcheck(){
  document.querySelector("[class='button checkout']").click();
  sleep(200);
}
putcart();
sleep(100);
headcheck();
console.log("done_heading");