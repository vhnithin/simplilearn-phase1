

function validate() {


  var emailValue = document.getElementById("login-email").value ;
   var passwordValue = document.getElementById("login-password").value ;


    

    if (emailValue == "") {
        
         document.getElementById("error-lemail").innerHTML = "Please enter email id";
         return false;

    } 

    else if (passwordValue == "")  {
         
         document.getElementById("error-lpassword").innerHTML = "Please enter paswword";
         return false;
    }

    else {
    
   window.location.href="blog-write.html"; 
   return false;
    }     

}

function validateBlogWrite() {
 

    var postTitle =  document.getElementById("post-title").value ;
    var postAuthour =  document.getElementById("post-author").value ;
    var  postContent =  document.getElementById("post-content").value ;


    if (postTitle == "") {
        
         document.getElementById("error-ptitle").innerHTML = "Please enter post title";
         return false;

    } 

      if (postAuthour == "") {
        
         document.getElementById("error-author").innerHTML = "Please enter author name";
         return false;

    } 


      if (postContent == "") {
        
         document.getElementById("error-pcontent").innerHTML = "Please enter post content";
         return false;

    } 

    else  {
        window.location.href="blog-deatil.html"; 
   return false;
    }   
    




}

