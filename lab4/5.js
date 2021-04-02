/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

<<<<<<< HEAD
 function checkBrackets(str) {
    var arr = str.split('');
    var stack = [];
    for (var i in arr) {
        if (arr[i] == '[' || arr[i] == '(' || arr[i] == '<') {
            stack.push(arr[i]);
        }
        else {
            switch(arr[i]) {
            case ')':
                if (stack[stack.length - 1] == '(') stack.pop();
                else return false;
                break;
            case ']':
                 if (stack[stack.length - 1] == '[') stack.pop();
                 else return false;
                 break;
            case '>':
                 if (stack[stack.length - 1] == '<') stack.pop();
                 else return false;
                 break;
            default: return false;
        }
     }
    }
    return true;
 }
=======
function checkBrackets(str) {
   var arr = str.split('');
   var stack = [];
   for (var i in arr) {
       if (arr[i] == '[' || arr[i] == '(' || arr[i] == '<') {
           stack.push(arr[i]);
       }
       else {
           switch(arr[i]) {
           case ')':
               if (stack[stack.length - 1] == '(') stack.pop();
               else return false;
               break;
           case ']':
                if (stack[stack.length - 1] == '[') stack.pop();
                else return false;
                break;
           case '>':
                if (stack[stack.length - 1] == '<') stack.pop();
                else return false;
                break;
           default: return false;
       }
    }
   }
   return true;
}
>>>>>>> 91f101577b01c567f09d39466106137d8e576017

module.exports = checkBrackets;
