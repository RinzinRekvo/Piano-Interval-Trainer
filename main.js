

// DOM elements

const html = document.querySelector("html");
const body = document.querySelector("body");
const practice_area = document.querySelector(".practice_area");
const settings_area = document.querySelector(".settings_area");
const settings_menu_buttons = document.querySelectorAll(".variable");
const staff_area = document.querySelector(".staff_area");
const staffLines = document.querySelectorAll(".staffLine");
const clefts = document.querySelectorAll(".cleft");
const canvas = document.getElementById("graph");
const chartsArray = document.querySelectorAll(".chart");
const chartContainer = document.querySelector(".chart_container");
const stats_button = document.querySelector(".stats_button");
const overlay = document.querySelector(".settings_overlay");
const resetStats = document.querySelector(".reset_button");
const interval_total = document.querySelector(".interval_total");
const scroll_area = document.querySelector(".scroll_area");
const redBar = document.querySelector(".redBar");

// User Controlled Elements

const rangeSlider = document.querySelectorAll(".slider");
const buttons = document.querySelectorAll("button");
const checkBox = document.querySelectorAll(".check-box");
const fullscreen_button = document.querySelector(".fullscreen_button");
const settings_button = document.querySelector(".settings_button");
const var_totalNotes = document.querySelector(".totalNotes");
const var_noteDistance = document.querySelector(".noteDistance");
const var_noteOffset = document.querySelector(".noteOffset");
const var_maxNotesPerStaff = document.querySelector(".maxNotesPerStaff");
const var_UiColor = document.querySelectorAll("input[type='color']");
const var_intervalRange = document.querySelector(".intervalRange");
const keybrdInput = document.querySelector(".keybrd_input");
const keybrdOutput = document.querySelector(".keybrd_output");
const var_scrollSpeed = document.querySelector(".scrollSpeed");
const var_barPosition = document.querySelector(".barPosition");
const var_memoryTime = document.querySelector(".memoryTime");

/// GSAP Intro Animation

const logoText = document.querySelectorAll(".text");
const intro_screen = document.querySelector(".intro_screen");

const tl = gsap.timeline();

window.addEventListener("DOMContentLoaded", ()=>{
    
    //const introMusic = new Audio("./Sounds/PianoInterval_Intro_music.m4a");
    //const introMusic_2 = new Audio("./Sounds/IntroMusic_2.m4a")
    
    // to("left_text",{onStart:function(){introMusic.play()}}) // add this to the timeline first
    
    
    tl.to(".left_text", {y: -100, opacity: 0}, "+=.5")
    .to(".right_text",{y: -100, opacity: 0})
    .to(".intro_screen", {y: "-100%", zIndex: 0})
    
    // Append the below animations to the timeline to enable tutorial bubbles

    // .fromTo("#fullscreen1", {x:"1em", opacity:0, y:"-.80"}, {opacity: 1, display: "flex", y:"-.75"}, "+=.5")
    // .to("#fullscreen1", {x:"1em", opacity:0, y:"-.80"}, "+=1")
    // .fromTo("#fullscreen2", {x:"1em", opacity:0, y:"22em"}, {opacity: 1, display: "flex", y:"22.5em"}, "+=.5")
    // .to("#fullscreen2", {x:"1em", opacity:0, y:"22em"}, "+=1.5")
    // .to(".left_text", {onStart:function(){introMusic_2.play()}})
    // .fromTo("#intervalButtons", {x:"1em",opacity:0, y:"16em"}, {opacity: 1, display: "flex", y:"16.5em"}, "+=1")
    // .to("#intervalButtons", {x:"1em",opacity:0, y:"16em"}, "+=1.5")
    // .fromTo("#Keyboard_info", {x:"1em",opacity:0, y:"42em"}, {opacity: 1, display: "flex", y:"33em"}, "+=1")
    // .to("#Keyboard_info", {x:"1em",opacity:0, y:"42em"}, "+=7.5")
    // .fromTo("#stats", {x:"39em", opacity:0, y:"33em"}, {opacity: 1, display: "flex", y:"32.5em"}, "+=.5")
    // .to("#stats", {x:"39em", opacity:0, y:"33em"}, "+=1.5")
    // .fromTo("#settings", {x:"81em", opacity:0, y:"22em"}, {opacity: 1, display: "flex", y:"21.5em"}, "+=.5")
    // .to("#settings", {x:"81em", opacity:0, y:"22em"}, "+=1.5")
    // .fromTo("#drag_note_count", {x:"16em", opacity:0, y:"2em"}, {opacity: 1, display: "flex", y:"2.5em"}, "+=.5")
    // .to("#drag_note_count", {x:"16em", opacity:0, y:"2em"}, "+=1")
    // .fromTo("#drag_note_distance", {x:"16em", opacity:0, y:"6.5em"}, {opacity: 1, display: "flex", y:"7em"}, "+=.5")
    // .to("#drag_note_distance", {x:"16em", opacity:0, y:"6.5em"}, "+=1")
    // .fromTo("#drag_note_staffMax", {x:"16em", opacity:0, y:"10.5em"}, {opacity: 1, display: "flex", y:"11em"}, "+=.5")
    // .to("#drag_note_staffMax", {x:"16em", opacity:0, y:"10.5em"}, "+=1")
    // .fromTo("#drag_note_Offset", {x:"16em", opacity:0, y:"14.5em"}, {opacity: 1, display: "flex", y:"15em"}, "+=.5")
    // .to("#drag_note_Offset", {x:"16em", opacity:0, y:"14.5em"}, "+=1")
    // .fromTo("#drag_interval_range", {x:"16em", opacity:0, y:"19em"}, {opacity: 1, display: "flex", y:"19.5em"}, "+=.5")
    // .to("#drag_interval_range", {x:"16em", opacity:0, y:"19em"}, "+=1")
    // .fromTo("#toggle_staff_type", {x:"16em", opacity:0, y:"1em"}, {opacity: 1, display: "flex", y:"1.5em"}, "+=.75")
    // .to("#toggle_staff_type", {x:"16em", opacity:0, y:"1em"}, "+=1")
    // .fromTo("#toggle_black_notes", {x:"16em", opacity:0, y:"3.5em"}, {opacity: 1, display: "flex", y:"4em"}, "+=.5")
    // .to("#toggle_black_notes", {x:"16em", opacity:0, y:"3.5em"}, "+=1")
    // .fromTo("#toggle_note_glow", {x:"16em", opacity:0, y:"6.5em"}, {opacity: 1, display: "flex", y:"7em"}, "+=.5")
    // .to("#toggle_note_glow", {x:"16em", opacity:0, y:"6.5em"}, "+=1")
    // .fromTo("#toggle_random_noteCount", {x:"16em", opacity:0, y:"9.5em"}, {opacity: 1, display: "flex", y:"10em"}, "+=.5")
    // .to("#toggle_random_noteCount", {x:"16em", opacity:0, y:"9.5em"}, "+=1")
    // .fromTo("#toggle_single_mode", {x:"16em", opacity:0, y:"12.5em"}, {opacity: 1, display: "flex", y:"13em"}, "+=.5")
    // .to("#toggle_single_mode", {x:"16em", opacity:0, y:"12.5em"}, "+=1")
    // .fromTo("#color_input_1", {x:"16em", opacity:0, y:"18em"}, {opacity: 1, display: "flex", y:"18.5em"}, "+=.5")
    // .to("#color_input_1", {x:"16em", opacity:0, y:"18em"}, "+=1")
    // .fromTo("#color_input_2", {x:"16em", opacity:0, y:"22em"}, {opacity: 1, display: "flex", y:"22.5em"}, "+=.5")
    // .to("#color_input_2", {x:"16em", opacity:0, y:"22em"}, "+=1")
    
  
})

