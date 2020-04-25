var quotes = [

    '"The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."<br><br> – Steve Jobs',
    '"Today’s accomplishments were yesterday’s impossibilities."<br><br> – Robert H. Schuller',
    '"I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time."<br><br> – Michael Phelps',
    '"You don’t have to be great to start, but you have to start to be great."<br><br> – Zig Ziglar',
    '"Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality."<br><br> – Brian Tracy',
    '"Reading is to the mind, as exercise is to the body."<br><br> – Brian Tracy',
    '"To see what is right and not do it is a lack of courage.”<br><br> – Confucius',
    '"You are never too old to set another goal or to dream a new dream."<br><br> – C.S. Lewis',
    '"Do what you can with all you have, wherever you are."<br><br> – Theodore Roosevelt',
    '"What you lack in talent can be made up with desire, hustle and giving 110% all the time."<br><br> – Don Zimmer',
    '"Creativity is intelligence having fun."<br><br> – Albert Einstein',
    '"The man who has confidence in himself gains the confidence of others."<br><br> – Hasidic Proverb',
    '"The way get started is to quit talking and begin doing."<br><br> – Walt Disney',
    '"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."<br><br> – Winston Churchill',
    '"Don’t let yesterday take up too much of today."<br><br> – Will Rogers',
    '"People who are crazy enough to think they can change the world, are the ones who do.”<br><br> – Rob Siltanen'

]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}