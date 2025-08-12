# Contact Form

## 📌 Objective  
A **contact form** with **client-side validation** for name, email, and message using **HTML, CSS, and JavaScript**.  

## 🛠 Features  
- **HTML Form** with input fields:
  - Name  
  - Email  
  - Message  
  - Submit button
    
- **CSS Styling** for a clean and responsive UI
  
- **JavaScript Validation** to check:
  - All fields are filled  
  - Email is in valid format (using regex)
    
- **Error messages** shown dynamically below inputs
  
- **Success message** displayed on valid submission

- **Prevents form submission** if validation fails  

## 📂 Technologies Used  
- **HTML** – Structure of the form  
- **CSS** – Styling and layout  
- **JavaScript** – Client-side validation and user feedback  

## 📜 How It Works  
1. User enters details in the form  
2. JavaScript checks for empty fields and validates email using regex  
3. If validation fails:
   - Displays error messages  
   - Stops form submission using `event.preventDefault()`  
4. If validation passes:
   - Shows a success message (no actual email sending)  

## 🚀 Live link  
[Live Project Link]( https://aldojason.github.io/contactform/)   

## 📄 License  
This project is licensed under the **MIT License**.  
