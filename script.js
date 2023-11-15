// Q1    A)print odd number
var result=[]
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9]))

// E)  using palindrome
function palindrome(arr){
    var result=[]
    for(var i=0;i<arr.length;i++){
        var data=arr[i].split("").reverse().join("")
        if(data===arr[i]){
            result.push(arr[i])
        }
        return result;
    }
}
console.log(palindrome((["mom","data"])))

// B)  using string to capital letter
function titleCase(arr){
    var res=arr.toString();
    var data=res.toLowerCase().split(" ")
    for(var i=0;i<data.length;i++){
data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1)
    }
    return data.join(" ")
}
console.log(titleCase(["tHis iS jAvA"]))

// F) using median two sorted array
const arr1=[1,3,5,7]
const arr2=[2,4,6,8]
function findmediantwosortedarrays(arr1,arr2){
    let arr=[...arr1,...arr2]
    arr.sort((a,b)=>a-b)
    let n=arr.length
    return n%2===0 ?(arr[n/2]+arr[n/2-1])/2 :arr[Math.floor(n/2)]
}
console.log(findmediantwosortedarrays(arr1,arr2))

// H)  rotate array k times
const arr=[1,2,3,4,5]
const k=3;
(function(arr,k){
    for(var i=0;i<k;i++){
        arr.push(arr[i])
    }
    for(var i=0;i<k;i++){
        arr.shift()
    }
    console.log(arr)
})(arr,k)

// C) sum of all numbers array
const array=[1,2,3,4,5]
let sum=0
for(var i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    
    console.log(sum)
