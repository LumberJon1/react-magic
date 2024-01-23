
// Each description is an array whose second element is a duration override string.  
// The third element is a target override string, which can be "Area" or another string.
// The final element of each subarray is a positive flag, which indicates whether the spell
// is beneficial.  If it is set to true, it will be more likely to occur to members of the party,
// while negative effects will be more likely to occur to other targets.
const descriptionsArray = [
    // Spell 1
    [
        "A noxious fart cloud emanates from a point and hangs in the air, forcing anyone inside to make a DC 15 CON save or spend their turn vomiting.",
        "",
        "",
        false
    ],
    
    // Spell 2
    [
        "The target grows bat wings that sprout from their back and grant them flying speed 20'.",
        "",
        "",
        false
    ],
    
    // Spell 3
    [
        "The target shrinks to a size Small creature and stands only 6 inches tall.  For the duration of the spell, they have Armor Class 19, move 5', and STR 3.",
        "",
        "",
        false
    ],
    
    // Spell 4
    [
        "The target grows to a size Large creature and stands 20' tall.  For the duration of the spell, they have a 25 STR and a move of 50'.",
        "",
        "",
        true
    ],
    
    // Spell 5
    [
        "Randomize 2 more times and take both effects.",
        "Instantaneous",
        "N/A",
        false
    ],
    
    // Spell 6
    [
        "The target is held for the duration of the spell unless they can make a Wisdom save, at the caster's DC.",
        "",
        "",
        false
    ],
    
    // Spell 7
    [
        "The target is yeeted directly away from where the caster is facing, 30' into the air and 60' away, and must take 3D10 force damage.  If this causes the target to impact any objects they take an additional D10 for each, plus any fall damage.",
        "Instantaneous",
        "",
        false
    ],
    
    // Spell 8
    [
        "The caster summons 1D4 random CR1 monsters (HP 14 AC 13) that are loyal to them for the duration of the spell.",
        "",
        "Any point within visibility of caster",
        true
    ],
    
    // Spell 9
    [
        "The target is surrounded by glowing red symbols and becomes weak to all forms of damage for the duration of the spell.",
        "",
        "",
        false
    ],
    
    // Spell 10
    [
        "The caster receives a holy hand grenade from above in a radiant sunbeam.  It is treated as a thrown simple weapon with range 30/60, and does 2D8+6 radiant damage in a 15' sphere.",
        "Until Combat Ends",
        "Self",
        true
    ],
    
    // Spell 11
    [
        "The target must succeed a Wisdom save DC caster's spellcasting ability, or be put to sleep for the duration of the spell.",
        "",
        "",
        false
    ],
    
    // Spell 12
    [
        "Targets in the area must succeed a Wisdom save DC caster's spellcasting ability, or be put to sleep for the duration of the spell.",
        "",
        "Area",
        false
    ],
    
    // Spell 13
    [
        "The target gains resistance to all physical attacks (bludgeoning/piercing/slashing) for the duration.",
        "",
        "",
        true
    ],
    
    // Spell 14
    [
        "Hit \"Randomize\" again.  The next effect is illusory, but appears convincing to the caster.",
        "",
        "Caster",
        false
    ],
    
    // Spell 15
    [
        "Hit \"Randomize\" again.  The next effect is illusory, but appears convincing to every battle participant.",
        "",
        "Everyone",
        false
    ],
    
    // Spell 16
    [
        "Hit \"Randomize\" again.  The next effect is illusory, but appears convincing to the target.",
        "",
        "",
        false
    ],
    
    // Spell 17
    [
        "Fireball at level 3 power - it must be fired even if there are no enemies around",
        "Instantaneous",
        "Any target within 80' of the caster's choosing",
        true
    ],
    
    // Spell 18
    [
        "The target is sucked into the caster's mouth Kirby-style.  The caster can choose to keep the creature held in their mouth for up to 4 turns, during each of which the held creature takes 1D10 damage.  They must then be spit out 10' away from the caster.",
        "Up to 4 rounds",
        "A single target within 10' of the caster",
        true
    ],
    
    // Spell 19
    [
        "All magical effects in the battlefield are dispelled.",
        "Instantaneous",
        "Entire battlefield",
        true
    ],
    
    // Spell 20
    [
        "The target becomes invisible for the duration of the spell.",
        "",
        "",
        true
    ],
    
    // Spell 21
    [
        "Target gains the ability to use a breath weapon in a 20' cone that deals 1D10 dmg.  Roll a D4 for type: 1 = fire, 2 = ice, 3 = lightning, 4 = acid.",
        "",
        "",
        true
    ],
    
    // Spell 22
    [
        "The target and 1D6 of the creatures closest to it are human centipeded together for the duration of the spell and cannot break free or take any actions unless they make a CON save DC 15.",
        "",
        "Single random battle participant",
        false
    ],
    
    // Spell 23
    [
        "The target gains the ability to telepathically manipulate heavy objects up to 1 ton and hurl up to 4 of them 30' as an action, doing appropriate damage",
        "",
        "",
        true
    ],
    
    // Spell 24
    [
        "The caster causes a dimension door to come into being and can open the other portal anwhere within visual range.",
        "",
        "Any point the caster chooses within 20' of themselves",
        true
    ],
    
    // Spell 25
    [
        "The enemy is immediately sucked into a singularity and disappears from existence (If no enemies are nearby, randomize again).",
        "Instantaneous",
        "Any enemy the caster can see",
        true
    ],
    
    // Spell 26
    [
        "The target becomes immune to all forms of damage for the duration of the spell.",
        "",
        "",
        true
    ],
    
    // Spell 27
    [
        "The target is struck by lightning from the sky and suffers 3D10 lightning damage.  On a successful DC 13 Dex save they take 1/2 dmg.",
        "Instantaneous",
        "",
        false
    ],
    
    // Spell 28
    [
        "The caster forgets all known languages for the next 1D4 hours of in-game time, and can only speak and understand undercommon.  This applies to telepathic communication and writing.",
        "1d4 hours",
        "Caster",
        false
    ],
    
    // Spell 29
    [
        "The weather changes to 1: heavy snow, 2: rain, 3: hail, or 4: fog.  Visibility is now 5' and if hailing, everyone takes 1 bludgeoning damage per turn.",
        "",
        "Area",
        false
    ],
    
    // Spell 30
    [
        "The target is hasted and receives a +2 to its armor class and may take an additional action for the duration of the spell.",
        "",
        "",
        true
    ],

    // Spell 31
    [
        "The caster's physical body becomes ethereal and they can fly into any enemy's body within visual range to attemt to possess them.  On a failed Wisdom save DC caster's spell DC, they are possessed by the caster.",
        "",
        "Caster",
        true
    ],

    // Spell 32
    [
        "The target is hit with a petrification ray from the caster's focus and must make a CON save DC caster's ability, or be permanently turned to stone.",
        "Instantaneous",
        "Single enemy of caster's choosing",
        true
    ],

    // Spell 33
    [
        "The target becomes afraid of the creature closest to it and must flee in the opposite direction at max movement speed until the duration ends.",
        "",
        "",
        false
    ],
];

