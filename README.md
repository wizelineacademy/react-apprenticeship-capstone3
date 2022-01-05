# React Capstone Project 3 - Auth, Routing, and Global State Management.

For this challenge, you will create a SPA with Authentication and use of Global State Management with the following characteristics:

- The app consists in a clone of [Google keep app](https://keep.google.com/u/0/).
- The app allows you to create different kinds of notes and keep them on the site.

**Note:** We are not going to clone the app completely.

Focus on the following features:

- Access only via authentication using **Email** and **Password**.
- Create a new note through a form with _only_ plain text and color.
- You can update the content and the color of the note.
  You can search for a note through the **Search** input.
- You can archive a note.
- You can navigate through the login page, notes page, and archive page.

## Instructions

**Requisites**

- Do _not_ use UI libraries.
- Use React Testing Library and Jest tools to complete the tests.
- Use functional components and React Hooks as possible.

### Completing the Challenge

Follow these steps to complete this challenge:

1. Create a new branch with the name `challenge-3` from this repository.
2. Complete all the Acceptance Criteria.

**Note:** We suggest using React Router for navigation and React Context/Redux for Global State Management.

## Acceptance Criteria (AC)

| Acceptance Criteria | User Actions Description                                                                                                                                                         | App Response Actions                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1                   | - Not authenticated.<br>- Enters the app.                                                                                                                                        | The app should always redirect to the login page.                                                                               |
| 2                   | - Not authenticated.<br>- Enters the login page.                                                                                                                                 | The app should display a Login form with email and password inputs and a Submit button.                                         |
| 3                   | - Not authenticated.<br>- The user enters the Login page.<br>- Types incorrect Email or Password credentials                                                                     | The app should show the following error message: Email or password is not correct.                                              |
| 4                   | - Not authenticated.<br>- Enters the Login page.<br>- Fills the login form with valid credentials.                                                                               | The app should redirect to the **Notes** page.                                                                                  |
| 5                   | - Is authenticated.<br>- Enters the **Notes** page.<br>- There are no notes.                                                                                                     | The app should show the following message: There are no notes; please create a new one using the creation note input.           |
| 6                   | - Is authenticated.<br>- Enters the **Notes** page.<br>- Types text on the creation note input.<br>- Clicks the **Close** button                                                 | The app should:<br>- Create the new note with the text content and selected color.<br>- Display the note on the **Notes** page. |
| 7                   | - Is authenticated.<br>- Enters the **Notes** page.<br>- Has at least one note.<br>- Modifies the text content and color of one note.<br>- Clicks the **Save** button.           | The app should update only the selected note with the selected text, content, and color.                                        |
| 8                   | - Is authenticated.<br>- Enters the **Notes** page.<br>- Has at least one note with text content.<br>- Types text in the **Search** input.                                       | The app should show only the notes matching the search.                                                                         |
| 9                   | - Is authenticated.<br>- Enters the **Notes** page.<br>- Has at least one note with text content.<br>- Types in the **Search** input with text that does not match with no note. | The app should show the following message: There are no match results. Try another search.                                      |
| 10                  | - Is authenticated.<br>- Enters the **Archive** page.<br>- Has no archived notes.                                                                                                | The app should show the message: You don't have archived notes.                                                                 |
| 11                  | - Is authenticated.<br>- Enters the **Notes** page.<br>- Has at least one note.<br>- Clicks the archived note.                                                                   | The app should move the selected note to the archives page and not be longer displayed on the **Notes** page.                   |

**Notes:**

- To complete some AC, you will need to use persistent data.
- We recommend you to use Local Storage for that.

## Score

- Authentication validations for access to private routes: `10`.
- Authentication via Email or Password (without real Backend service): `10`.
- Navigation routing through different views: `10`.
- Create a new note with text and color: `10`.
- Update a current note with text and color: `10`.
- Search notes: `10`.
- Archive notes: `10`.
- Tests for private routes: `10`.
- Tests for login page UI using valid and invalid credential cases: `10`.
- Tests for notes page UI doing the creation of a new note: `10`.

### Bonus

The bonus is a plus that helps us know you better and increments your final score.

- Authentication with real Backend, such as Firebase or Auth0: `40`.
- Add tests for updating a note through the notes page UI: `10`.
- Add tests for archive a note through the notes page UI: `10`.
- Add a 404 page: `10`.
- Add a test for 404 page: `10`.
- Add Dark mode: `20`.
- The app is responsive: `20`.
- Persistent data using a real backend service, such as Firebase: `50`.

## Questions?

If you have any questions about this challenge, feel free to ask on the Slack channel ASAP.
