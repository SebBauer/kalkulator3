'use strict';


function dzialanie(operation) {
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

var calc = document.getElementById('calc');
calc.addEventListener('submit', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calc = new dzialanie();
    wynik.innerHTML = calc.calculator(document.activeElement.value);
});

