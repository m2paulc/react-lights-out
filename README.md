# Lights Out

This exercise provides a chance to work with React events where the state and events happen in different classes.

## The Game

Lights Out is a logic/puzzle game, played on a grid of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off. I am personally TERRIBLE at this game. I hope you are better at playing it than I am!

You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbors).

## Plan

Before reading further, take a moment to think about how you would design this, component-wise.

When the game is won, the board should not be shown, but a simple “You Won” message should show in its place.

## Default Properties

Add default properties for the board sizes and how likely it is the a light on the initial board is turned on or off.