// Set the target value
const randomTarget = (targetOverride, isPositive) => {
    
    // If the targetOverride arg is true, set target to "Area" and assign a random size
    let target = "";

    if (targetOverride === "Area") {
        let area = "Area: ";

        // Randomly assign the size of the area spell
        const areaSizes = ["20' x 20' cube at point chosen by caster",
            "10' x 10' cube centered around caster",
            "30' cone emanating from caster",
            "40' sphere centered around caster",
            "40' sphere at point chosen by caster"
        ];

        const randomArea = Math.floor(Math.random() * areaSizes.length);

        let size = areaSizes[randomArea];

        target = area+size;

    }
    // else if (targetOverride === "") {
    //     const targets = ["Self", "Single Friendly", "Multiple Friendlies", "Single Enemy", "Multiple Enemies"];
        
    //     // Replace logic with weights
    //     const randomIndex = Math.floor(Math.random() * targets.length);
    //     target = targets[randomIndex];
    // }

    else if (targetOverride === "") {
        const targets = ["Self", "Single Friendly", "Multiple Friendlies", "Single Enemy", "Multiple Enemies"];

        // Assign weights based on the isPositive flag
        const weights = isPositive ? [3, 2, 2, 1, 1] : [1, 1, 2, 2, 3];

        // Calculate total weight
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

        // Generate a random number between 0 and totalWeight
        const randomWeight = Math.random() * totalWeight;

        // Choose a target based on the random weight
        let chosenTarget;
        let cumulativeWeight = 0;

        for (let i = 0; i < targets.length; i++) {
            cumulativeWeight += weights[i];
            if (randomWeight <= cumulativeWeight) {
                chosenTarget = targets[i];
                break;
            }
        }

        target = chosenTarget;
    }
    
    else {
        target = targetOverride;
    }
    ;

    return target;
}

