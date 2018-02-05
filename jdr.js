var Hero = {
	name: "",
	life: 0,
	strenght: 0,
};

var Boss = {
	name : "",
	life: 0,
	strenght: 0,
};

var hero1 = Object.create(Hero);
hero1.name = "Aventurier";
hero1.life = 20;
hero1.strenght = 2;

var boss1 = Object.create(Boss);
boss1.name = "Un Lapin Adulte";
boss1.life = 10;
boss1.strenght = 1;



