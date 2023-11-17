# Mobile Navigation Based on Material UI

By Andy Ryan

## Description

This is a mobile navigation with a design based on Material UI.

## Useage

Begin with a **ul** in your html code containing **li** items that each utilize an **a** element containing first an **img** of the icon you wish to display in the popup menu. (circle icons recommended) followed by a brief bit of text that will display upon hovering over the icon.

Put the function inside of an event listener for DOM content load. The function takes three arguments (all with hashes in front):

1. The ID of the aforementioned **ul**
2. The hex color you want as a background for the individual menu item icons

- Use a clear color if you don't want a background

3. The hex color you want as a background for the toggle icon that will open the menu

- Use a clear color if you don't want a background
