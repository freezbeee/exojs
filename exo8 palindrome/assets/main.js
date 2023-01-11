
let mot = prompt("donner un mot : ")



    mot = mot.toLocaleLowerCase();
    let motinverse = mot.split("").reverse("").join("");  
  

  
  
        
        if (mot != motinverse) {  
            alert( 'Non palindrome.');  
        } else   {

            alert( 'Palindrome');  
        }
    


