GLOOMHAVEN_DECKS =
    {   "Ancient Artillery":    {name: "Ancient Artillery", class: "Ancient Artillery"}
    ,   "Bandit Archer":        {name: "Bandit Archer", class: "Archer"}
    ,   "Bandit Commander":     {name: "Bandit Commander", class: "Boss"}
    ,   "Bandit Guard":         {name: "Bandit Guard", class: "Guard"}
    ,   "The Betrayer":         {name: "The Betrayer", class: "Boss"}
    ,   "Black Imp":            {name: "Black Imp", class: "Imp"}
    ,   "Captain of the Guard": {name: "Captain of the Guard", class: "Boss"}
    ,   "Cave Bear":            {name: "Cave Bear", class: "Cave Bear"}
    ,   "City Archer":          {name: "City Archer", class: "Archer"}
    ,   "City Guard":           {name: "City Guard", class: "Guard"}
    ,   "The Colorless":        {name: "The Colorless", class: "Boss"}
    ,   "Cultist":              {name: "Cultist", class: "Cultist"}
    ,   "Dark Rider":           {name: "Dark Rider", class: "Boss"}
    ,   "Deep Terror":          {name: "Deep Terror", class: "Deep Terror"}
    ,   "Earth Demon":          {name: "Earth Demon", class: "Earth Demon"}
    ,   "Elder Drake":          {name: "Elder Drake", class: "Boss"}
    ,   "Flame Demon":          {name: "Flame Demon", class: "Flame Demon"}
    ,   "Forest Imp":           {name: "Forest Imp", class: "Imp"}
    ,   "Frost Demon":          {name: "Frost Demon", class: "Frost Demon"}
    ,   "Giant Viper":          {name: "Giant Viper", class: "Giant Viper"}
    ,   "The Gloom":            {name: "The Gloom", class: "Boss"}
    ,   "Harrower Infester":    {name: "Harrower Infester", class: "Harrower Infester"}
    ,   "Hound":                {name: "Hound", class: "Hound"}
    ,   "Inox Archer":          {name: "Inox Archer", class: "Archer"}
    ,   "Inox Bodyguard":       {name: "Inox Bodyguard", class: "Boss"}
    ,   "Inox Guard":           {name: "Inox Guard", class: "Guard"}
    ,   "Inox Shaman":          {name: "Inox Shaman", class: "Shaman"}
    ,   "Jekserah":             {name: "Jekserah", class: "Boss"}
    ,   "Living Bones":         {name: "Living Bones", class: "Living Bones"}
    ,   "Living Corpse":        {name: "Living Corpse", class: "Living Corpse"}
    ,   "Living Spirit":        {name: "Living Spirit", class: "Living Spirit"}
    ,   "Lurker":               {name: "Lurker", class: "Lurker"}
    ,   "Merciless Overseer":   {name: "Merciless Overseer", class: "Boss"}
    ,   "Night Demon":          {name: "Night Demon", class: "Night Demon"}
    ,   "Ooze":                 {name: "Ooze", class: "Ooze"}
    ,   "Prime Demon":          {name: "Prime Demon", class: "Boss"}
    ,   "Rending Drake":        {name: "Rending Drake", class: "Rending Drake"}
    ,   "Savvas Icestorm":      {name: "Savvas Icestorm", class: "Savvas Icestorm"}
    ,   "Savvas Lavaflow":      {name: "Savvas Lavaflow", class: "Savvas Lavaflow"}
    ,   "The Sightless Eye":    {name: "The Sightless Eye", class: "Boss"}
    ,   "Spitting Drake":       {name: "Spitting Drake", class: "Spitting Drake"}
    ,   "Stone Golem":          {name: "Stone Golem", class: "Stone Golem"}
    ,   "Sun Demon":            {name: "Sun Demon", class: "Sun Demon"}
    ,   "Vermling Scout":       {name: "Vermling Scout", class: "Scout"}
    ,   "Vermling Shaman":      {name: "Vermling Shaman", class: "Shaman"}
    ,   "Wind Demon":           {name: "Wind Demon", class: "Wind Demon"}
    ,   "Winged Horror":        {name: "Winged Horror", class: "Boss"}
};

