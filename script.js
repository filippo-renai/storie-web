var numG = 0
var chi = []
var conChi = []
var cosaFanno = []
var dove = []
var perche = []
var db = []


async function getStoria() {
   if (document.getElementById("chi").value != "" && document.getElementById("conChi").value != "" && document.getElementById("cosaFanno").value != "" &&
      document.getElementById("dove").value != "" && document.getElementById("perche").value != "") {

      let response = await fetch('/db.json')
      let json = await response.json();
      json.push({
         "chi": document.getElementById("chi").value,
         "conChi": document.getElementById("conChi").value,
         "cosaFanno": document.getElementById("cosaFanno").value,
         "dove": document.getElementById("dove").value,
         "perche": document.getElementById("perche").value
      })

      console.log(`${JSON.stringify(json)}`)




      db.push(storia)
      console.log(db)
      /*
            numG++
            chi.push(storia.chi)
            conChi.push(storia.conChi)
            cosaFanno.push(storia.cosaFanno)
            dove.push(storia.dove)
            perche.push(storia.perche)
      */
      canc()
   }

}

async function getStoriaFinita() {
   console.log(numG)
   document.getElementById("salva").style.visibility = 'hidden'
   document.getElementById("cance").style.visibility = 'hidden'
   document.getElementById("regola").style.visibility = 'hidden'
   document.getElementById("finita").textContent = "Prossima storia"
   let response = await fetch('https://filippo-renai.github.io/storie-web/db.json')
   let json = await response.json();


   var num = Math.floor(Math.random() * numG);
   document.getElementById("chi").value = json[num]["chi"]

   num = Math.floor(Math.random() * numG);
   document.getElementById("conChi").value = json[num]["conChi"]

   num = Math.floor(Math.random() * numG);
   document.getElementById("cosaFanno").value = json[num]["cosaFanno"]

   num = Math.floor(Math.random() * numG);
   document.getElementById("dove").value = json[num]["dove"]

   num = Math.floor(Math.random() * numG);
   document.getElementById("perche").value = json[num]["perche"]

   /*
   var num = Math.floor(Math.random() * numG);

   document.getElementById("chi").value = chi[num]
   chi.splice(num, 1);

   num = Math.floor(Math.random() * numG);
   document.getElementById("conChi").value = conChi[num]
   conChi.splice(num, 1);

   num = Math.floor(Math.random() * numG);
   document.getElementById("cosaFanno").value = cosaFanno[num]
   cosaFanno.splice(num, 1);

   num = Math.floor(Math.random() * numG);
   document.getElementById("dove").value = dove[num]
   dove.splice(num, 1);

   num = Math.floor(Math.random() * numG);
   document.getElementById("perche").value = perche[num]
   perche.splice(num, 1);
   */

}

function canc() {
   document.getElementById("chi").value = ""
   document.getElementById("conChi").value = ""
   document.getElementById("cosaFanno").value = ""
   document.getElementById("dove").value = ""
   document.getElementById("perche").value = ""
}


