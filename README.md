# Assignment2
# Website for Covid-19 (SafeGlobe)

Members: Zhang Lixin (S10258514) & Klaris Lim Yong Xin (S10257959)

Our website, SafeGlobe, offers users an interactive platform to explore information about COVID-19 before embarking on their travels. Through engaging with our globe interface, users can enhance their understanding of the pandemic and its implications.

Additionally, we feature a mini-game designed to test users' knowledge of COVID-19. Should a user achieve a perfect score, they can request a gift card to be sent to their email. However, this offer is limited to the first 10 users, and each email address is restricted to a single claim.

SafeGlobe serves as a tool to promote COVID-19 awareness and empower users to make informed decisions about their travel plans. By highlighting key information on our homepage, we aim to provide users with valuable insights to help them assess whether traveling is advisable, especially with the relaxation of restrictions in certain regions.


## Design Process

Our design process for SafeGlobe focused on creating an engaging and informative platform that caters to users interested in travel and COVID-19 awareness. Here's an overview of our approach:

Our target audience includes individuals who are planning or considering travel amid the COVID-19 pandemic. We also aim to reach users who are interested in learning more about COVID-19 and its impact on global travel.

Provide users with an interactive globe/map interface to explore different regions of the world. Offer clear and concise information about COVID-19, focusing on key points that users should be aware of before traveling. Encourage users to stay informed about COVID-19 developments and make informed decisions regarding their travel plans.

SafeGlobe provides users with an intuitive and visually appealing interface to explore the world and learn about COVID-19. By presenting the four main points of COVID-19 awareness prominently on the homepage, users can quickly grasp essential information before making travel decisions.

wireframe: wireframe folder named FED Assignment2.xd
link: https://xd.adobe.com/view/912ed4f3-5b55-4537-941a-0eb9fa86d7bf-c47d/


## Features

minigame.html:
- Contains an interactive globe/map and 4 main points of COVID-19.
- Includes a link prompting users to participate in the mini-game to win a gift card.
- Has three educational videos for users to learn more about Covid-19

minigame.html (Start):
- Upon clicking the link, the user is directed to the minigame start page.
- The start page prompts the user to click "Start" to begin the challenge.

minigame-loading.html:
- After clicking "Start," the user is redirected to the minigame loading page.
- The loading page displays a Lottie animation to indicate that the game is loading.
- The loading page automatically redirects the user to the minigame play page after 3 seconds.

minigame-play-page.html:
- The play page presents the user with 3 COVID-19 related questions.
- Upon answering all questions correctly, the user is redirected to email-input.html to collect the gift card.
- If the user answers incorrectly, they are directed back to index.html.

For all the pages, if the user wishes to go back to index.html, the user can click on the logo "SafeGlobe" that has a hover effect.

### Features Left to Implement
- We would like to make the world map interactive that when you click on a country, it shows the statistics for the country.
- We would like to have a function which sends an auto generated email to the user's email with a giftcard to congratulate them.


## Technologies Used
- Used bootstrap in index.html for the 4 cards. (https://getbootstrap.com/docs/4.0/components/card/)
- Used lottie animation for minigame-loading.html. (https://lottiefiles.com/search?q=loading&category=animations)
- Used RestDB for the email-input.html for data collection. (https://restdb.io/)
- Used mapbox API for the interactive map/globe (https://docs.mapbox.com/mapbox-gl-js/example/simple-map/) 


## Testing
1. Redirecting after completing the quiz:
    1. Score of 0/3, 1/3 and 2/3 will show a Nice Try!.. message and redirecting to index.html
    2. Score of 3/3 will show a Congratulations!.. message and redirecting to email-input.html

2. Collection of gift card:
    1. After the user inputs their email, it sends an email to the user with a 6 digit number to claim.
    2. Ensuring that it is limited to first 10 unique email.
    3. Ensures that email that has been entered is in correct email format.
   
The project looks and works on different browsers and screen sizes.

### BUG
After the user gets 3/3 for our minigame, the loading lottie disappears after a few seconds, which makes the container feel very empty.

## Credits

### Content
- The text for 4 bootstrap cards was obtained from: https://www.knowplango.my/?utm_source=Search&utm_medium=CPC&utm_campaign=KnowPlanGo&utm_id=SeriousMedia_Pfizer&utm_content=LandingPage&gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi1zEPAsjryYweCahcAIrGmu0jANnKszmZ8smjPg1-Dxqz1_amPAolIaAnRhEALw_wcB


### Media
- 4 photo cards image obtained from: https://www.knowplango.my/?utm_source=Search&utm_medium=CPC&utm_campaign=KnowPlanGo&utm_id=SeriousMedia_Pfizer&utm_content=LandingPage&gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi1zEPAsjryYweCahcAIrGmu0jANnKszmZ8smjPg1-Dxqz1_amPAolIaAnRhEALw_wcB

-The three educational videos are obtained from: https://www.youtube.com/watch?v=R-JbDMYmAQM, https://www.youtube.com/watch?v=FC4soCjxSOQ, and https://www.youtube.com/watch?v=rAj38E7vrS8

- billy: https://www.google.com/url?sa=i&url=https%3A%2F%2Fiheartcraftythings.com%2Fcartoon-people-drawing.html&psig=AOvVaw2MqxtnsmjaaXK5bWSs9VRQ&ust=1707286286117000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiqlpeWh5aEAxW9TGwGHZENALEQjRx6BAgAEBc

- background image: https://i.pinimg.com/564x/1d/e6/37/1de637aa47409992ad8817f3a9622086.jpg

- quizbackground: https://www.pinterest.com/pin/87820261475868480/
  
  
### Acknowledgements

- I received inspiration for this project from: https://www.knowplango.my/?utm_source=Search&utm_medium=CPC&utm_campaign=KnowPlanGo&utm_id=SeriousMedia_Pfizer&utm_content=LandingPage&gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi1zEPAsjryYweCahcAIrGmu0jANnKszmZ8smjPg1-Dxqz1_amPAolIaAnRhEALw_wcB
