

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

    var scenariospage = document.getElementById("scenariospage");
    var isScenarioTabActive = scenariospage && scenariospage.className.indexOf("inactive") === -1;
    if (isScenarioTabActive) {
        // document.getElementById('applyload').style.display = '';
        document.getElementById('use-forgotten-circles').style.display = 'none';
        document.getElementById('use-forgotten-circles-label').style.display = 'none';
    } else {
        // document.getElementById('applyload').style.display = 'none';
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
            tableau.appendChild(div);
        });
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

