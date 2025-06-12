const str = "h";

const binaryRepresentation = new TextEncoder().encode(str);
console.log(binaryRepresentation); //output Uint8Array(1) [104]

const newstr = "imran Ahmed";

//binary of Imran Ahmed is: 
// 01101001(105)-I 01101101(109)-m 01110010(114)-r 01100001(97)-a 01101110(110)-n
// 00100000(32)-space 01000001(65)-A 01101000(104)-h 01101101(109)-m 01100101(101)-e
// 01100100(100)-d

const binarystring = new TextEncoder().encode(newstr);
console.log(binarystring);