// Note spacing Values

const intervalArray = [0,1,2,3,4,5,6,7];


// Scale Constants

const practice_area_width = practice_area.getBoundingClientRect().width;
const lineOffset = 10;

// Arrays 

let notePositions = [];
const noteArray = [];
const calculatedIntervals = [];
const chartLabels = ["1st","2nd","3rd","4th","5th","6th","7th"];
const chartObjs = [];
const scrollAnimations = []; 

// Slider Settings Variables

let totalStaffNotes = 3; // Range 1 - 14
let noteDistance = 31; // Range 31 - 186
let noteOffset = (practice_area_width / 20) >> 0;
let maxNotesPerStaff = ((practice_area_width / 34) >> 0) - 1; // Scale based on screen size
let intervalRange = 7;
let scrollSpeed = 29;
let redBarPosition = 0;
let memoryTime = 3;

// Toggle Settings Variables

let singleMode = false;
let memoryMode = false;
let scrollMode = false;
let focusMode = false;
let showStaff = true;
let blackNotes = true;
let noteGlow = false;
let randomNoteCount = false;
let rgb_Ui = 0;


// Misc variables (Name later)

let hightlightColor;
let targetNotes = 0;
let stemStyle = {background: "", boxShadow: ""};
let bodyStyle = {background: "", boxShadow: ""};
let ledgerStyle = {background: "", boxShadow: ""};
let stamp = {time: "", keyPressed: ""};
let stamp2 = {time: ""};
let intervalData = [{c: 0, w: 0},{c: 0, w: 0},{c: 0, w: 0},{c: 0, w: 0},{c: 0, w: 0},{c: 0, w: 0},{c: 0, w: 0}];
let totalCorrect_intervals = 0;
let autoAnswerInterval_id = undefined;

function initalSettings(){ // Initialize User Variables with default values
    
    // Set the Background staff picture

    gsap.to(checkBox[0].children[0], {x: 32, duration: .25 });
    staff_area.style.opacity = "none";
    clefts[0].style.opacity = 0;
    clefts[1].style.opacity = 0;
    staff_area.style.background = "url('./images/extended_staff.png')";

    // Set note color to black

    gsap.to(checkBox[1].children[0], {x: 32, duration: .25 });

    // Set the initial color of the UI (color box)

    var_UiColor[0].value = "#FF6464"
    
    // Set the initial color of the highlighted note (color box)

    var_UiColor[1].value = "#FF0000";
    
    // Set the initial color of the highlighted note

    hightlightColor = "rgb(255, 0, 0)";
    
    // Set the initial notes per staff

    var_totalNotes.textContent = rangeSlider[0].value = totalStaffNotes;
    
    // Set initial max interval range

    var_intervalRange.textContent = rangeSlider[4].value = intervalRange;

    // Set initial note distance

    var_noteDistance.textContent = rangeSlider[1].value = noteDistance;
    
    // Set initial max notes per staff (cap)

    rangeSlider[0].max = (maxNotesPerStaff + 1) * 2;
    
    // Set initial max notes per staff 
    
    var_maxNotesPerStaff.textContent = rangeSlider[2].value = maxNotesPerStaff + 1;
    
    // Set initial note offset value

    var_noteOffset.textContent = rangeSlider[3].value = noteOffset;
    
    // Set initial note offset maximum

    rangeSlider[3].max = (practice_area_width / 20) >> 0;
    
    // Set initial Scroll Speed
    
    var_scrollSpeed.textContent = rangeSlider[5].value = scrollSpeed;
    
    // Set initial Red bar position and acceptable area range 

    rangeSlider[6].min = 0;

    // The area width is subtracted by 3 so it stays visible at the end of the practice area
    rangeSlider[6].max = practice_area_width - 3;
    
    rangeSlider[6].textContent = rangeSlider[6].value;
    
    // Initial redBar Position
    redBarPosition = 200;

    var_barPosition.textContent = redBarPosition * .001;
    
    // Initial memory Time

    var_memoryTime.textContent = rangeSlider[7].value;
    
    // Set inital text in total interval count

    interval_total.textContent = `${totalCorrect_intervals}`;

    // Set initial Color of the UI

    rgb_Ui = colorUi(255,100,100);
    
}

var_UiColor[0].addEventListener("change", ()=>{
    
    
    let r = parseInt(var_UiColor[0].value.substring(1,3),16);
    let g = parseInt(var_UiColor[0].value.substring(3,5),16);
    let b = parseInt(var_UiColor[0].value.substring(5,7),16);

    rgb_Ui = colorUi(r,g,b);

    fullClear(totalStaffNotes);


})

var_UiColor[1].addEventListener("change", ()=>{
    
    let r = parseInt(var_UiColor[1].value.substring(1,3),16);
    let g = parseInt(var_UiColor[1].value.substring(3,5),16);
    let b = parseInt(var_UiColor[1].value.substring(5,7),16);
    
    hightlightColor = `rgb(${r}, ${g}, ${b})`;

    fullClear(totalStaffNotes);


})

