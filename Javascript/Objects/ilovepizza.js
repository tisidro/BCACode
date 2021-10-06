let stringUtils = {
    capitalize: function (word) {
        return word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase();
    },
    rant: function (opinion) {
        return option.toUpperCase() + '!!!';
    }
}

stringUtils.rant('i love pizza') //=> 'I LOVE PIZZA!!!'
//accessing function rant in stringUtils object and feeding it input "i love pizza"