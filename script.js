   function shake(){
      let messageText = document.getElementById("message")
      let myQ = document.getElementById("Questions")
// find or select the childe we need to remove, and use its parentnode propertiy to find the parent 
      if(messageText != null){
         messageText.parentNode.removeChild(messageText);
        }
      setTimeout(function(){ myQ.remove("Questions"); }, 1000);
      // for answer to pop out after few second 
      setTimeout(function(){ getAnaswer(); }, 1000); 
   }
   
   function getAnaswer(){
      let myIma  = new Array("images/magic8ball_1.png", "images/magic8ball_10.png", "images/magic8ball_11.png","images/magic8ball_12.png", "images/magic8ball_13.png", "images/magic8ball_14.png", "images/magic8ball_15.png", "images/magic8ball_16.png", "images/magic8ball_17.png");

      let fortune = myIma[Math.floor(Math.random()*myIma.length)];
      let parent = document.getElementById("myRandom");
      let newMessage = document.createElement("img");
      newMessage.setAttribute('id', "message");  // this creates an id for image tag
      newMessage.src = `${fortune}`;
      parent.appendChild(newMessage);
   }
   
   