function colorUi(r,g,b){ // Set Color for all elements based the RGB values received as arguments


    // Intro Screen style

    intro_screen.style.background = `rgb(${r}, ${g}, ${b})`;

    // page color style

   body.style.background = `rgb(${r}, ${g}, ${b})`;

   chartContainer.style.background = `rgb(${r}, ${g}, ${b})`;

   // Chart Progress Colors

   for(let c=0; c < chartObjs.length; ++c){
        chartObjs[c].updateOptions({colors: [`rgba(${r-23},${g-23},${b-23},1)`]})
   }

    // Button color style

   for(let btn = 0; btn < buttons.length; ++btn){

        buttons[btn].style.background = `none`;  
    }

    // staff color style

    for(let staff = 0; staff < staffLines.length; ++staff){
        
        staffLines[staff].style.background = `linear-gradient(180deg, rgba(98,57,57,0), rgba(234,77,77,0))`;  
            
        staffLines[staff].style.boxShadow = `1px 3px 3px rgb(${r - 80}, ${g - 50}, ${b - 50}), -3px -3px 3px rgb(${r + 15}, ${g + 38}, ${b + 38})`;
    }

    // Staff Area Style

    if(!showStaff){
        staff_area.style.background = `rgb(${r+30}, ${g+30}, ${b+30})`;
    }
    

    // Ledger line styles

    document.querySelectorAll(".ledgerOn").forEach(ledger =>{
        ledger.style.background = `linear-gradient(180deg, rgba(98,57,57,0), rgba(234,77,77,0))`;   
        ledger.style.boxShadow = `1px 3px 3px rgb(${r - 80}, ${g - 50}, ${b - 50}), -3px -3px 3px rgb(${r + 15}, ${g + 38}, ${b + 38})`;
    })

    // Settings menu color Styles

    settings_area.style.background = `rgb(${r}, ${g}, ${b})`;
    
    

    // Slider piece button styles
    
    document.querySelectorAll(".check-box-slider").forEach(box =>{

        box.style.background = `rgb(${r-20}, ${g-20}, ${b-20})`;

    });

    // Note styles

    bodyStyle.background = `linear-gradient(145deg, rgb(${r - 20}, ${g + 20}, ${b + 20}), rgb(${r + 20 }, ${g + 20}, ${b + 20})`;
    stemStyle.background = bodyStyle.background;
    stemStyle.boxShadow = `2px 4px 5px rgb(${r - 27}, ${g - 47}, ${b - 46}), -4px -4px 10px rgb(${r + 27}, ${g + 47}, ${b + 46})`;
    bodyStyle.boxShadow = `4px 2px 4px rgb(${r - 27}, ${g - 42}, ${b - 41}), -3px -7px 8px rgb(${r + 25}, ${g + 42}, ${b + 41})`;

    return {r,g,b};
}

function sound(option){ // Initialize the sound Object 
    
    let beep = undefined;
    
    if(option){
        beep = new Audio("./Sounds/beep_1.mp3");
        beep.play();
    }
    else{
        beep = new Audio("./Sounds/incorrect.mp3");
        beep.play();
    }
}

function createNote(type, x_pos, y_pos){ // Create a note based to the type parameter and position it based on the given parameters and add it to the noteArray to keep track of all notes that exist on the staff.
    
    // Initial Offset Values

    const wholeNote_X_positionOffset = 130;
    const wholeNote_Y_positionOffset = 35;
    const quarter_note_X_positionOffset = 25;
    const quarter_note_Y_positionOffset = -20;
    const half_note_X_positionOffset = 120;
    const half_note_Y_positionOffset = -19;

    // Note Structure Elements

    const note_box =  document.createElement("div");
    const note_body = document.createElement("div");
    const note_stem = document.createElement("div");
    const legerLine = document.createElement("div");

    note_body.classList.add("note_body");
    note_stem.classList.add("note_stem");

    note_box.appendChild(note_body);
    note_box.appendChild(note_stem);
    note_box.appendChild(legerLine);
    

    if(type === 2) // Create a Half Note
    {
        note_box.classList.add("half_note");
        note_box.classList.add("note");
        staff_area.appendChild(note_box);

        note_box.style.transform = `translate(${half_note_X_positionOffset + x_pos}px,${half_note_Y_positionOffset + y_pos}px)`;

    }


    else if(type === 1){ // Create a Whole Note
        
        note_box.classList.add("whole_note");
        note_box.classList.add("note");
        staff_area.appendChild(note_box);

        note_box.style.transform = `translate(${wholeNote_X_positionOffset + x_pos}px,${wholeNote_Y_positionOffset + y_pos}px)`;

    }
    else{ // Create a Quarter Note
        
        if(blackNotes == false){ // Set the color of the newly created note to the color specified by the RGB arguments
            
            note_body.style.background =  `linear-gradient(145deg, rgb(${rgb_Ui.r - 20}, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20}), rgb(${rgb_Ui.r + 20 }, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20})`;
            note_body.style.boxShadow = `2px 4px 5px rgb(${rgb_Ui.r - 27}, ${rgb_Ui.g - 47}, ${rgb_Ui.b - 46}), -4px -4px 10px rgb(${rgb_Ui.r + 27}, ${rgb_Ui.g + 47}, ${rgb_Ui.b + 46})`;
            
            note_stem.style.background = `linear-gradient(145deg, rgb(${rgb_Ui.r - 20}, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20}), rgb(${rgb_Ui.r + 20 }, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20})`;
            note_stem.style.boxShadow = `4px 2px 4px rgb(${rgb_Ui.r - 27}, ${rgb_Ui.g - 42}, ${rgb_Ui.b - 41}), -3px -7px 8px rgb(${rgb_Ui.r + 25}, ${rgb_Ui.g + 42}, ${rgb_Ui.b + 41})`;

            legerLine.classList.add("ledgerOff");
            legerLine.style.background = `linear-gradient(180deg, rgba(98,57,57,0), rgba(234,77,77,0))`;   
            legerLine.style.boxShadow = `1px 3px 3px rgb(${rgb_Ui.r - 80}, ${rgb_Ui.g - 50}, ${rgb_Ui.b - 50}), -3px -3px 3px rgb(${rgb_Ui.r + 15}, ${rgb_Ui.g + 38}, ${rgb_Ui.b + 38})`;


        }else{ // Set the color of the newly created note to black
           
            note_body.style.background = "black";
            note_body.style.boxShadow = "none";
            
            note_stem.style.background = "black";
            note_stem.style.boxShadow = "none";

            legerLine.style.boxShadow = "none";
            legerLine.style.background = "black";
        }

        // Assign the CSS styles to each note 

        note_box.classList.add("note_box");

        // Add note to the staff

        scroll_area.appendChild(note_box);

        // Add Leger line is below the trebel cleft

       

        if( (y_pos === 110) || (y_pos === 230)){

            legerLine.classList.remove("ledgerOff");
            legerLine.classList.add("ledgerOn");
            
            
        }
        
        
        
        // Position the Note on the staff based on the X and Y Position arguments

        note_box.style.transform = `translate(${quarter_note_X_positionOffset + x_pos + noteOffset }px,${quarter_note_Y_positionOffset + y_pos}px)`;
        
    }
    
    
    
    // Add the newly created note to the list of created notes
    noteArray.push(note_box);

    //console.table(noteArray, "Note created");  // Debug code 

}

