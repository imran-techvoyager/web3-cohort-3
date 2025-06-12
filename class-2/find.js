const crypto = require('crypto');

function findPrefixOfString(prefix){
    let input = 0;
    while(true){
        const inputStr = "100xdevs" + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash};
        }

        input++;
    }
}

const res = findPrefixOfString("0000");
console.log(res);