

let QuestionsInf = {
    q1:{
        desc: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
        title: "Which artist painted this picture?",
        answers: ["Vincent van Gogh", "Salvador Dalí",  "Pablo Picasso", "Michelangelo"],
        answers50: ["Vincent van Gogh", "Michelangelo"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "a"
    },
    q2:{
        desc: "https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-1.jpg?t=1628119938&",
        title: "Which artist painted this picture?",
        answers: ["Edvard Munch", "Leonardo da Vinci", "Pablo Picasso", "Salvador Dalí"],
        answers50: ["Edvard Munch", "Leonardo da Vinci"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "b"
    },
    q3:{
        desc: "https://www.edvardmunch.org/images/paintings/the-scream.jpg",
        title: "Which artist painted this picture?",
        answers: ["Edvard Munch" ,"Michelangelo", "Rembrandt", "Pablo Picasso"],
        answers50: ["Edvard Munch", "Pablo Picasso"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "a"
    },
    q4:{
        desc: "https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-12.jpg?t=1628119938&",
        title: "Which artist painted this picture?",
        answers: ["El Greco", "Gustav Klimt",  "Salvador Dalí", "Rembrandt"],
        answers50: ["El Greco", "Gustav Klimt"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "b"
    },
    q5:{
        desc: "https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-5.jpg?t=1628119938&",
        title: "Which artist painted this picture?",
        answers: ["Salvador Dalí", "Vincent van Gogh", "Frida Kahlo", "Edvard Munch"],
        answers50: ["Salvador Dalí", "Frida Kahlo"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "a"
    },
    q6:{
        desc: "https://sep.yimg.com/ty/cdn/madisonartshop/Picasso-3musicians?t=1628119938&",
        title: "Which artist painted this picture?",
        answers: ["Salvador Dalí", "Pablo Picasso", "Rembrandt", "Michelangelo"],
        answers50: ["Salvador Dalí", "Pablo Picasso"],
        halfQuestionbutton: "50 - 50",
        trueAnswer: "b"
    }
}
class Question{
    questionTitle = document.querySelector(".questionTitle")
    question50 = document.querySelector(".question50")
    questionİmg = document.querySelector(".questionİmg")
    variants = document.querySelector(".quesContainer")
    variants50 = document.querySelector(".quesContainer50")
    point = document.querySelector(".point")
    questions = []
    win = 0
    questionIndex = 0
    userVariant = null

    constructor(obj){
        this.questions = Object.values(obj)
    }

    userSelect(a){
        if("abcd".indexOf(a) === -1){
            alert("Please click one of 'a b c d'")
            return
        }
        this.userVariant = a
        this.nextQuestion()
    }
    showQuestion(){
        document.querySelector(".quesContainer").classList.add('d-flex');
        document.querySelector(".quesContainer").classList.remove('d-none');

        document.querySelector(".quesContainerBig50").classList.add('d-none');
        if(!this.questions[this.questionIndex]){
            // this.point.innerHTML = `Game End. Total Point: ${this.win}`
            let questionBox = document.querySelector(".questionBox")
            questionBox.classList.add("d-none")
            let restartButons = document.querySelector(".restartButons")
            restartButons.classList.remove("d-none")
            restartButons.classList.add("d-flex")
            let totalPoint = document.querySelector(".totalPoint")
            totalPoint.innerHTML = `Game End. Total Point: ${this.win}`
            return
        }
        this.questionİmg.src = this.questions[this.questionIndex].desc
        this.questionTitle.innerHTML = this.questions[this.questionIndex].title
        this.question50.innerHTML = this.questions[this.questionIndex].halfQuestionbutton
        for(var i = 0; i< this.questions[this.questionIndex].halfQuestionbutton.length; i++){
            console.log(this.questions[this.questionIndex].halfQuestionbutton[i])
        }
        this.variants.innerHTML = this.questions[this.questionIndex].answers.map((q, i)=>{
            return  `<span class="${i+101} variant btn-dark rounded text-center d-flex align-items-center justify-content-center" style="width: 23%; height: 50px;  transition: all 0.4s; font-size: 20px;">${q}</span>`
        }).join("")
        this.variants50.innerHTML = this.questions[this.questionIndex].answers50.map((q, i)=>{
            return  `<span class="${i+101} variant btn-dark rounded text-center d-flex align-items-center justify-content-center" style="width: 35%; height: 50px;  transition: all 0.4s; font-size: 20px;">${q}</span>`
        }).join("")
        this.question50.addEventListener('click', function(){
            document.querySelector(".quesContainer").classList.remove('d-flex');
            document.querySelector(".quesContainer").classList.add('d-none');

            document.querySelector(".quesContainerBig50").classList.remove('d-none');
            // document.querySelector(".quesContainer50").classList.add('d-none');
        });
    }
    nextQuestion(){
        if(!this.questions[this.questionIndex]){
            // this.point.innerHTML = `Game End. Total Point: ${this.win}`
            let questionBox = document.querySelector(".questionBox")
            questionBox.classList.add("d-none")
            let restartButons = document.querySelector(".restartButons")
            restartButons.classList.remove("d-none")
            restartButons.classList.add("d-flex")
            return
        }
        let showTrueAnswer = document.querySelector("#showTrueAnswer")
        let correctAnswerEnd = document.querySelector("#correctAnswerEnd")
        showTrueAnswer.addEventListener("click",function(){
            showTrueAnswer.classList.add("d-none")
            correctAnswerEnd.innerHTML = 
            `
            <div class="">
                    1. <strong>Vincent van Gogh</strong> 
                    2. <strong>Leonardo da Vinci</strong> 
                    3. <strong>Edvard Munch</strong> 
                    4. <strong>Gustav Klimt</strong> 
                    5. <strong>Salvador Dalí</strong> 
                    6. <strong>Pablo Picasso</strong> 
            </div> 
            `
        })
        let correctAnswer = this.questions[this.questionIndex].trueAnswer
        if(correctAnswer == this.userVariant){
            this.win += 10
            if(correctAnswer == "a"){
                $(".101").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "b"){
                $(".102").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "c"){
                $(".103").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "d"){
                $(".104").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            // else if(correctAnswer == "b"){
            //     $(".102").css({
            //         backgroundColor: "green"
            //     })
                
            // if(correctAnswer == "c"){
            //     $(".103").css({
            //         backgroundColor: "green"
            //     })
            // }
            }
        else{
            if(correctAnswer == "a"){
                $(".101").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "b"){
                $(".102").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "c"){
                $(".103").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            else if(correctAnswer == "d"){
                $(".104").css({
                    backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )"
                })
            }
            if(this.userVariant == "a"){
                $(".101").css({
                    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 1%, #f99185 22%, #cf556c 78%, #b12a5b 100%)"
                })
            }
            else if(this.userVariant == "b"){
                $(".102").css({
                    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 1%, #f99185 22%, #cf556c 78%, #b12a5b 100%)"
                })
            }
            else if(this.userVariant == "c"){
                $(".103").css({
                    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 1%, #f99185 22%, #cf556c 78%, #b12a5b 100%)"
                })
            }
            else if(this.userVariant == "d"){
                $(".104").css({
                    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 1%, #f99185 22%, #cf556c 78%, #b12a5b 100%)"
                })
            }
        } 
        let progress = $("#progress")
        progress.css({
            width: "+=16.667%"
        })

        this.questionIndex++
        setTimeout(()=>{this.showQuestion()}, 1000) 
    }
}

let startGame = new Question(QuestionsInf)


startGame.showQuestion()
window.onkeydown = function(event){
    startGame.userSelect(event.key)
}



