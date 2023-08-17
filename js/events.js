// option 1 directly set on the html element
<button onclick="console.log(7)">click me</button>

// option 2 add onclick function on the html element
function makeRed(){
    document.body.style.backgroundColor ='red'
}

// option 3
const makeGreenBu =document.getElementById('make-green');
makeGreenBu.onclick =makeGreen;
function makeGreen() {
    document.body.style.backgroundColor ='green'
}
// option 3
const purpleButton =document.getElementById('make-purple');
purpleButton.onclick =function makePurple(){
    document.body.style.backgroundColor ='purple'
}
// option 4
const makeBlueButton =document.getElementById('make-blue');
        makeBlueButton.addEventListener('click', makeBlue);
        function makeBlue(){
            document.body.style.backgroundColor ='blue'
        }  


        const makeOrangeButton =document.getElementById('make-orange');
        makeOrangeButton.addEventListener('click',function makeBlue(){
            document.body.style.backgroundColor='orange'
        })

// option 4 final
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor ='goldenrod';
})
