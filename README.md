Orazkhan Yelaman IT-2502
Link: https://assigment5web.netlify.app/
Part 1: Profile Object, Data Types & Arithmetic
Task 1. The Personal Info Object
I made a const object called userProfile. It has a string (name), a number (birthYear), a boolean (isDeveloper) and an array (hobbies).
<img width="1100" height="416" alt="Снимок экрана — 2026-10-24 в 20 30 24" src="https://github.com/user-attachments/assets/ec413600-05d6-4a02-a3f2-078fdb5ad760" />
Task 2. Arithmetic Calculations
I calculated the age with current year - birthYear. Also I calculated months old (age * 12) and the number of hobbies (hobbies.length). The results are shown on the page and in the console.
<img width="1100" height="416" alt="Снимок экрана — 2026-10-24 в 20 30 24" src="https://github.com/user-attachments/assets/6a55a3de-19f2-47de-800b-601b1c909dc9" />

Part 2: Form Input & Event Responses
Task 3. HTML Form Setup
I made a form with an input for Username, an input for Birth Year and a "Create / Update Profile" button.
<img width="530" height="287" alt="Снимок экрана — 2026-10-24 в 20 31 36" src="https://github.com/user-attachments/assets/b4213347-2c80-4620-914c-784aaaba814b" />
Task 4. Event Listener
I added a submit event listener to the form. When the user presses the button, the script takes the values from the inputs and updates the userProfile object. After that the page shows the new data and the new age.
<img width="530" height="287" alt="Снимок экрана — 2026-10-24 в 20 31 36" src="https://github.com/user-attachments/assets/cdf98cd0-157c-43a7-a8fc-28269af8d920" />

Part 3: DOM List Manipulation
Task 5. Creating & Removing Elements
I made a <ul> list. The "Add Item" button takes the text from the input, creates a new <li> with createElement and adds it with appendChild. The "Remove Item" button removes the last item with removeChild.
<img width="516" height="228" alt="Снимок экрана — 2026-10-24 в 20 32 48" src="https://github.com/user-attachments/assets/452e2c1c-e96b-4a19-a5e0-47fb18636615" />
