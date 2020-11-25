function viewUser(){
var xmltext = '{ "title":"Test Quiz with XML",'+
    '"users":['+
     '  {'+
          '"uid": "8569",'+
          '"name": "Sankara Subramaniyan",'+
          '"score": "85",'+
          '"totalquizes": "3"'+
       '},'+
       '{'+
          '"uid": "4579",'+
          '"name": "Vinoth",'+
          '"score": "98",'+
          '"totalquizes": "5"'+
       '}'+
    ']'+
    '}';
var obj = JSON.parse(xmltext);
console.log(obj);
var users = document.getElementById("users");
var result = "<table class=\"table table-hover\"><tr><th>UID</th><th>Name</th><th>Score</th><th>Total Quizes</th></tr>";
for (let index = 0; index < obj.users.length; index++) {
    result += "<tr><td>"
    result += String(obj.users[index].uid);
    result += "</td><td>";
    result += String(obj.users[index].name);
    result += "</td><td>";
    result += String(obj.users[index].score);
    result += "</td><td>";
    result += String(obj.users[index].totalquizes);
    result += "</td></tr>"
    console.log(result);
    
}
users.innerHTML = result;
}

function viewQuiz() {
    var quesJson = 
    '{'+
        '"title": "Demo quiz",'+
        '"items": ['+
           '{'+
              '"question": "In which continent is the country Japan located?",'+
              '"answer": ['+
                 '"Asia",'+
                 '"Europe",'+
                 '"Africa",'+
                 '"America"'+
              ']'+
           '},'+
           '{'+
              '"question": "Which one cannot swim?",'+
              '"answer": ['+
              '"Tuna",'+
              '"Cow",'+
              '"Lobster",'+
              '"Whale"'+
              ']'+
           '},'+
           '{'+
              '"question": "How many points are on a hexagon?",'+
              '"answer": ['+
              '"5",'+
              '"6",'+
              '"7",'+
              '"8"'+
              ']'+
           '}'+
        ']'+
     '}';

     var ques = JSON.parse(quesJson);
     var cont = document.getElementById("cont");
     var res = '';
     for (let index = 0; index < ques.items.length; index++) {
         var out = 
           '<div class="form-group"><div class="form-check">'+
             '<label class="form-check-label"><b>'+
               String(ques.items[index].question)+
             '</b></label></div>';
           for (let j = 0; j < ques.items[index].answer.length; j++) {
               var out1 = '<div class="form-check">'+
               '<input class="form-check-input" type="radio">'+
               '<label class="form-check-label">'
               + ques.items[index].answer[j] +
               '</label></div>';
               out += out1;
               out1 = "";
           };
         res += (out+"</div>");
     }
     res += '</div>'
     cont.innerHTML = res;
     console.log(res);

}