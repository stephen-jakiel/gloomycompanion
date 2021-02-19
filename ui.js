

function activate_tab(tabs, pages, activetab)
{
    var key;
    for (key in tabs)
    {
        tabs[key].className = (key == activetab) ? "" : "inactive";
    }
    for (key in pages)
    {
        pages[key].className = (key == activetab) ? "tabbody" : "inactive tabbody";
    }

    var scenarioTab = document.getElementById("scenariotab");
    var isScenarioTabActive = scenarioTab && !scenarioTab.classList.contains("inactive");
    if (isScenarioTabActive) {
        document.getElementById('use-forgotten-circles').style.display = 'none';
        document.getElementById('use-forgotten-circles-label').style.display = 'none';
    } else {
        document.getElementById('use-forgotten-circles').style.display = '';
        document.getElementById('use-forgotten-circles-label').style.display = '';
    }
}

function show_settingspane(pane, cancelarea, show)
{
    pane.className = show ? "pane" : "pane inactive";
    cancelarea.style.display = show ? "initial" : "none";
}

// globals
var settingspane,
    settingsbtn,
    cancelarea;


function init_ui()
{
    var tabs =
    {
        scenarios:      document.getElementById("scenariotab"),
        decks:          document.getElementById("deckstab")
    };
    var pages =
    {
        scenarios:      document.getElementById("scenariospage"),
        decks:          document.getElementById("deckspage")
    };

    settingspane =      document.getElementById("settingspane");
    settingsbtn =       document.getElementById("settingsbtn");
    cancelarea =        document.getElementById("cancelarea");

    // TODO: is this a typo or a global?
    scenariotab.onclick = function(e)
    {
        activate_tab(tabs, pages, "scenarios");
    }

    // TODO: is this a typo or a global?
    deckstab.onclick = function(e)
    {
        activate_tab(tabs, pages, "decks");
    }

    settingsbtn.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, true);
    }

    cancelarea.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, false);
    }

    activate_tab(tabs, pages, "scenarios");

    var initiativeSort = document.getElementById("initiative-sort");
    initiativeSort.onclick = () => {
        var initiativeDivs = document.querySelectorAll("#tableau > div");
        [].slice.call(initiativeDivs).sort((a, b) => {
            var initiativeA = a.getAttribute("initiative") || 100;
            var initiativeB = b.getAttribute("initiative") || 100;
            return initiativeA - initiativeB;
        }).forEach((div) => {
            var tableau = document.getElementById("tableau");
            div.classList.add("no-animation");
            tableau.appendChild(div);
        });
    };

    var flipAll = document.getElementById("flip-all");
    flipAll.onclick = () => {
        var initiativeDivs = document.querySelectorAll("#tableau > div");
        initiativeDivs.forEach((initiativeDiv) => {
            if (initiativeDiv.querySelector(".card.ability.front.pull.up.discard img[src='images/shuffle.svg']")) {
                initiativeDiv.click();
            }
            initiativeDiv.click();
        });
    };

    var modifierDeckIsLocked = document.getElementById("modifier-deck-is-locked");
    modifierDeckIsLocked.onclick = (e) => {
        var gameView = document.querySelector(".game-view");
        var tableau = document.querySelector("#tableau");
        var header = document.querySelector(".header");
        var initiativeSort = document.querySelector("#initiative-sort");
        var flipAll = document.querySelector("#flip-all");
        if (modifierDeckIsLocked.hasAttribute("locked")) {
            modifierDeckIsLocked.removeAttribute("locked");
            modifierDeckIsLocked.setAttribute("src", "images/lock.svg");

            document.body.insertBefore(gameView, tableau);
            document.body.insertBefore(modifierDeckIsLocked, gameView);
            document.body.insertBefore(flipAll, modifierDeckIsLocked);
            document.body.insertBefore(initiativeSort, flipAll);
            gameView.style.paddingTop = "50px"; // del
            tableau.style.paddingTop = "0px";
            header.style.height = "50px"; // auto
        } else {
            modifierDeckIsLocked.setAttribute("locked", "");
            modifierDeckIsLocked.setAttribute("src", "images/unlock-alt.svg");

            header.appendChild(gameView);
            header.appendChild(initiativeSort);
            header.appendChild(flipAll);
            header.appendChild(modifierDeckIsLocked);
            gameView.style.paddingTop = "0px"; // del
            tableau.style.paddingTop = "224px";
            header.style.height = "224px";
        }
    };
}

