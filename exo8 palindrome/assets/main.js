
let mot = prompt("donner un mot : ")



    mot = mot.toLowerCase();
    let motinverse = mot.split("").reverse("").join("");  
  

  
  
        
        if (mot != motinverse) {  
            alert( 'Non palindrome.');  
        } else   {

            alert( 'Palindrome');  
        }
    


