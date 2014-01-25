var data = [
    // offensive
    [
        {
            index: 1,
            name: "Doubled Edge Sword",
            ranks: 1,
            desc: "Melee: Deal an additional 2% damage and receive 1% additional damage\nRanged: Deal and recieve an additional 1.5% damage",
            rankInfo: [],
        },
        {
            index: 2,
            name: "Fury",
            ranks: 4,
            desc: "Gain #% increased Attack Speed",
            rankInfo: [1.25, 2.5, 3.75, 5],
        },
        {
            index: 3,
            name: "Sorcery",
            ranks: 4,
            desc: "Gain #% Cooldown Reduction",
            rankInfo: [1.25, 2.5, 3.75, 5],
        },
        {
            index: 4,
            name: "Butcher",
            ranks: 1,
            desc: "Basic attacks and single target spells deal an additional 2 damage to minions and monsters\n\nThis does not trigger off of area of effect damage or damage over time effects",
            rankInfo: [],
        },
        {
            index: 5,
            name: "Expose Weakness",
            ranks: 1,
            desc: "Damaging an enemy with a spell increases allied champions' damage to that enemy by 1% for the next 3 seconds",
            rankInfo: [],
        },
        {
            index: 6,
            name: "Brute Force",
            ranks: 3,
            desc: "+# Attack Damage at level 18 (+# per level)",
            rankInfo: [4, 8, 12],
            rankInfo2: [.22, .44, .66]
        },
        {
            index: 7,
            name: "Mental Force",
            ranks: 3,
            desc: "+# Ability Power at level 18 (+# per level)",
            rankInfo: [6, 11, 16],
            rankInfo2: [.33, .61, .89]
        },
        {
            index: 8,
            name: "Feast",
            ranks: 1,
            desc: "Killing a unit restores 2 Health and 1 Mana",
            rankInfo: [],
            parent: 3
        },
        {
            index: 9,
            name: "Spell Weaving",
            ranks: 1,
            desc: "Damaging an enemy champion with an auto attack increases your spell damage by 1% stacking up to 3 times. (Max 3% damage increase)",
            rankInfo: [],
        },
        {
            index: 10,
            name: "Martial Mastery",
            ranks: 1,
            desc: "+5 Attack Damage",
            rankInfo: [],
            parent: 5,
        },
        {
            index: 11,
            name: "Arcane Mastery",
            ranks: 1,
            desc: "+8 Ability Power",
            rankInfo: [],
            parent: 6
        },
        {
            index: 12,
            name: "Executioner",
            ranks: 3,
            desc: "Increases damage dealt to champions below #% health by 5%",
            rankInfo: [20, 35, 50],
        },
        {
            index: 13,
            name: "Blade Weaving",
            ranks: 1,
            desc: "Damaging an enemy champion with a spell increases your basic attack damage by 1% stacking up to 3 times. (Max 3% damage increase)\n\nThis cannot be trigger more than once per second",
            rankInfo: [],
            parent: 8,
        },
        {
            index: 14,
            name: "Warlord ",
            ranks: 3,
            desc: "Increases Bonus Attack Damage by #%",
            rankInfo: [2, 3.5, 5],
        },
        {
            index: 15,
            name: "Archmage",
            ranks: 3,
            desc: "Increases Ability Power by #%",
            rankInfo: [2, 3.5, 5],
        },
        {
            index: 16,
            name: "Dangerous Game",
            ranks: 1,
            desc: "Killing a champion restores 5% of your missing health and mana",
            rankInfo: [],
            parent: 11,
        },
        {
            index: 17,
            name: "Frenzy",
            ranks: 1,
            desc: "Critical hits increases your attack speed by 5% for 3 seconds (stacks up to 3 times)",
            rankInfo: [],
        },
        {
            index: 18,
            name: "Devastating Strikes",
            ranks: 3,
            desc: "+#% Armor and Magic penetration",
            rankInfo: [2, 4, 6],
        },
        {
            index: 20,
            name: "Arcane Blade",
            ranks: 1,
            desc: "Your basic attacks also deal bonus magic damage equal to 5% of your Ability Power",
            rankInfo: [],
        },
        {
            index: 22,
            name: "Havoc",
            ranks: 1,
            desc: "3% Increased Damage",
            rankInfo: [],
        },
    ],
        // defensive
    [
        {
            index: 1,
            name: "Block ",
            ranks: 2,
            desc: "Reduce incoming damage from champion basic attacks by #",
            rankInfo: [1, 2],
        },
        {
            index: 2,
            name: "Recovery",
            ranks: 2,
            desc: "+# Health per 5 seconds",
            rankInfo: [1, 2],
        },
        {
            index: 3,
            name: "Enchanted Armor",
            ranks: 2,
            desc: "Increase your bonus Armor and Magic Resistance by #%",
            rankInfo: [2.5, 5],
        },
        {
            index: 4,
            name: "Tough Skin",
            ranks: 2,
            desc: "Reduce damage taken from neutral monsters by #\n\nThis does not effect lane minions",
            rankInfo: [1, 2],
        },
        {
            index: 5,
            name: "Unyielding",
            ranks: 1,
            desc: "Melee: Reduce all incoming damage from champions by 2\nRanged: Reduce all incoming damage from champions by 1",
            rankInfo: [],
            parent: 0,
        },
        {
            index: 6,
            name: "Veteran Scars",
            ranks: 3,
            desc: "+# Health",
            rankInfo: [12, 24, 36],
        },
        {
            index: 8,
            name: "Bladed Armor",
            ranks: 1,
            desc: "Enemy monsters that attack you bleed dealing damage equal to 1% of their current health each second.\nThis does not work against lane minions",
            rankInfo: [],
            parent: 3,
        },
        {
            index: 9,
            name: "Oppression",
            ranks: 1,
            desc: "Reduces damage taken by 3% from enemies that have impaired movement (Slows, snares, taunts, stuns, etc)",
            rankInfo: [],
        },
        {
            index: 10,
            name: "Juggernaut",
            ranks: 1,
            desc: "+3% Maximum Health",
            rankInfo: [],
            parent: 5,
        },
        {
            index: 11,
            name: "Hardiness",
            ranks: 3,
            desc: "+# Armor",
            rankInfo: [2, 3.5, 5],
        },
        {
            index: 12,
            name: "Resistance",
            ranks: 3,
            desc: "+# Magic Resistance",
            rankInfo: [2, 3.5, 5],
        },
        {
            index: 13,
            name: "Perseverance",
            ranks: 3,
            desc: "+#% of your missing health every 5 seconds",
            rankInfo: [1, 2, 3],
        },
        {
            index: 14,
            name: "Swiftness",
            ranks: 1,
            desc: "Reduce the effectiveness of slows by 10%",
            rankInfo: [],
        },
        {
            index: 15,
            name: "Reinforced Armor",
            ranks: 1,
            desc: "Reduces damage taken by critical strikes by 10%",
            rankInfo: [],
            parent: 9,
        },
        {
            index: 16,
            name: "Evasive",
            ranks: 1,
            desc: "Reduces damage taken by 4% from Area of Effect magic damage",
            rankInfo: [],
            parent: 10,
        },
        {
            index: 17,
            name: "Second Wind",
            ranks: 1,
            desc: "Increase all sources of incoming healing by 10% when below 25% health",
            rankInfo: [],
            parent: 11,
        },
        {
            index: 18,
            name: "Legendary Guardian",
            ranks: 4,
            desc: "+# Armor and # Magic Resistance for each nearby enemy champion",
            rankInfo: [1, 2, 3, 4],
            rankInfo2: [0.5, 1, 1.5, 2],
        },
        {
            index: 19,
            name: "Runic Shield",
            ranks: 1,
            desc: "Start the game with a 50 health shield. This shield regenerates each time you respawn",
            rankInfo: [],
        },
        {
            index: 22,
            name: "Tenacious",
            ranks: 1,
            desc: "Reduces the duration of crowd control effects by 15%",
            rankInfo: [],
        },
    ],
    [
        {
            index: 1,
            name: "Phasewalker",
            ranks: 1,
            desc: "Reduces the casting time of Recall by 1 second",
            rankInfo: [],
        },
        {
            index: 2,
            name: "Fleet of Foot",
            ranks: 3,
            desc: "+#% movement speed",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 3,
            name: "Meditation",
            ranks: 3,
            desc: "+# Mana Regen per 5 seconds",
            rankInfo: [1, 2, 3],
        },
        {
            index: 4,
            name: "Scout",
            ranks: 1,
            desc: "Increases the cast range of trinket items by 15%",
            rankInfo: [],
        },
        {
            index: 6,
            name: "Summoner's Insight",
            ranks: 3,
            desc: "Reduces the cooldown of Summoner Spells by #%",
            rankInfo: [4, 7, 10],
        },
        {
            index: 7,
            name: "Strength of Spirit",
            ranks: 1,
            desc: "Gain +1 health regen per 5 for every 300 maximum mana",
            rankInfo: [],
            parent: 2,
        },
        {
            index: 8,
            name: "Alchemist",
            ranks: 1,
            desc: "Increases the duration of your potions and elixirs by 10%",
            rankInfo: [],
        },
        {
            index: 9,
            name: "Greed",
            ranks: 3,
            desc: "Grants an additional +# gold every 10 seconds",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 10,
            name: "Runic Affinity",
            ranks: 1,
            desc: "Increases the duration of shrine, relic, quest, and neutral monster buffs by 20%",
            rankInfo: [],
        },
        {
            index: 11,
            name: "Vampirism",
            ranks: 3,
            desc: "+#% Lifesteal and Spell Vamp",
            rankInfo: [1, 2, 3],
        },
        {
            index: 12,
            name: "Culinary Master",
            ranks: 1,
            desc: "Your health potions are upgraded into Biscuits that restore an additional 20 health and 10 mana instantly upon consumption",
            rankInfo: [],
            parent: 6,
        },
        {
            index: 13,
            name: "Scavenger",
            ranks: 1,
            desc: "+1 Gold each time an ally kills a nearby lane minion",
            rankInfo: [],
            parent: 7,
        },
        {
            index: 14,
            name: "Wealth",
            ranks: 1,
            desc: "Increases starting gold by 40",
            rankInfo: [],
        },
        {
            index: 15,
            name: "Expanded Mind",
            ranks: 3,
            desc: "+#% increased maximum mana",
            rankInfo: [2, 3.5, 5],
        },
        {
            index: 16,
            name: "Inspiration",
            ranks: 2,
            desc: "+# experience every 10 seconds while near a higher level allied champion",
            rankInfo: [7.5, 15],
        },
        {
            index: 18,
            name: "Bandit",
            ranks: 1,
            desc: "Melee: Grants an additional 15 Gold on Champion kill or assist\nRanged: You gain 3 gold each time you attack an enemy champion\n\nThis cannot trigger on the same champion more than once every 5 seconds",
            rankInfo: [],
            parent: 12,
        },
        {
            index: 19,
            name: "Intelligence",
            ranks: 3,
            desc: "+#% Cooldown Reduction and reduces the cooldown of Activated Items by #%",
            rankInfo: [2, 3.5, 5],
            rankInfo2: [4, 7, 10],
        },
        {
            index: 22,
            name: "Wanderer",
            ranks: 1,
            desc: "Gain 5% increased movement speed out of combat",
            rankInfo: [],
        },
    ]
];