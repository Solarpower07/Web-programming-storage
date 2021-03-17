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
        "collapse": document.getElementsByClassName("advanced-stats"),
        "collapse_button": document.getElementsByClassName("collapse")
    }
};

//Gems Counter (I could not count in the HTML DOM directly as adding 150 would add as a string)
var gems = 0;

//Hero Arrays
const array = {
    "hero": {
        "ordinary": ["Angel","Marksman","Hill Giant","Engineer","Frost Witch","Dryad","Alchemist","Marauder"],
        "elite": ["Executioner","Assassin","Werewolf","Cyclops","Pain-Da","Shaman","Serpent Queen","Ice Demon","Triton"],
        "l_legend": ["Paladin","Ninja","Succubus","Champion","Druid","Thunder God","Grizzly Reaper","Pumpkin Duke","Atlanticore","Snowzilla","Cupid","Immortep","Aries","Vlad Dracula","Orksbane","Santa Boom","Death Knight","Pixie","Siren","Warlock","Treantaur","Harpy Queen","Skull Knight","Dread Drake","Ghoulem","Candy Kane","Valentina","Phantom King","Beast Tamer","Lady Leo","Grimfiend","Dracax","Medusa","Trixie Treat","Revenant","Lil Nick","Michael","Heartbreaker"],
        "legend": ["Anubis","Ronin","Gunslinger","Rockno","Mechtessa","Wallawalla","Creation-01","Athene","Sasquatch","Espirita","Dove Keeper","Cirrina","Storm Eater","Professor Ribbit","Lavanica","Asura","Ma Hatma","Rowdy Rascals","Bogeyman","Commodora","Lazulix","Plant Warrior","Rosaleen","Cosmo","Ripper","Svalinn","Zephryica","Occultist","Phobos","Queen Wasp","Hot Shot"]
    }
};

//Storage vars
var pusher = {
    "bg": null,
    "choice": null,
    "random": 0,
    "collapsed": true
}

function roll() {
    gems = gems + 150;
    ports.stats.general.gem[0].innerHTML = gems;
    ports.stats.general.hero[0].innerHTML++;
    pusher.random = Math.random() * 130;
    //30% chance for Ordinary, 21.15% chance for Crystal Ooze, 5% Gelatinous Champion, 57.3% for Elite, 15% chance for bad Legends, 1.55% chance for good Legends.
    if (pusher.random > 0 && pusher.random <= 30) {
        pusher.choice = array.hero.ordinary[Math.floor(Math.random() * array.hero.ordinary.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(120,250,100), rgb(100,200,80))";
        ports.stats.general.ordinary[0].innerHTML++;
        document.getElementById(pusher.choice).innerHTML++;
        //Ordinary
    }
    else if (pusher.random > 30 && pusher.random <= 45) {
        pusher.choice = array.hero.l_legend[Math.floor(Math.random() * array.hero.l_legend.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        ports.stats.general.legend[0].innerHTML++;
        document.getElementById(pusher.choice).innerHTML++;
        //Low Legend
    }
    else if (pusher.random > 45  && pusher.random <= 102.3) {
        pusher.choice = array.hero.elite[Math.floor(Math.random() * array.hero.elite.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        ports.stats.general.elite[0].innerHTML++;
        document.getElementById(pusher.choice).innerHTML++;
        //Elite
    }
    else if (pusher.random > 102.3 && pusher.random <= 123.45) {
        pusher.choice = "Crystal Ooze";
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(50,120,255), rgb(20,60,200))";
        ports.stats.general.sacrifice[0].innerHTML++;
        document.getElementById("crystal").innerHTML++;
        //Crystal Ooze
    }
    else if (pusher.random > 123.45 && pusher.random <= 128.45) {
        pusher.choice = "Gelatinous Champion";
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        ports.stats.general.sacrifice[0].innerHTML++;
        document.getElementById("gel-champ").innerHTML++;
        //Gelatinous Champion
    }
    else if (pusher.random > 128.45) {
        pusher.choice = array.hero.legend[Math.floor(Math.random() * array.hero.legend.length)];
        pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(150,80,250), rgb(100,50,200))";
        ports.stats.general.legend[0].innerHTML++;
        document.getElementById(pusher.choice).innerHTML++;
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

function collapse() {
    if (pusher.collapsed == true) {
        ports.stats.collapse[0].style.display = "inherit";
        pusher.collapsed = false;
        ports.stats.collapse_button[0].innerHTML = "Hide Advanced Statistics";
    }
    else {
        ports.stats.collapse[0].style.display = "none";
        pusher.collapsed = true;
        ports.stats.collapse_button[0].innerHTML = "Show Advanced Statistics";
    }
}
function reset() {
    var i;
    for (i=0; i < document.getElementsByClassName("stat").length; i++) {
        document.getElementsByClassName("stat")[i].innerHTML = 0;
    }
    gems = 0;
    pusher.choice = "";
    pusher.bg = "radial-gradient(circle farthest-side at 50% 90%, rgb(250,50,20), rgb(180,30,10))";
    ports.text.a[0].innerHTML = pusher.choice;
    ports.bg.a[0].style.backgroundImage = pusher.bg;
    ports.text.b[0].innerHTML = pusher.choice;
    ports.bg.b[0].style.backgroundImage = pusher.bg;
    ports.text.c[0].innerHTML = pusher.choice;
    ports.bg.c[0].style.backgroundImage = pusher.bg;
}