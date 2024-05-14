let quizsions = document.querySelectorAll(".quiz")

quizsions.forEach(function(quiz){
    quiz.childNodes[3].addEventListener("click",function(){
        if(quiz.childNodes[3].attributes[1].nodeValue == "assets/icon-plus.svg"){
            quiz.childNodes[3].src = "assets/icon-minus.svg"
            quiz.childNodes[5].style.display = "block"
            console.log("PLus");
        }else if(quiz.childNodes[3].attributes[1].nodeValue == "assets/icon-minus.svg"){
            quiz.childNodes[3].src = "assets/icon-plus.svg"
            quiz.childNodes[5].style.display = "none"
            console.log("Minus");
        }

    })
})