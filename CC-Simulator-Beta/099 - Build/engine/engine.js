//File portal
var box1bg = document.getElementsByClassName("slot1");
var box2bg = document.getElementsByClassName("slot2");
var box3bg = document.getElementsByClassName("slot3");
var text1 = document.getElementsByClassName("output1");
var text2 = document.getElementsByClassName("output2");
var text3 = document.getElementsByClassName("output3");
var tripleRemove1 = document.getElementsByClassName("triple1");
var tripleRemove2 = document.getElementsByClassName("triple2");

//Stats Counter
var gemsCount = 0;
var gems = document.getElementsByClassName("gems");
var heroesCount = 0;
var heroes = document.getElementsByClassName("heroes");
var legendCount = 0;
var legend = document.getElementsByClassName("legends");
var elitesCount = 0;
var elites = document.getElementsByClassName("elites");
var ordinariesCount = 0;
var ordinaries = document.getElementsByClassName("ordinaries");
var sacrificeCount = 0;
var sacrifice = document.getElementsByClassName("sacrifice");

//Hero Arrays
var consumable1 = "Crystal Ooze";
var consumable2 = "Gelatinous Champion";
var ordinary = ["Angel","Marksman","Hill Giant","Engineer","Frost Witch","Dryad","Alchemist","Marauder"];
var elite = ["Executioner","Assassin","Werewolf","Cyclops","Pain-Da","Shaman","Serpent Queen","Ice Demon","Triton"];
var lowLegends = ["Paladin","Ninja","Succubus","Champion","Druid","Thunder God","Grizzly Reaper","Pumpkin Duke","Atlanticore","Snowzilla","Cupid","Immportep","Aries","Vlad Dracula","Orksbane","Santa Boom","Death Knight","Pixie","Siren","Warlock","Treantaur","Harpy Queen","Skull Knight","Dread Drake","Ghoulem","Candy Kane","Valentina","Phantom King","Beast Tamer","Lady Leo","Grimfiend","Dracax","Medusa","Trixie Treat","Revenant","Lil Nick","Michael","Heartbreaker"];
var legends = ["Anubis","Ronin","Gunslinger","Rockno","Mechtessa","Wallawalla","Creation-01","Athene","Sasquatch","Espirita","Dove Keeper","Cirrina","Storm Eater","Professor Ribbit","Lavanica","Asura","Ma Hatma","Rowdy Rascals","Bogeyman","Commodora","Lazulix","Plant Warrior","Rosaleen","Cosmo","Ripper","Svalinn","Zephryica","Occultist","Phobos","Queen Wasp","Hot Shot"];
var epic = ["Dynamica","Demon Stalker","Young Spark","Boa Queen", "Water Priestess","Mad Inventor","Axe Punisher","Massacre"];

//Storage vars
var bgColor = "";
var choice = "";
var random = 0;

function roll() {
    gemsCount = gemsCount + 150;
    gems[0].innerHTML = gemsCount;
    heroesCount = heroesCount + 1;
    heroes[0].innerHTML = heroesCount;
    random = Math.random() * 130;
    //30% chance for Ordinary, 21.15% chance for Crystal Ooze, 5% Gelatinous Champion, 57.3% for Elite, 15% chance for bad Legends, 1.55% chance for good Legends.
    if (random > 0 && random <= 30) {
        choice = ordinary[Math.floor(Math.random() * ordinary.length)];
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(120,250,100), rgb(100,200,80))";
        ordinariesCount++;
        ordinaries[0].innerHTML = ordinariesCount;
        //Ordinary
    }
    else if (random > 30 && random <= 45) {
        choice = lowLegends[Math.floor(Math.random() * lowLegends.length)];
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        legendCount++;
        legend[0].innerHTML = legendCount;
        //Low Legend
    }
    else if (random > 45  && random <= 102.3) {
        choice = elite[Math.floor(Math.random() * elite.length)];
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        elitesCount++;
        elites[0].innerHTML = elitesCount;
        //Elite
    }
    else if (random > 102.3 && random <= 123.45) {
        choice = consumable1;
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        sacrificeCount++;
        sacrifice[0].innerHTML = sacrificeCount;
        //Crystal Ooze
    }
    else if (random > 128.45 && random <= 128.45) {
        choice = consumable2;
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        sacrificeCount++;
        sacrifice[0].innerHTML = sacrificeCount;
        //Gelatinous Champion
    }
    else if (random > 128.45) {
        choice = legends[Math.floor(Math.random() * legends.length)];
        bgColor = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        legendCount++;
        legend[0].innerHTML = legendCount;
        //Good Legend
    }
}
function single() {
    tripleRemove1[0].style.display = "none";
    tripleRemove2[0].style.display = "none";
    roll();
    text1[0].innerHTML = choice;
    box1bg[0].style.backgroundImage = bgColor;
    tripleRemove1[0].style.display = "none";
    tripleRemove2[0].style.display = "none";
}
function triple() {
    tripleRemove1[0].style.display = "inline-block";
    tripleRemove2[0].style.display = "inline-block";
    roll();
    text1[0].innerHTML = choice;
    box1bg[0].style.backgroundImage = bgColor;
    roll();
    text2[0].innerHTML = choice;
    box2bg[0].style.backgroundImage = bgColor;
    roll();
    text3[0].innerHTML = choice;
    box3bg[0].style.backgroundImage = bgColor;
}