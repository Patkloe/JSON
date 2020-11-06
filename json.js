var test = {
            qui : "Patrick",
            quoi : "Facebook frontend engeniering",
            action : function(){
            console.log(this.qui + " " + "se met pret pour" + " " + this.quoi);
           }
          }
     test.action();
     var rec = Object.keys(test);
     rec;
