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