function changeGame() {
    var gameDropdown = document.getElementById("game");
    if (gameDropdown.value === 'gloomhaven') {
        document.getElementById('use-forgotten-circles-container').style.visibility = '';
    } else if (gameDropdown.value === 'jaws-of-the-lion') {
        document.getElementById('use-forgotten-circles-container').style.visibility = 'hidden';
    }

    var isJawsOfTheLion = false;
    var isForgottenCircles = false;
    var forgottenCirclesCheckbox = document.getElementById("use-forgotten-circles");
    isJawsOfTheLion = gameDropdown.value === "jaws-of-the-lion";
    isForgottenCircles = forgottenCirclesCheckbox.checked;

    if (!isJawsOfTheLion) {
        if (!isForgottenCircles) {
            MONSTER_STATS = GLOOMHAVEN_MONSTER_STATS;
            DECKS = GLOOMHAVEN_DECKS;
            DECK_DEFINITIONS = GLOOMHAVEN_DECK_DEFINITIONS;
            SPECIAL_RULES = GLOOMHAVEN_SPECIAL_RULES;
            SCENARIO_DEFINITIONS = GLOOMHAVEN_SCENARIO_DEFINITIONS;
        } else {
            MONSTER_STATS = FORGOTTEN_CIRCLES_MONSTER_STATS;
            DECKS = FORGOTTEN_CIRCLES_DECKS;
            DECK_DEFINITIONS = FORGOTTEN_CIRCLES_DECK_DEFINITIONS;
        }
    } else {
        MONSTER_STATS = JAWS_OF_THE_LION_MONSTER_STATS;
        DECKS = JAWS_OF_THE_LION_DECKS;
        DECK_DEFINITIONS = JAWS_OF_THE_LION_DECK_DEFINITIONS;
        SPECIAL_RULES = JAWS_OF_THE_LION_SPECIAL_RULES;
        SCENARIO_DEFINITIONS = JAWS_OF_THE_LION_SCENARIO_DEFINITIONS;
    }

    init();
}

function decrementCharacterCount() {
    document.getElementById('number-of-characters').innerHTML = Math.max(Number(document.getElementById('number-of-characters').innerHTML) - 1, 2);
}

function incrementCharacterCount() {
    document.getElementById('number-of-characters').innerHTML = Math.min(Number(document.getElementById('number-of-characters').innerHTML) + 1, 4);
}

function decrementScenarioLevel() {
    document.getElementById('scenario-level').innerHTML = Math.max(Number(document.getElementById('scenario-level').innerHTML) - 1, 0);
}

function incrementScenarioLevel() {
    document.getElementById('scenario-level').innerHTML = Math.min(Number(document.getElementById('scenario-level').innerHTML) + 1, 7);
}

function openScenarioChooser() {
    document.getElementById("opaque").classList.add("active");

    var scenarioChooser = document.getElementById("scenario-chooser");
    scenarioChooser.classList.add("active");
    for (var i = 1; i <= SCENARIO_DEFINITIONS.length; i++) {
        var scenarioDiv = document.createElement("div");
        scenarioDiv.classList.add("scenario");
        if (i === Number(document.getElementById("scenario-number").innerHTML)) {
            scenarioDiv.classList.add("selected");
        }
        scenarioDiv.innerHTML = i;
        scenarioDiv.setAttribute("number", i);
        scenarioDiv.onclick = (e) => {
            document.getElementById("scenario-number").innerHTML = e.target.getAttribute("number");
            scenarioChanged();
            closeScenarioChooser();
        };
        scenarioChooser.append(scenarioDiv);
    }
}

function closeScenarioChooser() {
    document.getElementById("opaque").classList.remove("active");

    var scenarioChooser = document.getElementById("scenario-chooser");
    scenarioChooser.classList.remove("active");

    while (scenarioChooser.firstChild) {
        scenarioChooser.removeChild(scenarioChooser.firstChild);
    }
}

function scenarioChanged() {
    for (var key in DECKLIST.level_selectors) {
        DECKLIST.level_selectors[key].set_value(DECKLIST.global_level_selector.get_selection());
    }
}