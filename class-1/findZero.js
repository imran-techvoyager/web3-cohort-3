const crypto = require('crypto'); 

function findPrefix(prefix){
    let input = 0;

    while(true){
        const inputStr = "100xdevs" + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {inputStr: inputStr, hash: hash}
        }

        input++;
    }
}
const result = findPrefix("00000");
console.log(`input: ${result.inputStr}`);
console.log(`hash: ${result.hash}`);
