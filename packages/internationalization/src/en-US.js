export default {
  language: {
    pt_BR: 'Portuguese',
    en_US: 'English',
    fr_FR: 'French',
  },
  welcomeMessage: {
    start:
      "Welcome! This is a game where the machine will try to guess wich food you've chosen before the game starts (Yes, right now!). The machine is gonna ask you many questions wich answers shall be 'yes' or 'no', until it guesses or it get out of questions to guess the answer.",
    learning: `In the case the machine couldn't guess it, it will be requested to you for telling the game a peculiarity that separate your word and the last one that had been shown to you. Using that the machine will learn the new word and in the next time it will recognize yours. As more as you play it, the best the machine became in guessing foods!`,
  },
  iveAlreadyChosenMyFood: `I've already chosen it!`,
  yes: 'Yes',
  no: 'No',
  tryAgain: 'Try again',
  successMessage: `I've got it! HAHAHA! Try again, but harder this time... maybe you get to learn me something!`,
  iveGotOutOfIdeas: `Oh no! I've got out of ideas...`,
  tellMeWhatYouHaveThought: `Tell me what you've thought in, please. In the next time I will turn it out!`,
  iDontRecognizeThatFood: `I don't recognize this food. I will need your help a bit more.`,
  thinkInAPeculiarity: `Think in a peculiarity of %{newFoodName} that separate it and %{currentFoodName}.`,
  theFoodYouThoughtOf: `The food you thought in is %{name}?`,
};
