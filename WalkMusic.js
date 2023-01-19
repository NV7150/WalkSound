function Greeting(){
   var nt = new Date();
   var hr = nt.getHours();

   if( hr <= 4 ) { document.write('Good Evening'); }
   else if( hr <= 11 ) { document.write('Good Morning'); }
   else if( hr <= 18 ) { document.write('Hello'); }
   else if( hr <= 23 ) { document.write('Good Evening'); }
}

function enter(){
   // input要素を取得
   const inputElem1 = document.getElementById('range_1');
   const inputElem2 = document.getElementById('range_2');

   alert('active: ' + inputElem1.value + ' positive: ' + inputElem2.value);
}

function play() {
   alert('play');
}

function skipstart() {
   alert('skipstart');
}

function skipend() {
   alert('skipend');
}