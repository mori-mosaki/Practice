// document.write("Hello World!");
// alert("Hello World!");

// console.log("Hello World!"+"田中さん");
// console.log(3+5);

// console.log(1+1);
// console.log(1-1);
// console.log(2*2);
// console.log(10/3);
// console.log(10%3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x = 7;
// let y = x++;
// let x2 = 7;
// let y2 = ++x2;

// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);

// let age = 30;
// const name = "田中太郎";

// age = age + 2;
// console.log(`${name}さんの年齢は${age}です`);

// 'use strict'
// let i = 1;
// if (i===1){console.log("真です");}

// let testscore = 60;

// if (testscore >= 80)
// {document.write("合格です");}
// else if (testscore >= 70)
// {document.write("惜しい");}
// else {document.write("不合格");}

// const namelist = ["田中","山田","林"];

// for (let i = 0; i < namelist.length ; i++)
// {console.log(namelist[i]);}

// const namelist = ["田中","山田","林","佐藤"];

// for (let i = 0; i < namelist.length ; i++)
//    {console.log(`${i+1}.${namelist[i]}`);}

function scorecheck()
   {let testscore = document.getElementById('score').value
    if (testscore >= 80)
    {document.write("合格です");}
    else if (testscore >= 70)
    {document.write("惜しい");}
    else {document.write("不合格");}}
