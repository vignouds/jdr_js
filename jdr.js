//"Classe" Character
var Character = {
	initCharacter: function(name, life, strenght){
		this.name = name;
		this.life = life;
		this.strenght = strenght;
	},
	attack: function(target){
		if (target.life > 0) {
			target.life = target.life - this.strenght;
			if (target.life < 0) {
				target.life = 0;
			}
		}
	}
};

//"Sous-classe" Hero
var Hero = Object.create(Character);

Hero.fight = function(target){
	this.attack(target);
	heroAtkText = "Vous attaquez " + target.name + " et lui infligez " + this.strenght + " point(s) de dégats.";
};

//"Sous-classe" Boss
var Boss = Object.create(Character);

Boss.fight = function(target){
	this.attack(target);
	bossAtkText = this.name + " vous attaque et vous inflige " + this.strenght + " point(s) de dégats !"; 
}

// Initialisation de hero1 et boss1
var hero1 = Object.create(Hero);
hero1.initCharacter("Aventurier", 20, 2);

var boss1 = Object.create(Boss);
boss1.initCharacter ("Un Lapin Adulte", 10, 1);

// Code Jquery : 

$(function(){
	$('#bossName').text(boss1.name);
	$('#heroName').text(hero1.name);	
	$('#bossLife').text(boss1.life);
	$('#bossStrenght').text(boss1.strenght);
	$('#heroLife').text(hero1.life);
	$('#heroStrenght').text(hero1.strenght);

	$('#btnAtk').click(function(){
		if ((hero1.life <= 0) || (boss1.life <= 0))
		{
			$('#console').text("Le jeu est terminé.");
		}
		else
		{
			if (hero1.life > boss1.strenght) 
			{
				if (boss1.life > hero1.strenght) 
				{
					hero1.fight(boss1);
					boss1.fight(hero1);
					$('#console').text(heroAtkText);
					$('#console').append('<br>' + bossAtkText);
					$('#bossLife').text(boss1.life);
					$('#heroLife').text(hero1.life);
				}
				else
				{
					hero1.fight(boss1);
					boss1.fight(hero1);
					$('#bossLife').text(boss1.life);
					$('#heroLife').text(hero1.life);
					$('#console').text(boss1.name + " est mort. Vous avez gagné !");
				}	
			}
			else
				{
					hero1.fight(boss1);
					boss1.fight(hero1);
					$('#bossLife').text(boss1.life);
					$('#heroLife').text(hero1.life);
					$('#console').text("Vous êtes mort !")
					}
		}							
	});
});




