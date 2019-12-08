// we'll set up the variables before we describe the function - 
        // this way running the function will not change them
        /* by running variables first, the contents of image 2 and image 1 are independent */
        var image3URL = "Beer_Empty.png";
        var image3Alt =  "Beer icon is empty."
        /* replace anything that repeats */
        var switchingImage = document.getElementById("beerFull");

        /* grab original variable & store in image1URL src */  
        var image1URL = switchingImage.src;
        /* grab original variable & store in image1URL alt */ 
        var image1Alt = switchingImage.alt;

        /* for the Nav */
        // listen for a click on an '#imgToggle' button and run the following function
        document.getElementById('beerFull').addEventListener('click', function(){

            //So I had to change the .src to .alt so it can switch back and forth
            //also I changed the imageURL to a image3Alt
            if( switchingImage.alt == image3Alt ){
                switchingImage.src = image1URL; //make the source be the 1st URL
                switchingImage.alt = image1Alt; //make the alt attribute be the 1st alt attribute

            }
            else { //otherwise - here we'd expect the source of the image is the same as the contents of the image1URL variable
                switchingImage.src = image3URL; //make the source be the 2nd URL
                switchingImage.alt = image3Alt; //make the alt attribute be the 2nd alt attribute


        /*  for the id="imageToSwitch" if it was not repeating */
        /*  document.getElementById("imageToSwitch").src= image2URL;
            document.getElementById("imageToSwitch").alt= image2Alt;
        */    
                
                

    
        }


        })


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var more1Text = document.getElementById("more1");
  var btn1Text = document.getElementById("myBtn1");
  
   if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btn1Text.innerHTML = "Read more"; 
    more1Text.style.display = "none";
  } 
  
  else {
    dots1.style.display = "none";
    btn1Text.innerHTML = "Read less"; 
    more1Text.style.display = "inline";
  }
  
 }

oooo