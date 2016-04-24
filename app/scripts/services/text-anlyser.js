'use strict';

angular.module('sbAdminApp')
    .service('textAnalyserService', function() {

        this.getWordsOccurence = function(text, minOccurenceWordsCount){
            var words = splitTextToWords(text);
            var wordsCount = countWords(words);
            return moreThenOneOccurence(wordsCount, minOccurenceWordsCount);
        };

        function splitTextToWords(str){
            return str.split(/\W/g).filter(function(word){
                return word.length > 1;
            });
        }

        function countWords(wordsList){
            var wordsCount = {};
            for(var i in wordsList){
                var word = wordsList[i].toLowerCase();
                wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1;
            }
            return wordsCount;
        }


        function moreThenOneOccurence(wordsCountCollection, minOccurenceWordsCount){
            minOccurenceWordsCount = minOccurenceWordsCount || 2;

            for(var word in wordsCountCollection){
                if(wordsCountCollection[word] < minOccurenceWordsCount){
                    delete wordsCountCollection[word];
                }
            }
            return wordsCountCollection;
        }
    });
