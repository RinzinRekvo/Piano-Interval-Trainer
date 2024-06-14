> The goal of this project is to create a program that helps the user practice piano note intervals

# Core Functionality 

The staff is going to be an image contained in a `<element>`, and the notes are going to be positioned to match the lines and spaces on the staff (FACE). 

Music notes are going to be either vector images or canvas images overladed on top of the staff image and positioned based on their x-position and y-position. **Note locations are going to be stored in an array.** 

This program displays notes from left to right *(based on the locations in the array)*

A line is going to move across the screen and the user must stay ahead of it by identifying the correct interval before the end of the measure or musical piece.

The user will have the ability to click buttons that specify the interval or use the keyboard.

# UI

Take inspiration from the website musictheory.com

# To-do 

[ 100% ] clean up the for loop and the call to createNote().

[ 100% ] create a clear button function.

[ 100% ] create an infinite mode

[ 100% ] create a clear staff notes function

[ 100% ] Fix the random note type in the function staffNoteGen() to work with half notes

[ 100% ] implement a slide out settings menu with radial buttons that allow the user to customize the interval practice

[ 100% ] Implement note coloring for the current interval

[ 100% ] implement color changing background in js 

[ 100% ] Find a way to wrap the notes onto the base cleft.

[ 100% ] Redesign the settings menu

[ 100% ] implement a random count of staff notes

[ 100% ] Setup all user Settings options

[ 100% ] Implement Color Picker for notes and and document

[ 100% ] Implement interval practice with keyboard keys
    Button used: 
    left-hand: q w e r v  
    Right-hand: m i o p [   (Focus on finding which buttons are pressed at the same time to trigger the same muscles used for the actual piano.)

[ 98% ] Scale users settings (note spacing, note count, note offset) based on the practice_area element width 

[ 80% ] Perform a refactor on the entire JS file and organize as you go.

[ 100% ] Implement LegerLines

[ 100% ] Perform a visual overhaul

[ 100% ] Create each note with html elements instead of using pngs (neumorphism style).

[ 100% ] Create the staff using html elements instead of using pngs (neumorphism style).

[ 100% ] Create a intro screen 

[ 100% ] Redesign the settings menu into a modal

[ 100% ] Add in functionality for a black and white staff (picture) along with black notes.

[ 100% ] Track progress of correct and incorrect intervals submitted.

[ 100% ] Create a mode that makes the notes scroll in from the side of the screen (the notes increase speed the longer the user gets them correct). Similar to the Chicken Little baseball game.

[ 90% ] Create a focus interval mode that only displays notes of one type of interval (starting at 1). As the user gets them right the interval changes from 1 to 2 to 3 and so on. Once the user gets to a certain point the intervals will begin to mix together (intervals 2 and 7 on the screen for example). This will help the user identify clusters of notes better. (Optimize each case by creating a function)

# Bugs

[ 3/18/24 ] - When changing the background color while the staff picture is active, the new background color is drawn on top of the picture. [Fixed 3/21/24]

levelGen_Obj[0]
levelGen_Obj[1]
levelGen_Obj[2]
levelGen_Obj[3]
levelGen_Obj[4]