function intervalCalc(){ // Take two notes and determine the interval between then and store it into an array

    if( (notePositions.length !== 1)){ // Check to see if more than one note exists
                
        for(let note1 = 0; note1 < (notePositions.length  - 1); ++note1){  // compare the first note to the second note and work towards the right of the staff
    
            let interval = 0; 

            interval = (notePositions[note1].y - notePositions[note1+1].y) 
          
            // Add or subtract 10 based on sign then divide by 10 in order to better align with the actual interval values
            
            if( interval > 0){
                
                interval += 10;
                interval /= 10;
            }
            else if(interval < 0){
               
                interval -= 10;
                interval /= -10;
            }

            switch(interval){

                case 0: {
                    interval = "1st";
                    break;
                }

                case 2: {
                    interval = `${interval}nd`;
                    break;
                }

                case 3: {
                    interval = `${interval}rd`;
                    break;
                }

                default: {
                    interval = `${interval}th`
                }

            }
            if((note1 != maxNotesPerStaff)){

                calculatedIntervals.push(interval);

            }
            
        }
    
    }else{

        // Inform the user that there must be at least 2 note on the staff

    }
   
    console.log(calculatedIntervals);

}

function staffNoteGen(count){

    let randInterval = 0;
    let noteType = 0;
    const startPos = 10 * Math.floor(Math.random() * 6); // Randomize the start position of the starting note
    
    const centerNoteOffset = ((practice_area_width / 2.72) >> 0);

    const noteCutOff = maxNotesPerStaff + 1; // Provide a buffer for the notes before they wrap.
    
    console.log(noteCutOff); // Debug Code

    if(randomNoteCount){ // User Setting Toggle use of random note count
        
        count = (Math.floor(Math.random() *( (maxNotesPerStaff * 2) - 3)) + 3); // Generate a number between 3 and the maximum number of notes per staff
    
    }

    if(focusMode){
        
        // Generate a single note with a random Initial position
        randInterval = Math.floor(Math.random() * intervalRange); // Generate a random interval
        noteType = Math.floor(Math.random() * 3); // Generate a whole note, half note, or quarter note at random

        const focusInterval = Math.floor(Math.random() * 5)

        if(focusInterval < 3){

            createNote(0,centerNoteOffset,startPos + lineOffset*intervalArray[randInterval]);
            notePositions.push({x:0,y:lineOffset*intervalArray[randInterval]});
        }

        switch(focusInterval){

            case 0:{ // 3rd Interval

                createInterval(startPos,centerNoteOffset,count,2,6)

                break;

            }

            case 1:{ // 4th Interval
                    
                
                createInterval(startPos,centerNoteOffset,count,3,6)

                break;

            }

            case 2:{ // 5th Interval


                createInterval(startPos,centerNoteOffset,count,4,6)
                    
                break;
               }

            case 3:{ // 6th Interval

              
                let staticStartPos = 10  * (Math.floor(Math.random() * 7)); // First note position on the staff to server a guide for all other notes
               

                for(let f=0; ((f < count) && (f < 6)); ++f){ // Alternate between position that result in and interval of a 6th
                   
                    // The indexes of intervalArray are static due to the limited range of staff space this interval leaves

                    if(f % 2){
                        createNote(0,centerNoteOffset + noteDistance*f, staticStartPos + lineOffset*intervalArray[0]);
                        notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[0]});
                    }else{
                        createNote(0,centerNoteOffset + noteDistance*f, staticStartPos +lineOffset*intervalArray[5]);
                        notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[5]});
                    }
                   
               }

                break;

            }

            case 4:{ // 7th Interval

               

                let staticStartPos = 10  * (Math.floor(Math.random()  * 6)); // First note position on the staff to server a guide for all other notes
               

                for(let f=0; ((f < count) && (f < 6)); ++f){ // Alternate between position that result in and interval of a 7th
                   
                    // The indexes of intervalArray are static due to the limited range of staff space this interval leaves

                    if(f % 2){
                        createNote(0,centerNoteOffset + noteDistance*f, staticStartPos + lineOffset*intervalArray[0]);
                        notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[0]});
                    }else{
                        createNote(0,centerNoteOffset + noteDistance*f, staticStartPos +lineOffset*intervalArray[6]);
                        notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[6]});
                    }
                   
               }

                break;

            }


            default: {
                console.log("Invalid Focus Interval");
            }

        }

        

    }

    else if(singleMode){ // Single Mode. All notes are aligned in the center of the staff 
  
       

        for(let s=0; s < count; ++s){

            if(s < 6){

                randInterval = Math.floor(Math.random() * intervalRange); // Generate a random interval
                noteType = Math.floor(Math.random() * 3); // Generate a whole note, half note, or quarter note at random
    
                createNote(0,centerNoteOffset+noteDistance*s,40 + lineOffset*intervalArray[randInterval]);
                notePositions.push({x:noteDistance*s,y:lineOffset*intervalArray[randInterval]});

            }

        }

    }
   
    else if(memoryMode){  
        /* Memory Mode will display a set of notes and then make them invisible after a certain time interval passes, then the user must enter the correct interval. */

        for(let m=0; m < count; ++m){

             randInterval = Math.floor(Math.random() * intervalRange); // Generate a random interval
             noteType = Math.floor(Math.random() * 3); // Generate a whole note, half note, or quarter note at random
        

            createNote(0,centerNoteOffset+noteDistance*m,40 + lineOffset*intervalArray[randInterval]);

            notePositions.push({x:noteDistance*m,y:lineOffset*intervalArray[randInterval]});

        }

        
       

        setTimeout(()=>{

            for(let d=0; d < noteArray.length; ++d){

                noteArray[d].style.opacity = "0";

            }
        
            const time = new Date(); // Create a point in time to serve as the start of the notes being shown on the screen.

            let timeDifference = (stamp2.time - time) + memoryTime;
        
            console.log("Time Difference", timeDifference);
        
            stamp2.time = time;


        },memoryTime);
    }
    
    else if(scrollMode){

          // Generate notes only in the treble cleft

          if(autoAnswerInterval_id != undefined){
                clearInterval(autoAnswerInterval_id);
          }

          for(let i = 0; i < count; ++i){ // Create a Note each iteration with an assigned interval
          
              randInterval = Math.floor(Math.random() * intervalRange); // Generate a random interval
              noteType = Math.floor(Math.random() * 3); // Generate a whole note, half note, or quarter note at random
                  
              if(i < noteCutOff){ // Add notes to the treble cleft  
                  
                  createNote(0,noteDistance*i,startPos + lineOffset*intervalArray[randInterval]);
                  
              } 
            
              // Add the calculated position of the created note to the list of note positions
              notePositions.push({x:noteDistance*i,y:lineOffset*intervalArray[randInterval]});
           
          }

         // Scroll all notes to the left of the staff area 
        scrollAnimations.push(gsap.fromTo(scroll_area,{x:"100%"},{x:`-${practice_area_width}px`, ease:"none", duration: scrollSpeed})); 

          autoAnswerInterval_id = setInterval(autoAnswer,100);

        if(scrollSpeed < 3){ 
            scrollSpeed = 3;
        }
        else{ 
            scrollSpeed -= .25;
        }

    }
    
    else {

          for(let i = 0; i < count; ++i){ // Create a Note each iteration with an assigned interval
          
              randInterval = Math.floor(Math.random() * intervalRange); // Generate a random interval
              noteType = Math.floor(Math.random() * 3); // Generate a whole note, half note, or quarter note at random
                  
              if(i < noteCutOff){ // Add notes to the treble cleft  
                  
                  createNote(0,noteDistance*i,startPos + lineOffset*intervalArray[randInterval]);
                  
              }else{// Maximum notes on the top staff reached (Treble cleft) begin adding notes to the base cleft
                  
                  if(i < (noteCutOff * 2)){
                      createNote(0,noteDistance*(i - (noteCutOff)),(startPos+120) + lineOffset*intervalArray[randInterval]);
                  }
      
              }
      
              // Add the calculated position of the created note to the list of note positions
              notePositions.push({x:noteDistance*i,y:lineOffset*intervalArray[randInterval]});
           
          }

      }

    highlightNote(targetNotes); // Highlight the current interval to be answered

    intervalCalc(); // Calculate the intervals of all notes generated and add them to a list of calculated intervals
    
}

