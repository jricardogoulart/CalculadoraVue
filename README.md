# Simple Calculator - Vue.js

## Objective

The goal of this exercise is to apply the knowledge acquired in the classroom about Vue.js to develop a simple calculator. You should use the basic structure that was set up during the lessons to implement the calculator's functionalities.

## Requirements

- **Basic Structure:** Use the basic Vue.js project structure that was set up in the classroom as a starting point for this exercise.
- **Calculator Functionality:** The calculator should be able to perform basic mathematical operations: addition, subtraction, multiplication, and division. Consider the need to handle both integer and decimal number inputs.
- **User Interface:** Create a user-friendly interface for interacting with the calculator. Include buttons for numbers (0-9), basic operations (+, -, *, /), and an equal sign (=) button to calculate the result. Ensure to include a display to show both user inputs and the operation results.
- **Calculation Logic:** Implement the necessary logic for the mathematical operations to be correctly performed. This includes capturing user inputs, performing the selected mathematical operation, and displaying the result on the calculator's display.

## Tips

- **Code Organization:** Organize your code clearly, using Vue components where necessary to keep the project structured and modular.
- **Testing:** Test your calculator to ensure all operations are performed correctly, including handling decimal numbers.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/simple-calculator-vue.git
    cd simple-calculator-vue
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run serve
    ```

4. **Access the application:**
    Open your browser and go to `http://localhost:8080/`.

## Usage

- **Number Input:** Click the buttons (0-9) to input numbers.
- **Operations:** Use the operation buttons (+, -, *, /) to perform calculations.
- **Calculate:** Click the equal sign (=) to calculate and display the result.
- **Clear:** Include a clear (C) button to reset the calculator.

## Project Structure

- **Components:**
  - `Calculator.vue`: The main component containing the calculator's layout and logic.
  - `Display.vue`: A component to show the current input and result.
  - `Button.vue`: A reusable component for the calculator buttons.

- **Assets:** Include any necessary assets such as images or styles in this folder.

## Comments

The code is well-commented to explain the main parts and functionalities implemented. Please refer to the inline comments for detailed explanations.

## Delivery

Once the exercise is complete, submit your project on your Git and share the link for access. Ensure your code is well-commented, explaining the key parts and functionalities implemented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
