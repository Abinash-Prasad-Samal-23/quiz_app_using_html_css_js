function ques(q,a,b,c,d,answ){
  this.qu=q;
  this.a=a;
  this.b=b;
  this.c=c;
  this.d=d;
  this.answ=answ;
}

const submitBtn = document.querySelector(".choice button");
const choiceVal = document.getElementsByClassName("choice");
const qVal = document.querySelector(".numq");
const qu = document.querySelector(".qu");
const op1 = document.querySelector(".A");
const op2 = document.querySelector(".B");
const op3 = document.querySelector(".C");
const op4 = document.querySelector(".D");
const ans = document.querySelector(".ans");
const qTake = document.querySelector(".numt");
const ansop1 = document.querySelector("#A");
const ansop2 = document.querySelector("#B");
const ansop3 = document.querySelector("#C");
const ansop4 = document.querySelector("#D");
let qCount;
let val;
var quiz = [];
let quizId = 0;
var id;
let c = 0;
let score = 0;
let tot;
function checkRadio() {
  let o1 = document.getElementById("create");
  let o2 = document.getElementById("access");
  if (o1.checked) {
    val = o1.value;
  }
  else {
    val = o2.value;
  }
  if (val == "create") {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".create").style.display = "block";
    document.querySelector(".question-count").style.display = "block";
  }
  else {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".take").style.display = "block";
    document.querySelector(".quiz-id").style.display = "block";
  }
}

async function questionCount() {
  qCount = parseInt(qVal.value);
  document.querySelector(".question-count").style.display = "none";
  document.querySelector(".questions").style.display = "block";
}

async function insertQuestion() {
  var q = qu.value;
  var a = op1.value;
  var b = op2.value;
  var c1 = op3.value;
  var d = op4.value;
  var answ = ans.value.toLowerCase();
  let questions=[];
  questions[c] = new ques(q,a,b,c1,d,answ);
  qu.value = "";
  op1.value = "";
  op2.value = "";
  op3.value = "";
  op4.value = "";
  ans.value = "";
  c++;
  if (c >= qCount) {
    document.querySelector(".questions").style.display = "none";
    document.querySelector(".complete").style.display = "block";
    document.querySelector(".qid").innerHTML = "Your quiz id is" + quizId;
    quiz[quizId]=questions;
    quizId++;
    c = 0;
  }
}

async function introPage() {
  document.querySelector(".create").style.display = "none";
  document.querySelector(".complete").style.display = "none";
  document.querySelector(".take").style.display = "none";
  document.querySelector(".complete-take").style.display = "none";
  document.querySelector(".intro").style.display = "block";
}

async function accessQuiz() {
  id = parseInt(qTake.value);
  document.querySelector(".quiz-id").style.display = "none";
  document.querySelector(".questions-take").style.display = "block";
  displayQuestion();
}

async function displayQuestion() {
  if (quiz[id][c]) {
    document.querySelector(".quDis").innerHTML = quiz[id][c].qu;
    document.querySelector(".a").innerHTML = quiz[id][c].a;
    document.querySelector(".b").innerHTML = quiz[id][c].b;
    document.querySelector(".c").innerHTML = quiz[id][c].c;
    document.querySelector(".d").innerHTML = quiz[id][c].d;
  }
}

async function checkAns() {
  if (quiz[id][c]) {
    displayQuestion();
    var an;
    if (ansop1.checked) {
      an = 'a';
    }
    if (ansop2.checked) {
      an = 'b';
    }
    if (ansop3.checked) {
      an = 'c';
    }
    if (ansop4.checked) {
      an = 'd';
    }
    if (an == quiz[id][c].answ) {
      score++;
    }
    c++;
  }
  else {
    document.querySelector(".questions-take").style.display = "none";
    document.querySelector(".complete-take").style.display = "block";
    document.querySelector(".sc").innerHTML = score + "/" + c;
    c = 0;
  }
}