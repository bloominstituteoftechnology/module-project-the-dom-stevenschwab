function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const sectionItems = document.querySelectorAll('div');
  sectionItems.forEach(item => item.classList.add('widget'));

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const quoteOfTheDayDiv = document.querySelector('.quoteoftheday');
  const randomQuoteNumber = Math.floor(Math.random(10) * 10);
  const { quote, author, date } = quotes[randomQuoteNumber];
  const quoteDiv = document.createElement('div');
  quoteDiv.textContent = quote;
  const authorAndDateDiv = document.createElement('div');
  authorAndDateDiv.textContent = `${author} in ${date ? date : "an unknown date"}`
  quoteOfTheDayDiv.insertAdjacentElement('beforeend', quoteDiv);
  quoteOfTheDayDiv.insertAdjacentElement('beforeend', authorAndDateDiv);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const corpSpeakWid = document.querySelector('.corporatespeak');
  const corpSpeakPara = document.createElement('p');

  corpSpeakPara.textContent = `We need to ${getRandomVerb()} our ${getRandomNoun()} ${getRandomAdverb()}
  in order to ${getRandomVerb()} our ${getRandomNoun()} ${getRandomAdverb()}.`
  corpSpeakWid.insertAdjacentElement('beforeend', corpSpeakPara);
  
  function getRandomVerb() {
    return verbs[Math.floor(Math.random(10) * 10)];
  }

  function getRandomAdverb() {
    return adverbs[Math.floor(Math.random(10) * 10)];
  }

  function getRandomNoun() {
    return nouns[Math.floor(Math.random(10) * 10)];
  }

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownWid = document.querySelector('.countdown');
  const numPara = document.createElement('p');
  numPara.textContent = "T-minus 5..."
  countdownWid.insertAdjacentElement('beforeend', numPara);

  let count = 5;
  let intervalId = setInterval(() => {
    count--
    if (count > 0) {
      numPara.textContent = `T-minus ${count}...`;
    } else if (count === 0) {
      numPara.textContent = "Liftoff! 🚀"
      clearInterval(intervalId);
    }
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const { fname, friends, lname, dateOfBirth } = randomPerson;
  const dateYear = dateOfBirth.slice(0, 4);
  const friendsWid = document.querySelector('.friends');
  const friendsPara = document.createElement('p');
  friendsPara.textContent = `${fname} ${lname} was born in ${dateYear} and ${friends.length 
    ? getFriendsNames(friends)
    : "has no friends."}`
  
  friendsWid.insertAdjacentElement('beforeend', friendsPara);
  
  function getFriendsNames(anArrOfFriendIds) {
    let friendNames = [];

    anArrOfFriendIds.forEach((friendId, idx) => {
      let personArr = people.filter(person => person.id === friendId)
      const { fname, lname } = personArr[0];
      let nameToPush = '';
      if (anArrOfFriendIds.length === 1) {
        nameToPush = `${fname} ${lname}`
      } else if (idx === (anArrOfFriendIds.length - 1)) {
        nameToPush = `and ${fname} ${lname}`
      } else if (idx === (anArrOfFriendIds.length - 2)) {
        nameToPush = `${fname} ${lname} `
      } else {
        nameToPush = `${fname} ${lname}, `
      }
      friendNames.push(nameToPush);
    })
    
    return `is friends with ${friendNames.join('')}.`
  }
  // 👉 TASK 6 - Make it so user can tab through the widgets
  const widgetsForTabs = document.querySelectorAll('.widget');
  let i = 1;
  widgetsForTabs.forEach(widgetObj => {
    widgetObj.setAttribute('tabindex', `${i}`);
    i++;
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