// Set the duration and range values
const spellDuration = (durationOverride) => {

    // Initialization
    let durationFinal = "";

    // If no argument was passed to durationOverride, set its duration to one of these values at random
    // and make it more likely to have short durations
    if (durationOverride === "") {
        
        const durations = ["1", "2", "4", "6", "8", "10", "12", "20", "1 minute", "1 hour"]
        // const randomIndex = Math.floor(Math.random() * durations.length);
        
        // // display value based on text
        // let chosenDuration = durations[randomIndex];

        // Assign weights based on your preference for shorter durations
        const weights = [5, 4, 3, 2, 2, 1, 1, 1, 1, 1];

        // Calculate total weight
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

        // Generate a random number between 0 and totalWeight
        const randomWeight = Math.random() * totalWeight;

        // Choose a duration based on the random weight
        let chosenDuration;
        let cumulativeWeight = 0;

        for (let i = 0; i < durations.length; i++) {
            cumulativeWeight += weights[i];
            if (randomWeight <= cumulativeWeight) {
                chosenDuration = durations[i];
                break;
            }
        }
        
        if (chosenDuration === "1") {
            durationFinal = "1 turn";
        }
        else if (chosenDuration === "2") {
            durationFinal = "2 turns";
        }
        else if (chosenDuration === "4") {
            durationFinal = "1d4 turns";
        }
        else if (chosenDuration === "6") {
            durationFinal = "1d6 turns";
        }
        else if (chosenDuration === "8") {
            durationFinal = "1d8 turns";
        }
        else if (chosenDuration === "10") {
            durationFinal = "1d10 turns";
        }
        else if (chosenDuration === "12") {
            durationFinal = "1d12 turns";
        }
        else if (chosenDuration === "20") {
            durationFinal = "1d20 turns";
        }
        else {
            durationFinal = chosenDuration;
        }
    }
    // If an argument was passed to durationOverride, set that as the return value
    else {
        durationFinal = durationOverride;
    };

    return durationFinal;
}


const generateSpellData = () => {
    
    // Define return parameters
    let description = "";
    let target = "";
    let duration = "";

    const randomIndex = Math.floor(Math.random() * descriptionsArray.length);
    let desc = descriptionsArray[randomIndex];

    // Set the description parameter to the value at desc[0]
    description = desc[0];

    // // Check to see if duration should be handled instantaneously.
    // if (desc[1] === true) {
    //     // Set the duration to "instantaneous"
    //     duration = spellDuration(true);
    // }
    // else {
    //     duration = spellDuration(false);
    // }

    // // Handle case where the area flag is true
    // if (desc[2] === true) {
    //     // Set the target to random sized area
    //     target = randomTarget(true);
    // }
    // else {
    //     target = randomTarget(false);
    // }

    //
    target = randomTarget(desc[2], desc[3])
    duration = spellDuration(desc[1])

    return {
        "target": target,
        "duration": duration,
        "description": description
    };

}

export {generateSpellData};