const player = {};
player.class;
player.subclass;
player.race;
player.size;
player.name;
player.age;
player.gender;
player.height;
player.weight;
player.skin;
player.eyes;
player.hair;
player.hitDice;
player.background;
player.alignment;
player.HitPoints;
player.proficiencyBonus = 2;
player.proficiency =[];
player.AC;
player.speed;
player.personalityTraits;
player.ideals;
player.bonds;
player.flaws;
player.features = [];
player.languages =[];
player.inventory = {};
player.skills =[];

const barbarian = {};
const bard = {};
const cleric = {};
const druid = {};
const fighter = {};
const monk ={};
const paladin = {};
const ranger = {};
const rogue = {};
const sorcerer = {};
const warlock = {};
const wizard = {};

const playerClass = [barbarian,bard,cleric,druid,fighter,monk, paladin,ranger,rogue,sorcerer,warlock,wizard];

const aarakocra = {};
const protectorAasimar = {};
const scourgeAasimar = {};
const fallenAasimar = {};
const bugbear = {};
const dragonborn = {};
const mountainDwarf = {};
const hillDwarf = {};
const duergar = {};
const highElf = {};
const woodElf = {};
const drow = {};
const eladrin = {};
const firbolg = {};
const fireGenasi = {};
const airGenasi = {};
const earthGenasi = {};
const waterGenasi = {};
const forestGnome = {};
const rockGnome = {};
const svirfneblin = {};
const goblin = {};
const goliath = {};
const lightfootHalfling = {};
const stoutHalfling = {};
const ghostwiseHalfling = {};
const halfelf = {};
const halforc = {};
const hobgoblin = {};
const human = {};
const kenku = {};
const kobold = {};
const lizardfolk = {};
const orc = {};
const tabaxi = {};
const tiefling = {};
const tortle = {};
const triton = {};
const yuanTiPureblood = {};

const playerRace = [hillDwarf, highElf, lightfootHalfling, human, dragonborn, rockGnome, halfelf, halforc, tiefling,] /*[aarakocra, protectorAasimar, scourgeAasimar,fallenAasimar,bugbear,dragonborn,mountainDwarf,hillDwarf,duergar,highElf,woodElf,drow,eladrin,firbolg,fireGenasi,waterGenasi,earthGenasi,airGenasi,forestGnome,rockGnome,svirfneblin,goblin, goliath,lightfootHalfling,stoutHalfling,ghostwiseHalfling,halfelf,halforc,hobgoblin,human,kenku,kobold, lizardfolk, orc,tabaxi, tiefling,tortle,triton,yuanTiPureblood,];*/

const Acolyte = {};
Acolyte.backgroundString = "Acolyte";

const Anthropologist = {}; 
Anthropologist.backgroundString = "Anthropologist";

const Archaeologist = {}; 
Archaeologist.backgroundString = "Archaeologist";

const Charlatan = {}; 
Charlatan.backgroundString = "Charlatan";

const CityWatch = {}; 
CityWatch.backgroundString = "City Watch";

const ClanCrafter = {}; 
ClanCrafter.backgroundString = "Clan Crafter";

const CloisteredScholar = {}; 
CloisteredScholar.backgroundString = "Cloistered Scholar";

const Courtier = {}; 
Courtier.backgroundString = "Courtier";

const Criminal = {}; 
Criminal.backgroundString = "Criminal";

const Entertainer = {}; 
Entertainer.backgroundString = "Entertainer";

const FactionAgent = {}; 
FactionAgent.backgroundString = "Faction Agent";

const FarTraveler = {}; 
FarTraveler.backgroundString = "Far Traveler";

const FolkHero = {}; 
FolkHero.backgroundString = "Folk Hero";

const Gladiator = {};
Gladiator.backgroundString = "Gladiator";

const GuildArtisan = {}; 
GuildArtisan.backgroundString = "Guild Artisan";

const GuildMerchant = {}; 
GuildMerchant.backgroundString = "Guild Merchant";

const HauntedOne = {}; 
HauntedOne.backgroundString = "Haunted One";

const Hermit = {}; 
Hermit.backgroundString = "Hermit";

const HouseAgent = {}; 
HouseAgent.backgroundString = "House Agent";

const Inheritor = {}; 
Inheritor.backgroundString = "Inheritor";

const Investigator = {}; 
Investigator.backgroundString = "Investigator";

const Knight = {}; 
Knight.backgroundString = "Knight";

const KnightOfTheOrder = {}; 
KnightOfTheOrder.backgroundString = "Knight of the Order";

const MercenaryVeteran = {}; 
MercenaryVeteran.backgroundString = "Mercenary Veteran";

const Noble = {}; 
Noble.backgroundString = "Noble";

const Outlander = {}; 
Outlander.backgroundString = "Outlander";

const Pirate = {};
Pirate.backgroundString = "Pirate";

const Sage = {}; 
Sage.backgroundString = "Sage";

const Sailor = {}; 
Sailor.backgroundString = "Sailor";

const Soldier = {}; 
Soldier.backgroundString = "Soldier";

const Spy = {}; 
Spy.backgroundString = "Spy";

const UrbanBountyHunter = {}; 
UrbanBountyHunter.backgroundString = "Urban Bounty Hunter";
const Urchin = {};
Urchin.backgroundString = "Urchin";

const Vizier = {};
Vizier.backgroundString = "Vizier";

const playerBackgroundList = [Acolyte,] //Anthropologist, Archaeologist, Charlatan, CityWatch, ClanCrafter, CloisteredScholar, Courtier, Criminal/*, Entertainer, FactionAgent, FarTraveler, FolkHero, Gladiator, GuildArtisan, GuildMerchant, HauntedOne, Hermit, HouseAgent, Inheritor, Investigator, Knight, KnightOfTheOrder, MercenaryVeteran, Noble, Outlander, Pirate, Sage, Sailor, Soldier, Spy, UrbanBountyHunter, Urchin, Vizier*/ ];

// random number generation functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 4d6 drop the lowest formulas
function fourDSix() {
  let stat = [];
  for (rolls = 0; rolls < 4; rolls++) {
    stat.unshift(getRndInteger(1, 7));
  }
  return stat;
}

function dropTheLowest(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const pos = numbers.indexOf(smallest);
  return numbers.slice(0, pos).concat(numbers.slice(pos + 1));
}

function statAddition(numbers) {
  return numbers[0] + numbers[1] + numbers[2];
}

function statGeneration() {
  protoArray = [];
  for (count = 0; count < 6; count++) {
    protoArray.push(statAddition(dropTheLowest(fourDSix())));
  }
  return protoArray;
}

let statArray = statGeneration();
statArray = statArray.sort(function(a, b){return b - a});


function modCalc(stat) {
  if (stat === 1) {
    return -5;
  } else if (stat == 2 || stat == 3) {
    return -4;
  } else if (stat == 4 || stat == 5) {
    return -3;
  } else if (stat == 6 || stat == 7) {
    return -2;
  } else if (stat == 8 || stat == 9) {
    return -1;
  } else if (stat == 10 || stat == 11) {
    return 0;
  } else if (stat == 12 || stat == 13) {
    return 1;
  } else if (stat == 14 || stat == 15) {
    return 2;
  } else if (stat == 16 || stat == 17) {
    return 3;
  } else if (stat == 18 || stat == 19) {
    return 4;
  } else if (stat === 20) {
    return 5;
  } else {
    console.log('idk man something f***ed up (mod calc)');
  }
}

function getThingFromList(list) {
  const thingIndex = list.length;
  const thing = list[getRandomInt(thingIndex)];
  return thing;
}

let pcRace = getThingFromList(playerRace);
player.race = pcRace;
player.playerClass = getThingFromList(playerClass); 
let pcBackground = getThingFromList(playerBackgroundList);



function gender() {
  x = getRandomInt(100);
  if ( (x%2) === 0){
    return 'male';
  } else {
    return 'female';
  }
}

player.gender = gender()

function statSelection(pClass)  {
  switch (pClass) {
    case barbarian:
      player.str = statArray[0];
      player.dex = statArray[2];
      player.con = statArray[1];
      player.int = statArray[4];
      player.wis = statArray[3];
      player.cha = statArray[5];
      break;
    case bard:
      player.str = statArray[5];
      player.dex = statArray[1];
      player.con = statArray[3];
      player.int = statArray[2];
      player.wis = statArray[4];
      player.cha = statArray[0];
      break;
    case cleric:
      player.str = statArray[2];
      player.dex = statArray[3];
      player.con = statArray[1];
      player.int = statArray[4];
      player.wis = statArray[0];
      player.cha = statArray[5];
      break;
    case druid:
      player.str = statArray[4];
      player.dex = statArray[2];
      player.con = statArray[1];
      player.int = statArray[3];
      player.wis = statArray[0];
      player.cha = statArray[5];
      break;
    case fighter:
      x = getRandomInt(5);
      if ((x%2) === 0)  {
        player.str = statArray[3];
        player.dex = statArray[0];
        player.con = statArray[1];
        player.int = statArray[2];
        player.wis = statArray[4];
        player.cha = statArray[5];
        break;
      } else  {
          player.str = statArray[0];
          player.dex = statArray[3];
          player.con = statArray[1];
          player.int = statArray[2];
          player.wis = statArray[4];
          player.cha = statArray[5];
          break;
      }
    case monk:
      player.str = statArray[5];
      player.dex = statArray[0];
      player.con = statArray[3];
      player.int = statArray[2];
      player.wis = statArray[1];
      player.cha = statArray[4];
      break;
    case paladin:
      player.str = statArray[0];
      player.dex = statArray[3];
      player.con = statArray[2];
      player.int = statArray[4];
      player.wis = statArray[5];
      player.cha = statArray[1];
      break;
    case ranger:
      player.str = statArray[5];
      player.dex = statArray[0];
      player.con = statArray[3];
      player.int = statArray[2];
      player.wis = statArray[1];
      player.cha = statArray[4];
      break;
    case rogue:
      player.str = statArray[5];
      player.dex = statArray[0];
      player.con = statArray[3];
      player.int = statArray[1];
      player.wis = statArray[4];
      player.cha = statArray[2];
      break;
    case sorcerer:
      player.str = statArray[5];
      player.dex = statArray[2];
      player.con = statArray[1];
      player.int = statArray[3];
      player.wis = statArray[4];
      player.cha = statArray[0];
      break;
    case warlock:
      player.str = statArray[5];
      player.dex = statArray[2];
      player.con = statArray[1];
      player.int = statArray[3];
      player.wis = statArray[4];
      player.cha = statArray[0];
      break;
    case wizard:
      player.str = statArray[5];
      player.dex = statArray[2];
      player.con = statArray[1];
      player.int = statArray[0];
      player.wis = statArray[4];
      player.cha = statArray[3];
      break;
    default:
      console.log('IDK man something messed up (class based stat assignment')
  }
}
function raceStatApplication(x,y)  {
  if (y.str !== undefined) {
    x.str += y.str;
  }
  if (y.dex !== undefined)  {
    x.dex += y.dex;
  }
  if (y.con !== undefined)  {
    x.con += y.con;
  }
  if (y.int !== undefined)  {
    x.int += y.int;
  }
  if (y.wis !== undefined)  {
    x.wis += y.wis;
  }
  if (y.cha !== undefined)  {
    x.cha += y.cha;
  }
}

statSelection(player.playerClass);
player.strMod = modCalc(player.str);
const strMod = player.strMod;
player.dexMod = modCalc(player.dex);
const dexMod = player.dexMod;
player.conMod = modCalc(player.con);
const conMod = player.conMod;
player.intMod = modCalc(player.int);
const intMod = player.intMod;
player.wisMod = modCalc(player.wis);
const wisMod = player.wisMod;
player.chaMod = modCalc(player.cha);
const chaMod = player.chaMod;
raceStatApplication(player, pcRace)  

function raceApplication(x, y) {
  x.alignment = y.alignment;
  x.size = y.size;
  if (x.gender === 'male')  {
    x.name = y.Mname;}
  if (x.gender === 'female')  {
    x.name = y.Fname;}
  x.age = y.age;
  x.height = y.height;
  x.weight = y.weight;
  x.skin = y.skin;
  x.eyes = y.eyes;  
  x.hair = y.hair;  
  
  x.speed = y.speed;  
  x.features = x.features.concat(y.speical).CleanConcat();;  
  x.languages.push(y.languages[0]);
  if (y.languages[1] !== undefined)  {
    x.languages.push(y.languages[1]);
  }
  if (y.languages[2] !== undefined)  {
    x.languages.push(y.languages[2]);
  }
  x.race = y.race;
  if (y.proficiency !== undefined) {
    x.proficiency = x.proficiency.concat(y.proficiency).CleanConcat();
  }
  if (y.spellList !== undefined) {
    x.spellList = y.spellList; 
  }
  switch (x.race)  {
    case 'Tiefling': 
      x.horn = y.horn;
      break;
    case 'Tortle':
      x.shell = y.shell;
      break; 
    default:
      break;}  
  switch (x.race) {
    case 'Tortle':
      x.AC = 17; 
      break; 
    case 'Lizardfolk': 
      x.AC = 10 + dexMod + 3; 
      break; 
    default:
      x.AC = 10 + dexMod; 
      break;}
}



function randLangElf(list)  {
  x = getThingFromList(list);
  while ((x === 'Elvish')||(x === "Common"))  {
    x = getThingFromList(list);
  }
  return x;
}

function randLangHuman(list)  {
  x = getThingFromList(list);
  while (x === "Common")  {
    x = getThingFromList(list);
  }
  return x;
}
function getMartialWeapon() {
  const martialWeaponIndex = martialWeaponList.length;
  const MartialWeapon = martialWeaponList[getRandomInt(martialWeaponIndex)];
  return MartialWeapon;
}
function getTwoHandedWeapon() {
  const twoHandedWeaponIndex = twoHandedWeaponList.length;
  const twoHandedWeapon = twoHandedWeaponList[getRandomInt(twoHandedWeaponIndex)];
  return twoHandedWeaponIndex;
}
function getSimpleWeapon() {
  const simpleWeaponIndex = simpleWeaponList.length;
  const SimplelWeapon = simpleWeaponList[getRandomInt(simpleWeaponIndex)];
  return SimplelWeapon;
}
function getsimpleMeleeWeapon() {
  const simpleMeleeWeaponIndex = simpleWeaponMeleeList.length;
  const simpleMWeapon = simpleWeaponMeleeList[getRandomInt(simpleMeleeWeaponIndex)];
  return simpleMWeapon;
}
function getInstrument()  {
  const musicalInstrumentsIndex = musicalInstruments.length;
  let Instrument = musicalInstruments[getRandomInt(musicalInstrumentsIndex)];
  return Instrument;
}

//array concat func via https://stackoverflow.com/users/41983/liranuna
Array.prototype.CleanConcat = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function inventoryCheck(pClass, item, number) {
  if (pClass.inventory[item] !== undefined) {
    pClass.inventory[item] = pClass.inventory[item]+number;
  } else  {
    pClass.inventory[item] = number;
  }
}

function backgroundApplication(x) {
  player.background = x.backgroundString;
  player.personality1 = x.personality1;
  player.personality2 = x.personality2;
  player.bond = x.bond;
  player.flaw = x.flaw;
  player.ideal = x.ideal;
  player.skills = player.skills.concat(x.skills).CleanConcat();
  player.features = player.features.concat(x.features).CleanConcat();
  if (x.features != undefined)  {
    player.features = player.features.concat(x.special).CleanConcat();
  }
  console.log(player.features);
  let i = Object.assign(player.inventory, x.equipment);
  player.inventory = i;
  if (x.proficiency !== undefined) {
    player.proficiency = player.proficiency.concat(x.proficiency).CleanConcat();
  }

  //this space intentonally left blank
  // ok but why is it blank? 
}
console.log(player.features);



function classApplication(x)  {
  player.playerClass = x.playerClass;
  player.HitDice = x.HitDice;
  let i = Object.assign(player.inventory, x.inventory);
  player.inventory = i;
  player.features = player.features.concat(x.features).CleanConcat();
  player.skills = player.skills.concat(x.skills).CleanConcat();
  player.HitPoints = x.HitPoints + conMod;
  i = player.proficiency.concat(x.proficiency).CleanConcat();
  player.proficiency = i
  player.SavingThrows = x.SavingThrows;
  if (x.subclass !==  undefined)   {
    player.subclass = x.subclass;
  }
  if (x.magic !== undefined) {
    if (player.magic !== undefined) {
      player.magic = player.magic.concat(x.magic).CleanConcat();
    } else  {
      player.magic = x.magic
    }
    if (x.spellList !== undefined) {
      if (player.spellList !== undefined) {
        player.spellList = player.spellList.concat(x.spellList).CleanConcat();
      } else  {player.spellList = x.spellList
      }
    }
  }
}
  


Array.prototype.findFirstSubstring = function(s) {
            for(var i = 0; i < this.length;i++)
            {
                if(this[i].indexOf(s) !== -1)
                    return i;
            }
            return -1;

};

function proficiencyCheck(skill,pClass)  {
  x = pClass.proficiency.findFirstSubstring(skill);
  if (x <0) {
    return false;
  } else  {
    return true;
  }
}

function racePull(player) {
  return player.race;
}



function checkProfsFor(proficiency) {
  let skillzList = [];
  skillzList = player.skills
  if (skillzList.indexOf(proficiency) >= 0) {
    x = true;
  } else {
    x = false;
  }
  return x;
}

function checkSavesFor(skill) {
  let savesList = [];
  savesList = player.SavingThrows
  if (savesList.indexOf(skill) >= 0) {
    x = true;
  } else {
    x = false;
  }
  return x;
}

//shared arrays in the global scope because messit 
let langList = ['Abyssal',  'Celestial', 'Deep Speech', 'Draconic', 'Druidic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling',  'Infernal', 'Orc', 'Primordial', 'Sylvan', 'Undercommon',/*'Aquan', 'Auran', 'Gnoll','Ignan','Terran',*/];
const aasimarMNameList = ['Aritian','Beltin', 'Cernan', 'Cronwier', 'Eran', 'Ilamin', 'Maudril','Okrin','Parant', 'Tural','Wyran','Zaigan',];
const aasimarFNameList = ['Arken','Arsinoe','Davina', 'Drinma', 'Imesah', 'Masozi', 'Nijena','Niramour','Ondrea', 'Rhialla','Valtyra',];
const AASskinList = ['Alabaster', 'Onyx', 'Crimson'];
const dwarfmNameList = ['Adrik','Alberich','Baern','Barendd','Brottor','Bruenor','Dain','Darrak', 'Delg','Eberk','Einkil','Fargrim','Flint','Gardain','Harbek','Kildrak','Morgran','Orsik','Oskar','Rangrim','Rurik','Taklinn','Thoradin','Thorin','Tordek','Traubon','Travok','Ulfgar','Veit','Vondal',];
const dwarffNameList = ['Amber','Artin','Audhild','Bardryn','Dagnal','Diesa','Eldeth','Falkrunn','Finellen','Gunnloda','Gurdis','Helja','Hlin','Kathra','Kristryd','Ilde','Liftrasa','Mardred','Riswynn','Sannl','Torbera','Torgga','Vistra',];
const dwarflNameList = ['Balderk','Battlehammer','Brawnanvil','Dankil','Fireforge','Frostbeard','Gorunn','Holderhek','Ironfist','Loderr','Lutgehr','Rumnaheim','Strakeln','Torunn','Ungart',];
const dwarfprofList = ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"];
const elfMNameList = ['Adran','Aelar','Aramil','Arannis','Aust','Beiro','Berrian','Carric','Enialis','Erdan','Erevan','Galinndan','Hadarai','Heian','Himo','Immeral','Ivellios','Laucian','Mindartis','Paelias','Peren','Quarion','Riardon','Rolen','Soveliss','Thamior','Tharivol','Theren','Varis',];
const elfFNameList = ['Adrie','Althaea','Anastrianna','Andraste','Antinua','Bethrynna','Birel','Caelynn','Drusilia','Enna','Felosial','Ielenia','Jelenneth','Keyleth','Leshanna','Lia','Meriele','Mialee','Naivara','Quelenna','Quillathe','Sariel','Shanairra','Shava','Silaqui','Theirastra','Thia','Vadania','Valanthe','Xanaphia',];
const elfLNameList = ['Amakiir','Amastacia','Galanodel','Holimion','Ilphelkiir','Liadon','Meliamne','Naïlo','Siannodel','Xiloscient',];
const GnomeMNameList = ['Alston','Alvyn','Boddynock','Brocc','Burgell','Dimble','Eldon','Erky','Fonkin','Frug','Gerbo','Gimble','Glim','Jebeddo','Kellen','Namfoodle','Orryn','Roondar','Seebo','Sindri','Warryn','Wrenn','Zook',];
const GnomeFNameList = ['Bimpnottin','Breena','Caramip','Carlin','Donella','Duvamil','Ella','Ellyjobell','Ellywick','Lilli','Loopmottin','Lorilla','Mardnab','Nissa','Nyx','Oda','Orla','Roywyn','Shamil','Tana','Waywocket','Zanna',];
const GnomeLNameList = ['Beren','Daergel','Folkor','Garrick','Nackle','Murnig','Ningel','Raulnor','Scheppen','Timbers','Turen',];
const GnomeNNameList = ['Aleslosh','Ashhearth','Badger','Cloak','Doublelock','Filchbatter','Fnipper','Ku','Nim','Oneshoe','Pock','Sparklegem','Stumbleduck',];
const HalflingmNameList = ['Alton','Ander','Cade','Corrin','Eldon','Errich','Finnan','Garret','Lindal','Lyle','Merric','Milo','Osborn','Perrin','Reed','Roscoe','Wellby',];
const HalflingfNameList = ['Andry','Bree','Callie','Cora','Euphemia','Jillian','Kithri','Lavinia','Lidda','Merla','Nedda','Paela','Portia','Seraphina','Shaena','Trym','Vani','Verna',];
const HalflinglNameList = ['Brushgather','Goodbarrel','Greenbottle','High-hill','Hilltopple','Leagallow','Tealeaf','Thorngage','Tosscobble','Underbough',];

