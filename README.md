# A note to the reviewer

Hey! Unfortunately this proved too big of a task for me to complete in full. I built most of the functionality but didn't get around to styling or proper component/page layout stuff. 

In lieu of that, I've left some thoughts below the checklist outlining what I would have done with more time, and and some limitations/shortfalls of the approach I took.

Hoping it's enought to at least have a conversation about.

Thanks for the opportunity! I had fun doing this.

—- Matt

# Stack decisions

- Material UI (MUI): for styling and out of the box components
- Redux Tool Kit (RTK): for data persistence and global state management
- React Hook Form: for easier forms
- React Router: for navigating between pages

# Checklist

Facility List Page
- [ ] Displays all facilities in a card/grid format.
- [x] Each card shows facility name, address, description, image, and working hours (open/close time).
- [x] A badge should indicate if a facility is Open/Closed based on the current time.
- [x] Users can edit or delete facilities.
- [x] Once a facility is created, the user should be redirected back to the list view.

Create/Edit Facility Page
- [x] Form fields: Name, address, description, image URL, default facility checkbox, and opening & closing hours.
- [x] Only one facility can be marked as default at a time.
- [x] When creating the first facility, it should be default by default (checkbox disabled).
- [x] When another facility is set as default, it overrides the previous default facility.
- [x] If the default facility is deleted, another should automatically become the default.
- [x] Once a facility is created, the user should be redirected back to the list view.

Technical Requirements
- [x] A plain React app with your preferred setup.
- [x] Data persistence (no database needed).
- [ ] Styling using any preferred approach or tool.
- [x] Use GitHub for code management and follow Conventional Commits for commit messages.

UI
- [ ] Confirm delete dialog
- [ ] Card format/spacing/styling
- [ ] Edit facility page styling

# What I would have done with more time

- Comments! I didn't document my code as well as I would have liked
- MUI theme styling to match Trackman
- The component styling and general page stucture
- Better use of hooks, not just Redux Tool Kit slice
- Better modularisation of components. In the rush to finish I didn't do the best job of separating concerns. Just lumped new functionatlity into the most appropriate component.
- Tidy file structure. I set it up initially to match what RTK suggest (i.e. pairing a slice.js file with component.jsx in the same folder). Felt like this was overkill.

# Limitations/shortfalls of my code

- I chose not to use TypeScript but I should have. Ultimately strong typing is just better and safer.
- In-line MUI styling without much thought of a style/design system is messy. Ideally I would build this out in a more structured way.

# Initial thoughts & plan (written at the start)

- Need a FE component library to make things easier. Bootstrap or MUI?
- I can use any styling so probably MUI because I’m most familiar
- Data persistence required - Redux?

**Component hierarchy plan**

- Page
    - Nav bar
        - Menu item
    - Facilities list
        - Create facility button
        - List
            - Card
                - Label
                - Button
                - Icon button
        - Delete facility dialog
    - Create / Edit facility
        - Input
        - Text area
