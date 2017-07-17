/**
 * Created by cr on 7/17/17.
 */
function getYinzi(num){
    var result=new Array();
    for(var i=1;i<=num;i++){
        if(num%i==0){
            result.push(i);
        }
    }
    return result;
}
function print(){
    var result=getYinzi(64);
    for(var i=0;i<result.length;i++){
        console.log(result[i]);
    }
}
print();