// Custom Units : Here you can create custom units, add synergies to official units, 
// and even modify official units to your liking, all without messing with the official units in the "units.js" file.

// IMPORTANT - If you start to see modifications you make here not being reflected in the page, here are common reasons why:
// 1. You made an error. Inspect the webpage with your browser and look at the console what the error is. Fix it.
// 2. Your webpage is cached. Use CTRL+F5 to refresh.
// 3. You messed with the order of the different types of edits below. Custom Units first, then synergies, then quantities, etc.

// --------
// EXAMPLES
// --------

// 1. CUSTOM UNITS
// We'll first do an entirely custom unit
// Make sure that your new units always go first
unit[uc] = new Array();
unit[uc].unitname = "The Scarecrow of Driftwood";
unit[uc].unitcost = 150;
unit[uc].range = 1;
unit[uc].unique = "unique";
unit[uc].numberAvailableInDraft = 1;
unit[uc].fieldname = "scarecrowOfDriftwood";
unit[uc].wave = "DrBo6's Customs";
unit[uc].general = "Utgar";
unit[uc].home = "Feylund";
unit[uc].species = "Golem";
unit[uc].heroOrSquad = "Hero";
unit[uc].type = "Construct";
unit[uc].personality = "Relentless";
unit[uc].size = "Large";
unit[uc].height = 7;
unit[uc].base = 2;
unit[uc].figures = 1;
unit[uc].life = 4;
unit[uc].move = 5;
unit[uc].attack = 5;
unit[uc].defense = 5;
unit[uc].basepoints = 150;
unit[uc].specials = new Array();
unit[uc].specials[0] = new Array();
unit[uc].specials[0].name = "Unstoppable";
unit[uc].specials[0].description = "Before moving, if The Scarecrow of Driftwood is not engaged, you must choose one opponent's figure to be The Scarecrow of Driftwood's target. After doing so, The Scarecrow of Driftwood cannot attack any other figure until the chosen figure is destroyed.";
unit[uc].specials[1] = new Array();
unit[uc].specials[1].name = "Disengage";
unit[uc].specials[1].description = "The Scarecrow of Driftwood is never attacked when leaving an engagement.";
unit[uc].specials[2] = new Array();
unit[uc].specials[2].name = "Slasher Claws";
unit[uc].specials[2].description = "Figures subtract 1 from the defense dice when attacked by The Scarecrow of Driftwood. The Scarecrow of Driftwood's Slasher Claws does not affect Soulborgs or destructible objects.";
uc++;

// Next we'll do a custom copy of a pre-existing card
// Both copies will be in your collection
// For this one, I am using a Competitive Unit Congress unit; I added some code to replace the -CUC with a gold dot
// Similarly -SOTM will be replaced with (SOTM)
unit[uc] = new Array();
unit[uc].unitname = "Gorillinators-CUC";
unit[uc].unitcost = 90;
unit[uc].range = 6;
unit[uc].unique = "common";
unit[uc].numberAvailableInDraft = 2;
unit[uc].fieldname = "gorillaCUC";
unit[uc].wave = "Competitive Unit Congress";
unit[uc].general = "Vydar";
unit[uc].home = "Marr";
unit[uc].species = "Primadon";
unit[uc].heroOrSquad = "Squad";
unit[uc].type = "Agent";
unit[uc].personality = "Tricky";
unit[uc].size = "Medium";
unit[uc].height = 5;
unit[uc].base = 1;
unit[uc].figures = 3;
unit[uc].life = 1;
unit[uc].move = 7;
unit[uc].attack = 3;
unit[uc].defense = 1;
unit[uc].basepoints = 90;
unit[uc].specials = new Array();
unit[uc].specials[0] = new Array();
unit[uc].specials[0].name = "Tough";
unit[uc].specials[0].description = "When rolling defense dice, Gorillinators always add one automatic shield to whatever is rolled.";
uc++;

// 2. ADDING SYNERGIES FOR CUSTOM UNITS TO NON-CUSTOM CARDS
// Here we are adding that Scarecrow example to Khosumet and Ornak
// Note that the number in the brackets is the special number. 0 is their first special ability, 1 is their second special ability, etc.
// Also, once you start using getUnit, you should not add more units, nor should you end on uc++;
uc = getUnit("Khosumet the Darklord");
unit[uc].specials[0].synergies.push("The Scarecrow of Driftwood");

uc = getUnit("Ornak");
unit[uc].specials[0].synergies.push("The Scarecrow of Driftwood");

uc = getUnit("Wolves of Badru");
unit[uc].specials[0].synergies.push("Bodolf the Werewolf Lord");

// 3. UPDATING QUANTITIES OF NON-CUSTOM CARDS
// Get the card and change the numberAvailableInDraft number
// Alternatively, you could also change the variable in units.js directly
uc = getUnit("Acolarh");
unit[uc].numberAvailableInDraft = 0;

// 4. EDITING NON-CUSTOM CARDS (E.G. DELTA POINTS)
// You just get the unit and then you update
// I wouldn't do this in the units.js file
uc = getUnit("10th Regiment of Foot");
unit[uc].unitcost = 95;

// 5. ADDING ORDER MARKER BADGES
// https://www.heroscapers.com/threads/whats-in-an-order-marker-d1-d2-and-d3-up.12071/
// I love this system to help new players understand the Units
// If you want to add more badges to the same unit, just add a second line with [1] instead of [0].
uc = getUnit("10th Regiment of Foot");
unit[uc].ordermarkers = [];
unit[uc].ordermarkers[0] = "Bread & Butter";