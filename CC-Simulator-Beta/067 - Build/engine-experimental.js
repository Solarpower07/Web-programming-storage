//HTML DOM Portal
const ports = {
    "bg": {
        "a": document.getElementsByClassName("slot1"),
        "b": document.getElementsByClassName("slot2"),
        "c": document.getElementsByClassName("slot3")
    },
    "text": {
        "a": document.getElementsByClassName("output1"),
        "b": document.getElementsByClassName("output2"),
        "c": document.getElementsByClassName("output3")
    },
    "hide": {
        "a": document.getElementsByClassName("triple1"),
        "b": document.getElementsByClassName("triple2")
    },
    "stats": {
        "general": {
            "gem": document.getElementsByClassName("gems"),
            "hero": document.getElementsByClassName("heroes"),
            "legend": document.getElementsByClassName("legends"),
            "elite": document.getElementsByClassName("elites"),
            "ordinary": document.getElementsByClassName("ordinaries"),
            "sacrifice": document.getElementsByClassName("sacrifice")
        },
        "specific": {
            
        }
    }
};

//Stats Counter
var counter = {
    "general": {
        "gem": 0,
        "hero": 0,
        "legend": 0,
        "elite": 0,
        "ordinary": 0,
        "sacrifice": 0,
    },
    "specific": {

    }
};
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
const array = {
    "hero": {
        "ordinary": ["Angel","Marksman","Hill Giant","Engineer","Frost Witch","Dryad","Alchemist","Marauder"],
        "elite": ["Executioner","Assassin","Werewolf","Cyclops","Pain-Da","Shaman","Serpent Queen","Ice Demon","Triton"],
        "l_legend": ["Paladin","Ninja","Succubus","Champion","Druid","Thunder God","Grizzly Reaper","Pumpkin Duke","Atlanticore","Snowzilla","Cupid","Immportep","Aries","Vlad Dracula","Orksbane","Santa Boom","Death Knight","Pixie","Siren","Warlock","Treantaur","Harpy Queen","Skull Knight","Dread Drake","Ghoulem","Candy Kane","Valentina","Phantom King","Beast Tamer","Lady Leo","Grimfiend","Dracax","Medusa","Trixie Treat","Revenant","Lil Nick","Michael","Heartbreaker"],
        "legend": ["Anubis","Ronin","Gunslinger","Rockno","Mechtessa","Wallawalla","Creation-01","Athene","Sasquatch","Espirita","Dove Keeper","Cirrina","Storm Eater","Professor Ribbit","Lavanica","Asura","Ma Hatma","Rowdy Rascals","Bogeyman","Commodora","Lazulix","Plant Warrior","Rosaleen","Cosmo","Ripper","Svalinn","Zephryica","Occultist","Phobos","Queen Wasp","Hot Shot"]
    }
};
var consumable1 = "Crystal Ooze";
var consumable2 = "Gelatinous Champion";
var ordinary = ["Angel","Marksman","Hill Giant","Engineer","Frost Witch","Dryad","Alchemist","Marauder"];
var elite = ["Executioner","Assassin","Werewolf","Cyclops","Pain-Da","Shaman","Serpent Queen","Ice Demon","Triton"];
var lowLegends = ["Paladin","Ninja","Succubus","Champion","Druid","Thunder God","Grizzly Reaper","Pumpkin Duke","Atlanticore","Snowzilla","Cupid","Immportep","Aries","Vlad Dracula","Orksbane","Santa Boom","Death Knight","Pixie","Siren","Warlock","Treantaur","Harpy Queen","Skull Knight","Dread Drake","Ghoulem","Candy Kane","Valentina","Phantom King","Beast Tamer","Lady Leo","Grimfiend","Dracax","Medusa","Trixie Treat","Revenant","Lil Nick","Michael","Heartbreaker"];
var legends = ["Anubis","Ronin","Gunslinger","Rockno","Mechtessa","Wallawalla","Creation-01","Athene","Sasquatch","Espirita","Dove Keeper","Cirrina","Storm Eater","Professor Ribbit","Lavanica","Asura","Ma Hatma","Rowdy Rascals","Bogeyman","Commodora","Lazulix","Plant Warrior","Rosaleen","Cosmo","Ripper","Svalinn","Zephryica","Occultist","Phobos","Queen Wasp","Hot Shot"];
var epic = ["Dynamica","Demon Stalker","Young Spark","Boa Queen", "Water Priestess","Mad Inventor","Axe Punisher","Massacre"];

//Storage vars
var pusher = {
    "bg": null,
    "choice": null,
    "random": 0
}
var bgColor = "";
var choice = "";
var random = 0;

function roll() {
    counter.general.gem = counter.general.gem + 150;
    ports.stats.general.gem[0].innerHTML = counter.general.gem;
    counter.general.hero++;
    ports.stats.general.hero[0].innerHTML = counter.general.hero;
    pusher.random = Math.random() * 130;
    //30% chance for Ordinary, 21.15% chance for Crystal Ooze, 5% Gelatinous Champion, 57.3% for Elite, 15% chance for bad Legends, 1.55% chance for good Legends.
    if (pusher.random > 0 && pusher.random <= 30) {
        pusher.choice = array.hero.ordinary[Math.floor(Math.random() * array.hero.ordinary.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(120,250,100), rgb(100,200,80))";
        counter.general.ordinary++;
        ports.stats.general.ordinary[0].innerHTML = counter.general.ordinary;
        //Ordinary
    }
    else if (pusher.random > 30 && pusher.random <= 45) {
        pusher.choice = array.hero.l_legend[Math.floor(Math.random() * array.hero.l_legend.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        counter.general.legend++;
        ports.stats.general.legend[0].innerHTML = counter.general.legend;
        //Low Legend
    }
    else if (pusher.random > 45  && pusher.random <= 102.3) {
        pusher.choice = array.hero.elite[Math.floor(Math.random() * array.hero.elite.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        counter.general.elite++;
        ports.stats.general.elite[0].innerHTML = counter.general.elite;
        //Elite
    }
    else if (pusher.random > 102.3 && pusher.random <= 123.45) {
        pusher.choice = "Crystal Ooze";
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        counter.general.sacrifice++;
        ports.stats.general.sacrifice[0].innerHTML = counter.general.sacrifice;
        //Crystal Ooze
    }
    else if (pusher.random > 128.45 && pusher.random <= 128.45) {
        pusher.choice = "Gelatinous Champion";
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        counter.general.sacrifice++;
        ports.stats.general.sacrifice[0].innerHTML = counter.general.sacrifice;
        //Gelatinous Champion
    }
    else if (pusher.random > 128.45) {
        pusher.choice = array.hero.legend[Math.floor(Math.random() * array.hero.legend.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        counter.general.legend++;
        ports.stats.general.legend[0].innerHTML = counter.general.legend;
        //Good Legend
    }
}
function single() {
    roll();
    ports.text.a[0].innerHTML = pusher.choice;
    ports.bg.a[0].style.backgroundImage = pusher.bg;
    ports.hide.a[0].style.display = "none";
    ports.hide.b[0].style.display = "none";
}
function triple() {
    ports.hide.a[0].style.display = "inline-block";
    ports.hide.b[0].style.display = "inline-block";
    roll();
    ports.text.a[0].innerHTML = pusher.choice;
    ports.bg.a[0].style.backgroundImage = pusher.bg;
    roll();
    ports.text.b[0].innerHTML = pusher.choice;
    ports.bg.b[0].style.backgroundImage = pusher.bg;
    roll();
    ports.text.c[0].innerHTML = pusher.choice;
    ports.bg.c[0].style.backgroundImage = pusher.bg;
}