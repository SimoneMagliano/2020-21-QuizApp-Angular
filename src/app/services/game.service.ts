import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private questions:Array<any>
  private currentQuestion:any
  constructor() { 
    this.questions = [];
  }

  prepareGame() {
    this.getQuestions();
    console.log("GameService",this.questions[0])
    this.currentQuestion = this.questions[0]
  }

  getCurrentQuestion() {
    return this.currentQuestion
  }

  getQuestions(){
    const triviaResponse = {
      "response_code": 0,
      "results": [
        
          {
              "category": "Entertainment: Video Games",
              "type": "multiple",
              "difficulty": "hard",
              "question": "In World of Warcraft lore, who organized the creation of the Paladins?",
              "correct_answer": "Alonsus Faol",
              "incorrect_answers": [
                  "Uther the Lightbringer",
                  "Alexandros Mograine",
                  "Sargeras, The Daemon Lord"
              ]
          },
          {
              "category": "History",
              "type": "multiple",
              "difficulty": "hard",
              "question": "Bohdan Khmelnytsky was which of the following?",
              "correct_answer": "Leader of the Ukrainian Cossacks",
              "incorrect_answers": [
                  "General Secretary of the Communist Party of the USSR",
                  "Prince of Wallachia",
                  "Grand Prince of Novgorod"
              ]
          },
          {
              "category": "Geography",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What is the capital of Seychelles?",
              "correct_answer": "Victoria",
              "incorrect_answers": [
                  "Luanda",
                  "N&#039;Djamena",
                  "Tripoli"
              ]
          },
          {
              "category": "Entertainment: Japanese Anime & Manga",
              "type": "multiple",
              "difficulty": "hard",
              "question": "In &quot;One Piece&quot;, who confirms the existence of the legendary treasure, One Piece?",
              "correct_answer": "Edward &quot;Whitebeard&quot; Newgate",
              "incorrect_answers": [
                  "Former Marine Fleet Admiral Sengoku",
                  "Pirate King Gol D Roger",
                  "Silvers Rayleigh"
              ]
          },
          {
              "category": "History",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Which of the following countries was the first to send an object into space?",
              "correct_answer": "Germany",
              "incorrect_answers": [
                  "USA",
                  "Russia",
                  "China"
              ]
          },
          {
              "category": "Science: Computers",
              "type": "multiple",
              "difficulty": "medium",
              "question": "When did the online streaming service &quot;Mixer&quot; launch?",
              "correct_answer": "2016",
              "incorrect_answers": [
                  "2013",
                  "2009",
                  "2011"
              ]
          },
          {
              "category": "Science: Computers",
              "type": "multiple",
              "difficulty": "medium",
              "question": "The name of technology company HP stands for what?",
              "correct_answer": "Hewlett-Packard",
              "incorrect_answers": [
                  "Howard Packmann",
                  "Husker-Pollosk",
                  "Hellman-Pohl"
              ]
          },
          {
              "category": "Science & Nature",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What part of the brain takes its name from the Greek for seahorse?",
              "correct_answer": "Hippocampus",
              "incorrect_answers": [
                  "Cerebellum",
                  "Thalamus",
                  "Amygdala"
              ]
          },
          {
              "category": "Entertainment: Music",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In what year was Tchaikovsky&#039;s 1812 Overture composed?",
              "correct_answer": "1880",
              "incorrect_answers": [
                  "1812",
                  "1790",
                  "1840"
              ]
          }
      ]
    }
    this.questions =  triviaResponse.results;

    return triviaResponse.results;
  }

}
