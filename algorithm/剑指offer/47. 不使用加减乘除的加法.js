function Add(num1, num2)
{
    // write code here
    let sum, carry
    while(num2) {
        sum = num1 ^ num2
        carry = (num1 & num2) << 1
        num1 = sum
        num2 = carry
    }
    return num1

}

let a = -3 >>> 1
console.log(a)

