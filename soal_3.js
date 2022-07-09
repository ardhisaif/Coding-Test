function CheckPalindrome(input) {
    let i = 0
    let j = input.length -1
    let flag = true
    while (i < input.length && j + 1 > input.length / 2 ) {
        if(input[i] !== input[j]){
            flag = false
        }
        i++
        j--
    }
    if (flag === true) {
        return "palindrom"
    }else{
        return "not palindrom"
    }
}

console.log(CheckPalindrome("racecar"));
console.log(CheckPalindrome("bringback"));
console.log(CheckPalindrome("neveroddoreven"));
console.log(CheckPalindrome("carisonrace"));