function autoAnswer(){

    let targetNoteIndex =  undefined;

    for(let n=0; n < noteArray.length; ++n){ // Find the left most highlighted note

        if(noteArray[n].children[0].style.background == hightlightColor){
            targetNoteIndex = n;
        }
    }


    // Add the highlighted notes xPos to the scroll_area xPos (to serve as the offset) 

    const noteScroll_Offset = getXtransform(scroll_area) + notePositions[targetNoteIndex].x + 55; 

    if(noteScroll_Offset < redBarPosition){ // Detect if the highlighted note has pass the red Bar

        sound(false);

        updateIntervalData(calculatedIntervals[0],false);

        updateChart(chartObjs,intervalData);

        calculatedIntervals.shift();
        
        highlightNote(++targetNotes);
        
        clear();

        if(calculatedIntervals.length === 0){ // When the calculated Interval Array is empty clear the staff and generate new notes.
            targetNotes = 0;
            clearStaff();
            clearIntervals();
            staffNoteGen(totalStaffNotes);
        }
    }
}

function clear(){ // Reset all button color to their initial values

    for(let b=0; b < buttons.length; ++b ){

        buttons[b].style.background =  `none`;

    }

}

function clearStaff(){ // Remove all dom elements with the class "note" from the html as well as clear out the noteObject array.

    const notes = document.querySelectorAll(".note_box"); // Get all created notes

    for(let targetNote=0; targetNote < notes.length; ++targetNote){ 

        notes[targetNote].remove();

    }

    noteArray.length = 0; // Clear out the array
    targetNotes = 0; // Reset the highted interval tracker count to 0

}

function clearIntervals(){ // Clear the previously stored intervals as well as any other notes that need to be calculated.

    calculatedIntervals.length = 0; 
    notePositions.length = 0;

}

function preserveCSS(element){

    let cssStyles = {background: "", boxShadow: ""};

    cssStyles.background = element.style.background;
    cssStyles.boxShadow  = element.style.boxShadow;

    return cssStyles;

}

function highlightNote(targetNotes){ // Highlight the two notes in the current interval.

    // Determine whether you are at the end of the array of notes on screen or not

    if((targetNotes + 1) < noteArray.length){
        
        // Jump to the base cleft Shift the highlighted interval to the base cleft 
        if(targetNotes >= maxNotesPerStaff) 
            targetNotes += 1;

        // Change the color of the two notes referenced by the value of (targetNotes) and (targetNotes + 1) the value of targetNotes will 
        // be incremented by one on each call thus shifting the highlighted notes to the right by one.


        // get the dom object of the first highlighted note
        const noteStem1 = noteArray[targetNotes].children[0];
        const noteBody1 = noteArray[targetNotes].children[1];
        const noteLedger1 = noteArray[targetNotes].children[2];

        if(!((targetNotes + 1) >= noteArray.length)){
            
            // get the dom object of the second highlighted note
            const noteStem2 = noteArray[targetNotes + 1].children[0];
            const noteBody2 = noteArray[targetNotes + 1].children[1];
            const noteLedger2 = noteArray[targetNotes + 1].children[2];

            if(noteGlow === true){

                // Highlight first note
                noteStem1.style.background = hightlightColor;
                noteStem1.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteBody1.style.background = hightlightColor;
                noteBody1.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteLedger1.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteLedger1.style.background = hightlightColor;
               

                // Highlight second note
                noteStem2.style.background = hightlightColor;
                noteStem2.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteBody2.style.background = hightlightColor;
                noteBody2.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteLedger2.style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteLedger2.style.background = hightlightColor;

            }else{

                // Highlight first note without glow
                noteStem1.style.background = hightlightColor;
                noteStem1.style.boxShadow = `none`;
                noteBody1.style.background = hightlightColor;
                noteBody1.style.boxShadow = `none`;
                noteLedger1.style.background = hightlightColor;
                noteLedger1.style.boxShadow = `none`;

                // Highlight second note without glow
                noteStem2.style.background = hightlightColor;
                noteStem2.style.boxShadow = `none`;
                noteBody2.style.background = hightlightColor;
                noteBody2.style.boxShadow = `none`;
                noteLedger2.style.background = hightlightColor;
                noteLedger2.style.boxShadow = `none`;

            }

            // Once a note has been highlighted set it back to it's original color
            if(targetNotes > 0){
                
                // Get the dom object of the previously highlighted note if it exists
                const noteStem = noteArray[targetNotes - 1].children[0];
                const noteBody = noteArray[targetNotes - 1].children[1];
                const noteLedger = noteArray[targetNotes - 1].children[2];

                // Assign the css styles of the original note
                noteStem.style.background = stemStyle.background;
                noteStem.style.boxShadow  = stemStyle.boxShadow;
                noteBody.style.boxShadow  = bodyStyle.boxShadow;
                noteBody.style.background = bodyStyle.background;
                noteLedger.style.background = ledgerStyle.background;
                noteLedger.style.boxShadow = ledgerStyle.boxShadow;

                if(targetNotes === maxNotesPerStaff+1){
 
                    const noteStem = noteArray[targetNotes - 2].children[0];
                    const noteBody = noteArray[targetNotes - 2].children[1];
                    const noteLedger = noteArray[targetNotes - 2].children[2];

                    if(blackNotes){
                        
                        noteStem.style.background = "black";
                        noteStem.style.boxShadow = "none";
                        
                        noteBody.style.background = "black";
                        noteBody.style.boxShadow = "none";
                        
                        noteLedger.style.boxShadow = "none";
                        noteLedger.style.background = "black";
                        
                    }else{
                        
                        // Assign the css styles of the original note
                        noteStem.style.background = stemStyle.background;
                        noteStem.style.boxShadow  = stemStyle.boxShadow;
                        noteBody.style.boxShadow  = bodyStyle.boxShadow;
                        noteBody.style.background = bodyStyle.background;
                        noteLedger.style.background = ledgerStyle.background;
                        noteLedger.style.boxShadow = ledgerStyle.boxShadow;
                        
                    }
               
                }
                
                // Set notes and ledger lines to the color black
                if(blackNotes){

                    noteStem.style.background = "black";
                    noteStem.style.boxShadow = "none";
                    
                    noteBody.style.background = "black";
                    noteBody.style.boxShadow = "none";

                    noteLedger.style.boxShadow = "none";
                    noteLedger.style.background = "black";

                }
            }
    }
    
}

   
}

