'use sctrict';

function dzialanie() {
    this.collectionInput = document.querySelectorAll('input');
    this.num1 = parseFloat(this.collectionInput[0].value);
    this.num2 = parseFloat(this.collectionInput[1].value);

    this.calculator = function(operation){
        
        switch(operation) {
                       
            case '+' :
            this.wyn = this.num1 + this.num2;
            break;
        
            case '-' :
            this.wyn = this.num1 - this.num2;
            break;
        
            case '*' :
            this.wyn = this.num1 * this.num2;
            break;
        
            case '/' :
            this.wyn = this.num1 / this.num2;
            break;
            
        }
 
    return this.wyn;
        
    }
}

var suma = document.getElementById('suma');
suma.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calc = new dzialanie();
    wynik.innerHTML = calc.calculator('+');
});

var odejmowanie = document.getElementById('odejmowanie');
odejmowanie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calc = new dzialanie();
    wynik.innerHTML = calc.calculator('-');
});

var mnozenie = document.getElementById('mnozenie');
mnozenie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calc = new dzialanie();
    wynik.innerHTML = calc.calculator('*');
});

var dzielenie = document.getElementById('dzielenie');
dzielenie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calc = new dzialanie();
    wynik.innerHTML = calc.calculator('/');
});
