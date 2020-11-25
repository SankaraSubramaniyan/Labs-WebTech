var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadData(this);
    }
  };
  xmlhttp.open("GET", "quiz.xml" , true);
  xmlhttp.send();

  function loadData(p) {
    var x, i, xmlDoc;
    xmlDoc = p.responseXML;
    x = xmlDoc.getElementsByTagName("item");
    // console.log(x.length);
    var main = '';
    var node,ques;
    for (i = 0; i < x.length; i++) { 
      node = '';
      ques = x[i].getElementsByTagName("question")[0].childNodes[0].nodeValue;
      console.log(ques);
      node += '<h3>' + ques + '</h3>';
      node += '<div class="form-group"><label>Choose Options</label><select class="form-control"><option>Select One</option>';
      ans = x[i].getElementsByTagName("answer");
      for (let j = 0; j < ans.length; j++) {
          node += '<option>'+ ans[j].childNodes[0].nodeValue + '</option>';
      }
      node += '</select></div>'
      main += node;
    }
    document.getElementById("demo").innerHTML = main + '<br><button type="button" class="btn btn-info" onclick="validate()">Finish</button>';
    // console.log(main);
  }

  function validate() {
      var res = document.getElementById('result');
      res.innerText = "Your Score is 3/4";
      res.style.visibility = "visible";
  }