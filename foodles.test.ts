const getWordsOccurrences = require('./foodles');

describe('get word occurences in sentence', function () {

    it('should be empty with no sentence', () => {
        expect(getWordsOccurrences("", 1)).toEqual({});
    });

    it('should be length of 3 with sentence of 5 different words and with n equal to 3', () => {
        expect(Object.keys(getWordsOccurrences("hello toto titi haha yes", 3)).length).toEqual(3);
    });

    it('should be equal to { "zblah": 3, "baz": 2, "bar": 2 } width sentence  "baz bar foo foo zblah zblah zblah baz toto bar"', () => {
        expect(getWordsOccurrences("baz bar foo foo zblah zblah zblah baz toto bar", 3))
            .toStrictEqual({ "zblah": 3, "foo": 2, "baz": 2 });
    });

});