GLOOMHAVEN_DECK_DEFINITIONS =
[
        { class: "Ancient Artillery"
        , cards:
            [ ["", false, "46", "* %attack% -1", "** %range% +2"]
            , ["", true,  "71", "* %attack% +0", "** %range% +0", "** All adjacent enemies suffer 2 damage"]
            , ["", true,  "71", "* %attack% +0", "** %range% +0", "** All adjacent enemies suffer 2 damage"]
            , ["", false, "37", "* %push% 1", "** Target all adjacent enemies", "* %attack% -1 %aoe-triangle-2-side%", "** %range% -1"]
            , ["", false, "37", "* %push% 1", "** Target all adjacent enemies", "* %attack% -1 %aoe-circle%", "** %range% -1"]
            , ["", false, "17", "* %push% 2", "** Target all adjacent enemies", "* %shield% 2", "* %attack% -2", "** %range% +0"]
            , ["", false, "95", "* %attack% +1","** %range% +0"]
            , ["", false, "46", "* %attack% -1 %aoe-triangle-2-side%", "** %range% +0","** %immobilize%"]
            ]
        },
        { class: "Archer"
        , cards:
            [ ["", false, "16", "* %move% +1", "* %attack% -1", "** %range% +0"]
            , ["", false, "31", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", false, "32", "* %move% +0", "* %attack% +1", "** %range% -1"]
            , ["", false, "44", "* %move% -1", "* %attack% +1", "** %range% +0"]
            , ["", false, "56", "* %attack% -1", "** %range% +0", "** %target% 2"]
            , ["", true,  "68", "* %attack% +1", "** %range% +1"]
            , ["", false, "14", "* %move% -1", "* %attack% -1", "** %range% +0", "* <span class='small'> Create a 3 damage trap in an adjacent empty hex closest to an enemy </span>"]
            , ["", true,  "29", "* %move% +0", "* %attack% -1", "** %range% +1", "** %immobilize%"]
            ]
        },
        { class: "Boss"
        , cards:
            [ ["", false, "11", "* Special 2"]
            , ["", false, "14", "* Special 2"]
            , ["", true,  "17", "* Special 2"]
            , ["", true,  "85", "* Special 1"]
            , ["", false, "79", "* Special 1"]
            , ["", false, "73", "* Special 1"]
            , ["", false, "36", "* %move% +0", "* %attack% +0"]
            , ["", false, "52", "* %move% -1", "* %attack% -1", "** %range% 3", "** %target% 2"]
            ]
        },
        { class: "Cave Bear"
        , cards:
            [ ["", false, "13", "* %move% +1", "* %attack% -1"]
            , ["", false, "14", "* %move% -1", "* %attack% -1", "** %immobilize%"]
            , ["", true,  "34", "* %attack% +1", "** %wound%"]
            , ["", false, "41", "* %move% +0", "* %attack% +0"]
            , ["", false, "60", "* %move% -1", "* %attack% +1"]
            , ["", true,  "80", "* %attack% -1", "* %move% -2", "* %attack% -1", "** %wound%"]
            , ["", false, "61", "* %move% +0", "* %attack% -1", "** %target% 2"]
            , ["", false, "03", "* %shield% 1", "* %retaliate% 2", "* %heal% 2", "** Self"]
            ]
        },
        { class: "Cultist"
        , cards:
            [ ["", false, "10", "* %move% -1", "* %attack% -1", "* On Death:", "** %attack% +2 %aoe-circle-with-middle-black%"]
            , ["", false, "10", "* %move% -1", "* %attack% -1", "* On Death:", "** %attack% +2 %aoe-circle-with-middle-black%"]
            , ["", false, "27", "* %move% +0", "* %attack% +0"]
            , ["", false, "27", "* %move% +0", "* %attack% +0"]
            , ["", false, "39", "* %move% -1", "* %attack% +0", "* %heal% 1", "** Self"]
            , ["", true,  "63", "* Summon normal Living Bones", "* Cultist suffers 2 damage."]
            , ["", true,  "63", "* Summon normal Living Bones", "* Cultist suffers 2 damage."]
            , ["", false, "31", "* %move% -1", "* %heal% 3", "** %range% 3"]
            ]
        },
        { class: "Deep Terror"
        , cards:
            [ ["", false, "65", "* %attack% +0", "** %range% 3", "** %target% 3", "** %curse%"]
            , ["", true,  "60", "* %attack% +0 %aoe-line-6-with-black%", "** %pierce% 3"]
            , ["", true,  "60", "* %attack% +0 %aoe-line-6-with-black%", "** %pierce% 3"]
            , ["", false, "84", "* %attack% -1", "** Target all adjacent enemies", "* %attack% +0", "** %range% 4", "** %wound%"]
            , ["", false, "75", "* %attack% +0", "** %poison%", "* %attack% -1", "** %range% 5", "** %immobilize%"]
            , ["", false, "75", "* %attack% -2", "** Target all adjacent enemies", "** %disarm%", "* %attack% +0", "** %range% 3", "** %target% 2"]
            , ["", false, "96", "* %attack% -2", "** %range% 6", "** Summon normal Deep Terror in a hex adjacent to the target"]
            , ["", false, "54", "* %wound% and %poison%", "** Target all adjacent enemies", "* %attack% +0", "** %range% 4"]
            ]
        },
        { class: "Earth Demon"
        , cards:
            [ ["", true,  "40", "* %heal% 3", "** Self", "* %earth%%use_element%: <span class='small'>%immobilize% Target all enemies within %range% 3</span>"]
            , ["", true,  "42", "* %move% +1", "* %attack% -1"]
            , ["", false, "62", "* %move% +0", "* %attack% +0", "* %earth%"]
            , ["", false, "71", "* %attack% +0", "** %range% 4", "** %earth%%use_element%: %target% 2"]
            , ["", false, "83", "* %move% -1", "* %attack% +1", "* %earth%"]
            , ["", false, "93", "* %move% -1", "* %attack% -1", "** Target all adjacent enemies", "* %earth%%use_element%: %push% 1"]
            , ["", false, "79", "* %move% +1", "* %attack% +0", "** %air%%use_element%: -2 %attack%"]
            , ["", false, "87", "* %move% +0", "* %attack% -1 <div class='collapse'>%aoe-4-with-black%</div>", "* %any%%use_element%: %earth%"]
            ]
        },
        { class: "Flame Demon"
        , cards:
            [ ["", false, "03", "* %move% +1", "* %attack% -1", "** %range% +0","* %fire%"]
            , ["", false, "24", "* %move% +0", "* %attack% +0", "** %range% +0","* %fire%"]
            , ["", true,  "46", "* %attack% +0", "** %range% +0", "** %fire%%use_element%:  %aoe-circle%"]
            , ["", false, "49", "* %attack% +0 %aoe-line-3-with-black%", "** <table align='center'><tr><td>%fire%%use_element%:</td> <td> +1 %attack% <br\> %wound% </td> </tr> </table>"]
            , ["", false, "67", "* %move% -1", "* %attack% +1", "** %range% -1", "* %fire%"]
            , ["", false, "77", "* %attack% +0", "** Target all adjacent enemies", "** %ice%%use_element%:Flame Demon suffers 1 damage."]
            , ["", true,  "30", "* <table align='center'><tr> <td>  %fire%%use_element%: </td> <td> <span class='small'>All adjacent enemies<br/>suffer 2 damage.</span> </td> </tr> </table>", "* %move% +0", "* %attack% -2", "** %range% +0", "** %wound%", "** %target% 2"]
            , ["", false, "08", "* %move% -1", "* <span class='small'> Create a 4 damage trap in an adjacent empty hex closest to an enemy </span>", "* %any%%use_element%: %fire%"]
            ]
        },
        { class: "Frost Demon"
        , cards:
            [ ["", false, "18", "* %immobilize%", "** Target all enemies within %range% 2", "* %ice%%use_element%: <span class='small'>%heal% 3<br/>Self</span>"]
            , ["", false, "38", "* %move% +1", "* %attack% -1"]
            , ["", false, "58", "* %move% +0", "* %attack% +0"]
            , ["", false, "58", "* %move% -1", "* %attack% +0" , "** %range% 2", "** %ice%%use_element%: +2 %attack%, +1 %range%"]
            , ["", true,  "78", "* %move% -1", "* %attack% +0 %aoe-triangle-2-side-with-black%", "* %ice%"]
            , ["", true,  "78", "* %move% -1", "* %attack% +0 %aoe-triangle-2-side-with-black%", "* %ice%"]
            , ["", false, "58", "* %move% -1", "* %attack% -1", "** %pierce% 3", "* %any%%use_element%: %ice%"]
            , ["", false, "18", "* %shield% 2", "* %move% +1", "* %fire%%use_element%: <span class='small'>Frost Demon suffers 1 damage</span>"]
            ]
        },
        { class: "Giant Viper"
        , cards:
            [ ["", true,  "32", "* %move% +0", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."]
            , ["", true,  "32", "* %move% +0", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."]
            , ["", false, "11", "* %shield% 1", "* %attack% -1"]
            , ["", false, "43", "* %move% +1", "** %jump%", "* %attack% -1", "** Target all adjacent enemies."]
            , ["", false, "58", "* %move% -1", "* %attack% +1"]
            , ["", false, "58", "* %move% +1", "** %jump%", "* %attack% -1", "** All attacks targeting Giant Viper this round gain Disadvantage."]
            , ["", false, "43", "* %move% -1", "** %jump%", "* %attack% +0", "** %target% 2"]
            , ["", false, "23", "* %move% -1", "* %attack% -1", "** %immobilize%", "* %attack% -1"]
            ]
        },
        { class: "Guard"
        , cards:
            [ ["", true,  "15", "* %shield% 1", "* %retaliate% 2"]
            , ["", false, "30", "* %move% +1", "* %attack% -1"]
            , ["", false, "35", "* %move% -1", "* %attack% +0", "** %range% 2"]
            , ["", false, "50", "* %move% +0", "* %attack% +0"]
            , ["", false, "50", "* %move% +0", "* %attack% +0"]
            , ["", false, "70", "* %move% -1", "* %attack% +1"]
            , ["", false, "55", "* %move% -1", "* %attack% +0", "* %strengthen%", "** Self"]
            , ["", true , "15", "* %shield% 1", "* %attack% +0", "** %poison%"]
            ]
        },
        { class: "Harrower Infester"
        , cards:
            [ ["", false, "38", "* %move% -1", "* %attack% +1", "** %target% 2"]
            , ["", false, "07", "* %move% +0", "* %attack% -1", "** %poison%", "* %dark%"]
            , ["", false, "16", "* %move% -1", "* %attack% -1", "* %heal% 5", "** Self"]
            , ["", false, "16", "* %attack% +2", "** %immobilize%", "* %retaliate% 2"]
            , ["", true,  "02", "* %shield% 2", "* %retaliate% 2", "** %range% 3"]
            , ["", false, "30", "* %move% -1", "* %attack% +0 %aoe-line-4-with-black%", "** %dark%%use_element%: Perform \"%heal% 2, Self\" </br>for each target damaged"]
            , ["", false, "38", "* %move% +0", "* %attack% -1", "** %target% 2", "** %dark%%use_element%: +2 %attack%, %disarm%"]
            , ["", true,  "07", "* %attack% -1", "** %range% 3", "** %muddle%", "* %heal% 4", "** Self"]
            ]
        },
        { class: "Hound"
        , cards:
            [ ["", false, "06", "* %move% -1", "* %attack% +0", "** %immobilize%"]
            , ["", false, "07", "* %move% +0", "* %muddle%", "** Target all adjacent enemies"]
            , ["", true,  "19", "* %move% +1", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Hound's allies"]
            , ["", true,  "19", "* %move% +1", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Hound's allies"]
            , ["", false, "26", "* %move% +0", "* %attack% +0"]
            , ["", false, "26", "* %move% +0", "* %attack% +0"]
            , ["", false, "83", "* %move% -2", "* %attack% +1"]
            , ["", false, "72", "* %attack% -1", "** %pierce% 2", "* %move% -2", "* %attack% -1", "** %pierce% 2"]
            ]
		},
        { class: "Imp"
        , cards:
            [ ["", false, "05", "* %shield% 5", "* %heal% 1", "** Self"]
            , ["", false, "37", "* %move% +0", "* %attack% +0","** %range% +0"]
            , ["", false, "37", "* %move% +0", "* %attack% +0","** %range% +0"]
            , ["", false, "42", "* %move% +1", "* %heal% 2", "** %range% 3"]
            , ["", true,  "43", "* %move% +0", "* %attack% -1", "** %range% +0, %target% 2, %poison%"]
            , ["", false, "76", "* %move% -1", "* %attack% +1", "** %range% +0"]
            , ["", true,  "43", "* %move% +0", "* %attack% -1", "** %range% +0, %target% 2, %curse%"]
            , ["", false, "24", "* %strengthen%", "** Affect all allies within %range% 2", "* %muddle%", "** Target all enemies within %range% 2"]
            ]
        },
        { class: "Living Bones"
        , cards:
            [ ["", false, "64", "* %move% -1", "* %attack% +1"]
            , ["", true,  "20", "* %move% -2", "* %attack% +0", "* %heal% 2", "** Self"]
            , ["", false, "25", "* %move% +1", "* %attack% -1"]
            , ["", false, "45", "* %move% +0", "* %attack% +0"]
            , ["", false, "45", "* %move% +0", "* %attack% +0"]
            , ["", false, "81", "* %attack% +2"]
            , ["", false, "74", "* %move% +0", "* %attack% +0", "** Target one enemy with all attacks"]
            , ["", true,  "12", "* %shield% 1", "* %heal% 2", "** Self"]
            ]
        },
        { class: "Living Corpse"
        , cards:
            [ ["", false, "21", "* %move% +1", "* %muddle% and %immobilize%", "** Target one adjacent enemy"]
            , ["", false, "47", "* %move% +1", "* %attack% -1"]
            , ["", true,  "66", "* %move% +0", "* %attack% +0"]
            , ["", true,  "66", "* %move% +0", "* %attack% +0"]
            , ["", false, "82", "* %move% -1", "* %attack% +1"]
            , ["", false, "91", "* %move% +1", "* Living Corpse suffers 1 damage."]
            , ["", false, "71", "* %move% +0", "* %attack% +1", "* %poison%", "** Target all adjacent enemies"]
            , ["", false, "32", "* %attack% +2", "** %push% 1", "* Living Corpse suffers 1 damage."]
            ]
        },
        { class: "Living Spirit"
        , cards:
            [ ["", true,  "22", "* %move% -1", "* %attack% -1", "** %range% +0", "** %muddle%"]
            , ["", true,  "33", "* %move% +0", "* %attack% -1", "** %range% +0", "** Target all enemies within range"]
            , ["", false, "48", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", false, "48", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", false, "61", "* %attack% +0", "** %range% -1", "** %target% 2"]
            , ["", false, "75", "* %move% -1", "* %attack% +1", "** %range% -1", "* %heal% 1", "** Self"]
            , ["", false, "55", "* %move% +0", "* %curse%", "** %range% +0", "** Target all enemies within range", "* %ice%"]
            , ["", false, "67", "* %move% -1", "* %attack% +1", "** %range% +0", "** %ice%%use_element%: %stun%"]
            ]
        },
        { class: "Lurker"
        , cards:
            [ ["", true,  "11", "* %shield% 1", "** %ice%%use_element%: %shield% 2 instead","* %wound%", "** Target all adjacent enemies"]
            , ["", false, "28", "* %move% +1", "* %attack% -1"]
            , ["", false, "38", "* %move% +0", "* %attack% +0"]
            , ["", false, "38", "* %move% +0", "* %attack% +0", "** Target one enemy with all attacks"]
            , ["", false, "61", "* %move% -1", "* %attack% +1"]
            , ["", false, "64", "* %attack% +1", "** Target all adjacent enemies"]
            , ["", false, "41", "* %ice%%use_element%: %strengthen%", "** Self", "* %move% +0", "* %attack% -1", "** %wound%"]
            , ["", true,  "23", "* %shield% 1", "* %move% +0", "* %attack% -1", "* %ice%"]
            ]
        },
        { class: "Night Demon"
        , cards:
            [ ["", false, "04", "* %move% +1", "* %attack% -1", "* %dark%"]
            , ["", false, "07", "* %move% +1", "* %attack% -1", "* %dark%%use_element%: %invisible%", "** Self"]
            , ["", false, "22", "* %move% +0", "* %attack% +0", "* %dark%"]
            , ["", false, "26", "* %attack% -2", "** %range% 3", "** %target% 3", "** %dark%%use_element%: %muddle%"]
            , ["", true,  "46", "* %move% -1", "* %attack% +1", "** %dark%%use_element%: +2 %attack%"]
            , ["", true,  "41", "* %move% -1", "* %attack% +1", "* %dark%"]
            , ["", false, "35", "* %attack% -1", "* %attack% -1", "** %pierce% 2", "* %light%%use_element%: %curse%", "** Self"]
            , ["", false, "15", "* %move% +0", "* %attack% -1", "* <span class='small'>All adjacent enemies and allies suffer 1 damage.</span>", "* <span class='small'>%any%%use_element%: %dark%</span>"]
            ]
        },
        { class: "Ooze"
        , cards:
          [   ["", false, "36", "* %move% +1", "* %attack% -1", "** %range% +0"]
            , ["", false, "57", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", false, "59", "* %attack% +0", "** %range% +0", "** %target% 2", "** %poison%"]
            , ["", false, "66", "* %move% -1", "* %attack% +1", "** %range% +1"]
            , ["", true,  "94", "* Ooze suffers 2 damage ", "** <span class='small'>Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)</span>"]
            , ["", true,  "94", "* Ooze suffers 2 damage ", "** <span class='small'>Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)</span>"]
            , ["", false, "85", "* %push% 1 and", "* %poison%", "** Target all adjacent enemies", "* %attack% +1", "** %range% -1"]
            , ["", false, "66", "* %move% -1", "* %loot% 1", "* %heal% 2", "** Self"]
            ]
        },
        { class: "Rending Drake"
        , cards:
            [ ["", false, "12", "* %move% +1", "* %attack% -1"]
            , ["", true,  "13", "* %attack% -1", "* %move% -1", "* %attack% -1"]
            , ["", false, "25", "* %move% +0", "* %attack% +0"]
            , ["", false, "39", "* %move% -1", "* %attack% +1"]
            , ["", false, "54", "* %move% -2", "* %attack% -1", "** %range% 3", "** %target% 2", "** %poison%"]
            , ["", false, "59", "* %move% -2", "* %attack% +1", "** %target% 2"]
            , ["", false, "06", "* %shield% 2", "* %heal% 2", "** Self", "* %strengthen%", "** Self"]
            , ["", true,  "72", "* %attack% -1", "* %attack% -1", "* %attack% -2"]
            ]
        },
        { class: "Savvas Icestorm"
        , cards:
            [ ["", false, "70", "* %push% 2", "** Target all adjacent enemies", "** %air%%use_element%: %push% 4 instead", "* %attack% +1", "** %range% +1"]
            , ["", false, "98", "* Summon normal Wind Demon", "* %air%"]
            , ["", false, "98", "* Summon normal Frost Demon", "* %ice%"]
            , ["", false, "19", "* %move% +0", "* %attack% -1", "** %range% -1", "* %shield% 1", "** Affect self and all allies within %range% 2", "* %ice%"]
            , ["", false, "14", "* %attack% +0", "** %range% +0", "** %ice%%use_element%: +2 %attack%, %immobilize%", "* %retaliate% 2", "* %air%"]
            , ["", false, "14", "* %shield% 4", "* %heal% 2", "** %range% 3", "** %ice%%use_element%: +3 %heal%", "* %air%%use_element%: %attack% +0"]
            , ["", true,  "47", "* %disarm%", "** Target all adjacent enemies", "* %move% +0", "* %attack% -1", "** %range% +0", "* %air%"]
            , ["", true,  "35", "* %move% -1", "* %attack% -1 %aoe-triangle-3-side-with-corner-black% ", "* %ice%"]
            ]
        },
        { class: "Savvas Lavaflow"
        , cards:
            [ ["", false, "97", "* Summon normal Flame Demon", "* %fire%"]
            , ["", false, "97", "* Summon normal Earth Demon", "* %earth%"]
            , ["", false, "22", "* %move% +1", "* %attack% -1", "** Target all adjacent enemies", "* %fire%%use_element%: %retaliate% 3"]
            , ["", true,  "68", "* %move% -1", "* %attack% +1", "** %range% 3", "** All allies and enemies adjacent to the target suffer 2 damage.", "* %earth%"]
            , ["", false, "41", "* %move% +0", "* %attack% -1 %aoe-line-4-with-black% ", "** %earth%%use_element%: +2 %attack%, %immobilize%"]
            , ["", false, "51", "* All enemies suffer 2 damage.", "* %fire%%use_element%: %wound% all enemies", "* %earth%%use_element%: %disarm% all enemies"]
            , ["", false, "31", "* %heal% 4", "** %range% 3", "** %earth%%use_element%: %target% 3"]
            , ["", true,  "68", "* %move% -1", "* %attack% -1", "** %range% 3", "** %target% 2", "* %fire%"]
            ]
        },
        { class: "Scout"
        , cards:
            [ ["", false, "29", "* %move% -1", "* %attack% -1", "** %range% 3"]
            , ["", false, "40", "* %move% +1", "* %attack% -1"]
            , ["", false,  "53", "* %move% +0", "* %attack% +0"]
            , ["", false,  "54", "* %move% -2", "* %attack% +0", "** %range% 3", "** %poison%"]
            , ["", false, "69", "* %move% -1", "* %attack% +1"]
            , ["", true, "92", "* %attack% +2", "** %poison% "]
            , ["", true, "35", "* %move% +1", "** %jump%", "* %loot% 1"]
            , ["", false, "79",  "* %attack% -1", "** %range% 4", "** %target% 2"]
            ]
        },
        { class: "Shaman"
        , cards:
            [ ["", false, "08", "* %move% +0", "* %attack% -1", "** %range% +0", "** %disarm%"]
            , ["", false, "08", "* %move% -1", "* %attack% +0", "** %range% +0", "** %immobilize%"]
            , ["", true,  "23", "* %move% +0", "* %heal% 3", "** %range% 3"]
            , ["", true,  "23", "* %move% +0", "* %heal% 3", "** %range% 3"]
            , ["", false, "62", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", false, "74", "* %move% -1", "* %attack% +1","** %range% +0"]
            , ["", false, "89", "* %move% -1", "* %heal% 1", "** Affect all adjacent allies", "* %bless%", "** Self"]
            , ["", false, "09", "* %move% +1", "* %attack% -1", "** %range% +0, %curse%, %target% 2"]
            ]
        },
        { class: "Spitting Drake"
        , cards:
          [   ["", false, "32", "* %move% +1", "* %attack% -1", "** %range% +0"]
            , ["", false, "52", "* %move% +0", "* %attack% +0", "** %range% +0"]
            , ["", true,  "57", "* %move% +0", "* %attack% -1 %aoe-triangle-2-side%", "** %range% +0"]
            , ["", false, "27", "* %attack% +0", "** %range% +0,  %target% 2, %poison%"]
            , ["", false, "87", "* %move% -1", "* %attack% +1", "** %range% +0"]
            , ["", false, "89", "* %attack% -2", "** %range% +0", "** %stun%"]
            , ["", false, "06", "* %shield% 2", "* %heal% 2", "** Self", "* %strengthen%", "** Self"]
            , ["", true,  "89", "* %move% -1", "* %attack% -2 %aoe-circle%", "** %range% +0", "** %poison%"]
            ]
        },
        { class: "Stone Golem"
        , cards:
            [ ["", false, "11", "* %retaliate% 3", "** %range% 3"]
            , ["", false, "28", "* %move% +1", "* %attack% +0", "* Stone Golem suffers 1 damage."]
            , ["", true,  "51", "* %move% +1", "* %attack% -1"]
            , ["", false, "65", "* %move% +0", "* %attack% +0"]
            , ["", false, "72", "* %attack% +1", "** %range% 3", "* Stone Golem suffers 2 damage"]
            , ["", true,  "90", "* %move% -1", "* %attack% +1"]
            , ["", false, "28", "* %move% +1", "* %attack% -2", "** %range% 3", "** %pull% 2", "** %immobilize%"]
            , ["", false, "83", "* %move% +0", "* %attack% -1", "** Target all adjacent enemies"]
            ]
        },
        { class: "Sun Demon"
        , cards:
            [ ["", true,  "17", "* %heal% 3", "** %range% 3", "** %light%%use_element%: Target all allies within range instead"]
            , ["", false, "36", "* %move% +0", "* %attack% +0", "** Target all adjacent enemies", "* %light%"]
            , ["", false, "36", "* %move% +0", "* %attack% +0", "** Target all adjacent enemies", "* %light%"]
            , ["", false, "68", "* %move% +0", "* %attack% +1", "* %light%"]
            , ["", true,  "73", "* %move% +0", "* %attack% +1", "* %light%%use_element%: %heal% 3", "** Self"]
            , ["", false, "95", "* %move% -1", "* %attack% +0", "** %range% 4", "** %light%%use_element%: Target all enemies within range"]
            , ["", false, "88", "* %move% -1", "* %attack% -1", "** Target all adjacent enemies", "* %dark%%use_element%: %muddle%", "** Self"]
            , ["", false, "50", "* %move% +0", "* %attack% +0", "** %range% 3", "* %any%%use_element%: %light%"]
            ]
        },
        { class: "Wind Demon"
        , cards:
          [   ["", false, "09", "* %attack% -1", "** %range% +0", "* %heal% 1", "** Self", "* %air%%use_element%: %invisible%<br/><span class='small'>Self</span>"]
            , ["", true,  "21", "* %move% +0", "* %attack% +0", "** %range% +0, %pull% 1", "* %air%"]
            , ["", true,  "21", "* %move% +0", "* %attack% +0", "** %range% +0, %pull% 1", "* %air%"]
            , ["", false, "29", "* %move% +0", "* %attack% -1", "** %range% +0, %target% 2", "** %air%%use_element%: %push% 2"]
            , ["", false, "37", "* %move% +0", "* %attack% +0 <div style='display: inline-block; width: 0; margin-top: -1.5em; vertical-align: bottom'>%aoe-4-with-black%</div>", "** %air%%use_element%: +1 Attack <div style='display: inline-block; margin-right: -3em'>%aoe-circle-with-side-black%</div>"]
            , ["", false, "43", "* %move% -1", "* %attack% +1", "** %range% +0", "** %air%%use_element%: %target% 2"]
            , ["", false, "43", "* %push% 1", "** Target all adjacent enemies", "* %attack% +0", "** %range% +0", "** %earth%%use_element%: -2 %range%"]
            , ["", false, "02", "* %shield% 1", "* %move% -1", "* %attack% -1", "** %range% +0", "* %any%%use_element%: %air%"]
            ]
        }
];

FORGOTTEN_CIRCLES_DECKS = Object.assign({}, GLOOMHAVEN_DECKS);
FORGOTTEN_CIRCLES_DECKS["Aesther Ashblade"] = {name: "Aesther Ashblade", class: "Ashblade"};
FORGOTTEN_CIRCLES_DECKS["Aesther Scout"] = {name: "Aesther Scout", class: "Scout"};
FORGOTTEN_CIRCLES_DECKS["Valrath Savage"] = {name: "Valrath Savage", class: "Savage"};
FORGOTTEN_CIRCLES_DECKS["Valrath Tracker"] = {name: "Valrath Tracker", class: "Tracker"};

FORGOTTEN_CIRCLES_DECK_DEFINITIONS = GLOOMHAVEN_DECK_DEFINITIONS.slice(0);
FORGOTTEN_CIRCLES_DECK_DEFINITIONS.push({
    class: "Ashblade",
    cards: [
      ["", true,  "42", "* %move% +1", "* %attack% +0", "* %dark%"]
    , ["", true,  "47", "* %move% +1", "* %attack% +0", "* %fire%"]
    , ["", false, "24", "* %attack% +3", "** %pierce% 2", "* %fire%"]
    , ["", false, "28", "* %move% -1", "* %attack% -1", "** %range% 3", "** %immobilize%"]
    , ["", false, "17", "* %move% +0", "* %attack% +0", "** %fire%%use_element%: %disarm%"]
    , ["", false, "09", "* %move% +0", "* %attack% +0", "* %dark%%use_element%: %invisible%", "** Self"]
    , ["", false, "36", "* %move% -1", "* %attack% +2", "** %fire%%use_element%: %wound%", "** %dark%%use_element%: %curse%"]
    , ["", false, "02", "* <span class='smaller'>Focus on the enemy with the highest initiative.</span>", "* <span class='smaller'>%teleport% to the closest unoccupied hex adjacent to the focus.</span>", "* %attack% -2", "* %dark%"]
    ]
});
FORGOTTEN_CIRCLES_DECK_DEFINITIONS.push({
    class: "Savage",
    cards: [
      ["", false, "13", "* %strengthen%", "** Self", "* %attack% +0", "** %wound%", "* Savage suffers 2 damage."]
    , ["", true,  "17", "* %retaliate% 3", "** %range% 3", "* %heal% 1", "** %regenerate%", "** Self"]
    , ["", false, "28", "* %move% +0", "* %attack% -1", "* %attack% -1"]
    , ["", false, "38", "* %move% -1", "* %attack% +0", "** %pierce% 2"]
    , ["", false, "46", "* %move% +0", "* %attack% -1", "** %range% 3"]
    , ["", false, "46", "* %move% +0", "* %attack% -1", "** %range% 3"]
    , ["", false, "60", "* %move% +2", "* %attack% +0", "* %elite%", "* %attack% +0"]
    , ["", true,  "72", "* %move% -1", "* %normal%", "* %attack% +0", "* %elite%", "* %attack% +1 <div style='display: inline-block; width: 0; margin-top: -1.5em; vertical-align: bottom'>%aoe-3-side-with-black%</div>"]
    ]
});
FORGOTTEN_CIRCLES_DECK_DEFINITIONS.push({
    class: "Tracker",
    cards: [
      ["", false, "12", "* %move% +0", "* %attack% -1", "** %muddle%"]
    , ["", false, "18", "* %move% -1", "* %attack% -1", "** <span class='small'> Create one %disarm% trap in any adjacent empty hex closest to an enemy.</span>"]
    , ["", false, "27", "* %move% +0", "* %attack% +0"]
    , ["", true,  "33", "* %move% +0", "* %attack% +0", "** %range% +1", "** %pierce% 1"]
    , ["", false, "37", "* %move% -1", "* %attack% +0", "** %range% +1", "** %immobilize%"]
    , ["", false, "48", "* <span class='small'>%elite% Focus on the enemy with the lowest current hit point value</span>", "* %move% +1", "* %attack% +0"]
    , ["", false, "55", "* <span class='small'>%elite% Focus on the enemy with the highest current hit point value</span>", "* %move% +0", "* %attack% -1", "** %wound%"]
    , ["", true,  "69", "* %attack% +1", "* %heal% 1", "** %regenerate%", "** Self"]
    ]
});

JAWS_OF_THE_LION_DECKS =
    {   "Basic Giant Viper":          {name: "Giant Viper", class: "Basic Giant Viper"}
    ,   "Basic Vermling Raider":      {name: "Vermling Raider", class: "Basic Vermling Raider"}
    ,   "Basic Zealot":               {name: "Zealot", class: "Basic Zealot"}
    ,   "Black Imp":                  {name: "Black Imp", class: "Imp"}
    ,   "Black Sludge":               {name: "Black Sludge", class: "Black Sludge"}
    ,   "Blood Tumor":                {name: "Blood Horror", class: "Boss"}
    ,   "Blood Imp":                  {name: "Blood Imp", class: "Imp"}
    ,   "Blood Monstrosity":          {name: "Blood Monstrosity", class: "Monstrosity"}
    ,   "Blood Tumor":                {name: "Blood Tumor", class: "Boss"}
    ,   "Chaos Demon":                {name: "Chaos Demon", class: "Chaos Demon"}
    ,   "First of the Order":         {name: "First of the Order", class: "Boss"}
    ,   "Giant Viper":                {name: "Giant Viper", class: "Giant Viper"}
    ,   "Living Corpse":              {name: "Living Corpse", class: "Living Corpse"}
    ,   "Living Spirit":              {name: "Living Spirit", class: "Living Spirit"}
    ,   "Most Basic Vermling Raider": {name: "Vermling Raider", class: "Most Basic Vermling Raider"}
    ,   "Rat Monstrosity":            {name: "Rat Monstrosity", class: "Monstrosity"}
    ,   "Stone Golem":                {name: "Stone Golem", class: "Stone Golem"}
    ,   "Vermling Raider":            {name: "Vermling Raider", class: "Vermling Raider"}
    ,   "Vermling Scout":             {name: "Vermling Scout", class: "Vermling Scout"}
    ,   "Zealot":                     {name: "Zealot", class: "Zealot"}
};

JAWS_OF_THE_LION_DECK_DEFINITIONS =
[
    { class: "Basic Giant Viper"
    , cards:
        [ ["Toxic Frenzy", true, "43", "* %move% +1", "** %jump%", "* %attack% -1", "** Target all adjacent enemies"]
        , ["Swift Fangs", false, "33", "* %move% +1", "** %jump%", "* %attack% +0", "** %target% 2"]
        , ["Constrict", false, "58", "* %move% -1", "* %attack% +1", "** %immobilize%"]
        , ["Find Cover", false, "18", "* %move% +1", "** %jump%", "* %attack% -1", "** <span> All attacks targeting Giant Viper <br/> gain Disadvantage this round. </span>"]
        ]
    },
    { class: "Basic Vermling Raider"
    , cards:
        [ ["Dual Daggers", false, "59", "* %attack% +0", "** %range% 2", "** %target% 2", "** <div class='monster-attack-deck-instruction'> They are not moving <br/> this round. </div>"]
        , ["Screaming Shot", true, "85", "* %push% 1", "** Target all adjacent enemies", "* %attack% +1", "** %range% 2", "** <div class='monster-attack-deck-instruction'> Shuffle this deck at <br/> the end of the round. </div>"]
        , ["Nothing Special", false, "50", "* %move% +0", "* %attack% +0", "** <div class='monster-attack-deck-instruction'> This is exactly how they <br/> acted last scenario. </div>"]
        , ["Careful Throw", false, "36", "* %move% +0", "* %attack% -1", "** %range% 2", "** <div class='monster-attack-deck-instruction'> They will move to avoid <br/> being adjacent to their focus. </div>"]
        ]
    },
    { class: "Basic Zealot"
    , cards:
        [ ["Boil Blood", false, "46", "* %attack% +1", "** %range% 2", "** %muddle%"]
        , ["Drain Life", true, "27", "* %heal% 1", "** Self", "* %move% +1", "* %attack% -1", "** %range% 2"]
        , ["Vile Scourge", false, "77", "* %move% -1", "* %attack% -1", "** %poison%"]
        , ["Hex Whip", false, "19", "* %move% +0", "* %attack% -1", "** %curse%"]
        ]
    },
    { class: "Black Sludge"
    , cards:
        [ ["Hasty Assault", false, "36", "* %move% +1", "* %attack% -1", "** %range% 3"]
        , ["Nothing Special", false,  "57", "* %move% +0", "* %attack% +0", "** %range% 2"]
        , ["Toxic Explosion", false,  "57", "* %attack% +0", "** %range% 2", "** %target% 2", "** %poison%", "* %earth%%use_element%: +1 %target%"]
        , ["Calculated Strike", false, "66", "* %move% -1", "* %attack% +1", "** %range% 3"]
        , ["Feed", false, "66", "* %move% +0", "* %loot% 1", "* %heal% 2", "** Self", "* %dark%%use_element%: +1 %heal%"]
        , ["Plasma Ward", false, "85", "* %push% 1 and", "* %poison%", "** Target all adjacent enemies", "* %attack% +1", "** %range% 2"]
        , ["Black Hex", true, "85", "** The closest enemy in", "** line-of-sight, regarless of", "** range, suffers ${1+L/2} damage.", "* %heal% 1", "** Self", "* %dark%"]
        , ["Septic Hex", true, "85", "** The closest enemy in", "** line-of-sight, regarless of", "** range, suffers ${1+L/2} damage.", "* %heal% 1", "** Self", "* %earth%"]
        ]
    },
    { class: "Boss"
    , cards:
        [ ["Accelerated Power", false, "11", "* Special 2"]
        , ["Accelerated Power", false, "14", "* Special 2"]
        , ["Accelerated Power", true, "17", "* Special 2"]
        , ["Lingering Strength", true, "85", "* Special 1"]
        , ["Lingering Strength", false, "79", "* Special 1"]
        , ["Lingering Strength", false, "73", "* Special 1"]
        , ["Nothing Special", false, "36", "* %move% +0", "* %attack% +0"]
        , ["Twin Missiles", false, "54", "* %move% -1", "* %attack% -1", "** %range% 3", "** %target% 2"]
        ]
    },
    { class: "Chaos Demon"
    , cards:
        [ ["Chilling Breath", false, "13", "* %move% -1", "* %attack% +0 %aoe-triangle-2-side-with-black%", "* <table align='center'><tr> <td> %ice%%use_element%: </td> <td> <span class='small'>Any time a figure attacks the<br/>Chaos Demon this round,<br/>that figure suffers 2 damage.</span> </td> </tr> </table>"]
        , ["Heat Blast", false, "01", "* %move% +1", "* %attack% -1", "** %range% 3", "** %fire%%use_element%: %wound%"] 
        , ["Seismic Punch", false, "67", "* %move% -2", "* %attack% +1", "** %push% 2", "** %earth%%use_element%: %aoe-triangle-2-side-with black%"] 
        , ["Whirlwind", false, "20", "* %move% +0", "* %attack% -1 %aoe-triangle-2-side%", "** %range% 2", "* %air%%use_element%: %shield% 2"] 
        , ["Flashing Claws", false, "41", "* %move% +0", "* %attack% +0", "** Advantage", "* %light%%use_element%: %heal% 4", "** Self"] 
        , ["Black Tendrils", false, "52", "* %move% -1", "* %attack% +1", "* <table align='center'><tr> <td> %ice%%use_element%: </td> <td> <span class='small'>All enemies adjacent to the<br/>target suffer 1 damage.</span> </td> </tr> </table>"] 
        , ["Mana Explosion", true, "76", "* %move% +0", "* %attack% +0", "* %fire%%ice%%air%%earth%%light%%dark%"] 
        , ["Hungry Maw", true, "98", "* %move% -1", "* %attack% -1", "* %any%%use_element%: %disarm%"] 
        ]
    },
    { class: "Giant Viper"
    , cards:
        [ ["Constrict", false, "23", "* %move% -1", "* %attack% -1", "** %immobilize%", "* %attack% -1"]
        , ["Swift Fangs", false, "33", "* %move% +1", "** %jump%", "* %attack% +0", "** %target% 2"] 
        , ["Find Cover", false, "18", "* %move% +1", "** %jump%", "* %attack% -1", "** <span class='small'> All attacks targeting Giant Viper <br/> gain Disadvantage this round. </span>"]
        , ["Toxic Frenzy", false, "43", "* %move% +1", "** %jump%", "* %attack% -1", "** Target all adjacent enemies"]
        , ["Defensive Strike", false, "11", "* %shield% 1", "* %attack% +1"]
        , ["Surround", true, "32", "* %move% +0", "* %attack% +0", "** <span class='small'> Add +2 %attack% if the target is adjacent <br/> to any of the Giant Viper's allies. </span>"]
        , ["Surround", true, "32", "* %move% +0", "* %attack% +0", "** <span class='small'> Add +2 %attack% if the target is adjacent <br/> to any of the Giant Viper's allies. </span>"]
        , ["Calculated Strike", false, "58", "* %move% -1", "* %attack% +1"]
        ]
    },
    { class: "Imp"
    , cards:
        [ ["Phase Out", false, "05", "* %shield% 5", "* %heal% 1", "** Self", "* %any%"]
        , ["Nothing Special", false, "37", "* %move% +0", "* %attack% +0", "** %range% 3"] 
        , ["Nothing Special", false, "37", "* %move% +0", "* %attack% +0", "** %range% 3"] 
        , ["Restoration", true, "42", "* %move% +1", "* %heal% 2", "** %range% 3"]
        , ["Cripple", true, "42", "* %move% +0", "* %attack% -1", "** %range% 3", "** %target% 2", "** %poison%"]
        , ["Calculated Strike", false, "76", "* %move% -1", "* %attack% +1", "** %range% 3"]
        , ["Dark Charm", false, "42", "* %move% +0", "* %attack% -1", "** %range% 3", "** %target% 2", "** %curse%"]
        , ["Tip the Scales", false, "24", "* %strengthen%", "** Target self and all allies within %range% 2", "* %muddle%", "** Target all enemies within %range% 2"]
        ]
    },
    { class: "Living Corpse"
    , cards:
        [ ["Rotting Embrace", false, "21", "* %move% +1", "* %muddle% and", "* %immobilize%", "** Target one adjacent enemy", "** %earth%%use_element%: The target also suffers 2 damage."]
        , ["Hasty Assault", false, "47", "* %move% +1", "* %attack% -1"]
        , ["Nothing Special", true, "68", "* %move% +0", "* %attack% +0"]
        , ["Nothing Special", true, "68", "* %move% +0", "* %attack% +0"]
        , ["Calculated Strike", false, "81", "* %move% -1", "* %attack% +1"]
        , ["Reckless Charge", false, "91", "* %move% +2", "** <span class='small'> If this movement is performed, <br/> the Living Corpse suffers 1 damage. </span>"]
        , ["Release Gas", false, "71", "* <table align='center'> <tr> <td> <span class='small'> %move% +0 </span> </td> <td> </td> </tr> <tr> <td> <table align='center'><tr> <td> <span class='small'> %attack% +1 </span> </td> </tr> <tr> <td> <span class='smaller'> %poison% </span> </td> </tr> <tr> <td> <span class='smaller'> Target all adjacent enemies </span> </td> </tr> </table> </td> <td> %earth% </td> </tr> </table>"]
        , ["Violent Slam", false, "32", "* %attack% +2", "** %push% 1", "** <span class='small'> If this attack is performed, the Living <br/> Corpse suffers 1 damage. </span>"]
        ]
    },
    { class: "Living Spirit"
    , cards:
        [ ["Sap Strength", true, "22", "* %move% -1", "* %attack% -1", "** %range% 4", "** %muddle%"]
        , ["Booming Scream", true, "33", "* %move% +0", "* %attack% -1", "** Target all enemies within %range% 2"]
        , ["Nothing Special", false, "48", "* %move% +0", "* %attack% +0", "** %range% 3"]
        , ["Nothing Special", false, "48", "* %move% +0", "* %attack% +0", "** %range% 3"]
        , ["Coupled Chain", false, "61", "* %attack% +0", "** %range% 3", "** %target% 2"]
        , ["Leech Warmth", false, "75", "* <table align='center' class='smaller-table'> <tr> <td> <span class='small'> %move% -1 </span> </td> <td> </td> </tr> <tr> <td> <table align='center'><tr> <td> <span class='small'> %attack% +1 </span> </td> </tr> <tr> <td> <span class='smaller'> %range% 3 </span> </td> </tr> <tr> <td> <span class='small'> %heal% 1 </span> <td/> </tr> <tr> <td> <span class='smaller'> Self </span> </td> </tr> </table> </td> <td> %ice% </td> </tr> </table>"]
        , ["Angry Howl", false, "55", "* %move% +0", "* %curse%", "** Target all enemies within %range% 3", "* %ice%"]
        , ["Icy Glare", false, "67", "* %move% -1", "* %attack% +1", "** %range% 3", "* %ice%%use_element%: %disarm%"]
        ]
    },
    { class: "Monstrosity"
    , cards: 
        [ ["Nothing Special", false, "39", "* %move% +0", "* %attack% +0"]
        , ["Calculated Strike", false, "60", "* %move% -1", "* %attack% +1"]
        , ["Unstable Scratch", true, "52", "* %move% +0", "* %attack% +1", "** <span class='small'> If this attack is performed, the <br/> Monstrosity suffers 1 damage. </span>"]
        , ["Swarm", false, "21", "* %move% +1", "* %attack% -1", "** <span class='small'> Add +1 %attack% if the target is adjacent <br/> to any of the Monstrosity's allies. </span>"]
        , ["Swarm", false, "21", "* %move% +1", "* %attack% -1", "** <span class='small'> Add +1 %attack% if the target is adjacent <br/> to any of the Monstrosity's allies. </span>"]
        , ["Weakening Bite", false, "34", "* %move% +0", "* %attack% +0", "** %muddle%"]
        , ["Explosive Blisters", true, "09", "* %move% +1", "** <span class='small'> Any time a figure attacks the <br/> Monstrosity this round, that <br/> figure suffers 2 damage. </span>"]
        , ["Unstable Frenzy", false, "74", "* %move% +0", "** Monstrosity suffers 1 damage.", "* %attack% +1", "** Target all adjacent enemies"]
        ]
    },
    { class: "Most Basic Vermling Raider"
    , cards:
        [ ["Nothing Special", false, "50", "* %move% +0", "* %attack% +0"]
        ]
    },
    { class: "Stone Golem"
    , cards: 
        [ ["Nothing Special", false, "64", "* %move% +0", "* %attack% +0"]
        , ["Ground Pound", false, "83", "* %move% +0", "* %attack% -1", "** Target all adjacent enemies"]
        , ["Hasty Assault", true, "51", "* %move% +1", "* %attack% -1"]
        , ["Taxing Advance", false, "28", "* %move% +1", "* %attack% +0", "** <span class='small'> If the Move ability was performed, <br/> the Stone Golem suffers 1 damage. </span>"]
        , ["Calculated Strike", true, "90", "* %move% -1", "* %attack% +1"]
        , ["Runic Draw", false, "28", "* %move% +1", "* %attack% -2", "** %range% 3", "** %pull% 2", "** %immobilize%"]
        , ["Sacrificial Hurl", false, "72", "* %attack% +1", "** %range% 3", "** <span clas='small'> If this attack is performed, <br/> the Stone Golem suffers 2 damage."]
        , ["Runic Feedback", false, "10", "** <span class='small'> Any time a figure attacks the <br/> Stone Golem this round, that <br/> figure suffers 3 damage. </span>"]
        ]
    },
    { class: "Vermling Raider"
    , cards: 
        [ ["Screaming Shot", true, "85", "* %push% 1", "** Target all adjacent enemies", "* %attack% +1", "** %range% 2"]
        , ["Careful Throw", false, "36", "* %move% +0", "* %attack% -1", "** %range% 4"]
        , ["Dual Daggers", false, "59", "* %attack% +0", "** %range% 3", "** %target% 2"]
        , ["Nothing Special", false, "50", "* %move% +0", "* %attack% +0"]
        , ["Patch Wounds", true, "30", "* %move% +1", "* %heal% 3", "** Self"]
        , ["Parry", false, "70", "* %move% +0", "* %attack% -1", "** %disarm%"]
        , ["Vicious Spear", false, "77", "* %move% -1", "* %attack% +0", "** %range% 3", "** %wound%"]
        , ["Spiked Pit", false, "20", "* %attack% +0", "** %range% 4", "** <span class='small'> Create one 3-damage trap in an adjacent <br/> empty hex closest to an enemy. </span>"]
        ]
    },
    { class: "Vermling Scout"
    , cards: 
        [ ["Short Bow", false, "29", "* %move% -1", "* %attack% -1", "** %range% 3"]
        , ["Hasty Assault", false, "40", "* %move% +1", "* %attack% -1"]
        , ["Nothing Special", false, "53", "* %move% +0", "* %attack% +0"]
        , ["Rancid Arrow", false, "53", "* %attack% +0", "** %range% 3", "** %poison%"]
        , ["Calculated Strike", false, "69", "* %move% -1", "* %attack% +1"]
        , ["Noxious Blade", true, "92", "* %attack% +2", "** %poison%"]
        , ["Rapid Bolts", false, "78", "* %attack% -1", "** %range% 4", "** %target% 2"]
        , ["Greed", true, "40", "* %move% +1", "** %jump%", "* %loot% 1"]
        ]
    },
    { class: "Zealot"
    , cards: 
        [ ["Hasty Assault", false, "35", "* %move% +1", "* %attack% -1"]
        , ["Calculated Strike", false, "65", "* %move% -1", "* %attack% +1"]
        , ["Drain Life", true, "27", "** <table align='center' class='small-table'> <tr> <td> <span class='small'> %move% +0 </span> </td> <td> </td> </tr> <tr> <td> <table align='center'><tr> <td> <span class='small'> %attack% -1 </span> </td> </tr> <tr> <td> <span class='smaller'> %range% 2 </span> </td> </tr> <tr> <td> <span class='small'> %heal% X </span> <td/> </tr> <tr> <td> <span class='smaller'> Self </span> </td> </tr> </table> </td> <td> %dark% </td> </tr> </table>", "** <span class='smaller'> X is damage suffered by target of attack </span>"]
        , ["Nothing Special", false, "50", "* %move% +0", "* %attack% +0"]
        , ["Hex Whip", false, "19", "* %move% +1", "** %jump%", "* %attack% -1", "** %curse%", "* %air%"]
        , ["Vile Scourge", false, "77", "* <table align='center'> <tr> <td> <span class='small'> %move% -1 </span> </td> <td> </td> </tr> <tr> <td> <table align='center'> <tr> <td> <span class='small'> %attack% -1 </span> </td> </tr> <tr> <td> <span class='smaller'> %poison% </span> </td> </tr> <tr> <td> <span class='small'> %air%%use_element%: +1 %attack% </span> </td> </tr> </table> </td> <td> %aoe-triangle-2-side-with-black% </td> </tr> </table>"]
        , ["Unholy Flame", true, "82", "* %attack% +1", "** %range% 3", "* %fire%"]
        , ["Boil Blood", false, "46", "* %attack% -1", "** %range% 2", "** %target% 2", "** %muddle%", "** %fire%%use_element%: +2 %range%"]
        ]
    },
]

DECKS = GLOOMHAVEN_DECKS;
DECK_DEFINITIONS = GLOOMHAVEN_DECK_DEFINITIONS;