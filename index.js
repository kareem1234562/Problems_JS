// this is Plaindrome
let x=121;
let u=x.toString()

let f=false;
for(let i=0,j=u.length-1;i<u.length,j>=0;i++,j--){
  if(u[i]==u[j]){
   f=true;
  }
}
if(f==true){
    console.log("true")
}
else{
    console.log("false")
}
console.log("////////////////////////////////////////////////////////////////////////////////")
////////////////////////////////////////////////////////////////////////////////



// this is the second
let w=[1,1,2,3,3,4,4,4,5,5,5,6,7,8,8,9]
let e=[]
let r=0;
for(let i=1;i<=w.length;i++){
if(w[i]!=w[r]){
    e.push(w[r])
    // console.log(w[r])
}
r++;
}
console.log(e)
console.log("the length before is "+w.length)
console.log("the length of the new is "+e.length)
console.log("////////////////////////////////////////////////////////////////////////////////")
////////////////////////////////////////////////////////////////////////////////

//this is the third

let arr=[0,1,2,2,3,0,4,2];
let arr2=[];
let val=2;
for(let i=0;i<arr.length;i++){
  if(arr[i]==val){
    continue
  }
  else{
arr2.push(arr[i])
  }
}
console.log("length of new array "+arr2.length)


console.log("////////////////////////////////////////////////////////////////////////////////")
////////////////////////////////////////////////////////////////////////////////


// this is the num4

let str="luffy is still joyboy";
let n_str=str.trim();
let num=0;
for(let i=0;i<n_str.length;i++){
if(n_str[i]==" "){
   num=i;
}
}
let len=(n_str.slice(num+1,n_str.length)).length
console.log(n_str.slice(num+1,n_str.length))
console.log(len)

console.log("////////////////////////////////////////////////////////////////////////////////")
////////////////////////////////////////////////////////////////////////////////


// this is the num5

let haystack = "butsad", needle = "sad";



let z=0;
let st1;
let k=0;
if(haystack.length>needle.length){
  for(let i=0;i<haystack.length;i++){
   
    if(haystack[i]==needle[z]){
      k=i;
      st1=haystack.substr(i,needle.length)
      if(st1==needle){
          break;
      }
      else{
          z++;
      }
    }
  
  }
}

if(st1==needle){
    console.log("yes");
    console.log("the first occurrence is at index"+k);
}
else{
    console.log("no");
    console.log(-1);
}
console.log(st1)