const  test_average = (array) =>{
    if(!array.length){
        return 0;
    }

    let total = 0;
    for ( let i = 0; i < array.length; i++ ) {
        total += array[i];
    }
    const result =  total / array.length;

    return result;
      
}

module.exports = test_average;