const martialWeaponList = ['Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'WarPick', 'Warhammer', 'Whip', 'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'];
const simpleWeaponList = ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Darts', 'Shortbow', 'Sling'];
const simpleWeaponMeleeList = ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear'];
const twoHandedWeaponList = ["Battleaxe", "Glaive", "Greataxe", "Greatsword", "Halberd", "Longsword", "Maul", "Pike", "Trident", "Warhammer"];
const rangedWeaponList = ['Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net', 'Light Crossbow', 'Darts', 'Shortbow', 'Sling'];
const allWeaponList = ['Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'WarPick', 'Warhammer', 'Whip', 'Blowgun', 'HandCrossbow', 'HeavyCrossbow', 'Longbow', 'Net', 'Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'LightHammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'LightCrossbow', 'Shortbow', 'Sling', 'Darts'];

const strWeaponList = ['Club', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Trident', 'War Pick', 'Warhammer'];
const finesseWeaponList = ['Dagger','Dart','Rapier', 'Scimitar', 'Shortsword', 'Whip'];
const dexWeaponList = ['Light Crossbow','L. Crossbow', 'Shortbow', 'Sling', 'Blowgun','Heavy Crossbow', 'H. Crossbow', 'Hand Crossbow', 'Longbow', 'Net'];
const d0weaponList = ['Net'];
const d1weaponList = ['Blowgun'];
const d4weaponList = ['Club', 'Dagger', 'Light Hammer', 'Sickle', 'Dart', 'Sling','Whip'];
const d6weaponList = ['Handaxe', 'Javelin', 'Mace', 'Quarterstaff','Spear', 'Shortbow','Scimitar', 'Trident', 'Hand Crossbow'];
const twoD6weaponList = ['Greatsword', 'Maul'];
const d8weaponList = ['Greatclub', 'Light Crossbow', 'L. Crossbow','Battleaxe', 'Flail', 'Morningstar', 'Rapier', 'War Pick', 'Warhammer', 'Longbow'];
const d10weaponList = ['Glaive','Halberd','Longsword', 'Pike'];
const d12weaponList = ['Greataxe', 'Lance','Heavy Crossbow', 'H. Crossbow']

const musicalInstruments = ["Bagpipes", 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre', 'Horn', 'Pan', 'Shawm', 'Viol']; 
const artisanToolsList = ["Alchemist's supplies", "Brewer's supplies", "Calligrapher's Supplies", "Carpenter's tools", "Cartographer's tools", "Cobbler's tools", "Cook's utensils", "Glassblower's tools", "Jeweler's tools", "Leatherworker's tools", "Mason's tools", "Painter's supplies", "Potter's tools", "Smith's tools", "Tinker's tools", "Weaver's tools", "Woodcarver's tools",];
const guildBusinessList = ["Alchemists and apothecaries", "Leatherworkers, skinners, and tanners", "Armorers, locksmiths, and finesmiths", "Masons and stonecutters", "Brewers, distillers, and vintners", "Painters, limners, and sign-makers", "Calligraphers, scribes, and scriveners", "Potters and tile-makers", "Carpenters, roofers, and plasterers", "Shipwrights and sailmakers", "Cartographers, surveyors, and chart-makers", "Smiths and metal-forgers", "Cobblers and shoemakers", "Tinkers, pewterers, and casters", "Cooks and bakers", "Wagon-makers and wheelwrights", "Glassblowers and glaziers", "Weavers and dyers", "Jewelers and gemcutters", "Woodcarvers, coopers, and bowyers"];
const allSkills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Slight of Hand', 'Stealth', 'Survival'];
const clericDomainList = [/*'Arcana Domain','Forge Domain','Grave Domain','Knowledge Domain','Life Domain',*/'Light Domain',/*'Nature Domain','Tempest Domain','Trickery Domain','War Domain'*/];
const DruidCantripList = ["Control Flames", "Create Bonfire", "Druidcraft", "Frostbite", "Guidance", "Gust", "Infestation", "Magic Stone", "Mending", "Mold Earth", "Poison Spray", "Produce Flame", "Resistance", "Shape Water", "Shillelagh", "Thorn Whip", "Thunderclap"];
const wizardCantripList = ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shape Water", "Shocking Grasp", "Sword Burst" ,"Thunderclap", "Toll the Dead", "True Strike"];
const sorcererOriginList = ['Draconic Bloodline'];//'Divine Soul', 'Draconic Bloodline', 'Shadow Magic', 'Storm Sorcery', 'Wild Magic'];
const draconicColorList = ['Black', 'Blue','Brass', 'Bronze', 'Copper', 'Gold', 'Green','Red', 'Silver', 'Whilte'];
const warlockPactList = ["The Archfey", "The Fiend", "The Great Old One",]// "The Celestial",   "The Hexblade" ,"The Undying"];
const wizardSchoolList = [/*"Artificer", "Bladesinging", "Lore Mastery","School of Abjuration", "School of Conjuration", "School of Divination", "School of Enchantment", */"School of Evocation", /*"School of Illusion", "School of Invention", "School of Necromancy", "School of Transmutation", "Technomancy", "Theurgy", "War Magic"*/];

//let pcBackground = getThingFromList(playerBackgroundList);
//console.log(pcBackground);

switch (pcBackground) {
  case Acolyte:
    Acolyte.skills = ['Insight', 'Religion'];
    let AClangList = [];
    AClangList.push(getThingFromList(langList));
    AClangList.push(getThingFromList(langList));
    while (AClangList[0] ===AClangList[1])  {
      AClangList.pop();
      AClangList.push(getThingFromList(langList));
    }
    AcolytePersonalityList = ["I idolize a particular hero of my faith, and constantly refer to that person's deeds and example", 'I can find common ground between the fiercest enemies, empathizing with them and always working towards peace.', 'I see omens in every event and action. The gods try to speak to us, we just need to listen.', 'Nothing can shake my optimistic attitude.', 'I quote (or misquote) sacred texts and proverbs in almost every situation.', 'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.', "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.", "I've spent so long in the temple that I have little practical experience dealing with people in the outside world"];
    Acolyte.personality1 = getThingFromList(AcolytePersonalityList);
    Acolyte.personality2 = getThingFromList(AcolytePersonalityList);
    console.log(Acolyte.personality1);
    console.log(Acolyte.personality2);
    while (Acolyte.personality1 === Acolyte.personality2) {
      Acolyte.personality2 = getThingFromList(AcolytePersonalityList);
      console.log("removed repeat personality")
    }

    AcolyteFlawList = ["I judge others harshly, and myself even more severely.", "I put too much trust in those who wield power within my temple's hierarchy.", "My piety sometimes leads me to blindly trust those that profess faith in my god.", "I am inflexible in my thinking.", "I am suspicious of strangers and expect the worst of them.", "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."];
    Acolyte.flaw = getThingFromList(AcolyteFlawList);
    AcolyteBondList = ["I would die to recover an ancient relic of my faith that was lost long ago", "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.", "I owe my life to the priest who took me in when my parents died.", "Everything I do is for the common people.", "I will do anything to protect the temple where I served.", "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."];
    Acolyte.bond = getThingFromList(AcolyteBondList);
    AcolyteIdealList =["Tradition: The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)", "Charity: I always try to help those in need, no matter what the personal cost. (Good)", "Change: We must help bring about the changes the gods are constantly working in the world. (Chaotic)", "Power: I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)", "Faith: I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)", "Aspiration: I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"];
    Acolyte.ideal = getThingFromList(AcolyteIdealList);
    Acolyte.proficiency = [];
    Acolyte.features = ["Shelter of the Faithful (PHB)"];
    Acolyte.equipment = {"Holy symbol":1, "Prayer book":1, "Incense sticks": 5, "Vestments":1, "Common clothes":1, "GP": 5};
    break;
  case Anthropologist:
    AnthropologistPersonalityList = [ "I prefer the company of those who aren't like me, including people of other races.", "I'm a stickler when it comes to observing proper etiquette and local customs.", "I would rather observe than meddle.", "By living among violent people, I have become desensitized to violence.", "I would risk life and limb to discover a new culture or unravel the secrets of a dead one.", "When I arrive at a new settlement for the first time, I must learn all of its customs." ];
    AnthropologistFlawList =[ "Boats make me seasick.", "I talk to myself, and I don't make friends easily.", "I believe that I'm intellectually superior to people from other cultures and have much to teach them.", "I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.", "I complain about everything.", "I wear a tribal mask and never take it off." ];
    AnthropologistBondList = [ "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.", "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.", "Years ago, tragedy struck the members of an isolated society I befriended, and l will honor them.", "I want to learn more about a particular humanoid culture that fascinates me.", "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.", "I have a trinket that I believe is the key to finding a long-lost society." ];
    AnthropologistIdealList =[ "Discovery: I want to be the first person to discover a lost culture. (Any)", "Distance: One must not interfere with the affairs of another culture-- even one in need of aid. (Lawful)", "Knowledge: By understanding other races and cultures, we learn to understand ourselves. (Any)", "Power: Common people crave strong leadership, and I do my utmost to provide it. (Lawful)", "Protection: l must do everything possible to save a society facing extinction. (Good)", "Indifferent: Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)" ];

    Anthropologist.proficiency = [];
    Anthropologist.features = [ "Adept Linguist: You can communicate with humanoids who don't speak any language you know so long as you observe them interacting with each other for at least one day." ];
    Anthropologist.equipment = { "Leather-bound diary":1, "Ink bottle": 1, "Ink pen":1, "Traveler's clothes": 1, "Trinket":1, "GP":10 };
    Anthropologist.skills = ['Insight', 'Religion'];

    let ARlangList = [];
    ARlangList.push(getThingFromList(langList));
    ARlangList.push(getThingFromList(langList));
    while (ARlangList[0] ===ARlangList[1])  {
      ARlangList.pop();
      ARlangList.push(getThingFromList(langList));
    }
    Anthropologist.personality1 = getThingFromList(AnthropologistPersonalityList);
    Anthropologist.personality2 = getThingFromList(AnthropologistPersonalityList);
    while (Anthropologist.personality1 === Anthropologist.personality2) {
      Anthropologist.personality2 = getThingFromList(AnthropologistPersonalityList);
      console.log("removed repeat personality: Anthropologist")
    }
    Anthropologist.flaw = getThingFromList(AnthropologistFlawList);
    Anthropologist.ideal = getThingFromList(AnthropologistIdealList);
    Anthropologist.bond = getThingFromList(AnthropologistBondList);
  case Archaeologist:
    ArchaeologistPersonalityList = [ "I love a good puzzle or mystery.", "I'm a pack rat who never throws anything away.", "Fame is more important to me than money." ,"I have no qualms about stealing from the dead.", "I'm happier in a dusty old tomb than in the centers of civilization.", "Traps don't make me nervous. Idiots who trigger traps make me nervous.", "I may fail, but I don't give up.", "You may think I'm a scholar, but I love a good brawl. These fists were made for punching." ];
    ArchaeologistFlawList = [ "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place In the history books.", "I want to find my mentor, who disappeared on an expedition some time ago.", "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.", "I won't sell an art object or other treasure that has historical significance or is one of a kind.", "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.", "I hope to bring prestige to a library, a museum, or a university." ];
    ArchaeologistBondList = [ "I have a secret fear of some common wild animal-- and in my work, I see them everywhere.", "I can't leave a room without searching it for secret doors.", "When I'm not exploring dungeons or ruins, I get jittery and impatient.", "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.", "When given the choice of going left or right, I always go left.", "I can't sleep except in total darkness." ];
    ArchaeologistIdealList =[ " Preservation: That artifact belongs in a museum. (Good)" ,"Greed: I won't risk my life for nothing. I expect some kind of payment. (Evil)", "Death Wish: Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)", "Dignity: The dead and their belongings deserve to be treated with respect. (Lawful)", "Immortality: All my exploring is part of a plan to find the secret of everlasting life. (Any)", "Danger: With every great discovery comes grave danger. The two walk hand in hand. (Any)" ];

    let archTool = getRandomInt(100);
    if ( (archTool%2) === 0){
      Archaeologist.proficiency = ["Cartographer's tools"];
    } else {
      Archaeologist.proficiency = ["Navigator's tools"];
    }
    
    Archaeologist.features = [ "Historical Knowledge: When you enter a ruin or dungeon, you can correctly ascertain its original purpose and determine its builders. In addition, you can determine the monetary value of art objects more than a century old." ];
    Archaeologist.equipment = { "Wooden map case with Map":1 , "Bullseye lantern": 1, "Miner's pick":1, "Traveler's clothes":1, "Shovel":1, "Two-person tent":1, "Trinket":1, "GP":25};
    Archaeologist.skills = [ "History", "Survival" ];

    let ARClangList = [];
    ARClangList.push(getThingFromList(langList));
    Archaeologist.personality1 = getThingFromList(ArchaeologistPersonalityList);
    Archaeologist.personality2 = getThingFromList(ArchaeologistPersonalityList);
    while (Archaeologist.personality1 === Archaeologist.personality2) {
      Archaeologist.personality2 = getThingFromList(ArchaeologistPersonalityList);
      console.log("removed repeat personality: Archaeologist")
    }
    Archaeologist.flaw = getThingFromList(ArchaeologistFlawList);
    Archaeologist.bond = getThingFromList(ArchaeologistBondList);
    Archaeologist.ideal = getThingFromList(ArchaeologistIdealList);
    break;
  case Charlatan:
    CharlatanPersonalityList = [ "I fall in and out of love easily, and am always pursuing someone.", "I have a joke for every occasion, especially occasions where humor is inappropriate.", "Flattery is my preferred trick for getting what I want.", "I'm a born gambler who can't resist taking a risk for a potential payoff.", "I lie about almost everything, even when there's no good reason to.", "Sarcasm and insults are my weapons of choice.", "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.", "I pocket anything I see that might have some value." ];
    CharlatanFlawList = [ "I can't resist a pretty face.", "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.", "I'm convinced that no one could ever fool me the way I fool others.", "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.", "I can't resist swindling people who are more powerful than me.", "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough." ];
    CharlatanBondList = [ "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.", "I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere.", "Somewhere out there, I have a child who doesn't know me. I'm making the world better for them", "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.", "A powerful person killed someone I love. Some day soon, I'll have my revenge.", "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself." ];
    CharlatanIdealList =[ "Independence. I am a free spirit-- no one tells me what to do. (Chaotic)", "Fairness. I never target people who can't afford to lose a few coins. (Lawful)", "Charity. I distribute the money I acquire to the people who really need it. (Good)", "Creativity. I never run the same con twice. (Chaotic)", "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)", "Aspiration. I'm determined to make something of myself. (Any)" ];

    Charlatan.proficiency = ["Disguise Kit", "Forgery Kit"];
    Charlatan.features = [ "False Identity (PHB)"  ];
    Charlatan.equipment = {"Fine clothes":1, "Disguise kit":1, "Grifting tools":1, "GP": 15 };
    Charlatan.skills = ["Deception", "Sleight of Hand"];

    CharlatanSchemesList = ["I cheat at games involving chance.", "I shave coins or forge documents.", "I insinuate myself into people's lives to prey on their weakness and secure their fortunes.", "I put on new identities like clothes.", "I run sleight-of-hand cons on street corners.", "I convince people that worthless junk is worth their hard-earned money."]
    Charlatan.special = getThingFromList(CharlatanSchemesList);
    Charlatan.personality1 = getThingFromList(CharlatanPersonalityList);
    Charlatan.personality2 = getThingFromList(CharlatanPersonalityList);
    while (Charlatan.personality1 === Charlatan.personality2) {
      Charlatan.personality2 = getThingFromList(CharlatanPersonalityList);
      console.log("removed repeat personality: Charlatan")
    }
    Charlatan.flaw = getThingFromList(CharlatanFlawList);
    Charlatan.bond = getThingFromList(CharlatanBondList);
    Charlatan.ideal = getThingFromList(CharlatanIdealList);
    break;
  case CityWatch:
    CityWatchPersonalityList = [ "I'm always polite and respectful.", "I'm haunted by memories of war. I can't get the images of violence out of my mind.", "I've lost too many friends, and I'm slow to make new ones.", "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.", "I can stare down a hell hound without flinching.", "I enjoy being strong and like breaking things.", "I have a crude sense of humor.", "I face problems head-on. A simple, direct solution is the best path to success." ];
    CityWatchFlawList = [ "The monstrous enemy we faced in battle still leaves me quivering with fear.", "I have little respect for anyone who is not a proven warrior.", "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.", "My hatred of my enemies is blind and unreasoning.", "I obey the law, even if the law causes misery.", "I'd rather eat my armor than admit when I'm wrong." ];
    CityWatchBondList = [ "I would still lay down my life for the people I served with.", "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.", "My honor is my life.", "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.", "Those who fight beside me are those worth dying for.", "I fight for those who cannot fight for themselves." ];
    CityWatchIdealList =[ "Greater Good. Our lot is to lay down our lives in defense of others. (Good)", "Responsibility. I do what I must and obey just authority. (Lawful)", "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)", "Might. In life as in war, the stronger force wins. (Evil)", "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)", "Nation. My city, nation, or people are all that matter. (Any)" ];

    CityWatch.proficiency = [];
    CityWatch.features = [ "Watcher's Eye (SCAG)"  ];
    CityWatch.equipment = { "Uniform":1, "Rank signifier":1, "Horn":1, "Manacles":1, "GP":10  };
    CityWatch.skills = [ "Athletics", "Insight" ];
    CityWatchSpecialtyList = ["Officer", "Healer", "Scout", "Quartermaster", "Infantry", "Standard bearer", "Cavalry", "Support staff (cook, blacksmith, or the like)"]
    CityWatch.special = getThingFromList(CityWatchSpecialtyList);
    let CWlangList = [];
    CWlangList.push(getThingFromList(langList));
    CWlangList.push(getThingFromList(langList));
    while (CWlangList[0] === CWlangList[1])  {
      CWlangList.pop();
      CWlangList.push(getThingFromList(langList));
    }
    CityWatch.personality1 = getThingFromList(CityWatchPersonalityList);
    CityWatch.personality2 = getThingFromList(CityWatchPersonalityList);
    while (CityWatch.personality1 === CityWatch.personality2) {
      CityWatch.personality2 = getThingFromList(CityWatchPersonalityList);
      console.log("removed repeat personality: CityWatch")
    }
    CityWatch.flaw = getThingFromList(CityWatchFlawList);
    CityWatch.bond = getThingFromList(CityWatchBondList);
    CityWatch.ideal = getThingFromList(CityWatchIdealList);
    CityWatch.special = getThingFromList(CityWatchSpecialtyList);
    break;
  case ClanCrafter:
      ClanCrafterPersonalityList = [ "I believe that anything worth doing is worth doing right. I can't help it— I'm a perfectionist.", "I'm a snob who looks down on those who can't appreciate fine art.", "I always want to know how things work and what makes people tick.", "I'm full of witty aphorisms and have a proverb for every occasion.", "I'm rude to people who lack my commitment to hard work and fair play.", "I like to talk at length about my profession.", "I don't part with my money easily and will haggle tirelessly to get the best deal possible.", "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me." ];
      ClanCrafterFlawList = [ "I'll do anything to get my hands on something rare or priceless.", "I'm quick to assume that someone is trying to cheat me.", "No one must ever learn that I once stole money from guild coffers.", "I'm never satisfied with what I have— I always want more.", "I would kill to acquire a noble title.", "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals." ];
      ClanCrafterBondList = [ "The workshop where I learned my trade is the most important place in the world to me.", "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.", "I owe my guild a great debt for forging me into the person I am today.", "I pursue wealth to secure someone's love.", "One day I will return to my guild and prove that I am the greatest artisan of them all.", "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood." ];
      ClanCrafterIdealList =[ "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)", "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)", "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)", "Greed. I'm only in it for the money. (Evil)", "People. I'm committed to the people I care about, not to ideals. (Neutral)", "Aspiration. I work hard to be the best there is at my craft."  ];

      let CCtool = [];
      CCtool.push(getThingFromList(artisanToolsList));

      console.log(CCtool);
      ClanCrafter.proficiency = CCtool;
      CCtool.join();
      ClanCrafter.features = [ "Respect of the Stout Folk (SCAG)" ];
      ClanCrafter.equipment = { "Maker's mark chisel":1, "Traveler's clothes":1, "GP":5, "Gem worth 10 gp":1  };
      ClanCrafter.equipment[CCtool] = 1;
      ClanCrafter.skills = [ "History", "Insight" ];
      ClanCrafter.special = getThingFromList(guildBusinessList);
      let CClangList = [];
      CClangList.push(getThingFromList(langList));
      CClangList.push(getThingFromList(langList));
      while (CClangList[0] === CClangList[1])  {
        CClangList.pop();
        CClangList.push(getThingFromList(langList));
      }
      ClanCrafter.personality1 = getThingFromList(ClanCrafterPersonalityList);
      ClanCrafter.personality2 = getThingFromList(ClanCrafterPersonalityList);
      while (ClanCrafter.personality1 === ClanCrafter.personality2) {
        ClanCrafter.personality2 = getThingFromList(ClanCrafterPersonalityList);
        console.log("removed repeat personality: ClanCrafter")
      }
      ClanCrafter.flaw = getThingFromList(ClanCrafterFlawList);
      ClanCrafter.bond = getThingFromList(ClanCrafterBondList);
      ClanCrafter.ideal = getThingFromList(ClanCrafterIdealList);
      break;
  case CloisteredScholar:
      CloisteredScholarPersonalityList = [ "I use polysyllabic words that convey the impression of great erudition.", "I've read every book in the world's greatest libraries—or I like to boast that I have.", "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.", "There's nothing I like more than a good mystery.", "I'm willing to listen to every side of an argument before I make my own judgment.", "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.", "I am horribly, horribly awkward in social situations.", "I'm convinced that people are always trying to steal my secrets." ];
      CloisteredScholarFlawList = [ "I am easily distracted by the promise of information.", "Most people scream and run when they see a demon. I stop and take notes on its anatomy.", "Unlocking an ancient mystery is worth the price of a civilization.", "I overlook obvious solutions in favor of complicated ones.", "I speak without really thinking through my words, invariably insulting others.", "I can't keep a secret to save my life, or anyone else's." ];
      CloisteredScholarBondList = [ "It is my duty to protect my students.", "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.", "I work to preserve a library, university, scriptorium, or monastery.", "My life's work is a series of tomes related to a specific field of lore.", "I've been searching my whole life for the answer to a certain question.", "I sold my soul for knowledge. I hope to do great deeds and win it back." ];
      CloisteredScholarIdealList =[ "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)", "Beauty. What is beautiful points us beyond itself toward what is true. (Good)", "Logic. Emotions must not cloud our logical thinking. (Lawful)", "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)", "Power. Knowledge is the path to power and domination. (Evil)", "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)" ];
      CloisteredScholarSpecialList = ["Alchemist", "Professor", "Astronomer", "Researcher", "Discredited academic", "Wizard's apprentice", "Librarian", "Scribe"];

      CloisteredScholar.proficiency = [];
      CloisteredScholar.features = [ "Library Access (SCAD)"  ];
      CloisteredScholar.equipment = { "Scholar's robes":1, "Writing kit":1,  "Borrowed book":1, "GP":10 };
      CSrandSkillList = ["Arcana", "Nature", "Religion"];
      CSrandSkill = getThingFromList(CSrandSkillList);
      CloisteredScholar.skills = ["History", CSrandSkill];

      let CSlangList = [];
      CSlangList.push(getThingFromList(langList));
      CSlangList.push(getThingFromList(langList));
      while (CSlangList[0] === CSlangList[1])  {
        CSlangList.pop();
        CSlangList.push(getThingFromList(langList));
      }
      CloisteredScholar.personality1 = getThingFromList(CloisteredScholarPersonalityList);
      CloisteredScholar.personality2 = getThingFromList(CloisteredScholarPersonalityList);
      while (CloisteredScholar.personality1 === CloisteredScholar.personality2) {
        CloisteredScholar.personality2 = getThingFromList(CloisteredScholarPersonalityList);
        console.log("removed repeat personality: CloisteredScholar")
      }
      CloisteredScholar.flaw = getThingFromList(CloisteredScholarFlawList);
      CloisteredScholar.bond = getThingFromList(CloisteredScholarBondList);
      CloisteredScholar.ideal = getThingFromList(CloisteredScholarIdealList);
      CloisteredScholar.special = getThingFromList(CloisteredScholarSpecialList);
      break;
  case Courtier:
      CourtierPersonalityList = [ "I believe that anything worth doing is worth doing right. I can't help it-- I'm a perfectionist.", "I'm a snob who looks down on those who can't appreciate fine art.", "I always want to know how things work and what makes people tick.", "I'm full of witty aphorisms and have a proverb for every occasion.", "I'm rude to people who lack my commitment to hard work and fair play.", "I like to talk at length about my profession.", "I don't part with my money easily and will haggle tirelessly to get the best deal possible.", "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me." ];
      CourtierFlawList = [ "I'll do anything to get my hands on something rare or priceless.", "I'm quick to assume that someone is trying to cheat me.", "No one must ever learn that I once stole money from guild coffers.", "I'm never satisfied with what I have-- I always want more.", "I would kill to acquire a noble title.", "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals." ];
      CourtierBondList = [ "The workshop where I learned my trade is the most important place in the world to me.", "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.", "I owe my guild a great debt for forging me into the person I am today.", "I pursue wealth to secure someone's love.", "One day I will return to my guild and prove that I am the greatest artisan of them all.", "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.", ];
      CourtierIdealList =[ "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)", "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)", "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)", "Greed. I'm only in it for the money. (Evil)", "People. I'm committed to the people I care about, not to ideals. (Neutral)", "Aspiration. I work hard to be the best there is at my craft." ];

      Courtier.proficiency = [];
      Courtier.features = ["Court Functionary (SCAG)"];
      Courtier.equipment = { "Fine clothes":1, "GP":5 };
      Courtier.skills = [ "Insight", "Persuasion"  ];

      let CORlangList = [];
      CORlangList.push(getThingFromList(langList));
      CORlangList.push(getThingFromList(langList));
      while (CORlangList[0] === CORlangList[1])  {
        CORlangList.pop();
        CORlangList.push(getThingFromList(langList));
      }
      Courtier.personality1 = getThingFromList(CourtierPersonalityList);
      Courtier.personality2 = getThingFromList(CourtierPersonalityList);
      while (Courtier.personality1 === Courtier.personality2) {
        Courtier.personality2 = getThingFromList(CourtierPersonalityList);
        console.log("removed repeat personality: Courtier")
      }
      Courtier.flaw = getThingFromList(CourtierFlawList);
      Courtier.bond = getThingFromList(CourtierBondList);
      Courtier.ideal = getThingFromList(CourtierIdealList);
      break; 
  case Criminal:
    CriminalPersonalityList = ["I always have a plan for what to do when things go wrong.","I am always calm, no matter what the situation.","I never raise my voice or let my emotions control me.","The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.","I would rather make a new friend than a new enemy.","I am incredibly slow to trust. Those who seem the fairest often have the most to hide.","I don't pay attention to the risks in a situation. Never tell me the odds.","The best way to get me to do something is to tell me I can't do it.","I blow up at the slightest insult."];
    CriminalFlawList = ["When I see something valuable, I can’t think about anything but how to steal it.","When faced with a choice between money and my friends, I usually choose the money.","If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.","I have a 'tell' that reveals when I'm lying.","I turn tail and run when things look bad.","An innocent person is in prison for a crime that I committed. I’m okay with that."];
    CriminalBondList = ["I’m trying to pay off an old debt I owe to a generous benefactor.","My ill-gotten gains go to support my family.","Something important was taken from me, and I aim to steal it back.","I will become the greatest thief that ever lived.","I’m guilty of a terrible crime. I hope I can redeem myself for it.","Someone I loved died because of a mistake I made. That will never happen again."];
    CriminalIdealList =["Honor: I don’t steal from others in the trade. (Lawful)","Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)","Charity: I steal from the wealthy so that I can help people in need. (Good)","Greed: I will do whatever it takes to become wealthy. (Evil)","People: I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)","Redemption: There’s a spark of good in everyone. (Good)"];

    Criminal.proficiency = ["One type of gaming set", "Thieves' tools"];
    Criminal.features = [];
    Criminal.equipment = { "Crowbar":1, "Dark common clothes w\ hood":1, "Belt pouch":1, "GP":15 };
    Criminal.skills = [ "Deception", "Stealth"  ];

    let CRMlangList = [];
    CRMlangList.push(getThingFromList(langList));
    CRMlangList.push(getThingFromList(langList));
    while (CRMlangList[0] === CRMlangList[1])  {
      CRMlangList.pop();
      CRMlangList.push(getThingFromList(langList));
    }
    Criminal.personality1 = getThingFromList(CriminalPersonalityList);
    Criminal.personality2 = getThingFromList(CriminalPersonalityList);
    while (Criminal.personality1 === Criminal.personality2) {
      Criminal.personality2 = getThingFromList(CriminalPersonalityList);
      console.log("removed repeat personality: Criminal")
    }
    Criminal.flaw = getThingFromList(CriminalFlawList);
    Criminal.bond = getThingFromList(CriminalBondList);
    Criminal.ideal = getThingFromList(CriminalIdealList);
    break;
  default:
      console.log('IDK man something F***ed up (background selection) ');
      console.log(player.background);




}

backgroundApplication(pcBackground);


switch (pcRace) {
  case aarakocra:
    aarakocra.race = 'Aarakocra';
    aarakocra.size = 'Medium';
    const AARmnameList = ['Aera', 'Aial', 'Aur','Deekek', 'Errk', 'Heehk','Ikki', 'Kleeck','Oorr','Ouss', 'Quaf', 'Quierk', 'Salleek','Urreek', 'Zeed',];
    const AARskinList = ['Black Feathers', 'White Feathers', 'Brown Feathers'];
    const AAReyesList = ['Black', 'Gold', 'Green'];
    const AARalignmentList = ['Neutral Good', 'Lawful Good', 'Chaotic Good'];
    aarakocra.speed = ['25 ft.'];
    aarakocra.features = ['You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.', "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.", ];
    aarakocra.languages = ['Common', 'Aarakocra', 'Auran'];
    aarakocra.height = '5 ft.';
    aarakocra.dex = 2;
    aarakocra.wis = 1;
    aarakocra.Mname = getThingFromList(AARmnameList);
    aarakocra.Fname = getThingFromList(AARmnameList);
    aarakocra.age = getRndInteger(3, 30) + ' years old';
    aarakocra.weight = getRndInteger(80, 100) + ' lbs';
    aarakocra.skin = getThingFromList(AARskinList);
    aarakocra.eyes = getThingFromList(AAReyesList);
    aarakocra.alignment = getThingFromList(AARalignmentList);
    aarakocra.hair = getThingFromList(AARskinList);
    break;
  case protectorAasimar:
    protectorAasimar.race = 'Protector Aasimar';
    protectorAasimar.size = 'Medium';
    const PAAeyeList = ['Amber','Amythyst', 'Peridot','Emrald', 'Saphire','Citrine',];
    const PAAhairList = ['Metalic Gold','Metalic Silver', 'Metalic Copper', 'Pearlescent White',];
    const PAAalignmentList = ['Neutral Good', 'Lawful Good'];
    protectorAasimar.speed = ['30 ft.'];
    protectorAasimar.features = ['Darkvision: 60 ft.', 'You have resistance to necrotic damage and radiant damage.', "Healing Hands (pg. 105 VGtM)"];
    protectorAasimar.languages = ['Common', 'Celestial'];
    protectorAasimar.spellList = ["Light"];
    protectorAasimar.cha = 2;
    protectorAasimar.wis = 1;
    protectorAasimar.Mname = getThingFromList(aasimarMNameList);
    protectorAasimar.Fname = getThingFromList(aasimarFNameList);
    protectorAasimar.age = getRndInteger(15, 160);
    protectorAasimar.height = Math.round(getRndInteger(56, 76) / 12) + ' ft.';
    protectorAasimar.weight = getRndInteger(110, 200) + ' lbs';
    protectorAasimar.skin = getThingFromList(AASskinList);
    protectorAasimar.eyes = getThingFromList(PAAeyeList);
    protectorAasimar.hair = getThingFromList(PAAhairList);
    protectorAasimar.alignment = getThingFromList(PAAalignmentList);
    break;
  case scourgeAasimar:
    scourgeAasimar.race = 'Scourge Aasimar';
    scourgeAasimar.size = 'Medium';
    const SAAalignList = ['Neutral Good', 'Chaotic Good'];
    const SAAeyeList = ['Amber', 'Amythyst', 'Citrine', 'Ruby', 'Garnet'];
    const SAAhairList = ['Metalic Gold','Metalic Silver', 'Metalic Copper', 'Metalic Crimson',];
    scourgeAasimar.speed = ['30  ft.'];
    scourgeAasimar.features = ['Darkvision: 60 ft.','You have resistance to necrotic damage and radiant damage.', "Healing Hands (pg. 105 VGtM)"];
    scourgeAasimar.languages = ['Common', 'Celestial'];
    scourgeAasimar.spellList= ["Light"];
    scourgeAasimar.cha = 2;
    scourgeAasimar.con = 1;
    scourgeAasimar.Mname = getThingFromList(aasimarMNameList);
    scourgeAasimar.Fname = getThingFromList(aasimarFNameList);
    scourgeAasimar.age = getRndInteger(15, 160);
    scourgeAasimar.height = Math.round(getRndInteger(56, 76) / 12) + ' ft.';
    scourgeAasimar.weight = getRndInteger(110, 200) + ' lbs';
    scourgeAasimar.skin = getThingFromList(AASskinList);
    scourgeAasimar.eyes = getThingFromList(SAAeyeList);
    scourgeAasimar.hair = getThingFromList(SAAhairList);
    scourgeAasimar.alignment = getThingFromList(SAAalignList);
    break;
  case fallenAasimar:
    fallenAasimar.race = 'Fallen Aasimar';
    fallenAasimar.size = 'Medium';
    const FAAeyeList = ['Obsidion', 'Amythyst', 'Citrine', 'Ruby', 'Garnet'];
    const FAAalignList = ['Neutral','Chaotic Neutral','Lawful Neutral', 'Lawful Evil','Neutral Evil',];
    const FAAhairList = ['Metalic Gold','Carbon Black', 'Metalic Copper', 'Metalic Crimson',];
    fallenAasimar.speed = ['30 ft.'];
    fallenAasimar.features = ['Darkvision: 60 ft.','You have resistance to necrotic damage and radiant damage.',"Healing Hands (pg. 105 VGtM)"];
    fallenAasimar.languages = ['Common', 'Celestial'];
    fallenAasimar.spellList = ["Light"];
    fallenAasimar.cha = 2;
    fallenAasimar.str = 1;
    fallenAasimar.Mname = getThingFromList(aasimarMNameList)
    fallenAasimar.Fname = getThingFromList(aasimarFNameList)
    fallenAasimar.age = getRndInteger(15, 160);
    fallenAasimar.height = Math.round(getRndInteger(56, 76) / 12) + ' ft.';
    fallenAasimar.weight = getRndInteger(110, 200) + ' lbs';
    fallenAasimar.skin = getThingFromList(AASskinList);
    fallenAasimar.eyes = getThingFromList(FAAeyeList)
    fallenAasimar.hair = getThingFromList(FAAhairList);
    fallenAasimar.alignment = getThingFromList(FAAalignList);
    break;
  case bugbear:
    bugbear.race = 'Bugbear';
    bugbear.size = 'Medium';
    const BUBmNameList = ['Baroret','Ekegluhul','Ekhankaret', 'Garagek','Garuret','Gratru','Gregek','Hruggagek','Hrugguhul','Egrim','Khurguuret', 'Magleretetru',];
    const BUBlNameList = [ 'Luurgetru','Khurguvar', 'Garahul Dragon Slayer','Magluuhulegek','Luurgivaratru','Iggeglaaret Elf Slayer', 'Gariretuuret', 'Kuruhuluret','Hretru','Gruuretugek', 'Gregekuuhuletru','Gnukaask Helmet Basher',];
    const BUBskinList = ['Dun Fur','Brown Fur','Grey Fur','Tan Fur','Black Fur','White Fur',];
    const BUBeyeList = ['Green', 'Yellow', 'Brown', 'Black', 'Red'];
    const BUBalignmentList = ['Chaotic Good','Lawful Good','Neutral','Lawful Neutral','Chaotic Evil',];
    bugbear.speed = ['30 ft.'];
    bugbear.features = ['Darkvision: 60 ft.','Long-Limbed (pg. 119 VGtM)','You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.','Surprise Attack (pg. 119 VGtM)',];
    bugbear.proficiency = ["Stealth", ]
    bugbear.languages = ['Common', 'Goblin'];
    bugbear.str = 2;
    bugbear.dex = 1;
    bugbear.Mname = getThingFromList(BUBmNameList) + ' ' + getThingFromList(BUBlNameList);
    bugbear.Fname = bugbear.Mname
    bugbear.age = getRndInteger(8, 80);
    bugbear.height = Math.round(getRndInteger(70, 100) / 12) + ' ft.';
    bugbear.weight = getRndInteger(250, 350) + ' lbs';
    bugbear.skin = getThingFromList(BUBskinList)
    bugbear.eyes = getThingFromList(BUBeyeList)
    bugbear.alignment = getThingFromList(BUBalignmentList)
    break;
  case dragonborn:
    dragonborn.race = 'Dragonborn';
    dragonborn.size = 'Medium';
    const DBMnameList = ['Pagar', 'Garjac', 'Caerxan','Helasar','Ghefras','Lumirash','Ceaccexamas','Uromash', 'Dixiash','Zradhall','Otizire','Kuulkesh','Trouvull','Gumresh','Udoghull',];
    const DBFnameList = ['Xiszita', 'Diccaan','Miqorel','Dichaar','Quilkaryn','Drysrinn','Dochuas', 'Crisnorae','Fenvayla', 'Kaccur', 'Belsaadi', 'Delthan','Hinzys','Impic', 'Oliann','Wracoria','Nunkeakmandea',];
    let dragonbornSkinList = ['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White',];
    let dragonbornEyeList = ['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White',];
    DBalignment = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil',];
    dragonborn.hair = 'Bald';
    dragonborn.features = [' You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.', 'You have resistance to the damage type associated with your draconic ancestry.','Breath Weapon: '];
    dragonborn.languages = ['Common', 'Draconic'];
    dragonborn.str = 2;
    dragonborn.cha = 1;
    dragonborn.Mname = getThingFromList(DBMnameList);
    dragonborn.Fname = getThingFromList(DBFnameList);
    dragonborn.skin = getThingFromList(dragonbornSkinList)
    dragonborn.eyes = getThingFromList(dragonbornEyeList)
    dragonborn.height = Math.round(getRndInteger(66, 82) / 12) + ' ft.';
    dragonborn.weight = getRndInteger(175, 376) + ' lbs';
    dragonborn.age = getRandomInt(18,80)
    switch (dragonborn.skin) {
      case 'Black':
        DBalignment.splice(0, 3);
        break;
      case 'Blue':
        DBalignment.splice(0, 3);
        break;
      case 'Green':
        DBalignment.splice(0, 3);
        break;
      case 'Red':
        DBalignment.splice(0, 3);
        break;
      case 'White':
        DBalignment.splice(0, 3);
        break;
      case 'Brass':
        DBalignment.splice(6, 8);
        break;
      case 'Bronze':
        DBalignment.splice(6, 8);
        break;
      case 'Copper':
        DBalignment.splice(6, 8);
        break;
      case 'Gold':
        DBalignment.splice(6.8);
        break;
      case 'Silver':
        DBalignment.splice(6, 8);
        break;
      default:
        console.log('IDK man something F***ed up (alignmentsplicing) ');
    }
    dragonborn.alignment = getThingFromList(DBalignment)
    dragonborn.speed = ['30 ft.'];
    //this is where it gets weird
    function breathSelect(color) {
      switch (dragonborn.skin) {
        case 'Black':
          let acid1 = 'Acid - 5 ft. by 30 ft. line (Dex. save)';
          return acid1;
        case 'Blue':
          let lightning1 = 'Lightning - 5 ft. by 30 ft. line (Dex. save)';
          return lightning1;
        case 'Brass':
          let fire1 = 'Fire - 5 ft. by 30 ft. line (Dex. save)';
          return fire1;
        case 'Bronze':
          let lightning2 = 'Lightning - 5 ft. by 30 ft. line (Dex. save)';
          return lightning2;
        case 'Copper':
          let acid2 = 'Acid - 5 ft. by 30 ft. line (Dex. save)';
          return acid2;
        case 'Gold':
          let fire2 = 'Fire - 15 ft. cone (Dex. save)';
          return fire2;
        case 'Green':
          let poison1 = 'Poison - 15 ft. cone (Con. save)';
          return poison1;
        case 'Red':
          let fire3 = 'Fire - 15 ft. cone (Dex. save) in';
          return fire3;
        case 'Silver':
          let cold1 = 'Cold - 15 ft. cone (Con. save)';
          return cold1;
        case 'White':
          let cold2 = 'Cold - 15 ft. cone (Con. save)';
          return cold2;
        default:
          console.log('IDK man something F***ed up(breathWeapon');
        
      }
      
    }
    let breathWeapon = breathSelect(dragonborn.skin);
    dragonborn.features.push(breathWeapon)
    break;
  case mountainDwarf:
    mountainDwarf.race = 'Mountain Dwarf';
    mountainDwarf.size = 'Medium';
    const MtDskinList = ['Pale', 'Olive', 'Ocher', 'Pasty', 'Swarthy'];
    const MtDeyeList = ['Green', 'Hazel', 'Brown', 'Blue'];
    const MtDhairList = ['Blonde','Brunette','White','Auburn','Red','Black','White',];
    const MtDalignmentList = ['Lawful Good','Neutral Good','Lawful Neutral','Neutral',];
    mountainDwarf.speed = ['25 ft.'];
    mountainDwarf.features = ['DarkVision: 60 ft.','Advanatge on Saves against poison','Resistance to Poison dmg','History Checks about stone work + Proficiency bouns x2',];
    mountainDwarf.languages = ['Common', 'Dwarvish'];
    mountainDwarf.proficiency = ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer", "Light Armor", "Medium Armor",]
    mountainDwarf.con = 2;
    mountainDwarf.str = 2;
    mountainDwarf.Mname = getThingFromList(dwarfmNameList) + ' ' + getThingFromList(dwarflNameList)
    mountainDwarf.Fname = getThingFromList(dwarffNameList) + ' ' + getThingFromList(dwarflNameList);
    mountainDwarf.age = getRndInteger(45, 350);
    mountainDwarf.height = Math.round(getRndInteger(48, 56) / 12) + ' ft.';
    mountainDwarf.weight = getRndInteger(130, 226) + ' lbs';
    mountainDwarf.skin = getThingFromList(MtDskinList);
    mountainDwarf.eyes = getThingFromList(MtDeyeList);
    mountainDwarf.hair = getThingFromList(MtDhairList);
    mountainDwarf.alignment = getThingFromList(MtDalignmentList)
    mountainDwarf.proficiency.push(getThingFromList(dwarfprofList))
    break;
  case hillDwarf:
    hillDwarf.race = 'Hill Dwarf';
    hillDwarf.size = 'Medium';
    const HDskinList = ['Pale', 'Olive', 'Ocher', 'Pasty', 'Swarthy'];
    const HDhairList = ['Blonde','Brunette','White','Auburn','Red','Black','White',];
    const HDeyeList = ['Green', 'Hazel', 'Brown', 'Blue'];
    const HDalignmentList = ['Lawful Good','Neutral Good','Lawful Neutral','Neutral',];
    hillDwarf.speed = ['25 ft.'];
    hillDwarf.features = ['DarkVision: 60 ft.','Advanatge on Saves against poison','Resistance to Poison dmg','History Checks about stone work + Proficiency bouns x2','Hit Point Maximum increases by 1 each Time you level',];
    hillDwarf.proficiency = ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer",]
    hillDwarf.languages = ['Common', 'Dwarvish'];
    hillDwarf.con = 2;
    hillDwarf.wis = 1;
    hillDwarf.Mname = getThingFromList(dwarfmNameList) + ' ' + getThingFromList(dwarflNameList);
    hillDwarf.Fname = getThingFromList(dwarffNameList) + ' ' + getThingFromList(dwarflNameList);
    hillDwarf.age = getRndInteger(45, 350);
    hillDwarf.height = Math.round(getRndInteger(48, 56) / 12) + ' ft.';
    hillDwarf.weight = getRndInteger(130, 226) + ' lbs';
    hillDwarf.skin = getThingFromList(HDskinList);
    hillDwarf.eyes = getThingFromList(HDeyeList)
    hillDwarf.hair = getThingFromList(HDhairList);
    hillDwarf.alignment = getThingFromList(HDalignmentList);
    hillDwarf.proficiency.push(getThingFromList(dwarfprofList))
    break;
  case duergar:
    duergar.race = 'Duergar';
    duergar.size = 'Medium';
    const DDskinList = ['Pale', 'Grey', 'Ocher', 'Pasty', 'Black'];
    const DDeyeList = ['Green', 'White', 'Brown', 'Black', 'Indigo'];
    const DDhairList = ['Blonde','Brunette','White','Auburn','Red','Black','White',];
    const DDalignmentList = ['Lawful Good','Neutral Good','Lawful Neutral','Neutral','Lawful Evil','Neutral Evil','Chaotic Evil',];
    duergar.speed = ['25 ft.'];
    duergar.features = ['DarkVision: 120 ft.','Advanatge on Saves against poison','Resistance to Poison dmg','You have advantage on saving throws against illusions and against being charmed or paralyzed','History Checks about stone work + Proficiency bouns x2','Sunlight Sensitivity (pg. 24 PHB)',];
    duergar.languages = ['Common', 'Dwarvish', 'Undercommon'];
    duergar.proficiency = ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer",]
    duergar.Mname = getThingFromList(dwarfmNameList) + ' ' + getThingFromList(dwarflNameList);
    duergar.Fname = getThingFromList(dwarffNameList) + ' ' + getThingFromList(dwarflNameList);
    duergar.age = getRndInteger(45, 350);
    duergar.height = Math.round(getRndInteger(48, 56) / 12) + ' ft.';
    duergar.weight = getRndInteger(130, 226) + ' lbs';
    duergar.proficiency.push(getThingFromList(dwarfprofList))
    duergar.con = 2;
    duergar.str = 1;
    duergar.skin = getThingFromList(DDskinList);
    duergar.eyes = getThingFromList(DDeyeList);
    duergar.hair = getThingFromList(DDhairList);
    duergar.alignment = getThingFromList(DDalignmentList);
    break;
  case highElf:
    highElf.race = 'High-Elf';
    highElf.size = 'Medium';
    const HiEskinList = ['Pale', 'Grey', 'Golden', 'Fair', 'Bluish-White'];
    const HiEeyeList = ['Green','Hazel','Brown','Blue','Gold','Silver','Black',];
    const HiEhairList = ['Blonde','Brunette','White','Auburn','Black','Silver-White','Green','Blue','Red',];
    const HiEalignmentList = ['Chaotic Good','Neutral Good','Lawful Neutral','Neutral','Chaotic Neutral','Neutral Evil','Chaotic Evil',];
    highElf.speed = ['30 ft.'];
    const HEwizCantrip = getThingFromList(wizardCantripList);
    highElf.spellList = [HEwizCantrip];
    highElf.features = ['Dark Vision: 60 ft.','You have proficiency in the Perception skill',"You have advantage on saving throws against being charmed, and magic can't put you to sleep",'Rest = 4 hours','You know '+HEwizCantrip+', Intelligence is your spellcasting ability for it.',];
    highElf.proficiency = ["Longsword", "Shortsword", "Shortbow", "Longbow"]
    highElf.skills = ["Perception"];
    highElf.languages = ['Common', 'Elvish', randLangElf(langList)];
    highElf.dex = 2;
    highElf.int = 1;
    highElf.Mname = getThingFromList(elfMNameList) + ' ' + getThingFromList(elfLNameList);
    highElf.Fname = getThingFromList(elfFNameList) + ' ' + getThingFromList(elfLNameList);
    highElf.age = getRndInteger(90, 750);
    highElf.height = Math.round(getRndInteger(54, 74) / 12) + ' ft.';
    highElf.weight = getRndInteger(60, 200) + ' lbs';
    highElf.skin = getThingFromList(HiEskinList);
    highElf.eyes = getThingFromList(HiEeyeList);
    highElf.hair = getThingFromList(HiEhairList);
    highElf.alignment = getThingFromList(HiEalignmentList);
    break;
  case woodElf:
    woodElf.race = 'Wood Elf';
    woodElf.size = 'Medium';
    const WoodEskinList = ['Copper','Tarnished-Copper','Golden','Fair','Bluish-White',];
    const WoodEeyeList = ['Green','Hazel','Brown','Blue','Gold','Silver','Black',];
    const WoodEhairList = ['Blonde','Brunette','Auburn','Black','Green','Blue',];
    const WoodEalignmentList = ['Chaotic Good','Neutral Good','Lawful Neutral','Neutral','Chaotic Neutral','Neutral Evil','Chaotic Evil',];
    woodElf.speed = ['35 ft.'];
    woodElf.features = ['Dark Vision: 60 ft.', "You have advantage on saving throws against being charmed, and magic can't put you to sleep",'Rest = 4 hours','You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena',];
    woodElf.proficiency = ["Perception", "Longsword", "Shortsword", "Shortbow", "Longbow" ]
    woodElf.languages = ['Common', 'Elvish'];
    woodElf.dex = 2;
    woodElf.wis= 1;
    woodElf.Mname = getThingFromList(elfMNameList) + ' ' + getThingFromList(elfLNameList);
    woodElf.Fname = getThingFromList(elfFNameList) + ' ' + getThingFromList(elfLNameList);
    woodElf.age = getRndInteger(90, 750);
    woodElf.height = Math.round(getRndInteger(54, 74) / 12) + ' ft.';
    woodElf.weight = getRndInteger(60, 200) + ' lbs';
    woodElf.skin = getThingFromList(WoodEskinList);
    woodElf.eyes = getThingFromList(WoodEeyeList);
    woodElf.hair = getThingFromList(WoodEhairList);
    woodElf.alignment = getThingFromList(WoodEalignmentList);
    break;
  case drow:
    drow.race = 'Drow';
    drow.size = 'Medium';
    const DrEskinList = ['Umber', 'Black', 'Charcoal', 'Midnight'];
    const DrEeyeList = ['Pale Green','Lilac','White','Pale Blue','Yellow','Silver','Pink',];
    const DrEhairList = ['Blonde', 'Silver', 'White', 'Yellow'];
    const DrEalignmentList = ['Chaotic Good','Neutral Good','Lawful Neutral','Neutral','Chaotic Neutral','Neutral Evil','Chaotic Evil',];
    drow.speed = ['30 ft.'];
    drow.features = ['Dark Vision: 120 ft.', "You have advantage on saving throws against being charmed, and magic can't put you to sleep",'Rest = 4 hours','Sunlight Sensitivity (pg. 24 PHB)','You know the dancing lights cantrip.',];
    drow.spellList = ["Dancing Lights"];
    drow.proficiency = ["Perception", "Rapier", "Shortsword", "Hand Crossbow"]
    drow.languages = ['Common', 'Elvish'];
    drow.dex = 2;
    drow.cha = 1;
    drow.Mname = getThingFromList(elfMNameList) + ' ' + getThingFromList(elfLNameList);
    drow.Fname = getThingFromList(elfFNameList) + ' ' + getThingFromList(elfLNameList);
    drow.age = getRndInteger(90, 750);
    drow.height = Math.round(getRndInteger(45, 65) / 12) + ' ft.';
    drow.weight = getRndInteger(55, 150) + ' lbs';
    drow.skin = getThingFromList(DrEskinList);
    drow.eyes = getThingFromList(DrEeyeList);
    drow.hair = getThingFromList(DrEhairList);
    drow.alignment = getThingFromList(DrEalignmentList);
    break;
  case eladrin:
    eladrin.race = 'Eladrin';
    eladrin.size = 'Medium';
    const EldEskinList = ['Pale', 'Grey', 'Golden', 'Fair', 'Bluish-White'];
    const EldEeyeList = ['Green','Hazel','Brown','Blue','Gold','Silver','Black',];
    const EldEhairList = ['Blonde','Brunette','White','Auburn','Black','Silver-White','Green','Blue','Red',];
    const EldEalignmentList = ['Chaotic Good','Neutral Good','Lawful Neutral','Neutral','Chaotic Neutral','Neutral Evil','Chaotic Evil',];
    eladrin.speed = ['30 ft.'];
    eladrin.features = ["You have advantage on saving throws against being charmed, and magic can't put you to sleep",'Rest = 4 hours','You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.',];
    eladrin.proficiency = ["Perception", "Longsword", "Shortsword", "Shortbow", "Longbow"]
    eladrin.languages = ['Common', 'Elvish'];
    eladrin.dex = 2;
    eladrin.int = 1;
    eladrin.Mname = getThingFromList(elfMNameList) + ' ' + getThingFromList(elfLNameList);
    eladrin.Fname = getThingFromList(elfFNameList) + ' ' + getThingFromList(elfLNameList);
    eladrin.age = getRndInteger(90, 750);
    eladrin.height = Math.round(getRndInteger(54, 74) / 12) + ' ft.';
    eladrin.weight = getRndInteger(60, 200) + ' lbs';
    eladrin.skin = getThingFromList(EldEskinList);
    eladrin.eyes = getThingFromList(EldEeyeList);
    eladrin.hair = getThingFromList(EldEhairList);
    eladrin.alignment = getThingFromList(EldEalignmentList);
    break;
  case firbolg:
    firbolg.race = 'Firbolg';
    firbolg.size = 'Medium';
    const FirBmNameList = ['Glynneiros','Ilineiros','Farnan','Yelmaer','Baltoris','Norberos', 'Sarlar','Nornorin','Zumbalar','Varic',];
    const FirBfNameList = ['Holazorwyn','Kristhana','Wysarora','Ularalei','Wynsatra','Gilrie','Loramys','Enharice','Faeyra','Yesmys',];
    const FirBskinList = ['Pale', 'Greenish', 'Blueish'];
    const FirBeyeList = ['Yellow', 'Green', 'Brown', 'Blue'];
    const FirBhairList = ['Brown', 'Blond', 'Red', 'Auburn'];
    const FirBalignmentList = ['Neutral Good', 'Chaotic Good', 'Neutral'];
    firbolg.speed = ['30 ft.'];
    firbolg.features = ["Firbolg Magic (pg. 107 VGtM)","Hidden Step (pg. 107 VGtM)",'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.','Speech of Beast and Leaf (pg. 107 VGtM)',];
    firbolg.languages = ['Common', 'Elvish', 'Giant'];
    firbolg.wis = 2;
    firbolg.str = 1;
    firbolg.Mname = getThingFromList(FirBmNameList);
    firbolg.Fname = getThingFromList(FirBfNameList);
    firbolg.age = getRndInteger(30, 500);
    firbolg.height = Math.round(getRndInteger(84, 96) / 12) + ' ft.';
    firbolg.weight = getRndInteger(240, 300) + ' lbs';
    firbolg.skin = getThingFromList(FirBskinList);
    firbolg.eyes = getThingFromList(FirBeyeList);
    firbolg.hair = getThingFromList(FirBhairList);
    firbolg.alignment = getThingFromList(FirBalignmentList);
    break;
  case fireGenasi:
    fireGenasi.race = 'Fire Genasi';
    fireGenasi.size = 'Medium';
    const FGenNameList = ['Volcano','Whiff','Ash','Ember','Char','Smolder','Kindle','Candle','Lit'];
    const FGenskinList = ['Ash Gray', 'Flaming Red', 'Coal Black'];
    const FGeneyeList = ['Black', 'Gold', 'White', 'Red', 'Orange'];
    const FGenalignmentList = ['Lawful Neutral', 'Neutral', 'Chaotic Neutral'];
    fireGenasi.speed = ['30 ft.'];
    fireGenasi.features = ['Dark Vision: 60 ft.','You have resistance to fire damage.','You know the produce flame cantrip.'];
    fireGenasi.languages = ['Common', 'Primordial'];
    fireGenasi.spellList = ["Produce Flame"];
    fireGenasi.con = 2;
    fireGenasi.int = 1;
    fireGenasi.hair = 'Literally Fire'
    fireGenasi.Mname = getThingFromList(FGenNameList);
    fireGenasi.Fname = getThingFromList(FGenNameList);
    fireGenasi.age = getRndInteger(17, 120);
    fireGenasi.height = Math.round(getRndInteger(48, 76) / 12) + ' ft.';
    fireGenasi.weight = getRndInteger(110, 200) + ' lbs';
    fireGenasi.skin = getThingFromList(FGenskinList);
    fireGenasi.eyes = getThingFromList(FGeneyeList);
    fireGenasi.alignment = getThingFromList(FGenalignmentList);
    break;
  case waterGenasi:
    waterGenasi.race = 'Water Genasi';
    waterGenasi.size = 'Medium';
    const WGenNameList = ['Douse','Trickel','Spout','Damp','Jetti','Moist','Tide','Flood','River','Rill','Surf','Dew','Flux',];
    const WGenskinList = ['Blue','Black','Seafoam Green','Coral','Alge','Pale Blue',];
    const WGeneyeList = ['Onyx','Gold','White','Blue','Black','Seafoam Green','Coral',];
    waterGenasi.hair = 'Literally Water'
    const WGenalignmentList = ['Lawful Neutral', 'Neutral', 'Chaotic Neutral'];
    waterGenasi.speed = ['30 ft.'];
    waterGenasi.features = ['You have resistance to acid damage','You can breathe air and water.', 'You have a swimming speed of 30 feet.','You know the shape water cantrip.'];
    waterGenasi.spellList = ["Shape Water"];
    waterGenasi.languages = ['Common', 'Primordial'];
    waterGenasi.con = 2;
    waterGenasi.wis = 1;
    waterGenasi.Mname = getThingFromList(WGenNameList);
    waterGenasi.Fname = getThingFromList(WGenNameList);
    waterGenasi.age = getRndInteger(17, 120);
    waterGenasi.height = Math.round(getRndInteger(48, 76) / 12) + ' ft.';
    waterGenasi.weight = getRndInteger(110, 200) + ' lbs';
    waterGenasi.skin = getThingFromList(WGenskinList);
    waterGenasi.eyes = getThingFromList(WGeneyeList);
    waterGenasi.alignment = getThingFromList(WGenalignmentList);
    break;
  case earthGenasi:
    earthGenasi.race = 'Earth Genasi';
    earthGenasi.size = 'Medium';
    const EGenNameList = ['Travertine','Cliff','Callous','Ruby','Hunk','Crater','Plunge','Expanse','Bedrock','Stone','Cyanite',];
    const EGenskinList = ['Dust', 'Tan', 'Onyx', 'Sandstone', 'Limestone'];
    const EGeneyeList = ['Onyx', 'Gold', 'White', 'Brown', 'Citrine', 'Emerald'];
    const EGenhairList = ['Stone', 'Mud', 'Dust'];
    const EGenalignmentList = ['Lawful Neutral', 'Neutral', 'Chaotic Neutral'];
    earthGenasi.speed = ['30 ft.'];
    earthGenasi.features = ['You can move across difficult terrain made of earth or stone without expending extra movement.','You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',];
    earthGenasi.languages = ['Common', 'Primordial'];
    earthGenasi.spellList = ["Pass Without Trace"];
    earthGenasi.con = 2;
    earthGenasi.str = 1;
    earthGenasi.Mname = getThingFromList(EGenNameList);
    earthGenasi.Fname = getThingFromList(EGenNameList);
    earthGenasi.age = getRndInteger(17, 120);
    earthGenasi.height = Math.round(getRndInteger(48, 76) / 12) + ' ft.';
    earthGenasi.weight = getRndInteger(110, 200) + ' lbs';
    earthGenasi.skin = getThingFromList(EGenskinList);
    earthGenasi.eyes = getThingFromList(EGeneyeList);
    earthGenasi.hair = getThingFromList(EGenhairList);
    earthGenasi.alignment = getThingFromList(EGenalignmentList);
    break;
  case airGenasi:
    airGenasi.race = 'Air Genasi';
    airGenasi.size = 'Medium';
    const AGenNameList = ['Gale','Breeze','Whisk','Blow','Aura','Whirl','Lift','Cyclone','Mistral','Glide',];
    const AGenskinList = ['White', 'Pale Blue', 'Gray'];
    const AGeneyeList = ['Black', 'Gold', 'White', 'Pale Blue', 'Lilaic'];
    const AGenhairList = ['Pale Blue', 'Lilaic', 'Periwinkle', 'White'];
    const AGenalignmentList = ['Lawful Neutral', 'Neutral', 'Chaotic Neutral'];
    airGenasi.speed = ['30 ft.'];
    airGenasi.features = ["You can hold your breath indefinitely while you're not incapacitated.", 'You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',];
    airGenasi.languages = ['Common', 'Primordial'];
    airGenasi.spellList = ["Levitate"];
    airGenasi.con = 2;
    airGenasi.dex = 1;
    airGenasi.Mname = getThingFromList(AGenNameList);
    airGenasi.Fname = getThingFromList(AGenNameList);
    airGenasi.age = getRndInteger(17, 120);
    airGenasi.height = Math.round(getRndInteger(48, 76) / 12) + ' ft.';
    airGenasi.weight = getRndInteger(110, 200) + ' lbs';
    airGenasi.skin = getThingFromList(AGenskinList);
    airGenasi.eyes = getThingFromList(AGeneyeList);
    airGenasi.hair = getThingFromList(AGenhairList);
    airGenasi.alignment = getThingFromList(AGenalignmentList);
    break;
  case forestGnome:
    forestGnome.race = 'Forest Gnome';
    forestGnome.size = 'Small';
    const FGnoskinList = ['Tan', 'Brown', 'Beige'];
    const FGnoeyeList = ['Green', 'Hazel', 'Brown', 'Blue'];
    const FGnohairList = ['Blonde','Brunette','White','Auburn','Red','Black','White',];
    const FGnoalignmentList = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral',];
    forestGnome.speed = ['25 ft.'];
    forestGnome.features = ['Dark Vision: 60 ft.','You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.','Speak with Small Beasts (pg. 37 PHB)','You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.',];
    forestGnome.languages = ['Common', 'Gnomish'];
    forestGnome.spellList = ["Minor Illusion"];
    forestGnome.int = 2;
    forestGnome.dex = 1;
    forestGnome.Mname = getThingFromList(GnomeMNameList) + ' ' + getThingFromList(GnomeLNameList) + ' ' + getThingFromList(GnomeNNameList);
    forestGnome.Fname = getThingFromList(GnomeFNameList) + ' ' + getThingFromList(GnomeLNameList) + ' ' + getThingFromList(GnomeNNameList);
    forestGnome.age = getRndInteger(30, 450);
    forestGnome.height = Math.round(getRndInteger(30, 50) / 12) + ' ft.';
    forestGnome.weight = getRndInteger(20, 50) + ' lbs';
    forestGnome.skin = getThingFromList(FGnoskinList);
    forestGnome.eyes = getThingFromList(FGnoeyeList);
    forestGnome.hair = getThingFromList(FGnohairList);
    forestGnome.alignment = getThingFromList(FGnoalignmentList);
    break;
  case rockGnome:
    rockGnome.race = 'Rock Gnome';
    rockGnome.size = 'Small';
    const RGnoskinList = ['Tan', 'Brown', 'Beige'];
    const RGnoeyeList = ['Green', 'Hazel', 'Brown', 'Blue'];
    const RGnohairList = ['Blonde','Brunette','White','Auburn','Red','Black','White',];
    const RGnoalignmentList = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral',];
    rockGnome.speed = ['25 ft.'];
    const tinkerList = ['Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.','Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action',"Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",];
    rockGnome.features = ['Dark Vision: 60 ft.','You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',"Artificer's Lore (pg. 37 PHB)","Tinker (pg. 37 PHB)"];
    rockGnome.languages = ['Common', 'Gnomish'];
    rockGnome.int = 2;
    rockGnome.con = 1;
    rockGnome.Mname = getThingFromList(GnomeMNameList) + ' ' + getThingFromList(GnomeLNameList) + ' ' + getThingFromList(GnomeNNameList);
    rockGnome.Fname = getThingFromList(GnomeFNameList) + ' ' + getThingFromList(GnomeLNameList) + ' ' + getThingFromList(GnomeNNameList);
    rockGnome.age = getRndInteger(30, 450);
    rockGnome.height = Math.round(getRndInteger(30, 50) / 12) + ' ft.';
    rockGnome.weight = getRndInteger(20, 50) + ' lbs';
    rockGnome.skin = getThingFromList(RGnoskinList);
    rockGnome.eyes = getThingFromList(RGnoeyeList);
    rockGnome.hair = getThingFromList(RGnohairList);
    rockGnome.alignment = getThingFromList(RGnoalignmentList);
    rockGnome.features.push(getThingFromList(tinkerList))
    break;
  case svirfneblin:
    svirfneblin.race = 'Svirfneblin';
    svirfneblin.size = 'Small';
    const svirfmNameList = ['Belwar','Brickers','Durthmeck','Firble','Krieger','Kronthud','Schneltheck','Schnicktick','Thulwar','Walschud',];
    const svirffNameList = ['Beliss','Durthee','Fricknarti','Ivridda','Krivi','Lulthiss','Nalvarti','Schnella','Thulmarra','Wirsidda',];
    const svirflNameList = ['Crystalfist','Gemcutter','Ironfoot','Rockhewer','Seamfinder','Stonecutter',];
    const svirfskinList = ['Dun', 'Brown', 'Grey', 'Slate'];
    const svirfeyeList = ['White', 'Green', 'Hazel', 'Brown', 'Blue'];
    const svirfhairList = ['Brunette', 'White', 'Bald', 'Black'];
    const svirfalignmentList = ['Neutral Good','Lawful Neutral','Neutral','Chaotic Neutral',];
    svirfneblin.speed = ['25 ft.'];
    svirfneblin.features = ['Dark Vision: 120 ft.','You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.','You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.',];
    svirfneblin.languages = ['Common', 'Gnomish', 'Undercommon'];
    svirfneblin.int = 2;
    svirfneblin.dex = 1;
    svirfneblin.Mname = getThingFromList(svirfmNameList) + ' ' + getThingFromList(svirflNameList);
    svirfneblin.Fname = getThingFromList(svirffNameList) + ' ' + getThingFromList(svirflNameList);
    svirfneblin.age = getRndInteger(30, 200);
    svirfneblin.height = Math.round(getRndInteger(30, 42) / 12) + ' ft.';
    svirfneblin.weight = getRndInteger(80, 120) + ' lbs';
    svirfneblin.skin = getThingFromList(svirfskinList);
    svirfneblin.eyes =  getThingFromList(svirfeyeList);
    svirfneblin.hair = getThingFromList(svirfhairList);
    svirfneblin.alignment = getThingFromList(svirfalignmentList);
    break;
  case goblin:
    goblin.race = 'Goblin';
    goblin.size = 'Small';
    const GOBmNameList = ['Ziord','Gral','Xyrm','Voilb','Gleerd','Blibiar','Uhbioc','Gytburd','Kleeleang','Jumet','Iord','Krekz','Bluirt','Eezz','Rut','Gnaarmaakt','Klelzerd','Srahziog','Sloidzuzz','Wrearmoz',];
    const GOBfNameList = ['Weasz','Velk','Glans','Briags','Wrafai','Ifeart','Amrels','Broibneaga','Sehbys','Tagnelke','Croilx','Treang','Cleaha','Mioss','Gliofz','Qagkuxea','Cirmiosh','Ieseg','Seesnienia','Synvuin',];
    const GOBskinList = ['Dun', 'Brown', 'Grey', 'Tan', 'Black', 'White'];
    const GOBeyeList = ['White', 'Green', 'Yellow', 'Brown', 'Black', 'Red'];
    const GOBhairList = ['Bald'];
    const GOBalignmentList = ['Neutral', 'Chaotic Neutral', 'Neutral Evil'];
    goblin.speed = ['30 ft.'];
    goblin.features = ['Darkvision: 60 ft.',"Fury of the Small (pg. 119 VGtM)",' You can take the Disengage or Hide action as a bonus action on each of your turns.',];
    goblin.languages = ['Common', 'Goblin'];
    goblin.dex = 2;
    goblin.con = 1;
    goblin.Mname = getThingFromList(GOBmNameList);
    goblin.Fname = getThingFromList(GOBfNameList);
    goblin.age = getRndInteger(8, 60);
    goblin.height = Math.round(getRndInteger(30, 50) / 12) + ' ft.';
    goblin.weight = getRndInteger(80, 120) + ' lbs';
    goblin.skin = getThingFromList(GOBskinList);
    goblin.eyes = getThingFromList(GOBeyeList)
    goblin.hair = getThingFromList(GOBhairList);
    goblin.alignment = getThingFromList(GOBalignmentList);
    break;
  case goliath:
    goliath.race = 'Goliath';
    goliath.size = 'Medium';
    const GOLmNameList = ['Aukan','Eglath','Gae-Al','Gauthak','Ilikan','Keothi','Kuori','Lo-Kag','Manneo','Maveith','Nalla','Orilo','Paavu','Pethani','Thalai','Thotham','Uthal','Vaunea','Vimak',];
    const GOLlNameList = ['Anakalathai','Elanithino','Gathakanathi','Kalagiano','Katho-Olavi','Kolae-Gileana','Ogolakanu','Thuliaga','Thunukalathi','Vaimei-Laga',];
    const GOLnNameList = ['Bearkiller','Dawncaller','Fearless','Flintfinder','Horncarver','Keeneye','Lonehunter','Longleaper','Rootsmasher','Skywatcher','Steadyhand','Threadtwister','Twice-Orphaned','Twistedlimb', 'Wordpainter',];
    const GOLskinList = ['Dun', 'Brown', 'Grey', 'Tan', 'Black', 'White'];
    const GOLeyeList = ['White', 'Green', 'Yellow', 'Brown', 'Black'];
    const GOLhairList = 'Bald';
    const GOLalignmentList = ['Lawful Good', 'Neutral', 'Lawful Neutral'];
    goliath.speed = ['30 ft.'];
    goliath.features = ["Stone's Endurance (pg. 109 VGtM)", ' You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift',"You're acclimated to high altitude, including elevations above 20,000 feet. You're also naturally adapted to cold climates",];
    goliath.proficiency = ["Athletics"]
    goliath.languages = ['Common', 'Giant'];
    goliath.str = 2;
    goliath.con = 1;
    goliath.Mname = getThingFromList(GOLmNameList) + ' ' + getThingFromList(GOLlNameList) + ' ' + getThingFromList(GOLnNameList);
    goliath.Fname = goliath.Mname
    goliath.age = getRndInteger(16, 70);
    goliath.height = Math.round(getRndInteger(80, 100) / 12) + ' ft.';
    goliath.weight = getRndInteger(280, 340) + ' lbs';
    goliath.skin = getThingFromList(GOLskinList);
    goliath.eyes = getThingFromList(GOLeyeList);
    goliath.alignment = getThingFromList(GOLalignmentList);
    break;
  case lightfootHalfling:
    lightfootHalfling.race = 'Lightfoot Halfling';
    lightfootHalfling.size = 'Small';
    const LFHskinList = ['Tan', 'Ruddy', 'Pale'];
    const LFHeyeList = ['Green', 'Yellow', 'Brown', 'Black', 'Blue', 'Hazel'];
    const LFHhairList = ['Brown', 'Black', 'Sandy Brown', 'Blonde'];
    const LFHalignmentList = ['Lawful Good','Neutral Good','Neutral','Lawful Neutral',];
    lightfootHalfling.speed = ['25 ft.'];
    lightfootHalfling.features = ['Lucky (pg 28 PHB)','You have advantage on saving throws against being frightened.','You can move through the space of any creature that is of a size larger than yours.','You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',];
    lightfootHalfling.languages = ['Common','Halfling',];
    lightfootHalfling.dex = 2;
    lightfootHalfling.cha = 1;
    lightfootHalfling.Mname = getThingFromList(HalflingmNameList) + ' ' + getThingFromList(HalflinglNameList);
    lightfootHalfling.Fname = getThingFromList(HalflingfNameList) + ' ' + getThingFromList(HalflinglNameList);
    lightfootHalfling.age = getRndInteger(20, 140);
    lightfootHalfling.height = Math.round(getRndInteger(28, 48) / 12) + ' ft.';
    lightfootHalfling.weight = getRndInteger(25, 50) + ' lbs';
    lightfootHalfling.skin = getThingFromList(LFHskinList);
    lightfootHalfling.eyes = getThingFromList(LFHeyeList);
    lightfootHalfling.hair = getThingFromList(LFHhairList);
    lightfootHalfling.alignment = getThingFromList(LFHalignmentList);
    break;
  case stoutHalfling:
    stoutHalfling.race = 'Stout Halfling'
    stoutHalfling.size = 'Small';
    const StHskinList = ['Tan', 'Ruddy', 'Pale'];
    const StHeyeList = ['Green', 'Yellow', 'Brown', 'Black', 'Blue', 'Hazel'];
    const StHhairList = ['Brown', 'Black', 'Sandy Brown', 'Blonde'];
    const StHalignmentList = ['Lawful Good','Neutral Good','Neutral','Lawful Neutral',];
    stoutHalfling.speed = ['25 ft.'];
    stoutHalfling.features = ['Lucky (pg 28 PHB)','You have advantage on saving throws against being frightened.','You have advantage on saving throws against poison, and you have resistance against poison damage.',];
    stoutHalfling.languages = ['Common', 'Halfling'];
    stoutHalfling.dex = 2;
    stoutHalfling.con = 1;
    stoutHalfling.Mname = getThingFromList(HalflingmNameList) + ' ' + getThingFromList(HalflinglNameList);
    stoutHalfling.Fname = getThingFromList(HalflingfNameList) + ' ' + getThingFromList(HalflinglNameList);
    stoutHalfling.age = getRndInteger(20, 140);
    stoutHalfling.height = Math.round(getRndInteger(28, 48) / 12) + ' ft.';
    stoutHalfling.weight = getRndInteger(25, 50) + ' lbs';
    stoutHalfling.skin = getThingFromList(StHskinList);
    stoutHalfling.eyes = getThingFromList(StHeyeList);
    stoutHalfling.hair = getThingFromList(StHhairList);
    stoutHalfling.alignment = getThingFromList(StHalignmentList);
    break;
  case ghostwiseHalfling:
    ghostwiseHalfling.race = 'Ghostwise Halfling';
    ghostwiseHalfling.size = 'Small';
    const GwHskinList = ['Tan', 'Ruddy', 'Pale'];
    const GwHeyeList = ['Green', 'Yellow', 'Brown', 'Black', 'Blue', 'Hazel'];
    const GwHhairList = ['Brown', 'Black', 'Sandy Brown', 'Blonde'];
    const GwHalignmentList = ['Lawful Good','Neutral Good','Neutral','Lawful Neutral',];
    ghostwiseHalfling.speed = ['25 ft.'];
    ghostwiseHalfling.features = ['Lucky (pg 28 PHB)','You have advantage on saving throws against being frightened.','Silent Speech (pg. 110 SCAG)',];
    ghostwiseHalfling.languages = ['Common', 'Halfling'];
    ghostwiseHalfling.dex = 2;
    ghostwiseHalfling.wis = 1;
    ghostwiseHalfling.Mname  = getThingFromList(HalflingmNameList) + ' ' + getThingFromList(HalflinglNameList);
    ghostwiseHalfling.Fname  = getThingFromList(HalflingfNameList) + ' ' + getThingFromList(HalflinglNameList);
    ghostwiseHalfling.age = getRndInteger(20, 140);
    ghostwiseHalfling.height = Math.round(getRndInteger(28, 48) / 12) + ' ft.';
    ghostwiseHalfling.weight = getRndInteger(25, 50) + ' lbs';
    ghostwiseHalfling.skin = getThingFromList(GwHskinList);
    ghostwiseHalfling.eyes = getThingFromList(GwHeyeList);
    ghostwiseHalfling.hair = getThingFromList(GwHhairList);
    ghostwiseHalfling.alignment = getThingFromList(GwHalignmentList);
    break;
  case halfelf:
    halfelf.race = 'Half-Elf';
    halfelf.size = 'Medium';
    const HALFEmNameList = ['Adran','Aelar','Aramil','Arannis','Aust','Beiro','Berrian','Carric','Enialis','Erdan','Erevan','Galinndan','Hadarai','Heian','Himo','Immeral','Ivellios','Laucian','Mindartis','Paelias','Peren','Quarion','Riardon','Rolen','Soveliss','Thamior','Tharivol','Theren','Varis','Darwin','Stanford','Hardouin','Brinley','Alonzo','Clayton','Augustin','Jean','James','Emmanuel','Landers','Roche','Chrestien','Amir','Kevon','Torold','Alphonso','Reto',];
    const HALFEfNameList = ['Adrie','Althaea','Anastrianna','Andraste','Antinua','Bethrynna','Birel','Caelynn','Drusilia','Enna','Felosial','Ielenia','Jelenneth','Keyleth','Leshanna','Lia','Meriele','Mialee','Naivara','Quelenna','Quillathe','Sariel','Shanairra','Shava','Silaqui','Theirastra','Thia','Vadania','Valanthe','Xanaphia','Madison','Brooks','Adrianne','Patience','Tayler','Shayna','Karlie','Philomene','Nicola','Venetia','Bret','Capucine','Mianna','Wilhelmina','Alphonsine','Ally','Damiana',];
    const HALFElNameList = ['Amakiir','Amastacia','Galanodel','Holimion','Ilphelkiir','Liadon','Meliamne','Naïlo','Siannodel','Xiloscient','Kendall','Watt','Rivers','Milton','Newberry','Rudge','Blakemore','Abram','Clapham','Merton','Myerscough','Cromwell',];
    const HALFEskinList = ['Pale','Grey','Golden','Fair','Bluish-White','Copper','Tarnished-Copper',];
    const HALFEeyeList = ['Green','Hazel','Brown','Blue','Gold','Silver','Black','Pale Green','Lilac','White','Pale Blue','Yellow','Silver','Pink',];
    const HALFEhairList = ['Blonde','Silver','White','Yellow','Brunette','Auburn','Black','Silver-White','Green','Blue','Red',];
    const HALFEalignmentList = ['Chaotic Good','Neutral','Chaotic Neutral','Chaotic Evil',];
    halfelf.speed = ['30 ft.'];
    halfelf.features = ['Darkvision: 60 ft.',"You have advantage on saving throws against being charmed, and magic can't put you to sleep."];
    halfelf.languages = ['Common', 'Elvish', randLangElf(langList)];
    halfelf.Mname = getThingFromList(HALFEmNameList) + ' ' + getThingFromList(HALFElNameList);
    halfelf.Fname = getThingFromList(HALFEfNameList) + ' ' + getThingFromList(HALFElNameList);
    halfelf.age = getRndInteger(20, 180);
    halfelf.height = Math.round(getRndInteger(60, 72) / 12) + ' ft.';
    halfelf.weight = getRndInteger(60, 200) + ' lbs';
    halfelf.skin = getThingFromList(HALFEskinList);
    halfelf.eyes = getThingFromList(HALFEeyeList);
    halfelf.hair = getThingFromList(HALFEhairList);
    halfelf.alignment = getThingFromList(HALFEalignmentList);
    halfelf.str = 0;
    halfelf.dex = 0;
    halfelf.con = 0;
    halfelf.wis = 0;
    halfelf.int = 0;
    halfelf.cha = 2;
    function halfElfRandomStatselection()  {
      let halfelfAbilityList = ['str','dex','con','int','wis'];
      let halfelfAbilityIndex = halfelfAbilityList.length;
      const halfelfability1 = halfelfAbilityList[getRandomInt(halfelfAbilityIndex)];
      halfelfAbilityList.splice(halfelfability1);
      return halfelfability1;
    }
    x = getRndInteger(1,6);
    switch (x){
      case 1:
        halfelf.str = 1;
        break;
      case 2:
        halfelf.dex = 1;
        break;
      case 3:
        halfelf.con = 1;
        break;
      case 4:
        halfelf.wis = 1;
        break;
      case 5:
        halfelf.int = 1;
        break;
    }
    y = getRndInteger(1,5);
    if (halfelf.str === 1)  {
        switch (y){
          case 1:
            halfelf.dex = 1;
            break;
          case 2:
            halfelf.con = 1;
            break;
          case 3:
            halfelf.wis = 1;
            break;
          case 4:
            halfelf.int = 1;
            break;}
    } else if (halfelf.dex === 1)  {
        switch (y){
          case 1:
            halfelf.str = 1;
            break;
          case 2:
            halfelf.con = 1;
            break;
          case 3:
            halfelf.wis = 1;
            break;
          case 4:
            halfelf.int = 1;
            break;}
    } else if (halfelf.con === 1) {
        switch (y){
          case 1:
            halfelf.str = 1;
            break;
          case 2:
            halfelf.dex = 1;
            break;
          case 3:
            halfelf.wis = 1;
            break;
          case 4:
            halfelf.int = 1;
            break;}
    } else if (halfelf.wis === 1) {
        switch (x){
          case 1:
            halfelf.str = 1;
            break;
          case 2:
            halfelf.dex = 1;
            break;
          case 3:
            halfelf.con = 1;
            break;
          case 4:
            halfelf.int = 1;
            break;}
    } else if (halfelf.int === 1) {
        switch (x){
          case 1:
            halfelf.str = 1;
            break;
          case 2:
            halfelf.dex = 1;
            break;
          case 3:
            halfelf.con = 1;
            break;
          case 4:
            halfelf.wis = 1;
            break;}
    }
    break;
  case halforc:
    halforc.race = 'Half-Orc';
    halforc.size = 'Medium';
    const HorcmNameList = ['Dench','Feng','Gell','Henk','Holg','Imsh','Keth','Krusk','Mhurren','Ront','Shump','Thokk','Darwin','Stanford','Hardouin','Brinley','Alonzo','Clayton','Augustin',];
    const HorcfNameList = ['Baggi','Emen','Engong','Kansif','Myev','Neega','Ovak','Ownka','Shautha','Sutha','Vola','Volen','Yevelda','Madison','Brooks','Adrianne','Patience','Tayler','Shayna', 'Karlie','Philomene',];
    const HorcskinList = ['Pale Green', 'Grey Green', 'Green', 'Green'];
    const HorceyeList = ['Grey', 'Green', 'Black', 'Yellow', 'Red', 'Brown'];
    const HorchairList = ['Brown', 'Dark Brown', 'Black', 'Bald', 'Blond', 'Grey'];
    const HorcalignmentList = ['Neutral Good','Chaotic Good','Neutral','Chaotic Neutral','Neutral Evil','Chaotic Evil',];
    halforc.speed = ['30 ft.'];
    halforc.features = ['Darkvision: 60 ft.', 'Relentless Endurance (pg. 41 PHB)','Savage Attack (pg. 41 PHB)',];
    halforc.skills = ["Intimidation",];
    halforc.languages = ['Common', 'Orc'];
    halforc.str = 2;
    halforc.con = 1;
    halforc.Mname = getThingFromList(HorcmNameList);
    halforc.Fname = getThingFromList(HorcfNameList);
    halforc.age = getRndInteger(16, 75);
    halforc.height = Math.round(getRndInteger(60, 80) / 12) + ' ft.';
    halforc.weight = getRndInteger(150, 380) + ' lbs';
    halforc.skin = getThingFromList(HorcskinList);
    halforc.eyes = getThingFromList(HorceyeList);
    halforc.hair = getThingFromList(HorchairList);
    halforc.alignment = getThingFromList(HorcalignmentList);
    break;
  case hobgoblin:
    hobgoblin.race = 'Hobgoblin';
    hobgoblin.size = 'Medium';
    const HobGobmNameList = ['Orgrag','Fettok','Orlir','Detrat','Rotring','Nulbog','Krivre','Gallong','Ruglur','Noghom','Orgrag','Grugtin','Tarkon','Zavlar','Gruttok','Mogtok','Bighuk','Matrit','Drokhut','Rurle','Uttung',];
    const HobGobfNameList = ['Tutni','Esmuh','Bakla','Philgit','Ceyruf','Wenra','Seyzan','Erge','Hucdotsen','Samkafa',];
    const HobGobskinList = ['Orange','Orange-Red','Reddish Brown','Red','Red-Orange',];
    const HobGobeyeList = ['Yellow', 'Orange', 'Red', 'Black'];
    const HobGobhairList = ['Dark Brown', 'Dark Gray', 'Orange', 'Red'];
    const HobGobalignmentList = ['Lawful Neutral','Neutral','Lawful Evil','Neutral Evil',];
    hobgoblin.speed = ['30 ft.'];
    hobgoblin.features = ['Darkvision: 60 ft.','You are proficient with two martial weapons of your choice and with light armor.',"Saving Face (pg. 119 VGtM)",];
    hobgoblin.proficiency = ["Light Armor"];
    const HobGobprofList = ['Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip', 'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'];
    hobgoblin.languages = ['Common', 'Goblin'];
    hobgoblin.con = 2;
    hobgoblin.int = 1;
    hobgoblin.Mname = getThingFromList(HobGobmNameList);
    hobgoblin.Fname = getThingFromList(HobGobfNameList);
    hobgoblin.age = getRndInteger(16, 80);
    hobgoblin.height = Math.round(getRndInteger(60, 72) / 12) + ' ft.';
    hobgoblin.weight = getRndInteger(150, 220) + ' lbs';
    hobgoblin.skin = getThingFromList(HobGobskinList);
    hobgoblin.eyes = getThingFromList(HobGobeyeList);
    hobgoblin.hair = getThingFromList(HobGobhairList);
    hobgoblin.alignment = getThingFromList(HobGobalignmentList);
    let HobGobprofIndex = HobGobprofList.length;
    const HobGobprof1 = HobGobprofList[getRandomInt(HobGobprofIndex)]
    const HobGobprofPosition = HobGobprofList.indexOf(HobGobprof1);
    if (HobGobprofPosition !== -1)  {
      HobGobprofList.splice(HobGobprofPosition, 1)
    }
    hobgoblin.proficiency.push(HobGobprof1)
    HobGobprofIndex = HobGobprofList.length;
    const HobGobprof2 = HobGobprofList[getRandomInt(HobGobprofIndex)];
    hobgoblin.proficiency.push(HobGobprof2)
    break;
  case human:
    human.race = 'Human';
    human.size = 'Medium';
    const HumSubRace = ['Calishite','Chondathan','Damaran','Illuskan','Mulan','Rashemi','Shou', 'Tethyrin','Turami',];
    human.subRace = getThingFromList(HumSubRace)
    console.log(human.subRace)
    let calmNameList = ['Aseir','Bardeid','Haseid','Khemed','Mehmen','Sudeiman','Zasheir',];
    let calfNameList = ['Atala','Ceidil','Hama','Jasmal','Meilil','Seipora','Yasheira','Zasheida',];
    let callNameList = ['Basha','Dumein','Jassan','Khalid','Mostana','Pashar','Rein', ];
    const calskinList = ['Dusky Brown', 'Tan', 'Brown'];
    const calhairList = ['Brunette', 'Brown', 'Black', 'Dirty Blonde', 'Grey'];
    const caleyeList = ['Brown', 'Black', 'Hazel'];
    let chonmNameList = ['Darvin','Dorn','Evendur','Gorstag','Grim','Helm','Malark','Morn','Randal','Stedd',];
    let chonfNameList = ['Arveene','Esvele','Jhessail','Kerri','Lureene','Miri','Rowan','Shandri','Tessele',];
    let chonlNameList = ['Amblecrown','Buckman','Dundragon','Evenwood','Greycastle','Tallstag', ];
    const chonskinList = ['Tawny', 'Pale Bronze', 'Light Brown'];
    const chonhairList = ['Blonde', 'Dirty Blonde', 'Brown', 'Black', 'Grey'];
    const choneyeList = ['Brown', 'Black', 'Green', 'Hazel'];
    let damamNameList = ['Bor','Fodel','Glar','Grigor','Igan','Ivor','Kosef','Mival','Orel','Pavel','Sergor',];
    let damafNameList = ['Alethra','Kara','Katernin','Mara','Natali','Olma','Tana','Zora',];
    let damalNameList = ['Bersk','Chernin','Dotsk','Kulenov','Marsk','Nemetsk','Shemov','Starag',];
    const damaskinList = ['Tawny', 'Fair', 'Light Brown'];
    const damahairList = ['Brown', 'Black', 'Grey'];
    const damaeyeList = ['Light Brown', 'Blue', 'Brown', 'Green', 'Hazel'];
    let illumNameList = ['Ander','Blath','Bran','Frath','Geth','Lander','Luth','Malcer','Stor','Taman','Urth',];
    let illufNameList = ['Amafrey','Betha','Cefrey','Kethra','Mara','Olga','Silifrey','Westra',];
    let illulNameList = ['Brightwood','Helder','Hornraven','Lackman','Stormwind','Windrivver',];
    const illuskinList = ['Fair', 'Pale', 'Pasty'];
    const illuhairList = ['Blonde','Red','Auburn','Light Brown','Ash','Grey',];
    const illueyeList = ['Blue', 'Steely Grey', 'Green', 'Pale Blue'];
    let mulamNameList = ['Aoth','Bareris','Ehput-Ki','Kethoth','Mumed','Ramas','So-Kehur','Thazar-De','Urhur',];
    let mulafNameList = ['Arizima','Cahathi','Nephis','Nulara','Murithi','Sefris','Thola','Umara','Zolis',];
    let mulalNameList = ['Ankhalab','Anskuld','Fezim','Hahpet','Nathandem','Sepret','Uuthrakt',];
    const mulaskinList = ['Amber', 'Tawny', 'Light Bronze'];
    const mulahairList = ['Brown', 'Light Brown', 'Dark Brown', 'Black'];
    const mulaeyeList = ['Brown', 'Light Brown', 'Hazel', 'Grey'];
    let rashmNameList = ['Borivik','Faurgar','Jandar','Kanithar','Madislak','Ralmevik','Shaumar','Vladislak',];
    let rashfNameList = ['Fyevarra','Hulmarra','Immith','Imzel','Navarra','Shevarra','Tammith','Yuldra',];
    let rashlNameList = ['Chergoba','Dyernina', 'Iltazyara','Murnyethara','Stayanoga','Ulmokina',];
    const rashskinList = ['Dusky Brown', 'Black', 'Dark Brown'];
    const rashhairList = ['Brown', 'Black', 'Dark Brown'];
    const rasheyeList = ['Brown', 'Black', 'Grey'];
    let shoumNameList = ['An','Chen','Chi','Fai','Jiang','Jun','Lian','Long','Meng','On','Shan','Shui','Wen',];
    let shoufNameList = ['Bai','Chao','Jia','Lei','Mei','Qiao','Shui','Tai',];
    let shoulNameList = ['Chien','Huang','Kao','Kung','Lao','Ling','Mei','Pin','Shin','Sum','Tan','Wan',];
    const shouskinList = ['Yellowish-Bronze', 'Bronze', 'Tawny'];
    const shouhairList = ['Black', 'Dark Brown'];
    const shoueyeList = ['Brown', 'Black', 'Dark Brown', 'Grey'];
    let tethmNameList = ['Darvin','Dorn','Evendur','Gorstag','Grim','Helm','Malark','Morn','Randal','Stedd',];
    let tethfNameList = ['Arveene','Esvele','Jhessail','Kerri','Lureene','Miri','Rowan','Shandri','Tessele',];
    let tethlNameList = ['Basha','Dumein','Jassan','Khalid','Mostana','Pashar','Rein',];
    const tethskinList = ['Dusky', 'Fair', 'Light Brown', 'Dusky Brown'];
    const tethhairList = ['Green','Brown','Black','Blue','Pale Blue','Steely Grey','Light Brown','Hazle',];
    const tetheyeList = ['Blonde','Dirty Blonde','Light Brown','Brown','Black','Dark Brown','Auburn','Red','Grey',];
    let turamNameList = ['Anton','Diero','Marcon','Pieron', 'Rimardo','Romero','Salazar','Umbero',];
    let turafNameList = ['Balama','Dona','Faila','Jalana','Luisa','Marta','Quara','Selise','Vonda', ];
    let turalNameList = ['Agosto','Astorio','Calabra','Domine','Falone','Marivaldi','Pisacar','Ramondo',];
    const TuraskinList = ['Black', 'Dark Brown', 'Mahogany'];
    const TurahairList = ['Black', 'Dark Brown', 'Ash', 'Grey'];
    const TuraeyeList = ['Dark Brown', 'Black', 'Grey', 'Blue'];
    switch (human.subRace) {
      case 'Calishite':
        human.Mname = getThingFromList(calmNameList) + ' ' + getThingFromList(callNameList);
        human.Fname = getThingFromList(calfNameList) + ' ' + getThingFromList(callNameList);
        human.eyes = getThingFromList(caleyeList);
        human.skin = getThingFromList(calskinList);
        human.hair = getThingFromList(calhairList);
          break;
      case 'Chondathan':
        human.Mname = getThingFromList(chonmNameList) + ' ' + getThingFromList(chonlNameList);
        human.Fname = getThingFromList(chonfNameList) + ' ' + getThingFromList(chonlNameList);
        human.eyes = getThingFromList(choneyeList);
        human.skin = getThingFromList(chonskinList);
        human.hair = getThingFromList(chonhairList);
          break;
      case 'Damaran':
        human.Mname = getThingFromList(damamNameList) + ' ' + getThingFromList(damalNameList);
        human.Fname = getThingFromList(damafNameList) + ' ' + getThingFromList(damalNameList);
        human.eyes = getThingFromList(damaeyeList);
        human.skin = getThingFromList(damaskinList);
        human.hair = getThingFromList(damahairList);
          break;
      case 'Illuskan':
        human.Mname = getThingFromList(illumNameList) + ' ' + getThingFromList(illulNameList);
        human.Fname = getThingFromList(illufNameList) + ' ' + getThingFromList(illulNameList);
        human.eyes = getThingFromList(illueyeList);
        human.skin = getThingFromList(illuskinList);
        human.hair = getThingFromList(illuhairList);
        break;
      case 'Mulan':
        human.Mname = getThingFromList(mulamNameList) + ' ' + getThingFromList(mulalNameList);
        human.Fname = getThingFromList(mulafNameList) + ' ' + getThingFromList(mulalNameList);
        human.eyes = getThingFromList(mulaeyeList);
        human.skin = getThingFromList(mulaskinList);
        human.hair = getThingFromList(mulahairList);
        break;
      case 'Rashemi':
        human.Mname = getThingFromList(rashmNameList) + ' ' + getThingFromList(rashlNameList);
        human.Fname = getThingFromList(rashfNameList) + ' ' + getThingFromList(rashlNameList);
        human.eyes = getThingFromList(rasheyeList);
        human.skin = getThingFromList(rashskinList);
        human.hair = getThingFromList(rashhairList);
        break;
      case 'Shou':
        human.Mname = getThingFromList(shoumNameList) + ' ' + getThingFromList(shoulNameList);
        human.Fname = getThingFromList(shoufNameList) + ' ' + getThingFromList(shoulNameList);
        human.eyes = getThingFromList(shoueyeList);
        human.skin = getThingFromList(shouskinList);
        human.hair = getThingFromList(shouhairList);
      case 'Tethyrian':
        human.Mname = getThingFromList(tethmNameList) + ' ' + getThingFromList(tethlNameList);
        human.Fname = getThingFromList(tethfNameList) + ' ' + getThingFromList(tethlNameList);
        human.eyes = getThingFromList(tetheyeList);
        human.skin = getThingFromList(tethskinList);
        human.hair = getThingFromList(tethhairList);
        console.log(human)
      case 'Turami':
        human.Mname = getThingFromList(turamNameList) + ' ' + getThingFromList(turalNameList);
        human.Fname = getThingFromList(turafNameList) + ' ' + getThingFromList(turalNameList);
        human.eyes = getThingFromList(TuraeyeList);
        human.skin = getThingFromList(TuraskinList);
        human.hair = getThingFromList(TurahairList);
    }
    human.age = getRndInteger(16, 80);
    human.height = Math.round(getRndInteger(48, 80) / 12) + ' ft.';
    human.weight = getRndInteger(110, 250) + ' lbs';
    const HumalignmentList = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil',];
    human.alignment = getThingFromList(HumalignmentList);
    human.speed = ['30 ft.'];
    human.features = [];
    human.languages = ['Common', randLangHuman(langList)];
    human.str = 1;
    human.dex = 1;
    human.con = 1;
    human.wis = 1;
    human.int = 1;
    human.cha = 1;
    break;
  case kenku:
    kenku.race = 'Kenku';
    kenku.size = 'Medium';
    const KenKmNameList = ['Smasher','Hammer Clang','Slice','Basher','Rat Scratch','Whistler','Mouse Squeek','Bear Growl','Sail Snap','Hammerer','Cutter','Crying Baby','Hailstorm','Squelch','Slamming Door',];
    const KenKskinList = ['Black Feathers','Brown Feathers','Grey Feathers','Dark Grey Feathers','Blue-Black Feathers','Oilslick Feathers',];
    const KenKeyeList = ['Yellow', 'Green', 'Brown', 'Black', 'Red'];
    const KenKalignmentList = ['Neutral','Chaotic Neutral','Neutral Good','Chaotic Good',];
    kenku.speed = ['30 ft.'];
    kenku.features = ["Expert Forgery (pg. 111 VGtM)",' You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma Deception) check.',];
    kenku.proficiency = [];
    const KenKprofList = ["Acrobatics", "Deception", "Stealth", "Sleight of Hand"];
    kenku.languages = ['Auran', 'Mimic Common'];
    kenku.dex = 2;
    kenku.wis = 1;
    kenku.Mname = getThingFromList(KenKmNameList)
    kenku.Fname = getThingFromList(KenKmNameList);
    kenku.age = getRndInteger(11, 60);
    kenku.height = Math.round(getRndInteger(48, 72) / 12) + ' ft.';
    kenku.weight = getRndInteger(90, 120) + ' lbs';
    kenku.skin = getThingFromList(KenKskinList);
    kenku.eyes = getThingFromList(KenKeyeList);
    kenku.alignment = getThingFromList(KenKalignmentList);
    let KenKprofIndex = KenKprofList.length;
    const KenKprof1 = KenKprofList[getRandomInt(KenKprofIndex)]
    const KenKprofPosition = KenKprofList.indexOf(KenKprof1);
    if (KenKprofPosition !== -1)  {
      KenKprofList.splice(KenKprofPosition, 1)
    }
    kenku.proficiency.push(KenKprof1)
    KenKprofIndex = KenKprofList.length;
    const KenKprof2 = KenKprofList[getRandomInt(KenKprofIndex)];
    kenku.proficiency.push(KenKprof2)
    break;
  case kobold:
    kobold.race = 'Kobold';
    kobold.size = 'Small';
    const KbldmNameList = ['Dreisk','Khuk','Zerg','Qask','Okkerc','Drulbrusz','Gikag','Xegrun','Crorkeic','Strurkrind','Kim','Bhrox','Keng','Zin','Scuzzil','Shrezszi', 'Chronzis','Kaazdaing','Giggi','Shrardaang'];
    const KbldfNameList = ['Kim','Bhrox','Keng','Zin','Scuzzil','Shrezszi','Chronzis','Kaazdaing','Giggi','Shrardaang','Kes','Shraahl ','Snan','Khriz','Dhoksi','Dhazzee','Shribe','Khregvu','Zrirdja','Dheilblu'];
    const KbldlNameList = ['Morningfist','Redbrow','Emberbash','Farpelt','Riverflare','Clawstride','Nethersurge','Mountaingrip','Wildhunter','Fullthorn','Brownbone','Raingut','Clawmail','Mountaincrest','Hardscar','Spiderhead','Starbender','Flaskhunter',];
    const KbldskinList = ['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White',];
    const KbldeyeList = ['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White',];
    const KbldalignmentList = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil'];
    kobold.speed = ['30 ft.'];
    kobold.features = ['Darkvision: 60 ft.',"Grovel, Cower and Beg (pg. 119 VGtM)","Pack Tactics (pg. 119 VGtM)",'Sunlight Sensitivity (pg. 119 VGtM)',];
    kobold.languages = ['Common', 'Draconic'];
    kobold.dex = 2;
    kobold.str = -2;
    kobold.Mname = getThingFromList(KbldmNameList) + ' ' + getThingFromList(KbldlNameList);
    kobold.Fname = getThingFromList(KbldfNameList) + ' ' + getThingFromList(KbldlNameList);
    kobold.age = getRndInteger(6, 100);
    kobold.height = Math.round(getRndInteger(24, 36) / 12) + ' ft.';
    kobold.weight = getRndInteger(25, 35) + ' lbs';
    kobold.skin = getThingFromList(KbldskinList);
    kobold.hair = 'Bald';
    kobold.eyes = getThingFromList(KbldeyeList);
    switch (kobold.skin) {
      case 'Black':
        KbldalignmentList.splice(0, 3);
        break;
      case 'Blue':
        KbldalignmentList.splice(0, 3);
        break;
      case 'Green':
        KbldalignmentList.splice(0, 3);
        break;
      case 'Red':
        KbldalignmentList.splice(0, 3);
        break;
      case 'White':
        KbldalignmentList.splice(0, 3);
        break;
      case 'Brass':
        KbldalignmentList.splice(6, 8);
        break;
      case 'Bronze':
        KbldalignmentList.splice(6, 8);
        break;
      case 'Copper':
        KbldalignmentList.splice(6, 8);
        break;
      case 'Gold':
        KbldalignmentList.splice(6.8);
        break;
      case 'Silver':
        KbldalignmentList.splice(6, 8);
        break;
      default:
        console.log('IDK man something F***ed up (alignmentsplicing Kobold) ');
    }
    kobold.alignment = getThingFromList(KbldalignmentList);
    break;
  case lizardfolk:
    lizardfolk.race = 'Lizardfolk';
    lizardfolk.size = 'Medium';
    const LZFKmNameList = ['Achuak (green)','Aryte (war)','Baeshra (animal)','Darastrix (dragon)','Garurt (axe)','Irhtos (secret)','Jhank (hammer)','Kepesk (storm)', 'Kethend (gem)','Korth (danger)','Kosj (small)','Kothar (demon)','Litrix (armor)','Mirik (song)','Othokent (smart)','Sauriv (eye)','Throden (many)','Thurkear (night)','Usk (iron)','Valignat (burn)','Vargach (battle)','Verthica (mountain)', 'Vutha (black)','Vyth (steel)',];
    const LZFKskinList = ['Green Scales','Grey Scales','Brown Scales','Black Scales','Dark Green Scales','Tan Scales',];
    const LZFKeyeList = ['Yellow', 'Black', 'Red', 'Green'];
    const LZFKalignmentList = ['Neutral', 'Chaotic Neutral'];
    lizardfolk.speed = ['30 ft.', ];
    const LZFKquirkList = ['You hate waste and see no reason not to scavenge fallen enemies. Fingers are tasty and portable!','You sleep best while mostly submerged in water.','Money is meaningless to you.','You think there are only two species of humanoid:lizardfolk and meat.','You have learned to laugh. You use this talent in response to all emotional situations, to better fit in with your comrades.',"You still don't understand how metaphors work. That doesn't stop you from using them at every opportunity.", 'You appreciate the soft humanoids who realize they need chain mail and swords to match the gifts you were born with.', "You enjoy eating your food while it's still wriggling.",];
    lizardfolk.proficiency = [];
    lizardfolk.features = ['Darkvision: 60 ft.','Swim Speed: 30 ft.','Bite: 1d6 + your Strength modifier piercing damage.',"Cunning Artisan (pg 113 VGtM)",' You can hold your breath for up to 15 minutes ',"Natural Armor (pg. 113 VGtM)","Hungry Jaws (pg. 113 VGtM)",];
    lizardfolk.languages = ['Common', 'Draconic'];
    lizardfolk.con = 2;
    lizardfolk.wis = 1;
    lizardfolk.Mname = getThingFromList(LZFKmNameList);
    lizardfolk.Fname = getThingFromList(LZFKmNameList);
    lizardfolk.age = getRndInteger(13, 60);
    lizardfolk.height = Math.round(getRndInteger(52, 85) / 12) + ' ft.';
    lizardfolk.weight = getRndInteger(130, 270) + ' lbs';
    lizardfolk.skin = getThingFromList(LZFKskinList);
    lizardfolk.eyes = getThingFromList(LZFKeyeList);
    lizardfolk.alignment = getThingFromList(LZFKalignmentList);
    lizardfolk.features.push(getThingFromList(LZFKquirkList));
    const LZFKprofList = ["Animal Handling", "Nature", "Perception", "Survival", "Stealth"];
    let LZFKprofIndex = LZFKprofList.length;
    const LZFKprof1 = LZFKprofList[getRandomInt(LZFKprofIndex)]
    const LZFKprofPosition = LZFKprofList.indexOf(LZFKprof1);
    if (LZFKprofPosition !== -1)  {
      LZFKprofList.splice(LZFKprofPosition, 1);
    }
    lizardfolk.proficiency.push(LZFKprof1);
    LZFKprofIndex = LZFKprofList.length;
    const LZFKprof2 = LZFKprofList[getRandomInt(LZFKprofIndex)];
    lizardfolk.proficiency.push(LZFKprof2);
    lizardfolk.hair = undefined;
    break;
  case orc:
    orc.race = 'Orc';
    orc.size = 'Medium';
    const ORCmNameList = ['Nildud','Wapkagut','Xago','Quilge','Womrikug','Knagh','Bumbub','Uzul','Sagubar','Varfu','Xujarek','Sombilge','Durzub','Wubdagog','Bagamul','Urgran','Grommok','Tulgan','Yukgnath','Guthug',];
    const ORCfNameList = ['Garakh','Rulfim','Shadbak','Gluronk','Shagar','Borgakh','Rogbut','Durz','Bulak','Bumph','Sharamph','Shadbak','Shagar','Lambug','Homraz','Urzul','Bor','Urzul','Sharn','Ugak',];
    const ORCskinList = ['Pale Green', 'Grey Green', 'Green', 'Green'];
    const ORCeyeList = ['Grey', 'Green', 'Black', 'Yellow', 'Red', 'Brown'];
    const ORChairList = ['Brown','Dark Brown','Black','Bald','Blond','Grey','Red','Crimson',];
    const ORCalignmentList = ['Neutral Evil', 'Chaotic Evil', 'Neutral', 'Chaotic Neutral',];
    orc.speed = ['30 ft.'];
    orc.skills = ["Intimidation",]
    orc.features = ['Darkvision: 60 ft.','As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.','You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift',];
    orc.languages = ['Common', 'Orc'];
    orc.str = 2;
    orc.con = 1;
    orc.int = -1;
    orc.Mname = getThingFromList(ORCmNameList);
    orc.Fname = getThingFromList(ORCfNameList);
    orc.age = getRndInteger(12, 50);
    orc.height = Math.round(getRndInteger(72, 90) / 12) + ' ft.';
    orc.weight = getRndInteger(230, 280) + ' lbs';
    orc.skin = getThingFromList(ORCskinList);
    orc.eyes = getThingFromList(ORCeyeList);
    orc.hair = getThingFromList(ORChairList);
    orc.alignment = getThingFromList(ORCalignmentList);
    break;
  case tabaxi:
    tabaxi.race = 'Tabaxi';
    tabaxi.size = 'Medium';
    const TBXImNameList = ['Cloud on the Mountaintop (Cloud)','Five Timber (Timber)', 'Jade Shoe (Jade)','Left-Handed Hummingbird (Bird)', 'Seven Thundercloud (Thunder)','Skirt of Snakes (Snake)','Smoking Mirror (Smoke)',];
    const TBXIfNameList = ['Big Heart (Big)','Piece of the Puzzle (Piece)','Veil of Shadows (Veil)','Taste of Fruit (Taste)', 'Berry Bush (Bush)','Sweet Riddle (Sweet)','Ancient Locket (Ancient)','Pure Device (Pure)','Sapphire Dust (Dust)','Fragile Boot (Boot)',];
    const TBXIskinList = ['Cheeta Spots','Jaguar Spots','Lepoard Spots','Tiger Stripes','Tan','Straw Yellow','Black',];
    const TBXIeyeList = ['Yellow', 'Red', 'Green', 'Black'];
    const TBXIalignmentList = ['Chaotic Good', 'Chaotic Good', 'Chaotic Neutral'];
    tabaxi.speed = ['30 ft.'];
    const TBXIobsessionList = ['a god or planar entity','a monster',' a lost civilization',"a wizard's secrets",'a mundane item','a magic item','a location','a legend or tale',];
    const TBXIquirkList = ['You miss your tropical home and complain endlessly about the freezing, weather, even in summer.','You never wear the same outfit twice, unless you absolutely must.','You have a minor phobia of water and hate getting wet.','Your tail always betrays your inner thoughts.','You purr loudfy when you are happy','You keep a small ball of yarn in your hand, which you constantly fidget with.', 'You are always in debt, since you spend your gold on lavish parties and gifts for friends.',"When talking about something you're obsessed with, you speak quickly and never pause and others can't understand you.",'You are a font of random trivia from the lore and stories you have discovered.',"You can't help but pocket interesting objects you come across.",];
    tabaxi.proficiency = ["Perception", "Stealth"]
    tabaxi.features = ['Darkvision: 60 ft.',"Feline Agility (pg. 115 VGtM)",'You have a climbing speed of 20 feet.',"Cat's Claws (pg. 115 VGtM)"];
    tabaxi.languages = ['Common', randLangHuman(langList)];
    tabaxi.dex = 2;
    tabaxi.cha = 1;
    tabaxi.Mname = getThingFromList(TBXImNameList);
    tabaxi.Fname = getThingFromList(TBXIfNameList);
    tabaxi.age = getRndInteger(16, 80);
    tabaxi.height = Math.round(getRndInteger(72, 84) / 12) + ' ft.';
    tabaxi.weight = getRndInteger(150, 250) + ' lbs';
    tabaxi.skin = getThingFromList(TBXIskinList);
    tabaxi.eyes = getThingFromList(TBXIeyeList);
    tabaxi.alignment = getThingFromList(TBXIalignmentList);
    const TBXIobsession = getThingFromList(TBXIobsessionList)
    const TBXIquirk = getThingFromList(TBXIquirkList)
    tabaxi.features.push('You are obsessed with ' + TBXIobsession, )
    tabaxi.features.push('Your Tabaxi quirk: ' + TBXIquirk,)
    break;
  case tiefling:
    tiefling.race = 'Tiefling';
    tiefling.size = 'Medium';
    const TIFLGmNameList = ['Akmenos','Amnon','Barakas','Damakos','Ekemon','Iados','Kairon','Leucis','Melech','Mordai','Morthos','Pelaios','Skamos','Therai',];
    const TIFLGfNameList = ['Akta','Anakis','Bryseis','Criella','Damaia','Ea','Kallista','Lerissa','Makaria','Nemeia','Orianna','Phelaia','Rieta',];
    const TIFLGlNameList = ['Art','Carrion','Chant','Creed','Despair','Excellence', 'Fear','Glory','Hope','Ideal', 'Music', 'Nowhere', 'Open', 'Poetry', 'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary',];
    const TIFLGskinList = [ 'Pale', 'Tawny', 'Bronze', 'Black', 'Crimson', 'Fuchsia', 'Crimson', 'Vermillion', 'Carmin', 'Amaranth', 'Blood Red', 'Wine', 'Burgundy', 'Carnelian', 'Carmine', 'Scarlet',];
    const TIFLGeyeList = ['Black', 'Red', 'White', 'Silver', 'Gold'];
    const TIFLGhairList = ['Black', 'White', 'Fuchsia', 'Brown', 'Crimson', 'Dark Brown', 'Raven Black', 'Silvery White', 'Cobalt Blue', 'Blue Black',];
    const TIFLGhornStyleList = ['Ibex', 'Gazelle', 'Antelope', 'Ram', 'Bull', 'Goat', 'Markhor', 'Nubian Ibex', 'Bharal', 'Addax', ' Mouflon', 'Eland', 'Wildebeest', 'Water Buffalo', 'Jacob Sheep',];
    const TIFLGhornColorList = [  'Black', 'Crimson', 'Fuchsia', 'Crimson', 'Vermillion', 'Carmin', 'Amaranth', 'Blood Red', 'Wine', 'Burgundy', 'Carnelian', 'Carmine', 'Scarlet', 'Bone White',];
    const TIFLGalignmentList = ['Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Neutral Evil', 'Chaotic Evil',];
    tiefling.features = ['Darkvision: 60 ft.','You have resistance to fire damage.','You know the thaumaturgy cantrip.',];
    tiefling.speed = ['30 ft.'];
    tiefling.languages = ['Common', 'Infernal'];
    tiefling.spellList = ["Thaumaturgy"]
    tiefling.cha = 2;
    tiefling.int = 1;
    tiefling.Mname = getThingFromList(TIFLGmNameList) + ' ' + getThingFromList(TIFLGlNameList);
    tiefling.Fname = getThingFromList(TIFLGfNameList) + ' ' + getThingFromList(TIFLGlNameList);
    tiefling.age = getRndInteger(16, 100);
    tiefling.height = Math.round(getRndInteger(48, 80) / 12) + ' ft.';
    tiefling.weight = getRndInteger(130, 280) + ' lbs';
    tiefling.skin = getThingFromList(TIFLGskinList);
    tiefling.eyes = getThingFromList(TIFLGeyeList);
    tiefling.hair = getThingFromList(TIFLGhairList);
    tiefling.horn = getThingFromList(TIFLGhornColorList)+ ' ' + getThingFromList(TIFLGhornStyleList) + ' Horns';
    tiefling.alignment = getThingFromList(TIFLGalignmentList)
    break;
  case tortle: 
    tortle.race = 'Tortle';
    tortle.size = 'Medium';
    const TRTLmNameList = ['Baka', 'Damu', 'Gar', 'Gura', 'Ini', 'Jappa', 'Kinlek', ' Krull', 'Lim', 'Lop', 'Nortle', 'Nulka', 'Olo', 'Ploqwat', 'Quee', 'Queg', 'Quott', 'Sunny', 'Tibor', 'Ubo', 'Uhok', 'Wabu', 'Xelbuk', 'Yog',];
    const TRTLskinList = ['Green Scales', 'Grey Scales', 'Brown Scales', 'Black Scales', 'Dark Green Scales', 'Tan Scales',];
    const TRTLeyeList = ['Brown', 'Black', 'Yellow', 'Red'];
    const TRTLshellList = [  'African Spurred Tortoise', "Hermann's Tortoise", 'Russian Tortoise', 'Leopard Tortoise', 'Indian Star Tortoise', 'Red Footed Tortoise', 'Radiated Tortoise', 'Burmese Star Tortoise', 'Chaco Tortoise',];
    const TRTLalignmentList = [ 'Lawful Good', 'Neutral Good', 'Lawful Neutral', 'Neutral', 'Lawful Evil',];
    tortle.features = ['Darkvision: 60 ft.','unarmed strikes deal (1d4 + Strength mod) slashing damage', "You can hold your breath for up to 1 hour", "Your shell grants you bounus AC","You can withdraw into your shell as an action. You gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws, and disadvantage on Dexterity saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",];
    tortle.speed = ['30 ft.'];
    tortle.skills = ["Survival"]
    tortle.languages = ['Common', 'Aquan'];
    tortle.str = 2;
    tortle.wis = 1;
    tortle.Mname = getThingFromList(TRTLmNameList)
    tortle.Fname = getThingFromList(TRTLmNameList);
    tortle.age = getRndInteger(15, 50);
    tortle.height = Math.round(getRndInteger(60, 72) / 12) + ' ft.';
    tortle.weight = getRndInteger(400, 500) + ' lbs';
    tortle.skin = getThingFromList(TRTLskinList);
    tortle.eyes = getThingFromList(TRTLeyeList);
    tortle.shell = getThingFromList(TRTLshellList) + ' Shell';
    tortle.alignment = getThingFromList(TRTLalignmentList);
    break;
  case triton: 
    triton.race = 'Triton';
    triton.size = 'Medium';
    const TRTNmNameList = ['Corus', 'Delnis', 'Jhimas', 'Keros', 'Molos', 'Nalos', 'Vodos', 'Zunis', 'Jedes', 'Khanvas', 'Cahlas', 'Rolzos', 'Kivis',];
    const TRTNfNameList = [ 'Aryn', 'Belthyn', 'Duthyn', 'Feloren', 'Otanyn', 'Shalryn', 'Vlaryn', 'Wolyn', 'Dinlyn', 'Whathyn', 'Itlyn', 'Vlohlyn', 'Whodryn',];
    const TRTNlNameList = ['Zoghalvath','Vudanath','Ohmelath','Gahnasnath','Luvanath','Veguxath','Mulanath','Ahrolvath','Zanaxath','Dhoromath',];
    const TRTNskinList = ['Pale Blue Scales','Deep Blue Scales','Light Green Scales','Deep Green Scales',];
    const TRTNeyeList = ['Yellow','Seafoam Green','Cobalt Blue','Black','Coral',];
    const TRTNhairList = ['Seafoam Green','Sky Blue','Black','Staw Yellow','Coral','White','Grey',];
    const TRTNquirkList = ['You phrase requests as orders that you expect to be obeyed.','You are quick to boast of the gre,atness of your civilization.',"You learned an antiquated version of Common and drop 'thee' and 'thou' into your speech.",'You assume that people are telling you the truth about local customs and expectations.','The surface world is a wondrous place, and you catalog all its details in a journal.',"You mistakenly assume that surface folk know about and are impressed by your people's history",];
    const TRTNalignmentList = ['Lawful Good', 'Neutral Good', 'Lawful Neutral'];
    triton.speed = ['30 ft.'];
    triton.features = ['You can breathe air and water','Swim Speed: 30 ft.'," You can cast Fog Cloud", 'You can communicate simple ideas with beasts that can breathe water.','resistance to cold damage', 'Ignore any of the drawbacks caused by a deep, underwater environment'];
    triton.languages = ['Common', 'Primordial'];
    triton.spellList = ["Fog Cloud"]
    triton.str = 2;
    triton.con = 1;
    triton.cha = 1;
    triton.Mname = getThingFromList(TRTNmNameList) + ' ' + getThingFromList(TRTNlNameList);
    triton.Fname = getThingFromList(TRTNfNameList) + ' ' + getThingFromList(TRTNlNameList);
    triton.age = getRndInteger(15, 200);
    triton.height = Math.round(getRndInteger(60, 72) / 12) + ' ft.';
    triton.weight = getRndInteger(110, 200) + ' lbs';
    triton.skin = getThingFromList(TRTNskinList);
    triton.eyes = getThingFromList(TRTNeyeList);
    triton.hair = getThingFromList(TRTNhairList);
    triton.features.push(getThingFromList(TRTNquirkList))
    triton.alignment = getThingFromList(TRTNalignmentList);
    break;
  case yuanTiPureblood:
    yuanTiPureblood.race = 'Yuan-Ti Pureblood';
    yuanTiPureblood.size = 'Medium';
    const YTPBmNameList = ['Yuhleell','Thaksu','Ssotstlu','Zoztlei','Uhtlui', 'Oshill', 'Zsikhuluss','Zhitshohlia','Nussezha','Iztassah','Tahtliall','Zsota','Miltsu','Tiltsu','Shusza','Zhutszia','Himozu','Yanollui','Ssokhoyih','Mostassiesh',];
    const YTPBskinList = ['Dusky Brown','Tan','Brown','Tawny','Pale Bronze','Light Brown','Fair', 'Pale','Pasty','Black','Dark Brown','Mahogany',];
    const YTPBscalesList = ['Green Scales','Grey Scales','Brown Scales','Black Scales','Dark Green Scales','Tan Scales',];
    const YTPBeyeList = ['Dark Brown','Black','Grey','Blue','Yellow','Green','Brown','Black','Red',];
    const YTPBhairList = ['Blonde','Dirty Blonde','Brown','Black','Blonde','Red','Auburn','Light Brown','Ash','Grey',];
    const YTPBalignmentList = ['Neutral Evil', 'Neutral'];
    yuanTiPureblood.features = ['Darkvision: 60 ft.',"You know the poison spray cantrip. You can cast animal friendship an unlimited number of times you can target only snakes with it.",' You have advantage on saving throws against spells and other magical effects.','You are immune to poison damage and the poisoned condition',];
    yuanTiPureblood.speed = ['30 ft.'];
    yuanTiPureblood.languages = ['Common', 'Abyssal', 'Draconic'];
    yuanTiPureblood.spellList = ["Poison Spray"]
    yuanTiPureblood.cha = 2;
    yuanTiPureblood.int = 1; 
    yuanTiPureblood.Mname = getThingFromList(YTPBmNameList);
    yuanTiPureblood.Fname = getThingFromList(YTPBmNameList);
    yuanTiPureblood.age = getRndInteger(15, 80);
    yuanTiPureblood.height = Math.round(getRndInteger(60, 72) / 12) + ' ft.';
    yuanTiPureblood.weight = getRndInteger(110, 200) + ' lbs';
    yuanTiPureblood.skin = getThingFromList(YTPBskinList) + ' with ' + getThingFromList(YTPBscalesList);
    yuanTiPureblood.eyes = getThingFromList(YTPBeyeList);
    yuanTiPureblood.hair = getThingFromList(YTPBhairList);
    yuanTiPureblood.alignment = getThingFromList(YTPBalignmentList);
    break;
  default:
    console.log("idk man something messed up (race switch)")
}

switch (player.playerClass) {
  case barbarian:
    barbarian.playerClass = "Barbarian"
    barbarian.inventory = {};
    barbarian.features = [];
    barbarian.skills = [];
    barbarian.HitDice = "1d12";
    barbarian.HitPoints = 12;
    barbarian.proficiency = ["Light Armor", "Medium Armor", "Shields", "Simple Weapons", "Martial Weapons"];
    barbarian.SavingThrows = ["Strength", "Constitution"];
    const barbSkillList = ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"];
    let barbSkillIndex = barbSkillList.length;
    const barbSkill1 = barbSkillList[getRandomInt(barbSkillIndex)];
    const barbSkillPosition = barbSkillList.indexOf(barbSkill1);
    if (barbSkillPosition !== -1)  {
      barbSkillList.splice(barbSkillPosition, 1);
    }
    barbarian.skills.push(barbSkill1);
    barbSkillIndex = barbSkillList.length;
    const barbSkill2 = barbSkillList[getRandomInt(barbSkillIndex)];
    barbarian.skills.push(barbSkill2);
    
    let barbChoice = getRndInteger(5);
    if ((barbChoice%2) === 0) {
      inventoryCheck(barbarian,'Greataxe',1)
    } else  {
      inventoryCheck(barbarian, getMartialWeapon(),1);
    }
    barbChoice = getRndInteger(5);
    if ((barbChoice%2) === 0) {
      inventoryCheck(barbarian,`Handaxe`, 2);
      //barbarian.inventory.push("Handaxe");
    } else {
      inventoryCheck(barbarian, getSimpleWeapon(),1);
    }
    let barbarianAC = 10 + dexMod + conMod;
    inventoryCheck(barbarian, "Explorer's Pack",1)
    inventoryCheck(barbarian, "Javelin",4)
    barbarian.features.push("Rage (pg. 48 PHB)", "Unarmored Defense (pg. 48 PHB)");
    break;
  case bard:
    bard.playerClass = "Bard";
    bard.inventory = {};
    bard.features = [];
    bard.proficiency = [];
    bard.spellList = ["Light"]
    bard.HitDice = "1d8";
    bard.HitPoints = 8;
    bard.proficiency = ["Light Armor", "Simple Weapons", "Hand Crossbow", "Longsword", "Rapier", "Shortsword",];
    instrumentArray =[];
    for (i=0; i<3; i++) {
      instrument = getThingFromList(musicalInstruments);
      instrumentArray.push(instrument);
      const instrumentPosition = musicalInstruments.indexOf(instrument);
      if (instrumentPosition !== -1)  {
        musicalInstruments.splice(instrumentPosition, 1);
      bard.proficiency.push(instrument);
      }
    }
    //player.features = player.features.concat(x.features).CleanConcat()
    let skillArrayb =[];
    for (i=0; i<3; i++) {
      skill = getThingFromList(allSkills);
      skillArrayb.push(skill);
      const skillPosition = allSkills.indexOf(skill);
      if (skillPosition !== -1)  {
        allSkills.splice(skillPosition, 1);
      }
    }
    bard.skills = skillArrayb;
    bard.SavingThrows = ["Dexterity", "Charisma"];
    let bardChoice = getRndInteger(1,4);
    switch (bardChoice) {
      case 1:
        inventoryCheck(bard,'Rapier',1);
        break;
      case 2:
        inventoryCheck(bard,'Longsword',1);
        break;
      case 3:
        inventoryCheck(bard,getSimpleWeapon(),1);
        break;
      default:
        console.log('IDK man something messed up (bard equipment selection 1)');
        break;
    }
    bardChoice2 = getRndInteger(5);
    if ((bardChoice2%2) === 0) {
      inventoryCheck(bard,"Diplomat's pack",1);
    } else  {
      inventoryCheck(bard,"Entertainer's pack",1);
    }
    bardChoice2 = getRndInteger(5);
    if ((bardChoice%2) === 0) {
      inventoryCheck(bard, 'Lute', 1);
    } else  {
      inventoryCheck(bard,getInstrument(), 1);
    }
    inventoryCheck(bard,'Leather Armor',1);
    inventoryCheck(bard,'Dagger', 1);
    bard.features.push("You can use a musical instrument as a spellcasting focus for your bard spells.", "Bardic Inspiration (pg. 53 PHB)", );
    bard.SSDC = player.chaMod;
    bard.SSDC += 10
    bard.magic = {"Cantrips": 2, "Level 1 Spell Slots" :2, "Spells Known": 4, "Spell Save DC": bard.SSDC};
    break;
  case cleric:
    cleric.playerClass = 'Cleric';
    cleric.inventory = {};
    cleric.features = [];
    cleric.skills= [];
    cleric.spellList = [];
    cleric.DivineDomain = getThingFromList(clericDomainList);
    cleric.subclass = cleric.DivineDomain;
    cleric.proficiency = ["Light Armor", "Medium Armor", "Shields", "Simple Weapons", ];
    cleric.HitDice = "1d8";
    cleric.HitPoints = 8;
    //player.features = player.features.concat(x.features).CleanConcat()
    let clericSkill =["History", "Insight", "Medicine", "Persuasion", "Religion"];
    switch (cleric.DivineDomain)  {
      case 'Arcana Domain':
        let DomainFeaturesAD = ['Arcana Domain',"You gain two cantrips of your choice from the Wizard Spell List."];
        cleric.skills.push("Arcana")
        clericSkill.splice(0,1)
        cleric.features = cleric.features.concat(DomainFeaturesAD).CleanConcat();
        cleric.spellList.push("Detect Magic", "Magic Missile");
        break;
      case 'Forge Domain':
        let DomainFeaturesFD = ['Forge Domain',"Blessing of the Forge (pg. 19 XGtE)"];
        cleric.features = cleric.features.concat(DomainFeaturesFD).CleanConcat();
        cleric.spellList.push("Identify","Searing Smite");
        cleric.proficiency.push("Heavy Armor", "Smith's Tools")
        break;
      case 'Grave Domain':
        let DomainFeaturesGD = ['Grave Domain',"Circle of Mortality (pg. 20 XGtE)","Eyes of the Grave (pg. 20 XGtE)"];
        cleric.features = cleric.features.concat(DomainFeaturesGD).CleanConcat();
        cleric.spellList.push("Spare the Dying", "Bane", "False Life");
        break;
      case 'Knowledge Domain':
        let DomainFeaturesKD = ['Knowledge Domain',"Blessings of Knowledge (pg. 59 PHB)"];
        cleric.features = cleric.features.concat(DomainFeaturesKD).CleanConcat();
        cleric.spellList.push("Command", "Identify");
        break;
      case 'Life Domain':
        let DomainFeaturesLD = ['Life Domain',"Disciple of Life (pg. 60 PHB)"];
        cleric.proficiency.push("Heavy Armor");
        cleric.features = cleric.features.concat(DomainFeaturesLD).CleanConcat();
        cleric.spellList.push("Bless", "Cure Wounds");
        break;
      case 'Light Domain':
        let DomainFeaturesLiteD = ['Light Domain',"Warding Flare (pg. 61 PHB)"];
        cleric.features = cleric.features.concat(DomainFeaturesLiteD).CleanConcat();
        cleric.spellList.push("Light","Burning Hands", "Faerie Fire")
        break;
      case 'Nature Domain':
        let NDprofs = ['Nature Domain',"Animal Handling, Nature, or Survival."];
        let NDSpell = getThingFromList(DruidCantripList);
        cleric.proficiency.push(getThingFromList(NDSpell), "Heavy Armor");
        cleric.spellList.push(NDSpell, "Animal friendship", "Speak with Animals");
        break;
      case 'Tempest Domain':
        let DomainFeaturesTD = ['Tempest Domain',"Wrath of the Storm (pg. 62 PHB)"];
        cleric.features = cleric.features.concat(DomainFeaturesTD).CleanConcat();
        cleric.proficiency.push("Martial Weapons", "Heavy Armor");
        cleric.spellList.push("Fog Cloud", "Thunderwave");
        break;
      case 'Trickery Domain':
        let DomainFeaturesTrkDom = ['Trickery Domain',"Blessing of the Trickster (pg. 63 PHB)"]
        cleric.features = cleric.features.concat(DomainFeaturesTrkDom).CleanConcat();
        cleric.spellList.push("Charm Person", "Disguise Self")
        break;
      case 'War Domain':
        let DomainFeaturesWD = ['War Domain', "War Priest (pg. 63 PHB)"];
        cleric.features = cleric.features.concat(DomainFeaturesWD).CleanConcat();
        cleric.proficiency.push("Martial Weapons", "Heavy Armor")
        cleric.spellList = ["Divine Favor", "Shield of Faith"];
        break;
      default:
        console.log("IDK man something messed up (cleric subclass)")
    }
    let skillArray= [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(clericSkill);
      skillArray.push(skill);
      const skillPosition = clericSkill.indexOf(skill);
      if (skillPosition !== -1)  {
        clericSkill.splice(skillPosition, 1);
      }
    }
    cleric.skills = skillArray;
    cleric.SavingThrows = ["Wisdom", "Charisma"];
    let clericChoice = getRndInteger(1,4);
    switch (clericChoice) {
      case 1:
        inventoryCheck(cleric,'Scale Mail',1);
        break;
      case 2:
        inventoryCheck(cleric,'Leather Armor',1);
        break;
      case 3:
        let heavyArmorProfCheck = proficiencyCheck('Heavy Armor', cleric);
        if (heavyArmorProfCheck === false)  {
          inventoryCheck(cleric,'Scale Mail', 1)
        } else  { inventoryCheck(cleric,'Chain Mail', 1)
        }
    }
    clericChoice2 = getRndInteger(5);
    if ((clericChoice2%2) === 0) {
      inventoryCheck(cleric,"Mace",1);
    } else  {
      let WHprofCheck = proficiencyCheck('Warhammer', cleric);
      if (WHprofCheck === true) {
      inventoryCheck(cleric,"Warhammer",1);
    } else {
      inventoryCheck(cleric, 'Mace',1);
      
    }
    }
    
    let clericChoice3 = getRndInteger(5);
    if ((clericChoice%2) === 0) {
      inventoryCheck(cleric, 'Light Crossbow', 1);
      inventoryCheck(cleric,'Bolts',20);
    } else  {
      inventoryCheck(cleric,getSimpleWeapon(), 1);
    }
    let clericChoice4 = getRndInteger(5);
    if ((clericChoice4%2) === 0)  {
      inventoryCheck(cleric,"Priest's Pack", 1)
    } else  {
      inventoryCheck(cleric,"Explorer's Pack", 1)
    }
    inventoryCheck(cleric,'Sheild',1);
    inventoryCheck(cleric,'Holy Symbol', 1);
    cleric.features.push("As a conduit for Divine power, you can cast cleric spells.");
    cleric.SSDC = 8 + 2 + wisMod;
    let clericPreparedSpells = wisMod+1
    cleric.magic = {"Cantrips": 3, "Level 1 Spell Slots" :2, "Prepared Spells": clericPreparedSpells , "Spell Save DC": cleric.SSDC};
    break;
  case druid:
    druid.playerClass = 'Druid';
    druid.inventory = {};
    druid.features = [];
    druid.spellList - [];
    druid.HitDice = "1d8";
    druid.HitPoints = 8;
    druid.proficiency = ["Light Armor", "Medium Armor", "Sheild", "Club", "Dart", "Javelin", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear", "Herbalism Kit"];
    druidSkillArray =[];
    druidSkillOptions = ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"];
    for (i=0; i<2; i++) {
      skill = getThingFromList(druidSkillOptions);
      druidSkillArray.push(skill);
      const skillPosition = druidSkillOptions.indexOf(skill);
      if (skillPosition !== -1)  {
        druidSkillOptions.splice(skillPosition, 1);
      }
    }
    druid.skills = druidSkillArray;
    druid.SavingThrows = ["Intelligence", "Wisdom"];
    let druidChoice = getRndInteger(1,3);
    switch (druidChoice) {
      case 1:
        inventoryCheck(druid,'Wooden Sheild',1);
        break;
      case 2:
        inventoryCheck(druid,getSimpleWeapon(),1);
        break;
      default:
        console.log('IDK man something messed up (druid equipment selection 1)');
        break;
    }
    druidChoice2 = getRndInteger(5);
    if ((druidChoice2%2) === 0) {
      inventoryCheck(druid,"Scimitar",1);
    } else  {
      inventoryCheck(druid,getsimpleMeleeWeapon(),1);
    }
    inventoryCheck(druid,'Leather Armor',1);
    inventoryCheck(druid,"Explorer's Pack", 1);
    inventoryCheck(druid, 'Druidic Focus', 1)
    let druidlanguages = player.languages;
    druidlanguages.push("Druidic");
    player.languages = druidlanguages
    //player.languages = player.languages.concat(druidlanguages).CleanConcat();
    druid.features.push("Druids will not wear armor or use shields made of metal.", "Ritual Casting (pg. 66 PHB)", "Spellcasting Focus (pg. 66 PHB)", "You know Druidic (pg. 66 PHB)" );
    druid.SSDC = 8 + 2 + wisMod;
    druidprep = 1 + wisMod;
    druid.magic = {"Cantrips": 2, "Level 1 Spell Slots" :2, "Spells Prepared": druidprep, "Spell Save DC": druid.SSDC};
    break;
  case fighter:
    fighter.playerClass = 'Fighter';
    fighter.inventory = {};
    fighter.features = [];
    fighter.spellList - [];
    fighter.HitDice = "1d10";
    fighter.HitPoints = 10;
    fighter.proficiency = ["Light Armor", "Medium Armor", 'Heavy Armor', "Sheilds", "Martial Weapons", "Simple Weapons"];
    fighterSkillArray =[];
    fighterSkillOptions = ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"];
    for (i=0; i<2; i++) {
      skill = getThingFromList(fighterSkillOptions);
      fighterSkillArray.push(skill);
      const skillPosition = fighterSkillOptions.indexOf(skill);
      if (skillPosition !== -1)  {
        fighterSkillOptions.splice(skillPosition, 1);
      }
    }
    fighter.skills = fighterSkillArray;
    fighter.SavingThrows = ["Strength", "Constitution"];
    Farchery = "Archery: You gain a +2 bonus to attack rolls you make with ranged weapons.";
    Fdefense = "Defense: While you are wearing armor, you gain a +1 bonus to AC"; //you need to put this in the whole class thing
    Fdueling = "Dueling: While you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.";
    FgreatWeaponFighting = "Great Weapon Fighting: When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.";
    Fprotection = "Protection: When a creature you can see attacks a target other then you that is within 5 feet of you, you can use your reaction to impose disadvanatge on the attack rool. You must be wielding a shield.";
    FtwoWeaponFighting = "Two Weapon Fighting: When you engage in two-weapon fighting, you can add your ability modifier ot the damage of the second attack.";
    fighterFightingStyleList = [Farchery, Fdefense, Fdueling, FgreatWeaponFighting, Fprotection, FtwoWeaponFighting];
    if (dexMod > strMod)  {
      fighterFightingStyleList.splice(3);
    } else if (strMod > dexMod) {
      fighterFightingStyleList.splice(0);
    }
    fighter.fightingStyle = getThingFromList(fighterFightingStyleList);
    let fightingStyle = fighter.fightingStyle
    let fighterchoice = getRndInteger(5);
    let fighterchoice2 = getRndInteger(5);
    let fighterchoice3 = getRndInteger(5);
    let fighterchoice4 = getRndInteger(5);
    switch (fighter.fightingStyle) {
      case Farchery:
        inventoryCheck(fighter,"Leather Armor",1);
        inventoryCheck(fighter,"Longbow", 1);
        inventoryCheck(fighter, "Arrows", 20);
        fighterChoice2 = getRndInteger(5);
        if ((fighterChoice2%2) === 0) {
          inventoryCheck(fighter,getMartialWeapon(),1);
          inventoryCheck(fighter, "Sheild", 1);
        } else  {
          inventoryCheck(fighter,getMartialWeapon(),1);
          inventoryCheck(fighter, getMartialWeapon(), 1);
        }
        fighterChoice3 = getRndInteger(5);
        if ((fighterChoice3%2) === 0) {
          inventoryCheck(fighter,"Light Crossbow",1);
          inventoryCheck(fighter, "Bolts", 20);
        } else  {
          inventoryCheck(fighter,"Handaxe",2);
        }
        fighterChoice4 = getRndInteger(5);
        if ((fighterChoice4%2) === 0) {
          inventoryCheck(fighter,"Dungeoneer's Pack",1);
        } else  {
          inventoryCheck(fighter,"Explorer's Pack",1);
        }
        break;
      case FgreatWeaponFighting:
        inventoryCheck(fighter,'Chain Mail',1);
        fighterChoice2 = getRndInteger(5);
        if ((fighterChoice2%2) === 0) {
          inventoryCheck(fighter,getTwoHandedWeapon(),1);
          inventoryCheck(fighter, "Sheild", 1);
        } else  {
          inventoryCheck(fighter,getTwoHandedWeapon(),1);
          inventoryCheck(fighter, getMartialWeapon(), 1);
        }
        fighterChoice3 = getRndInteger(5);
        if ((fighterChoice3%2) === 0) {
          inventoryCheck(fighter,"Light Crossbow",1);
          inventoryCheck(fighter, "Bolts", 20);
        } else  {
          inventoryCheck(fighter,"Handaxe",2);
        }
        fighterChoice4 = getRndInteger(5);
        if ((fighterChoice4%2) === 0) {
          inventoryCheck(fighter,"Dungeoneer's Pack",1);
        } else  {
          inventoryCheck(fighter,"Explorer's Pack",1);
        }
      case FtwoWeaponFighting:
        fighterChoice = getRndInteger(5);
        if ((fighterchoice%2 ) === 0) {
          inventoryCheck(fighter, 'Chain Mail', 1);
        } else  {
          inventoryCheck(fighter,"Leather Armor",1);
          inventoryCheck(fighter,"Longbow", 1);
          inventoryCheck(fighter, "Arrows", 20);
        }
        fighterChoice2 = getRndInteger(5);
        if ((fighterChoice2%2) === 0) {
          inventoryCheck(fighter, 'Shortsword', 2)
        } else  {
          inventoryCheck(fighter,"Scimitar",1);
        }
        fighterChoice3 = getRndInteger(5);
        if ((fighterChoice3%2) === 0) {
          inventoryCheck(fighter,"Light Crossbow",1);
          inventoryCheck(fighter, "Bolts", 20);
        } else  {
          inventoryCheck(fighter,"Handaxe",2);
        }
        fighterChoice4 = getRndInteger(5);
        if ((fighterChoice4%2) === 0) {
          inventoryCheck(fighter,"Dungeoneer's Pack",1);
        } else  {
          inventoryCheck(fighter,"Explorer's Pack",1);
        }
      default:
        fighterChoice = getRndInteger(1,3);
        switch (fighterChoice) {
          case 1:
            inventoryCheck(fighter,'Chain Mail',1);
            break;
          case 2:
            inventoryCheck(fighter,"Leather Armor",1);
            inventoryCheck(fighter,"Longbow", 1);
            inventoryCheck(fighter, "Arrows", 20);
            break;
          default:
            console.log('IDK man something messed up (fighter equipment selection 1)');
            break;
        }
        fighterChoice2 = getRndInteger(5);
        if ((fighterChoice2%2) === 0) {
          inventoryCheck(fighter,getMartialWeapon(),1);
          inventoryCheck(fighter, "Sheild", 1);
        } else  {
          inventoryCheck(fighter,getMartialWeapon(),1);
          inventoryCheck(fighter, getMartialWeapon(), 1);
        }
        fighterChoice3 = getRndInteger(5);
        if ((fighterChoice3%2) === 0) {
          inventoryCheck(fighter,"Light Crossbow",1);
          inventoryCheck(fighter, "Bolts", 20);
        } else  {
          inventoryCheck(fighter,"Handaxe",2);
        }
        fighterChoice4 = getRndInteger(5);
        if ((fighterChoice4%2) === 0) {
          inventoryCheck(fighter,"Dungeoneer's Pack",1);
        } else  {
          inventoryCheck(fighter,"Explorer's Pack",1);
        }
    }
    fighter.features.push("Second Wind (pg. 72 PHB)", fightingStyle);
    break;
  case monk:
    monk.playerClass = "Monk";
    monk.inventory = {};
    monk.features = [];
    monk.skills = [];
    monk.HitDice = "1d8";
    monk.HitPoints = 8;
    monk.proficiency = ["Simple Weapons", "Shortsword"];
    monk.SavingThrows = ["Strength", "Dexterity"];
    const monkSkillList = ["Acrobatics", 'Athletics', 'History', 'Insight', 'Religion', "Stealth"];
    monkSkillArray = [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(monkSkillList);
      monkSkillArray.push(skill);
      const skillPosition = monkSkillList.indexOf(skill);
      if (skillPosition !== -1)  {
        monkSkillList.splice(skillPosition, 1);
      }
    }
    monk.skills = monkSkillArray;
    let monkChoice = getRndInteger(5);
    if ((monkChoice%2) === 0) {
      inventoryCheck(monk,'Shortsword',1)
    } else  {
      inventoryCheck(monk, getSimpleWeapon(),1);
    }
    monkChoice = getRndInteger(5);
    if ((monkChoice%2) === 0) {
      inventoryCheck(monk,"Dungeoneer's Pack", 1);
    } else {
      inventoryCheck(monk, "Explorer's Pack",1);
    }
    let monkAC = 10 + dexMod + wisMod;
    inventoryCheck(monk, "Darts",10);
    monk.features.push("Unarmored Defense (pg. 78 PHB)", "Martial Arts (pg. 78 PHB)");
    break;
  case paladin:
    paladin.playerClass = "Paladin";
    paladin.inventory = {};
    paladin.features = [];
    paladin.skills = [];
    paladin.HitDice = "1d10";
    paladin.HitPoints = 10;
    paladin.proficiency = ["Light Armor", "Medium Armor", "Heavy Armor", "Sheilds", "Simple Weapons", "Martial Weapons"];
    paladin.SavingThrows = ["Wisdom", "Charisma"];
    const paladinSkillList = ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"];
    paladinSkillArray = [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(paladinSkillList);
      paladinSkillArray.push(skill);
      const skillPosition = paladinSkillList.indexOf(skill);
      if (skillPosition !== -1)  {
        paladinSkillList.splice(skillPosition, 1);
      }
    }
    paladin.skills = paladinSkillArray;
    let paladinChoice = getRndInteger(5);
    if ((paladinChoice%2) === 0)  {
      inventoryCheck(paladin,getMartialWeapon(),1);
      inventoryCheck(paladin, 'Sheild', 1);
    } else  {
      inventoryCheck(paladin, getMartialWeapon(),1);
      inventoryCheck(paladin, getMartialWeapon(),1);
    }
    paladinChoice = getRndInteger(5);
    if ((paladinChoice%2) === 0)  {
      inventoryCheck(paladin, "Javelin", 5);
    } else  {
      inventoryCheck(paladin, getsimpleMeleeWeapon(), 1);
    }
    paladinChoice = getRndInteger(5);
    if ((paladinChoice%2) === 0) {
      inventoryCheck(paladin,"Priest's Pack", 2);
    } else {
      inventoryCheck(paladin, "Explorer's Pack",1);
    }
    inventoryCheck(paladin, "Chain Mail",1);
    inventoryCheck(paladin, "Holy Symbol", 1);
    paladin.features.push("Divine Sense (pg. 84 PHB)", "Lay on Hands (pg. 84 PHB");

    break;
  case ranger:
    ranger.playerClass = "Ranger";
    ranger.inventory = {};
    ranger.features = [];
    ranger.skills = [];
    ranger.HitDice = "1d10";
    ranger.HitPoints = 10;
    ranger.proficiency = ["Light Armor", "Medium Armor", "Heavy Armor", "Sheilds", "Simple Weapons", "Martial Weapons"];
    ranger.SavingThrows = ["Strength", "Dexterity"];
    const rangerSkillList = ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"];
    rangerSkillArray = [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(rangerSkillList);
      rangerSkillArray.push(skill);
      const skillPosition = rangerSkillList.indexOf(skill);
      if (skillPosition !== -1)  {
        rangerSkillList.splice(skillPosition, 1);
      }
    }
    ranger.skills = rangerSkillArray;
    let rangerChoice = getRndInteger(5);
    if ((rangerChoice%2) === 0) {
      inventoryCheck(ranger,'Scale Mail',1);
    } else  {
      inventoryCheck(ranger, 'Leather Armor',1);
    }
    rangerChoice = getRndInteger(5);
    if ((rangerChoice%2) === 0)  {
      inventoryCheck(ranger, "Shortsword", 2);
    } else  {
      inventoryCheck(ranger, getsimpleMeleeWeapon(), 1);
      inventoryCheck(ranger, getsimpleMeleeWeapon(), 1);
    }
    rangerChoice = getRndInteger(5);
    if ((rangerChoice%2) === 0) {
      inventoryCheck(ranger,"Dungeoneer's Pack", 1);
    } else {
      inventoryCheck(ranger, "Explorer's Pack",1);
    }
    inventoryCheck(ranger, "Longbow",1);
    inventoryCheck(ranger, "Quiver", 1);
    inventoryCheck(ranger, "Arrows", 20)
    const FavoredEnemyList = ["Aberrations", " Beasts", "Celestials"," Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"];
    const FavoredEnemyHumanoidList = ["Aarakocra", "Bugbear",  "Bullywug", "Cultists", "Deep Gnomes (svirfneblin)", "Deep Scions", "Drow", "Duergar", "Firenewts", "Flind", "Githyanki", "Gnolls", "Goblins", "Grimlocks", "Grung", "Hobgoblins", "Jackalweres", "Kenku", "Kobold", "Kuo-toa", "Lizardfolk", "Merfolk", "Nilbog", "Orc", "Orog", "Quaggoth", "Sahuagin", "Sea Spawn", "Thri-kreen", "Transmuter ", "Troglodyte", "Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf", "Winged Kobold (Urd)", "Xvart", "Yuan-ti"];
    let rangerFEcheck = getRandomInt(5,6)
    let rangerFE;
    let rangerFE0;
    let rangerFE1;
    let FEH;
    if ((rangerFEcheck%2) === 0 ) {
      rangerFE = getThingFromList(FavoredEnemyList);
    } 
    if ((rangerFEcheck%2) !==0)  {
      rangerFE0 = getThingFromList(FavoredEnemyHumanoidList);
      FEHposition = FavoredEnemyHumanoidList.indexOf(rangerFE0);
      FavoredEnemyHumanoidList.splice(FEHposition, 1);
      rangerFE1 = getThingFromList(FavoredEnemyHumanoidList);
    }
    if (rangerFE0 !== undefined)  {
      rangerFE = rangerFE0+' and '+rangerFE1;
    }
    const FavoredTerrainList = ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"]; 
    FavoredTerrain = getThingFromList(FavoredTerrainList);
    ranger.features.push("Favored Enemy: "+rangerFE+".(pg. 91 PHB)", /*"Favored Terrain: "+FavoredTerrain+".",*/"Natural Explorer (pg. 91 PHB)");
    break;
  case rogue:
    rogue.playerClass = "Rogue";
    rogue.inventory = {};
    rogue.features = [];
    rogue.skills = [];
    rogue.HitDice = "1d8";
    rogue.HitPoints = 8;
    rogue.proficiency = ["Light Armor", "Simple Weapons", "Hand Crossbow", "Longsword", "Rapiers", "Shortsword", "Thieves' Tools"];
    rogue.SavingThrows = ["Intelligence", "Dexterity"];
    const rogueSkillList = ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"];
    rogueSkillArray = [];
    for (i=0; i<4; i++) {
      skill = getThingFromList(rogueSkillList);
      rogueSkillArray.push(skill);
      const skillPosition = rogueSkillList.indexOf(skill);
      if (skillPosition !== -1)  {
        rogueSkillList.splice(skillPosition, 1);
      }
    }
    rogue.skills = rogueSkillArray;
    let rogueChoice = getRndInteger(5);
    if ((rogueChoice%2) === 0)  {
      inventoryCheck(rogue,'Rapier',1);
    } else  {
      inventoryCheck(rogue, 'Shortsword',1);
    }
    rogueChoice = getRndInteger(5);
    if ((rogueChoice%2) === 0)  {
      inventoryCheck(rogue, "Shortsword", 2);
    } else  {
      inventoryCheck(rogue, "Shortbow", 1);
      inventoryCheck(rogue, "Arrows", 20);
    }
    let rogueChoice2 =["Dungeoneer's Pack", "Burglar's Pack", "Explorer's Pack"];
    inventoryCheck(rogue, getThingFromList(rogueChoice2), 1); 
    inventoryCheck(rogue, "Leather Armor",1);
    inventoryCheck(rogue, "Dagger", 2);
    inventoryCheck(rogue, "Thieves' Tools", 1)
    rogue.features.push("Expertise (pg. 96 PHB)", "Sneak Attack (pg. 96 PHB)", "Theives' Cant (pg. 96 PHB)");
    //     druidlanguages =["Druidic"];
    // player.languages= player.languages.concat(druidlanguages).CleanConcat();
    player.languages.push("Theives's Cant")
    break;
  case sorcerer:
    sorcerer.playerClass = 'Sorcerer';
    sorcerer.inventory = {};
    sorcerer.features = [];
    sorcerer.skills= [];
    sorcerer.spellList = [];
    sorcerer.origin = getThingFromList(sorcererOriginList);
    sorcerer.subclass = sorcerer.origin;
    sorcerer.proficiency = [" Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"];
    sorcerer.HitDice = "1d6";
    sorcerer.HitPoints = 6;
    if (sorcerer.origin === "Draconic Bloodline")  {
      sorcerer.HitPoints = 7;
    }
    let sorcererSkill =["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"];
    let sorcererSkillArray= [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(sorcererSkill);
      sorcererSkillArray.push(skill);
      const skillPosition = sorcererSkill.indexOf(skill);
      if (skillPosition !== -1)  {
        sorcererSkill.splice(skillPosition, 1);
      }
    }
    sorcerer.skills = sorcererSkillArray;
    switch (sorcerer.origin)  {
      case 'Divine Soul':
        let affinityList = [];
        let affinity;
        switch (racePull(player).alignment)  {
          case 'Lawful Good':
            affinityList.push('Law', 'Good');
            affinity = getThingFromList(affinityList);
            break;
          case 'Lawful Neutral':
            affinityList.push('Law', 'Neutrality');
            affinity = getThingFromList(affinityList);
            break;
          case 'Lawful Evil':
            affinityList.push('Law', 'Evil');
            affinity = getThingFromList(affinityList);
            break;
          case 'Neutral Good':
            affinityList.push('Neutrality', 'Good');
            affinity = getThingFromList(affinityList);
            break;
          case 'Neutral':
            affinity = 'Neutrality';
            break;
          case 'Neutral Evil':
            affinityList.push('Neutrality', 'Evil');
            affinity = getThingFromList(affinityList);
            break;
          case 'Chaotic Good':
            affinityList.push('Chaos', 'Good');
            affinity = getThingFromList(affinityList);
            break;
          case 'Chaotic Neutral':
            affinityList.push('Chaos', 'Neutrality');
            affinity = getThingFromList(affinityList);
            break;
          case 'Chaotic Evil':
            affinityList.push('Chaos', 'Evil');
            affinity = getThingFromList(affinityList);
            break;
          default:
            console.log('IDK man something f***ed up (Divine Soul Affinity)');
            console.log(player.race.race);
            console.log(player.alignment);
            break;
        }
        switch (affinity) {
          case 'Good':
            sorcerer.spellList.push("Cure Wounds");
            break;
          case 'Evil':
            sorcerer.spellList.push("Inflict Wounds");
            break;
          case 'Law':
            sorcerer.spellList.push("Bless");
            break;
          case 'Chaos':
            sorcerer.spellList.push("Bane");
            break;
          case 'Neutrality':
            sorcerer.spellList.push("Protection from Good and Evil");
            break;
          default:
            console.log("IDK man something F***ed up (DS sorcerer affinity spells")
            console.log(player.race.race);
            console.log(player.alignment);
            console.log(affinity);
        }
        let OriginFeaturesDS = ["You have an affinity for "+affinity+".","Divine Magic (pg. 50 XGtE)", "Favored by the Gods (pg. 50 XGtE"];
        sorcerer.features = sorcerer.features.concat(OriginFeaturesDS).CleanConcat();
        break;
      case 'Draconic Bloodline':
        let draconicAncestry = getThingFromList(draconicColorList);
        let draconicDamageType;
        if ((draconicAncestry === 'Black')||(draconicAncestry === 'Copper'))  {
          draconicDamageType = "Acid";
        } else if ((draconicAncestry === "Blue")||(draconicAncestry === "Bronze"))  {
          draconicDamageType = "Lightning";
        } else if ((draconicAncestry === 'Brass')||(draconicAncestry === "Gold")|| (draconicAncestry === "Red")) {
          draconicDamageType = "Fire";
          
        } else if ((draconicAncestry === 'Silver')||(draconicAncestry === 'White')) {
            draconicDamageType = "Cold";
        } else if (draconicAncestry === 'Green')  {draconicDamageType = "Poison";
          
        } else  {console.log("IDK man something F***ed up (draconicDamageType");console.log(draconicAncestry);
          
        }
        let OriginFeaturesDB = ["Draconic Ancestor: "+draconicAncestry+" which gives you affinity with "+draconicDamageType+" damage.", "You can speak, read, and write Draconic.","Double proficiency bonus on Charisma rolls against dragons", "Draconic Resilience (pg. 102 PHB)"];
        player.AC = 13 + dexMod;
        player.hp +=1;
        sorcerer.features = OriginFeaturesDB;
        player.languages.push("Draconic");
        break;
      case 'Shadow Magic':
        let SMquirkList = ["You are always icy cold to the touch.", "When you are asleep, you don't appear to breathe (though you must still breath to survive).", "You barely bleed, even when badly injured.", "Your heart beats once per minute. This event sometimes surprises you.", "You have trouble remembering that living creatures and corposes should be treated differently.", "You blinked. Once. Last week."];
        let SMquirk = getThingFromList(SMquirkList);
        let OriginFeaturesSM = [SMquirk, "Eye of the Dark (pg. 50 XGtE)", "Strength of the Grave (pg.50 XGtE)"];
        sorcerer.features = sorcerer.features.concat(OriginFeaturesSM).CleanConcat();
        break;
      case 'Storm Sorcery':
        let OriginFeaturesSS = ["Wind Speaker (pg. 137 SCAG)", "Tempestuous Magic (pg. 137 SCAG)"];
        sorcerer.language = ["Primordial"];
        sorcerer.features = sorcerer.features.concat(OriginFeaturesSS).CleanConcat();
        break;
      case 'Wild Magic':
        let OriginFeaturesWM = ["Wild Magic Surge (pg. 103 PHB)", "Tides of Chaos (pg. 103 PHB)"];
        sorcerer.features = sorcerer.features.concat(OriginFeaturesWM).CleanConcat();
        break;
      default:
        console.log("IDK man something messed up (sorcerer subclass")
    }
    sorcerer.SavingThrows = ["Constitution", "Charisma"];
    let sorcererChoice = getRndInteger(1,3);
    switch (sorcererChoice) {
      case 1:
        inventoryCheck(sorcerer,'Light Crossbow',1);
        inventoryCheck(sorcerer, 'Bolts', 20)
        break;
      case 2:
        inventoryCheck(sorcerer,getSimpleWeapon(),1);
        break;
    }
    sorcererChoice2 = getRndInteger(5);
    if ((sorcererChoice2%2) === 0) {
      inventoryCheck(sorcerer,"Component Pouch",1);
    } else {
      inventoryCheck(sorcerer, 'Arcane Focus',1);
    }
    
    let sorcererChoice3 = getRndInteger(5);
    if ((sorcererChoice%2) === 0) {
      inventoryCheck(sorcerer, "Dungeoneer's Pack", 1);
    } else  {
      inventoryCheck(sorcerer,"Explorer's Pack", 1);
    }
    inventoryCheck(sorcerer,'Dagger',2);
    sorcerer.features.push();
    sorcerer.SSDC = 8 + 2 + chaMod;
    sorcerer.magic = {"Cantrips": 4, "Level 1 Spell Slots" :2, "Spells Known": 2 , "Spell Save DC": sorcerer.SSDC};
    break;
  case warlock:
    warlock.playerClass = 'Warlock';
    warlock.inventory = {};
    warlock.features = [];
    warlock.skills= [];
    warlock.spellList = [];
    warlock.Pact = getThingFromList(warlockPactList);
    warlock.subclass = warlock.Pact;
    warlock.proficiency = ["Light Armor", "Simple Weapons"];
    warlock.HitDice = "1d8";
    warlock.HitPoints = 8;
    let warlockSkill =["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"];
    let warlockSkillArray= [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(warlockSkill);
      warlockSkillArray.push(skill);
      const skillPosition = warlockSkill.indexOf(skill);
      if (skillPosition !== -1)  {
        warlockSkill.splice(skillPosition, 1);
      }
    }
    warlock.skills = warlockSkillArray;
    switch (warlock.Pact)  {
      case 'The Archfey':
        let PactFeaturesFey = ["Fey Presence (pg. 109 PHB)", "The following spells are added to the warlock spell list for you: Faerie Fire, Sleep"];
        warlock.features = warlock.features.concat(PactFeaturesFey).CleanConcat();
        break;
      case 'The Celestial':
        let PactFeaturesCel = ["Healing Light (pg. 54 XGtE)", "The following spells are added to the warlock spell list for you: Cure Wounds, Guiding Bolt"];
        warlock.features = warlock.features.concat(PactFeaturesCel).CleanConcat();
        warlock.spellList.push("Light", "Sacred Flame");
        break;
      case 'The Fiend':
        let PactFeaturesFie = ["Dark One's Blessing (pg. 109 PHB)",". The following spells are added to the warlock spell list for you: Burning Hands, Command"];
        warlock.features = warlock.features.concat(PactFeaturesFie).CleanConcat();
        break;
      case 'The Great Old One':
        let PactFeaturesTGO = ["Awakened Mind (pg. 110 PHB)", "The following spells are added to the warlock spell list for you:  Dissonant Whispers, Tasha's Hideous Laughter"];
        warlock.features = warlock.features.concat(PactFeaturesTGO).CleanConcat();
        break;
      case 'The Hexblade':
        let PactFeaturesHEX = ["Hexblade's Curse (pg. 55 XGtE)", "Hex Warrior (pg. 55 XGtE)", "The following spells are added to the warlock spell list for you: Shield, Wrathful Smite"];
        warlock.proficiency.push("Medium Armor", "Sheilds", "Martial Weapons");
        warlock.features = warlock.features.concat(PactFeaturesHEX).CleanConcat();
        break;
      case 'The Undying':
        let PactFeaturesUnd = ["Among the Dead (pg. 139 SCAG)","The following spells are added to the warlock spell list for you: False Life, Ray of Sickness"];
        warlock.spellList.push("Spare the Dying");
        warlock.features = warlock.features.concat(PactFeaturesUnd).CleanConcat();
        break;
      default:
        console.log("IDK man something messed up (warlock subclass")
    }
    warlock.SavingThrows = ["Wisdom", "Charisma"];
    let warlockChoice = getRndInteger(1,3);
    switch (warlockChoice) {
      case 1:
        inventoryCheck(warlock,'Light Crossbow',1);
        inventoryCheck(warlock, 'Bolts', 20)
        break;
      case 2:
        inventoryCheck(warlock,getSimpleWeapon(),1);
        break;
    }
    warlockChoice2 = getRndInteger(5);
    if ((warlockChoice2%2) === 0) {
      inventoryCheck(warlock,"Component Pouch",1);
    } else {
      inventoryCheck(warlock, 'Arcane Focus',1);
    }
    
    let warlockChoice3 = getRndInteger(5);
    if ((warlockChoice%2) === 0) {
      inventoryCheck(warlock, "Dungeoneer's Pack", 1);
    } else  {
      inventoryCheck(warlock,"Scholar's Pack", 1);
    }
    inventoryCheck(warlock,'Dagger',2);
    inventoryCheck(warlock, "Leather Armor", 1);
    inventoryCheck(warlock, getSimpleWeapon(), 1);
    warlock.SSDC = 8 + 2 + chaMod;
    warlock.magic = {"Cantrips": 2, "Level 1 Spell Slots" :1, "Spells Known": 2 , "Spell Save DC": warlock.SSDC};
    break;
  case wizard:
    wizard.playerClass = "Wizard";
    wizard.inventory = {};
    wizard.features = [];
    wizard.skills= [];
    wizard.spellList = [];
    wizard.school = getThingFromList(wizardSchoolList);
    wizard.subclass = wizard.school;
    wizard.proficiency = ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow" ];
    wizard.HitDice = "1d6";
    wizard.HitPoints = 6;
    //player.features = player.features.concat(x.features).CleanConcat()
    let wizardSkill = ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"];

    let wizardskillArray= [];
    for (i=0; i<2; i++) {
      skill = getThingFromList(wizardSkill);
      wizardskillArray.push(skill);
      const skillPosition = wizardSkill.indexOf(skill);
      if (skillPosition !== -1)  {
        wizardSkill.splice(skillPosition, 1);
      }
    }
    wizard.skills = wizardskillArray;
    wizard.SavingThrows = ["Wisdom", "Intelligence"];
    let wizardChoice = getRndInteger(1,3);
    switch (wizardChoice) {
      case 1:
        inventoryCheck(wizard,'Quarterstaff',1);
        break;
      case 2:
        inventoryCheck(wizard,'Dagger',1);
        break;
        }

    let wizardChoice2 = getRndInteger(1,3);
    switch (wizardChoice2) {
      case 1:
        inventoryCheck(wizard,'Component Pouch',1);
        break;
      case 2:
        inventoryCheck(wizard,'Arcane Focus',1);
        break;
        }
        
    let wizardChoice3 = getRndInteger(1,3);
    switch (wizardChoice3) {
      case 1:
        inventoryCheck(wizard,"Scholar's Pack",1);
        break;
      case 2:
        inventoryCheck(wizard,"Explorer's Pack",1);
        break;
        }
    inventoryCheck(wizard,'Spellbook',1);

    wizard.features.push("Arcane Recovery","You have a spellbook containing six 1st-level wizard spells of your choice." );
    wizard.SSDC = 8 + 2 + wisMod;
    let wizardPreparedSpells = wisMod+1
    wizard.magic = {"Cantrips": 3, "Level 1 Spell Slots" :2, "Prepared Spells": wizardPreparedSpells , "Spell Save DC": wizard.SSDC};
    break;
  default:
    console.log("IDK man something messed up (Class selection and Application)")
}



// putting it all together
raceApplication(player, player.race);
ralign = player.alignment;

barbarianAC = (10 + conMod+dexMod);
let monkAC = player.AC + wisMod;

if (player.playerClass === barbarian)  {
  player.AC = barbarianAC;
  player.features.push('Unarmored Defense: '+barbarianAC)
  console.log("barbarian AC:"+barbarianAC)
} else if (player.playerClass === monk) {
  player.AC = monkAC;
  player.features.push('Unarmored Defense: '+monkAC)
  console.log(monkAC)
} else {
  player.ac += dexMod;
}

classApplication(player.playerClass);


function makeObjectString(list) {
  keys = Object.keys(list);
  values = Object.values(list);
  let x = keys.length;
  x = x-1;
  let y = [];
  while (x >= 0) {
    y.push(values[x]+"x "+keys[x]);
    x--
  }
  return y;
}
function makeObjectStringMagic(list) {
  keys = Object.keys(list);
  values = Object.values(list);
  let x = keys.length;
  x = x-1;
  let y = [];
  while (x >= 0) {
    y.push(keys[x]+": "+values[x]);
    x--
  }
  return y;
}

function cleanInventory(list) {
  keys = Object.keys(list);
  let x = keys.length;
  x = x-1;
  let y = [];
  while (x >= 0) {
    y.push(keys[x]);
    x--
  }
  return y;
}

let finesseMod;
if ( dexMod > strMod) {
  finesseMod = dexMod;
} else {
  finesseMod = strMod;
}

Battleaxe = [ '1d8', strMod, 'V' ]; 
Flail = [ '1d8', strMod ];
Glaive = [ '1d10', strMod, 'H R 2h' ];
Greataxe = [ '1d12', strMod, 'H 2h' ];
Greatsword = [ '2d6', strMod, 'H 2h' ];
Halberd = [ '1d10', strMod, 'H R 2h' ];
Lance = [ '1d12', strMod, 'R S' ];
Longsword = [ '1d8', strMod, 'V' ];
Maul = [ '2d6', strMod, 'H 2h'];
Morningstar = [ '1d8', strMod ];
Pike = [ '1d10', strMod, 'H R 2h' ];
Rapier = [ '1d8', finesseMod, 'F' ];
Scimitar = [ '1d6', finesseMod, 'L F' ];
Shortsword = [ '1d6', finesseMod, 'L F' ];
Trident = [ '1d6', strMod, 'T V'];
WarPick = [ '1d8', strMod ];
Warhammer = [ '1d8', strMod, 'V' ];
Whip = [ '1d4', finesseMod, 'F R' ];
Blowgun = [ '1', dexMod, 'A' ];
HandCrossbow = [ '1d6', dexMod, 'A' ];
HCrossbow = [ '1d10', dexMod, 'A 2h' ];
Longbow = [ '1d8', dexMod, 'A 2h' ];
Net = [ '0 dmg', dexMod, 'S T' ];
Club = [ '1d4', strMod, 'L' ];
Dagger = [ '1d4', finesseMod, 'L T F' ];
Greatclub = [ '1d8', strMod, '2h'];
Handaxe = [ '1d6', strMod, 'L T' ];
Javelin = [ '1d6', strMod, 'T' ];
LightHammer = [ '1d4', strMod, 'L T'];
Mace = [ '1d6', strMod ];
Quarterstaff = [ '1d6', strMod, 'V' ];
Sickle = [ '1d4', strMod, 'L' ];
Spear = [ '1d6', strMod, 'T V' ];
LightCrossbow = [ '1d8', dexMod, 'A 2h'];
Shortbow = [ '1d6', dexMod, 'A 2h' ];
Sling = [ '1d4', dexMod, 'A'];
Darts = [ '1d4', finesseMod, 'T F'];

inventory2 = makeObjectString(player.inventory);
if (player.magic !== undefined) {
  magic2 = makeObjectStringMagic(player.magic);
}

inventory3 = cleanInventory(player.inventory);

let acrobaticsMod;
let acrobaticsSkill = checkProfsFor('Acrobatics')
if (acrobaticsSkill === true)  {
  acrobaticsMod = 2;
} else {
  acrobaticsMod = 0;
}

let animalHandlingMod;
let animalHandlingSkill = checkProfsFor('Animal Handling');
if (animalHandlingSkill === true)  {
  animalHandlingMod = 2;
} else {
  animalHandlingMod = 0;
}

let arcanaMod;
let acranaSkill = checkProfsFor('Arcana');
if (acranaSkill === true)  {
  arcanaMod = 2;
} else {
  arcanaMod = 0;
}

let athleticsMod;
let athleticsSkill = checkProfsFor('Athletics');
if (athleticsSkill === true)  {
  athleticsMod = 2;
} else {
  athleticsMod = 0;
}

let deceptionMod;
let deceptionSkill = checkProfsFor('Deception');
if (deceptionSkill === true)  {
  deceptionMod = 2;
} else {
  deceptionMod = 0;
}

let historyMod;
let historySkill = checkProfsFor('History');
if (historySkill === true)  {
  historyMod = 2;
} else {
  historyMod = 0;
}

let insightMod;
let insightSkill = checkProfsFor('Insight');
if (insightSkill === true)  {
  insightMod = 2;
} else {
  insightMod = 0;
}

let intimidationMod;
let intimidationSkill = checkProfsFor('Intimidation');
if (intimidationSkill === true) {
  intimidationMod = 2;
} else {
  intimidationMod = 0;
}

let investigationMod;
let investigationSkill = checkProfsFor('Investigation');
if (investigationSkill === true)  {
  investigationMod = 2;
} else {
  investigationMod = 0;
}

let medicineMod;
let medicineSkill = checkProfsFor('Medicine');
if (medicineSkill === true)  {
  medicineMod = 2;
} else {
  medicineMod = 0;
}

let natureMod;
let natureSkill = checkProfsFor('Nature');
if (natureSkill === true)  {
  natureMod = 2;
} else {
  natureMod = 0;
}

let perceptionMod;
let perceptionSkill = checkProfsFor('Perception');
if (perceptionSkill === true)  {
  perceptionMod = 2;
} else {
  perceptionMod = 0;
}

let performanceMod;
let performanceSkill = checkProfsFor('Performance');
if (performanceSkill === true)  {
  performanceMod = 2;
} else {
  performanceMod = 0;
}

let persuasionMod;
let persuasionSkill = checkProfsFor('Persuasion');
if (persuasionSkill === true)  {
  persuasionMod = 2;
} else {
  persuasionMod = 0;
}

let religionMod;
let religionSkill = checkProfsFor('Religion');
if (religionSkill === true)  {
  religionMod = 2;
} else {
  religionMod = 0;
}

let sleightofHandMod;
let sleightofHandSkill = checkProfsFor('Sleight of Hand');
if (sleightofHandSkill === true)  {
  sleightofHandMod = 2;
} else {
  sleightofHandMod = 0;
}

let stealthMod;
let stealthSkill = checkProfsFor('Stealth');
if (stealthSkill === true)  {
  stealthMod = 2;
} else {
  stealthMod = 0;
}

let survivalMod;
let survivalSkill = checkProfsFor('Survival');
if (survivalSkill === true)  {
  survivalMod = 2;
} else {
  survivalMod = 0;
}

let StrengthSaveMod;
let Strengthsave = checkSavesFor('Strength');
if (Strengthsave === true)  {
  StrengthSaveMod = 2;
} else {
  StrengthSaveMod = 0;
}

let DexteritySaveMod;
let Dexteritysave = checkSavesFor('Dexterity');
if (Dexteritysave === true)  {
  DexteritySaveMod = 2;
} else {
  DexteritySaveMod = 0;
}

let ConstitutionSaveMod;
let Constitutionsave = checkSavesFor('Constitution');
if (Constitutionsave === true)  {
  ConstitutionSaveMod = 2;
} else {
  ConstitutionSaveMod = 0;
}

let IntelligenceSaveMod;
let Intelligencesave = checkSavesFor('Intelligence');
if (Intelligencesave === true)  {
  IntelligenceSaveMod = 2;
} else {
  IntelligenceSaveMod = 0;
}

let WisdomSaveMod;
let Wisdomsave = checkSavesFor('Wisdom');
if (Wisdomsave === true)  {
  WisdomSaveMod = 2;
} else {
  WisdomSaveMod = 0;
}

let CharismaSaveMod;
let Charismasave = checkSavesFor('Charisma');
if (Charismasave === true)  {
  CharismaSaveMod = 2;
} else {
  CharismaSaveMod = 0;
}

function weaponPrinting() {
  let inventory = [];
  let weaponsInInventory = [];
  inventory = inventory3;
  let wepIndex = allWeaponList.length;
  let i = 0;
  let x;
  while (i < wepIndex)  {
    x = allWeaponList[i];
    if (inventory.includes(x)) {
      if (x === 'HeavyCrossbow') {
        weaponsInInventory.push('H. Crossbow')
      } else if (x === 'LightCrossbow')  {
        weaponsInInventory.push('L. Crossbow')
      } else {
        weaponsInInventory.push(x);
      }
    }
    i++;
  }
  return weaponsInInventory;
}

let playerWeaponList = [];
playerWeaponList = weaponPrinting();

function makeListOfWepProofs() {
  let thing = [];
  let proofs2 = [];
  proofs2 = player.proficiency;
  //console.log(proofs2);
  if (proofs2.includes('Simple Weapons')) {
    let x = 0;
    let simpleWeaponIndex = simpleWeaponList.length; 
    while (x < simpleWeaponIndex) {
      thing.push(simpleWeaponList[x]);
      x++;
    }
  }
  
  if (proofs2.includes('Martial Weapons'))  {
    let y = 0;
    let martialWeaponIndex = martialWeaponList.length; 
    while (y < martialWeaponIndex) {
      thing.push(martialWeaponList[y]);
      y++;
    }
  }
  
  let wepIndex = allWeaponList.length;
  let i = 0;  
  while (i < wepIndex)  {
    //z = allWeaponList[i];
    if (proofs2.includes(allWeaponList[i])) {
      thing.push(allWeaponList[i]);
    }
    i++;
  }
  return thing;
}

let weaponProofs = [];
weaponProofs = makeListOfWepProofs();

//console.log(weaponProofs);

function damageTypePrinting(weapon) {
  let wepInfo =[];
  wepInfo = eval(weapon);
  document.write(wepInfo[0]);
  if (eval(wepInfo[1]) == 0) {
    document.write(" ")
      /*if (wepInfo[2] != undefined) {
      document.write(", "+wepInfo[2]);
    }*/
  } else {
    if (eval(wepInfo[1]) > 0) {
      document.write(" +"+wepInfo[1]);
    } else {
      document.write(" "+wepInfo[1]);
    }
    /*if (wepInfo[2] != undefined) {
      document.write(", "+wepInfo[2]);
    }*/
  }
}

function printMeLikeOneOfYourFrenchGirls()  {
  if (player.hair != undefined) {
    document.write("Hair: "+player.hair+"<br>");
  }
  document.write("Skin: "+player.skin+"<br>");
  document.write("Eyes: "+player.eyes+"<br>");
  if (player.horns != undefined)  {
    document.write("Horns: "+player.horns+"<br>");
  }
  if (player.shell != undefined)  {
    document.write("Shell: "+player.shell+"<br>");
  }
}