function keybrdInterval(key1,key2,time){

    console.log("Time between key press:" ,key1, " and ", key2,time)
    
    // Only allow key presses that are as fast or faster than 400ms
    if((( time >= -300) && (time <= -35)) && (key1 === 'q' || key1 === '[')){

        // Calculate the interval based on the keys pressed (The q and [ keys are root keys)

        switch(key2){
           
            case 'q': 
            case '[':{ // Interval 1st


                return "1st";

            }
            case 'w': 
            case 'p':{ // Interval 2nd

                return "2nd";

            }
            
            case 'e': 
            case 'o':{ // Interval 3rd

                return "3rd";

            }

            case 'r': 
            case 'i':{ // Interval 4th

                return "4th";

            }

            case 'v': 
            case 'm':{ // Interval 5th

                return "5th";

            }

            case 'b':{ // Interval 6th

                return (key1 === 'q') ? "6th"  : "7th";
            
            }

            case 'n':{

                return (key1 === 'q') ? "7th" : "6th";

            }

            default:{
                return "1st";
            }

        }
    }

    return "invalid Time or Interval"

}

function updateChart(chartObjs,intervalData){

    for(let chart=0; chart < chartObjs.length; ++chart){

        chartObjs[chart].updateSeries([
            
            Math.floor(((intervalData[chart].c) / (intervalData[chart].c + intervalData[chart].w)) * 100)
        ])

    }

}

function fullClear(staffNotes){

        clearStaff();
        clearIntervals();
        staffNoteGen(staffNotes);

}

function rangedSubstr(string,char1,char2){ // Get the string between two given characters

  let newString = "";
  
  for(let c=0; c < string.length; ++c){
    
    if(string[c] == char1){
      
      while(string[c+1] != char2){
      	++c;
        newString += string[c];
      }

      return newString;
    }
  }
   return "";   
}

function getXtransform(target){

    return Number(rangedSubstr(target.style.transform, '(', 'p'));


}

function updateIntervalData(interval, option){

    if(option){

        switch(interval){ // Increment the amount of correct intervals by one

                    case "1st":{

                        ++intervalData[0].c
                        break;

                    }

                    case "2nd":{

                        ++intervalData[1].c
                        break;

                    }

                    case "3rd":{

                        ++intervalData[2].c
                        break;

                    }

                    case "4th":{

                        ++intervalData[3].c
                        break;

                    }

                    case "5th":{

                        ++intervalData[4].c
                        break;

                    }

                    case "6th":{

                        ++intervalData[5].c
                        break;

                    }

                    case "7th":{

                        ++intervalData[6].c
                        break;

                    }

                }



    }
    else{
        switch(interval){ // Increment the amount of correct intervals by one

                    case "1st":{

                        ++intervalData[0].w
                        break;

                    }

                    case "2nd":{

                        ++intervalData[1].w
                        break;

                    }

                    case "3rd":{

                        ++intervalData[2].w
                        break;

                    }

                    case "4th":{

                        ++intervalData[3].w
                        break;

                    }

                    case "5th":{

                        ++intervalData[4].w
                        break;

                    }

                    case "6th":{

                        ++intervalData[5].w
                        break;

                    }

                    case "7th":{

                        ++intervalData[6].w
                        break;

                    }

                }

 
    }
}

function createInterval(startPos,centerNoteOffset,count,targetInterval, limit){

    for(let f=1; ((f < count) && (f < limit)); ++f){ // We start at 1 due to the fist note position being created before this loops starts
        
        // Track the most recent notes y position
        let prevNotePos = ((notePositions[((notePositions.length)-1)].y) / 10);
    
        // Randomly put notes in a position higher or lower than the previous note
        direction = Math.floor(Math.random() * 2);
    
        
        if(direction){

            if(prevNotePos+targetInterval <= intervalArray.length-1){
                // Based on the most recently added note generate a note that resolves to a 3rd interval
                    createNote(0,centerNoteOffset + noteDistance*f,startPos + lineOffset*intervalArray[prevNotePos+targetInterval]);
                    notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[prevNotePos+targetInterval]});

            }
            else{
                // Based on the most recently added note generate a note that resolves to a 3rd interval
                createNote(0,centerNoteOffset + noteDistance*f,startPos + lineOffset*intervalArray[prevNotePos-targetInterval]);
                notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[prevNotePos-targetInterval]});
            }


        }
        else{
            if(prevNotePos-targetInterval >= 0){
                    // Based on the most recently added note generate a note that resolves to a 3rd interval
                    createNote(0,centerNoteOffset + noteDistance*f,startPos + lineOffset*intervalArray[prevNotePos-targetInterval]);
                    notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[prevNotePos-targetInterval]});
            }
            else{
                // Based on the most recently added note generate a note that resolves to a 3rd interval
                createNote(0,centerNoteOffset + noteDistance*f,startPos + lineOffset*intervalArray[prevNotePos+targetInterval]);
                notePositions.push({x:noteDistance*f,y:lineOffset*intervalArray[prevNotePos+targetInterval]});
            }
        }
        
    }


}

 


// Events

// Keyboard Interval Detector

