var test = {
            qui : "Patrick",
            quoi : "Facebook frontend engeniering",
            action : function(){
            console.log(this.qui + " " + "se met pret pour" + " " + this.quoi);
           }
          }
     test.action();
     var rec = Object.keys(test);   // on recupere les keys de l'objet, le resultat sous forme de tableau
     var val = Object.values(test);  // on recupere les valeurs de l'objet, le resultat sous forme de tableau.
     rec;
     
     console.log("valeurs objets" + " " + val);
