//array of quotes
const quotes = [
    "All our dreams can come true, if we have the courage to pursue them. - Walt Disney",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It’s hard to beat a person who never gives up. - Babe Ruth",
    "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’ - Leah Busque",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore. - Michele Ruiz",
    "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE. - Joss Whedon",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama XIV",
    "Whatever you are, be a good one. ―Abraham Lincoln",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale",
    "If you work on something a little bit every day, you end up with something that is massive. - Kenneth Goldsmith",
    "The big secret in life is that there is no secret. Whatever your goal, you can get there if you’re willing to work. - Oprah Winfrey",
    "If you cannot do great things, do small things in a great way. - Napoleon Hill",
    "Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted. - Christine Caine",
    "Good. Better. Best. Never let it rest. ’Til your good is better and your better is best. - St. Jerome",
];

const quoteContainer = document.getElementById('random-quote');
const generateButton = document.getElementById('generate-button');

//function to generate and display quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteContainer.textContent = randomQuote;
}

//generates a random quote before the user clicks for another
generateRandomQuote();

//waiting for user to click to display a new quote
generateButton.addEventListener('click', generateRandomQuote);