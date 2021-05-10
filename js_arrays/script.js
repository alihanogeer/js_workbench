
//------- 3 ------
    const first =  function(arr, n) {

        if (arr == [])
        return "[ ]";
    
        if (n == null || n == 0) 
        return arr[0];
    
        if (n < 0)
        return "[ ]";
    
        else{
          return arr.slice(0, n);
        }
        
    };
    
    const result1 = first([7, 9, 0, -2]);
    const result2 = first([],3);
    const result3 = first([7, 9, 0, -2],3);
    const result4 = first([7, 9, 0, -2],-3);


document.querySelector('.btn--1').addEventListener('click', function(){

    document.querySelector('.task__index').innerHTML = `result = <br>${result1}  <br> ${result2}  <br> ${result3}  <br> ${result4}`;
    document.querySelector('.hdr--1').innerHTML = "Result of 3. assignment : Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array."
    document.querySelector('.hdr--2').innerHTML = "Test data =  first([7, 9, 0, -2]) , first([],3) , first([7, 9, 0, -2],3) , first([7, 9, 0, -2],-3) "
  

    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],-3));
});

//------- 6 ---------

const num = 12648149182;
const string = num.toString();
const res = [string[0]];


  for(var i = 1; i < string.length; i++){

    if((string[i-1]%2 === 0) && (string[i]%2 === 0)){

      res.push('-', string[i]);
     }
    else{
      res.push(string[i]);
     }
  } 
   const finalRes = res.join('');

  document.querySelector('.btn--2').addEventListener('click', function(){

    document.querySelector('.task__index').innerHTML = `result = ${res.join('')}`;
    document.querySelector('.hdr--1').innerHTML = "Result of 6. assignment : Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers."
    document.querySelector('.hdr--2').innerHTML = "Test data =  12648149182"

    console.log(finalRes);
});



//--------- 11 ----------

function sum_sq(arr) {

    var sum = 0;
  
for(i = 0; i < arr.length; i++){

        sum += Math.pow(arr[i], 2);

    }return sum;

}

const result = sum_sq([0,1,2,3,4,5]);

  document.querySelector('.btn--3').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 11. assignment :  Write a JavaScript program to find the sum of squares of a numeric vector."
    document.querySelector('.hdr--2').innerHTML = "Test data =  sum_sq([0,1,2,3,4])"
    document.querySelector('.task__index').innerHTML = `result = ${result}`

    console.log(sum_sq([0,1,2,3,4,5])); 
    });

  //-------- 19 -------

  const array1 = [1,0,2,3,4];
  const array2 = [3,5,6,7,8];

  function sumOfarrays(arr1, arr2){

    var sum = [];

    if(arr1.length !== arr2.length)
    return "Length of arrays are not equal";

    for(var i = 0; i < arr1.length; i++){
        sum.push(arr1[i] + arr2[i]);
     }return sum;
  }

    document.querySelector('.btn--4').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 19. assignment : There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays."
    document.querySelector('.hdr--2').innerHTML = "Test data = array1 = [1,0,2,3,4] , array2 = [3,5,6,7,8];)"
    document.querySelector('.task__index').innerHTML = `result = ${sumOfarrays(array1, array2)}`

    console.log(sumOfarrays(array1, array2));

  });

  //-------- 30 ----------

    const array_1 = [1, 2, 3];
    const array_2 = [2, 30, 1];

  function merge_array(arr1, arr2) {

    var arr = arr1.concat(arr2);
    var len = arr.length;    //len = 6 in this case
    var assoc = {};
    var result = [];

    while(len--) {

        var item = arr[len];    // item = arr[6], arr[5], arr[4] .....

        if(!assoc[item]) 
        { 
            result.unshift(item);
            assoc[item] = true;
        }
    }
    return result.sort();
}

document.querySelector('.btn--5').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 30. assignment : Write a JavaScript function to merge two arrays and removes all duplicates elements."
    document.querySelector('.hdr--2').innerHTML = "Test data = const array_1 = [1, 2, 3] ,  const array_2 = [2, 30, 1])"
    document.querySelector('.task__index').innerHTML = `result = ${merge_array(array_1, array_2)}`

    console.log(merge_array(array_1, array_2));

  });

//--------- 31 ------------

function removeElement(arr, i){
   var index = arr.indexOf(i);

   if (index >= 0) {

    arr.splice(index, 1);
    
} return arr;
}

document.querySelector('.btn--6').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 31. assignment : Write a JavaScript function to remove a specific element from an array."
    document.querySelector('.hdr--2').innerHTML = "Test data = ([2, 5, 9, 6], 5)"
    document.querySelector('.task__index').innerHTML = `result = ${removeElement([2, 5, 9, 6], 5)}`

    console.log(removeElement([2, 5, 9, 6], 5));

  });

//--------- 35 --------
var items = [254, 45, 212, 365, 2543];

function randomElement(arr){
  
    const random = arr[Math.floor(Math.random()*arr.length)];
    return random;
     
}

document.querySelector('.btn--7').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 35. assignment : Write a JavaScript function to get a random item from an array."
    document.querySelector('.hdr--2').innerHTML = "Test data = [254, 45, 212, 365, 2543]"
    document.querySelector('.task__index').innerHTML = `result = ${randomElement(items)}`

    console.log(randomElement(items));
  });

  //-------- 36 -----------
  
  function array_filled(index, no){

    var arrayy = [];
    for(var i = 0; i < index; i++){
        arrayy.push(no);
    } return arrayy;
    
  }

    document.querySelector('.btn--8').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 36. assignment : Write a JavaScript function to create a specified number of elements with pre-filled numeric value array."
    document.querySelector('.hdr--2').innerHTML = "Test data = array_filled(6, 0) , array_filled(4, 11)"
    document.querySelector('.task__index').innerHTML = `result = ${array_filled(6, 0)} <br> ${array_filled(4, 11)}`

    console.log(array_filled(6, 0));
    console.log(array_filled(4, 11));
  });

  //---------- 39 ---------

  function isTrue(value){

    if(value !== false || value !== null || value !== 0 || value !== " ") {
    return value;
    }
  }

  function filter_array_values(arr){

    arr = arr.filter(isTrue);
    return arr;
  }
  
    document.querySelector('.btn--9').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 39. assignment : Write a JavaScript function to filter false, null, 0 and blank values from an array."
    document.querySelector('.hdr--2').innerHTML = "Test data = [58, '', 'abcd', true, null, false, 0]"
    document.querySelector('.task__index').innerHTML = `result = ${filter_array_values([58, '', 'abcd', true, null, false, 0])}`

    console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
  });


  //------- 40 ---------
  function array_range(start, len) {

		var arr = [len];

		for (var i = 0; i < len; i++, start++) {

			arr[i] = start;

		}return arr;
  }

  document.querySelector('.btn--10').addEventListener('click', function(){

    document.querySelector('.hdr--1').innerHTML = "Result of 40. assignment : Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position."
    document.querySelector('.hdr--2').innerHTML = "Test data = array_range(1, 4) , array_range(-6, 4)"
    document.querySelector('.task__index').innerHTML = `result = ${array_range(1, 4)} <br> ${array_range(-6, 4)}`

    console.log(array_range(1, 4));
    console.log(array_range(-6, 4));
    
  });

