# Manchester United Quiz

The Manchester United Quiz is aimed at the audience who call themselves
diehard Manchester United fans, there is a total of 15 questions ranging from the club's history,famous player incidents, Iconic goal scoring moments, player club records and many more.

The Manchester United Quiz is very user friendly, you have the start page with a brief description of the quiz,
quiz page were the user will carry out the 15 question quiz and all of the results will be shown in the results page.

Here is the link to my Quiz [Manchester-United-Quiz](https://kerrham.github.io/project_2/)

![am_I_responsive_project2](https://github.com/KERRHAM/Mobile-Mechanic/assets/156520279/1dda1ee3-e58b-4478-923f-0816da8e799b)


##  User Experience (UX)

This Manchester United quiz offers the user a challenging but also entertaining experience to see if they can truly call themselves a United fan, This quiz is user friendly with quiz question counters to help the user and colour schemes related to the football club to keep users intrested.

### User Stories

* First-time visitor goals
  
  * Easy navigation through the quiz, with no errors.
  * After 15th question has been answered, score is displayed with appropriate text.
  * When user clicks Try again or finish buttons at the end the appropriate page is displayed with no errors.
  * Enjoy the quiz experience.

* Returning Visitor goals

  * Improving their scores when retaking the quiz.
  * Depending on if their score has increased/decreased, new features are displayed.
  * Continue enjoying the quiz.
  * Questions are shuffled everytime the user retakes the quiz.

* Frequent visitor goals

  * After various attempts, the user has mastered all questions.
  * Share the quiz with others to compete with each other.
  * continue to enjoy using the quiz.

## Features

 * Start Quiz Page

   * The start quiz page offers a challenge to the user to prove to themselves if they deserve to follow the club.
   
   * The User has 2 buttons, Start quiz button which will link the user to the Quiz page and The Rules? button when 
     pressed will display The quiz rules usuing the overlay effect.
   
   * The Manchester United quiz styling resembles the clubs colours, Red background,Yellow border and when the user
     hovers over a button it'll turn yellow, I've used this style for this buttons because I feel it Increases the users usability/readability. 

   
   * At the bottom of the page There is a image of the manchester united badge.

![start-page](https://github.com/KERRHAM/Mobile-Mechanic/assets/156520279/f963ed33-ccee-4388-bea4-5c5260d4e6ad)




* Quiz Page

  * The Quiz page is were the user will answer all 15 questions, each question must be answered to move onto the next 
    question, the user will only get to chose one from the following 4 answer's
  
  * When the user has clicked on their chosen answer the next question will be displayed, after the user has answered 
    all 15 questions, The display will inform the quiz is over. At the bottom of the page There is a submit button, when pressed the users score will be displayed.
  
  * The Quiz page has similar styling to the start page, all my content is positioned to the center,red background,
    quiz display section has a darker red background to give the user a better view of the questions and a solid yellow border to link with the club colours and increase the users readability

  * The submit button has the same styling as the buttons on the start page, Yellow when mouse hovers over the button and grey when mouse leaves the button, I've used this style because I feel it Increases the users usability/readability. 


  ![quizPage](https://github.com/KERRHAM/project_2/assets/156520279/38c8c1e0-c0c8-4b30-8e38-54856d48ccc2)


 
 
* Results page

  
  * The results page styling has remained similar to the previous pages when it comes to the background colour, text 
    color, size and layout. I have kept the same styling for all 3 pages as I feel its interlinks with the Clubs colours which will attarct the users full attention.

  * The results display I have used the same dark red background, yellow border and inside all the content 
    remains centered to increase the users readability.

  * Inside the results display there is a correct and incorrect paragraph with the value of how many questions the 
    user got correct or incorrect, depending on the users score a certain paragraph text will be shown. If the user gets 15/15; Well Done, sir Alex would be proud, if the user gets more than or equal to 10; Almost, Give it another go to Truly call yourself a United Fan!!! and if the user gets less than or equal to 7; You failed, Man city are in need of supporters. 

  * At the bottom of my results page there are 2 buttons, Try again which lets the user restart the quiz and shuffles 
    the questions to make it more challenging and less repetative and the Finish button which takes the user back to the start page if the user is happy with the Quiz score.


   
   
   ![resultsPage](https://github.com/KERRHAM/Mobile-Mechanic/assets/156520279/7916e306-0108-457e-8254-1a7a54ef6c58)


   * Testing

      * I tested that this project works on diffrent browsers: Safari and Chrome

      * I confirmed my website is responsive, the layout looks great on all the different screen size thanks to  
        chromes developer tools.

      * I confrimed that the Start Quiz/Rules?,Quiz display and Result pages text are all readable and easy to 
        understand.

      * I have confirmed My Quiz works, All buttons change colour and when pressed the selected page is presented with 
        no errors, My 15 questions are all displayed in the same layout without being repeated and at the end of the quiz the Users results display the correct scores and text.


## Bugs

  * Solved Bugs

      * When the user has finished the quiz the appropriate text should be displayed depending on score, when the quiz 
        ends no text is displayed to the user.
      
      * By double clicking on the quiz page when loaded I used google dev tools to search for any errors in the 
        console.
      
      * When inspecting the console there was a syntax error within script.js file line 278.

      * By opening script.js and scrolling down to line 278, There was a spelling error.

      * When Targetting my id 'score text' I was using the DOM to locate the elements instead of element to target my ID.

      * After resolving this Error the appropriate text is displayed to the user.




    ![bugp2](https://github.com/KERRHAM/project_2/assets/156520279/e39a93f2-6df6-4d2c-bb53-bf3a8a085c67)




## Validator Testing

  * HTML Validation
      
      * I had one error, it was highlighted because I had my Start Quiz, Finish and Try again? buttons were child 
        elements to the a tag which linked to the desired page.
      
      * I fixed this issue by Puting each button in a Form tag, removing the a tag from the button and putting the  
        link in the action attribute in the form tag.
      
      * After I resolved this error, there were no errors found using the offical Validator [W3C Validator](https://validator.w3.org/nu/).

   * CSS Validation
      
      * No Errors found, When using the offical [jigsaw Validator](https://jigsaw.w3.org/css-validator/).

     
   * JavaScript Validation

      * I had 3 errors all with the same symptons, I had forgotten to put some semicolons at the end of my lines of 
        code.
      
      * After I had resolved this issue I had no further issues, When using the offical validator [JS-Hint](https://jshint.com/).

     
     
   * Accessibility

      * I confirmed that the colours and text content chosen is easy to read and accessible by running it through 
        Lighthouse in dev tools.

      ![lighthouseP2](https://github.com/KERRHAM/Mobile-Mechanic/assets/156520279/ea64934c-0261-4c72-b131-761fce4f3a33)

     
     
   * Unfixed Bugs
      
      * No Unfixed Bugs

## Design

 * Colour Scheme
    * Primary colors used on the website: ![color_scheme](https://github.com/KERRHAM/project_2/assets/156520279/f721f522-e9d0-4e9c-b821-1531874c36ae)

---

    
 ## Deployment

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository Manchester_United_Quiz](https://github.com/KERRHAM/project_2)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [Deployed_Quiz](https://kerrham.github.io/project_2/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate [GitHub Repository Manchester_United_Quiz](https://github.com/KERRHAM/project_2)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

### Local Clone

1. Log in to GitHub and locate [GitHub Repository Manchester_United_Quiz](https://github.com/KERRHAM/project_2)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.

---
  ## Credits

   * Content
     
     * My Mentor was very helpful with the planning of this project and 
       keeping me on schedule.

     * The code institute Tutors were very helpful and patience when I hit some difficulties With my Javascript.

     * [Stack-Over-Flow](https://stackoverflow.com/) was a huge help, I was able to research soloutions for my 
       JavaScript Errors.

     * The Javascript Essentials gave me the idea of how to Implement the styling to to my Buttons.
     
     * [W3 Schools](https://www.w3schools.com/) was very useful if I needed a refreshment on some HTML, CSS or 
       javascript, I also found more info from W3 schools for using the overlay effect to display my Rules and Results Pages.

     * The [Free-Code-Camp](https://www.freecodecamp.org/news) website was the website were I discovered Fisher-Yates 
       Sorting Algorithm which was used for Implementing code inside the shuffleQuestion function.

   * Media 

     * [color-mind](http://colormind.io/) was used for chosing my colour scheme to relate with the football club 
       colours.
    
     * All my images were aquired from the website [pexels](https://www.pexels.com/)

     * For finding the best questions for my quiz I did some re-search and found the best 15 from the website
      [Goal.com](https://www.goal.com/en-gb/news/best-man-utd-quiz-questions-answers-trivia/1zupmdj8ulnm14frxq47ed9ka), All their questions were varied topics that suited what i needed for the quiz.

