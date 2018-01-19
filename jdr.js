var Hero = {
	name: "",
	strenght: 0,
};

var Boss = {
	name : "",
	life: 0,
};

var hero1 = Object.create(Hero);
hero1.name = "Toto";
hero1.strenght = 1;

var boss1 = Object.create(Boss);
boss1.name = "El Terrible Zorg";
boss1.life = 10;

console.log("Bonjour " + hero1.name);
console.log("Vous possédez " + hero1.strenght + " de force");
console.log("Votre ennemi est " + boss1.name);
console.log("Il possède " + boss1.life + " points de vie");
console.log("");

while (boss1.life > 0) {
	console.log("Vous attaquez " + boss1.name + " et lui infligez " + hero1.strenght + " point(s) de dégats.");
	boss1.life = boss1.life - hero1.strenght;
	console.log(boss1.name + " possède maintenant " + boss1.life + " point(s) de vie.");
};

console.log(boss1.name + " est mort. Vous avez gagné !");


