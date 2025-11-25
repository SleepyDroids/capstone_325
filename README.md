# Character Cubby

A cozy D&D character builder and organizer for players who want a slightly more whimsical way to keep track of their adventuring parties.

> _“Rolls in progress… hold tight—Volo is dusting off your character sheets.”_

---

## Live Demo & Repos

- **Live app:** https://charactercubby.netlify.app/
- **Backend API:** https://capstone-325-un7n.onrender.com/api
- **GitHub:** https://github.com/SleepyDroids/capstone_325

---

## Overview

**Character Cubby** is my MERN-stack capstone project for the Per Scholas Software Engineering bootcamp.

It’s built for Dungeons & Dragons / TTRPG players who want to:

- Create, edit, and browse their characters in one place  
- See their heroes in a visual “cubby” instead of just walls of text  
- Enjoy a bit of in-world flavor (Volo, Xanathar, etc.) while managing sheets

This version is my **MVP for presentation** with a focus on UX and a consistent visual theme.

---

## Core Features

- **Character CRUD**
  - Create, view, edit, and delete characters
  - Core info: name, species, class, background, level
  - Six stats (STR/DEX/CON/INT/WIS/CHA) with visual progress bars
  - Freeform notes / lore section

- **Character List**
  - Responsive grid of character cards
  - Filters by favorites, class, and species
  - Quick links to details and favorite toggling

- **Character Details**
  - Portrait, name, species, class, background, level
  - Stats displayed as horizontal bars (3 + 3 layout)
  - Notes and action buttons (Edit / Delete with confirmation)

- **Homepage & Profile**
  - Homepage with recent characters and a “Currently Available Classes” section
  - Class quick-glance modal powered by the D&D 5e SRD API
  - Profile dashboard with favorites grid and simple character statistics

---

## Tech Stack

**Frontend**

- React (Vite)
- React Router
- CSS (with separated files like `layout.css`, `forms.css`, `characters.css`, `profile.css`, `homepage.css`)

**Backend**

- Node.js  
- Express  
- MongoDB + Mongoose  

**External API**

- [D&D 5e SRD API](https://www.dnd5eapi.co/)  
  Used for class data and quick-glance class information.

**Deployment**

- Frontend: Netlify  
- Backend: Render  

---

## Credits & Attributions

- **Dungeons & Dragons** and all related marks are © Wizards of the Coast.  
- **Pathfinder** and all related marks are © Paizo Inc.  
- Rules content and class data via [D&D 5e SRD API](https://www.dnd5eapi.co/).  
- Background image: _“Red and Black Dice on the Floor”_ from Pexels — https://www.pexels.com/photo/red-and-black-dice-on-the-floor-5749830/  
- Character portraits and class icons are currently pulled from official wikis / reference material for **non-commercial, educational purposes** for this bootcamp capstone and will be replaced with properly licensed or original artwork in future iterations.  
- Project design & development by **SleepyDroids (Jacqueline LaFontaine)**.

> Character Cubby is a personal, non-commercial fan project made for learning and for organizing adventuring parties. No copyright infringement is intended.

---

## Special Thanks

- **Wizards of the Coast** – for creating Dungeons & Dragons and the worlds that inspired this project.  
- **Paizo Inc.** – for Pathfinder and its incredible settings, which also influenced the feel of Character Cubby.  
- **Per Scholas** – for the opportunity and support throughout the Software Engineering bootcamp.  
- **My instructors** – for their patience, feedback, and all the banana kickflips along the way.
