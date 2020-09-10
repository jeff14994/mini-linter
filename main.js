let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
// console.log(story);
let storyWords = story.split(" ");
// console.log(storyWords);
// console.log(storyWords.length);
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
// console.log(betterWords);
const checkOverusedTimes = (list, check) => {
  let total = 0
  for(let i=0; i<check.length; i++){
    for(let j=0; j<list.length; j++){
      if (list[j] === check[i]){
        total ++;
      }
    }
  }
  return total;
}
// console.log(checkOverusedTimes(storyWords, overusedWords));

const checkSentenesNumber = (list) => {
// console.log(list);
  let total = 0;
  for(let i=0; i<list.length; i++){
    if(list[i][list[i].length-1] === "." || list[i][list[i].length-1] === "!" || list[i][list[i].length-1] === "?"  ){
      total ++;
    }
  }
  return total;
}

// console.log(checkSentenesNumber(storyWords));

const wordCount = list => {
  let total = 0;
  list.forEach(word => {
    total ++;
  })
  return total;
}

// console.log(wordCount(storyWords));

const logAllData = (list) => {
  let word_count = wordCount(storyWords);
  let set_count = checkSentenesNumber(storyWords);
  let overUsed_count = checkOverusedTimes(storyWords, overusedWords);
  console.log(`After analyzing, We find out: This paragraph contains ${word_count} words, ${set_count} senteces, and most importantly, the Overused word for ${overUsed_count} times`);
}
logAllData(storyWords);

betterWords = betterWords.join(' ');
console.log(betterWords);




