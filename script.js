var fah = document.getElementById("fah");
var cel = document.getElementById("cel");
fah.addEventListener('input', function(){
    let f = this.value;
    let c = (5.0/9)*(f-32);
    if(!Number.isInteger(c))
    {
        let arr = c.toString().split(".");
        if(arr[1].length > 4)
        {
            arr[1] = arr[1].substring(0,4);
            let str = arr.join(".");
            c = Number.parseFloat(str);
            console.log(c);
        }
        
        
    }
    cel.value = c;
});
cel.addEventListener('input', function(){
    let c = this.value;
    let f = ((9.0/5)*c)+32;
    if(!Number.isInteger(f))
    {
        let arr = f.toString().split(".");
        if(arr[1].length > 4)
        {
            arr[1] = arr[1].substring(0,4);
            let str = arr.join(".");
            f = Number.parseFloat(str);
        }
        
        
    }
    fah.value = f;
});