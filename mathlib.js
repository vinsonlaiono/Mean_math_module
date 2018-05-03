module.exports = function (){
    return {
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2)
        },
        mult: function(num1, num2){
            console.log("the answer is:", num1 * num2)
        },
        sq: function(num1){
            console.log("the square is:", num1 * num1)
        },
        random: function (min, max){
            console.log('Your randmon number is: ', Math.floor(Math.random() * (max - min) + min ))
        }
    }
}