let code = document.getElementById("codes");
let plays = document.getElementById("play");
let removes = document.getElementById("remove");
let results = document.getElementById("result");
let nights = document.getElementById("night_mode");
// nights.onclick = ()=>{
//     // document.getElementById("nohx").style.background = "black"
//     document.body.style.background = "black";

// }
plays.onclick = ()=>{
    results.innerHTML = code.value;
    localStorage.setItem("RESULTS",code.value);
};
removes.onclick = ()=>{
    results.innerHTML = "";
    // code.value = "";
}
onload = ()=>{
    code.value = localStorage.getItem("RESULTS");
    results.innerHTML = code.value;

}