window.addEventListener("keydown", (e)=>{
    
    // Filter out all other keys except q,w,e,r, v, m, i, o, p, and [
    if(( e.key === 'q' || e.key ===  'w' || e.key === 'e' || e.key === 'r' || e.key === 'v' || e.key === 'b' || e.key === 'n' || e.key === 'm' || e.key === 'i' || e.key === 'o' || e.key === 'p' || e.key === '[')){
        
        const time = new Date(); // Create a point in time to serve the start of a button press.
        
        let timeDifference = stamp.time - time;

        // Find the difference between first button press and the most recent
        
        // Implement the code to answer a interval here
        
        if(stamp.keyPressed !== ""){

            const interval = keybrdInterval(stamp.keyPressed, e.key, timeDifference)

            if(interval === calculatedIntervals[0]){ 
                    
                sound(true);
              
                console.log("Correct");  // Debug code
                
                interval_total.textContent = `${++totalCorrect_intervals}`;

                updateIntervalData(interval,1); 

                updateChart(chartObjs,intervalData);

                calculatedIntervals.shift();
                
                highlightNote(++targetNotes);
                
              //  console.table(calculatedIntervals); // Debug code
                clear();
            
                // When the calculated Interval Array is empty clear the staff and generate new notes.
                if(calculatedIntervals.length === 0){ 
                    targetNotes = 0;
                    clearStaff();
                    clearIntervals();
                    staffNoteGen(totalStaffNotes);
                }
                
               
            
            }
            else if(interval !== "invalid Time or Interval"){  // When the user selects the incorrect interval flash the button red.
                
                //buttons[btn].style.background = "rgba(255,60,60,.8)"; // fix  this
                
                console.log("Incorrect"); // Debug code
            
                sound(false);
            
                updateIntervalData(interval,0); 

                updateChart(chartObjs,intervalData);

                for(let button=0; button < buttons.length; ++button){

                    if(buttons[button].textContent === interval){
                        buttons[button].style.background = "rgba(255,60,60,.8)";
                    }

                }

                //    console.table(calculatedIntervals); // Debug code
               
            }
        }

        stamp.time = time; // most recent button press time
        stamp.keyPressed = e.key; // Key most recently pressed

    }
});

staff_area.addEventListener("click", (e)=>{

    html.requestFullscreen();
    document.exitFullscreen();

});

rangeSlider[0].addEventListener("input", (e)=>{ // Update the slider value for the total notes on the staff, and update the staff to reflect the changes.

    var_totalNotes.textContent = e.currentTarget.value;

    totalStaffNotes = Number(var_totalNotes.textContent);

    clear();    
    
    fullClear(var_totalNotes.textContent)

    // console.table(totalStaffNotes); // Debug code 
    

});

rangeSlider[1].addEventListener("input", (e)=>{ // Update the slider value for the note distance on the staff, and update the staff to reflect the changes.

    var_noteDistance.textContent = e.currentTarget.value;

    noteDistance = Number(var_noteDistance.textContent);


    fullClear(totalStaffNotes);


});

rangeSlider[2].addEventListener("input", (e)=>{

    var_maxNotesPerStaff.textContent = e.currentTarget.value;

    maxNotesPerStaff = Number(var_maxNotesPerStaff.textContent);
   
   fullClear(totalStaffNotes);

});

rangeSlider[3].addEventListener("input", (e)=>{

    var_noteOffset.textContent = e.currentTarget.value;


    noteOffset = Number(var_noteOffset.textContent);

 
    clearStaff();
    clearIntervals();
    staffNoteGen(totalStaffNotes);

   

});

rangeSlider[4].addEventListener("input", (e)=>{

    var_intervalRange.textContent = e.currentTarget.value;


    intervalRange = Number(var_intervalRange.textContent);

 
    fullClear(totalStaffNotes);

   

});

rangeSlider[5].addEventListener("input", (e)=>{

    var_scrollSpeed.textContent = e.currentTarget.value;


    scrollSpeed = Number(var_scrollSpeed.textContent);

 
    fullClear(totalStaffNotes);

   

});


rangeSlider[6].addEventListener("input", (e)=>{


    var_barPosition.textContent = (e.currentTarget.value * .001).toFixed(1);

    scrollSpeed = Number(var_scrollSpeed.textContent); // Prevent modification to the scroll speed after altering the redBar location

    redBarPosition = e.currentTarget.value;

    gsap.to(redBar,{x:`${redBarPosition}`});


 
    fullClear(totalStaffNotes); // Might remove this in this special case

   

});

rangeSlider[7].addEventListener("input", (e)=>{


    memoryTime = Number((e.currentTarget.value * 2));
 
    var_memoryTime.textContent = ((e.currentTarget.value * 2) / 1000).toFixed(1);

    fullClear(totalStaffNotes); // Might remove this in this special case

   

});


stats_button.addEventListener("click",()=>{ // show stats box

    gsap.fromTo(chartContainer, {opacity:0}, {opacity:1, duration:.5})
    chartContainer.classList.add("open");
    
})

resetStats.addEventListener("click", (e)=>{

    e.stopPropagation();

    for(let s=0; s < intervalData.length; ++s){
        intervalData[s].c = 0;
        intervalData[s].w = 0;
        totalCorrect_intervals = 0;
        interval_total.textContent = `${totalCorrect_intervals}`;
    }

    updateChart(chartObjs,intervalData);

})

chartContainer.addEventListener("click",()=>{
    
    chartContainer.classList.remove("open");

})

settings_button.addEventListener("click", (e)=>{ // show settings menu 

    overlay.style.display = `block`;
    settings_area.style.display = `flex`;

});


overlay.addEventListener("click", (e)=>{ // Remove stats box
    
   
    overlay.style.display = `none`;

})

settings_area.addEventListener("click", (e)=>{ // Prevent variable changes within the settings menu to cause the settings menu to close

    e.stopPropagation();

});


checkBox[0].addEventListener("click", (e)=>{

    showStaff = !showStaff; // The boolean value

    
    if(showStaff){ // Display a picture of a black and white staff on the screen
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
        staff_area.style.opacity = "none";
        clefts[0].style.opacity = 0;
        clefts[1].style.opacity = 0;
        staff_area.style.background = "url('./images/extended_staff.png')";
    }
    else{ // Display the colored staff on the screen
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
        staff_area.style.background = "url('./images/extended_staff_no_clefts.png')";
    }

});


checkBox[1].addEventListener("click", (e)=>{

    blackNotes = !blackNotes; // Toggle the boolean value
    
    if(blackNotes){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });

        for(let note=0; note < noteArray.length; ++note){
           
            if(noteArray[note].children[0].style.background != hightlightColor){

                noteArray[note].children[0].style.background = "black";
                noteArray[note].children[0].style.boxShadow = "none";
                noteArray[note].children[1].style.background = "black";
                noteArray[note].children[1].style.boxShadow = "none";
                noteArray[note].children[2].style.background = "black";
                noteArray[note].children[2].style.boxShadow = "none";

            }

        }
       
    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
       
        for(let note=0; note < noteArray.length; ++note){

            if(noteArray[note].children[0].style.background != hightlightColor){

                noteArray[note].children[0].style.background =  `linear-gradient(145deg, rgb(${rgb_Ui.r - 20}, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20}), rgb(${rgb_Ui.r + 20 }, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20})`;
                noteArray[note].children[0].style.boxShadow = `2px 4px 5px rgb(${rgb_Ui.r - 27}, ${rgb_Ui.g - 47}, ${rgb_Ui.b - 46}), -4px -4px 10px rgb(${rgb_Ui.r + 27}, ${rgb_Ui.g + 47}, ${rgb_Ui.b + 46})`;
                noteArray[note].children[1].style.background = `linear-gradient(145deg, rgb(${rgb_Ui.r - 20}, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20}), rgb(${rgb_Ui.r + 20 }, ${rgb_Ui.g + 20}, ${rgb_Ui.b + 20})`;
                noteArray[note].children[1].style.boxShadow = `4px 2px 4px rgb(${rgb_Ui.r - 27}, ${rgb_Ui.g - 42}, ${rgb_Ui.b - 41}), -3px -7px 8px rgb(${rgb_Ui.r + 25}, ${rgb_Ui.g + 42}, ${rgb_Ui.b + 41})`
                noteArray[note].children[2].style.background = `linear-gradient(180deg, rgba(98,57,57,0), rgba(234,77,77,0))`;   
                noteArray[note].children[2].style.boxShadow = `1px 3px 3px rgb(${rgb_Ui.r - 80}, ${rgb_Ui.g - 50}, ${rgb_Ui.b - 50}), -3px -3px 3px rgb(${rgb_Ui.r + 15}, ${rgb_Ui.g + 38}, ${rgb_Ui.b + 38})`;

            }

        }

    }

});

