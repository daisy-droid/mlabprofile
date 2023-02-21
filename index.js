window.onload=function()
{
   

let bios=["Ipeleng Mothibi"," I am a hardworking full-stack developer Intern, who enjoys trying out new technologies My skills include C++, Postgres,<br> and SQL, as well as problem-solving, <br> programming,data structures, and analytical skills from my<br> tertiary studies. I pride myself in being a hard worker that is not intimidated by learning new<br> technologies which will be beneficial when the company uses technologies that I'm not familiar with.<br>"];
let bio = "<ul>";
        bios.forEach((element) => {
            console.log(element);
            bio += "<li>" + element + "</li>";
        });
       bio += "</ul>"

document.getElementById('bio').innerHTML = bio;

const abouts = ["Ipeleng Mothibi","   National Diploma IT: Software Development Tshwane University Of Technology<br> Pretoria<br>South Africa<br>", "I am a hardworking full-stack developer Intern, who enjoys trying out new technologies. My skills include C++, Postgres,<br> and SQL, as well as problem-solving, <br> programming,data structures, and analytical skills from my<br> tertiary studies. I pride myself in being a hard worker that is not intimidated by learning new<br> technologies which will be beneficial when the company uses technologies that I'm not familiar with.<br>", "Mango"];
let name = abouts[0];
let education = abouts[1];
let desc = abouts[2];

document.getElementById('about').innerHTML = about;

document.getElementById('education').innerHTML = about;

document.getElementById('desc').innerHTML = about;
}