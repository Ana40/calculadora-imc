import { LightningElement, track } from 'lwc';
export default class CalculatorInLwc extends LightningElement {
 // Para dizer à estrutura para observar as alterações nas propriedades de um objeto, decore o campo com @track.
    @track peso;
    @track altura;
    resultValue;
    //event trás um conjunto de dados no formato de objeto js
    handleNumberOeChange(event) {
      //A parseInt()função analisa um argumento de string e retorna um inteiro da base especificada
        this.peso = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.altura = parseInt(event.target.value);
    }
    calculo() {
        this.resultValue = (parseInt(this.altura) * parseInt(this.altura)) / (parseInt(this.peso));
    }
    
}