checkBox[2].addEventListener("click", (e)=>{

    noteGlow = !noteGlow; // toggle the boolean value

    
    if(noteGlow){ // // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
       
        for(let note=0; note < noteArray.length; ++note){

            if(noteArray[note].children[0].style.background == hightlightColor){

                noteArray[note].children[0].style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteArray[note].children[1].style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;
                noteArray[note].children[2].style.boxShadow = `0px 0px 20px 2px ${hightlightColor}`;

            }

        }

    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
       
        for(let note=0; note < noteArray.length; ++note){

            if(noteArray[note].children[0].style.background == hightlightColor){
    
                noteArray[note].children[0].style.boxShadow = "none";
                noteArray[note].children[1].style.boxShadow = "none";
                noteArray[note].children[2].style.boxShadow = "none";
    
            }


        }
    }
});

checkBox[3].addEventListener("click", (e)=>{

    randomNoteCount = !randomNoteCount; // toggle the boolean value

    
    if(randomNoteCount){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
       
    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
       
    }

});

checkBox[4].addEventListener("click", (e)=>{ // Activate Single mode

    singleMode = !singleMode; // toggle the boolean value

    
    if(singleMode){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
       
        clefts[1].style.display = "none";
        fullClear(totalStaffNotes);
    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
       
        clefts[1].style.display = "block";

        fullClear(totalStaffNotes);

    }

});

checkBox[5].addEventListener("click", (e)=>{ // Activate Focus mode

    focusMode = !focusMode; // toggle the boolean value

    
    if(focusMode){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
       
        fullClear(totalStaffNotes); // Clear all notes and arrays
    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
    
        fullClear(totalStaffNotes); // Clear all notes and arrays

    }

});

checkBox[6].addEventListener("click", (e)=>{ // Activate scroll mode

    scrollMode = !scrollMode; // toggle the boolean value

    
    if(scrollMode){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
        redBar.style.display = "block";
        fullClear(totalStaffNotes); // Clear all notes and arrays
    }
    else{ // Move the checkbox slider into the disabled position
        
        if(autoAnswerInterval_id != undefined){
            clearInterval(autoAnswerInterval_id);
          }

        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
        
        for(let animation = 0; animation < scrollAnimations.length; ++animation){

        scrollAnimations[animation].kill(); // Kill all scrolling Animations

        }

        gsap.to(scroll_area, {x:0});
        redBar.style.display = "none";
        fullClear(totalStaffNotes); // Clear all notes and arrays

    }

});


checkBox[7].addEventListener("click", (e)=>{ // Activate Memory Mode


    memoryMode = !memoryMode; // toggle the boolean value

    
    if(memoryMode){ // Move the checkbox slider into the enabled position
        gsap.to(e.currentTarget.children[0], {x: 32, duration: .25 });
       
        fullClear(totalStaffNotes); // Clear all notes and arrays
    }
    else{ // Move the checkbox slider into the disabled position
        gsap.to(e.currentTarget.children[0], {x: 0, duration: .25 });
    
        fullClear(totalStaffNotes); // Clear all notes and arrays

    }


});

fullscreen_button.addEventListener("click", (e)=>{ // Give the user access to the settings menu.

    html.requestFullscreen();
    document.exitFullscreen();

});

for(let c=0; c < chartsArray.length; ++c){ // Load blank RadialBar Charts for each interval
    
    const options = {
        chart: {
            id: `chart${c}`,
            height: 200,
            type: 'radialBar',
        },
       
        plotOptions:{
            radialBar:{
                hollow:{
                    size: '50px',
                },
                
                dataLabels:{
                   
                   name:{
                    color: "black",
                    fontSize: "1.5em",
                    fontWeight: "200",
                    
                   },
                   value:{
                       show: true,
                       fontSize: "1em",
                       color: "rgba(0,0,0,1)"
                    },
                },
               
            }
        },
        background: ["red"],
        colors: ["rgba(133,133,133,1)"],
        series: [0],
        labels: [chartLabels[c]],
      }

      const chart = new ApexCharts(chartsArray[c], options);
      
      chartObjs.push(chart);
      chart.render();


  }

  

for(let btn =0; btn < buttons.length; ++btn) // Assign the click events to each existing button within the button area.
{
   

    buttons[btn].addEventListener("click", (e) =>{
        console.log(buttons[btn].textContent); // Debug code
        
        for(let i=0; i < calculatedIntervals.length; ++i){

           
            if(buttons[btn].textContent === calculatedIntervals[0]){ // When the user selects the correct interval flash the button green.
                
                sound(true);
                buttons[btn].style.background = "#3be33b";
                console.log("Correct");  // Debug code
               
                interval_total.textContent = `${++totalCorrect_intervals}`;
                
                updateIntervalData(buttons[btn].textContent,1);

                updateChart(chartObjs,intervalData);

                calculatedIntervals.shift();
                
                highlightNote(++targetNotes);
                
              //  console.table(calculatedIntervals); // Debug code
                clear();
            
                if(calculatedIntervals.length === 0){ // When the calculated Interval Array is empty clear the staff and generate new notes.
                    targetNotes = 0;
                    clearStaff();
                    clearIntervals();
                    staffNoteGen(totalStaffNotes);
                }
                
                break;
            
            }
            else{  // When the user selects the incorrect interval flash the button red.
                buttons[btn].style.background = "rgba(255,60,60,.8)";

                sound(false);
                
                console.log("Incorrect"); // Debug code
                console.log(buttons[btn].textContent)
                
                updateIntervalData(buttons[btn].textContent,0) 

                updateChart(chartObjs,intervalData);

            //    console.table(calculatedIntervals); // Debug code
                break;
            }

        }

    } );

}


  



initalSettings();
staffNoteGen(totalStaffNotes);

console.table(notePositions); // Debug code
console.log(calculatedIntervals); // Debug code


