// JavaScript Document

console.log("Linked up");

const ansonArray = ["My name is Anson Lee, I live in  a 4 people family. They are my parents and my sister. I'm 18 yeas old right now. Currently, I'm studying in Fanshawe College, my major is Interactive Media Design. I wish I could become a Youtuber in the future."
,"Usually I go to excercise when I have free time. My favorite sport is basketball, I have been playing basketball for three years. Once I start playing it with others  sometimes I forget about the time, because I really enjoy playing basketball."
,"Drawing is the other event I will do during my leisure time, I usually try to draw some animation's characters. Everytime I start drawing, I feel that time passes super fast. Therefore, I start drawing when I feel really boring."];
const ansonPArray = ["images/Family.jpg", "images/Sports.jpg", "images/Drawing.jpg"];
const jayArray = ["Hey, my name is Jay Nayee and I’m 19 years old from Gujarat, India. In India I used to be like a shy and nerdy guy, talk less with people and mind my own business all the time and who just study all day and play video games like any other normal person. But after coming to Canada everything changed about me."
,"In sports I’ve been playing basketball recently a lot and it’s really awesome. But, I like soccer more because from childhood I’ve been playing soccer and it gives really a good exercise to whole body and keep me energetic.",
"Talking about my habits, I like cooking new dishes and playing around with spices and find new taste. Also, I have habit of writing dairy everyday and write about what I do everyday and some goals for future and love photography and watch Netflix."];
const jayPArray = ["images/JayIntro.jpg", "images/JaySports.jpeg", "images/JayHabits.jpg"];
const titletype = ["Intro", "Sports", "Habits"];



function showDescriptionA(x){
  document.getElementById("title").innerHTML = titletype[x];
  var img = document.createElement('IMG');
  img.src = ansonPArray[x];
  img.width = ("300");
  document.getElementById("images").innerHTML = "";
  document.getElementById("images").appendChild(img);


	document.getElementById("description").innerHTML = ansonArray[x];

  }




function showDescriptionJ(x){
	document.getElementById("title").innerHTML = titletype[x];
  	var img = document.createElement('IMG');
 	 img.src = jayPArray[x];
 	 img.width = ("300");
  	document.getElementById("images").innerHTML = "";
 	document.getElementById("images").appendChild(img);


	document.getElementById("description").innerHTML = jayArray[x];
}


function showNameA(x){
	document.getElementById("NameA").innerHTML = "Anson"}

function showNameJ(x){
	document.getElementById("NameJ").innerHTML = "Jay"}