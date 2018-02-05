var Character = {
	initCharacter: function(name, life, strenght){
		this.name = name;
		this.life = life;
		this.strenght = strenght;
	},
	attack: function(target){
		// Fonction attaquer à créer ici
	}
};

var hero1 = Object.create(Character);
hero1.initCharacter("Aventurier", 20, 2);

var boss1 = Object.create(Character);
boss1.initCharacter ("Un Lapin Adulte", 10, 1);

$(function(){
	$('#bossName').text(boss1.name);
	$('#heroName').text(hero1.name);	
	$('#bossLife').text(boss1.life);
	$('#bossStrenght').text(boss1.strenght);
	$('#heroLife').text(hero1.life);
	$('#heroStrenght').text(hero1.strenght);

	$('#btnAtk').click(function(){
		if (hero1.life > boss1.strenght) 
		{
			if (boss1.life > hero1.strenght) 
			{
				boss1.life = boss1.life - hero1.strenght;
				hero1.life = hero1.life - boss1.strenght;
				$('#console').text("Vous attaquez " + boss1.name + " et lui infligez " + hero1.strenght + " point(s) de dégats.");
				$('#console').append('<br>' + boss1.name + " vous attaque et vous inflige " + boss1.strenght + " point(s) de dégats !");
				$('#bossLife').text(boss1.life);
				$('#heroLife').text(hero1.life);
			}
			else
			{
				boss1.life = boss1.life - hero1.strenght;
				hero1.life = hero1.life - boss1.strenght;
				$('#bossLife').text(boss1.life);
				$('#heroLife').text(hero1.life);
				$('#console').text(boss1.name + " est mort. Vous avez gagné !");
			}	
		}
		else
			{
				boss1.life = boss1.life - hero1.strenght;
				hero1.life = hero1.life - boss1.strenght;
				$('#bossLife').text(boss1.life);
				$('#heroLife').text(hero1.life);
				$('#console').text("Vous êtes mort !")
				}							
			});
		});




