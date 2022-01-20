let a = 'hello';
console.log(a);

{
    let a = 'goodbye';
    console.log('a inside scope', a);
}
console.log('a outside scope', a);