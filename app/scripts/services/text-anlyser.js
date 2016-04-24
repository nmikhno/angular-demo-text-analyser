'use strict';

/**
 * This service provide
 * some basic methods for text analysing
 * in order to keep controllers thin.
 */
angular.module('sbAdminApp')
    .service('textAnalyserService', function() {

        /**
         *
         * @param {String} text
         * @param minOccurenceWordsCount
         * @returns {Object} words as keys, values as occurences count
         */
        this.getWordsOccurence = function(text, minOccurenceWordsCount){
            var words = splitTextToWords(text);
            var wordsCount = countWords(words);
            return moreThenOneOccurence(wordsCount, minOccurenceWordsCount);
        };

        /**
         *
         * @param {String} str
         * @returns {Array.<string>}
         */
        function splitTextToWords(str){
            return str.split(/\W/g).filter(function(word){
                return word.length > 1;
            });
        }

        /**
         *
         * @param {Array} wordsList
         * @returns {Collection} Words as keys, number of occureces as values
         */
        function countWords(wordsList){
            var wordsCount = {};
            for(var i in wordsList){
                var word = wordsList[i].toLowerCase();
                wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1;
            }
            return wordsCount;
        }

        /**
         *
         * @param {Object} wordsCountCollection
         * @param {Integer} [minOccurenceWordsCount] min words count to return шт result object
         * @returns {Object} Collection with min occurence word count
         */
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
