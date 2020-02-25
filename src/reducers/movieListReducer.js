const stateR = (state = [
    {
        id: "0",
        src: "https://trailers.apple.com/trailers/disney/mulan/images/poster_2x.jpg",
        name: "Mulan",
        year: 2020, rating: 2,
        description: "Mulan is a 1998 American animated musical historical action-adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures. It is based on the Chinese legend of Hua Mulan, and was Disney's 36th animated feature and the ninth animated film produced and released during the Disney Renaissance."
    },

    {
        id: "1",
        src: "https://resizing.flixster.com/WxaxY9pem8lRU6wUi9bB6Tbo268=/fit-in/278x400/v1.bTsxMzI3ODg1OTtqOzE4Mzc4OzEyMDA7NjA3Mjs5MDAw",
        name: "Bad Boys For Life", year: 2017, rating: 4,
        description: "Bad Boys is a 1995 American buddy cop action comedy film directed by Michael Bay, in his feature directorial debut, produced by Don Simpson and Jerry Bruckheimer and starring Martin Lawrence and Will Smith as two Miami narcotics detectives, Marcus Burnett and Mike Lowrey."
    },
    {
        id: "2",
        src: "https://assets.mubi.com/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
        name: "The Assaassin", year: 2019, rating: 3,
        description: "The Assassin (Chinese: 刺客聶隱娘; pinyin: Cìkè Niè Yǐnniáng; or: The Assassin Niè Yǐnniáng) is a 2015 wuxia film directed by Taiwanese director Hou Hsiao-hsien. A Taiwan/Mainland China/Hong Kong co-production,[3][7] it was an official selection in the main competition section at the 2015 Cannes Film Festival."
    },



], action) => {


    switch (action.type) {
        case "DELETE-MOVIE":

            let deltetedMovie = [...state];
            deltetedMovie.splice(action.i, 1);
            return deltetedMovie


        case 'ADD-MOVIE':

            let addMovie = [...state];
            addMovie = addMovie.concat([{ name: action.newName, year: action.newYear, rating: action.newRating, src: action.srcnew }])
            return addMovie


        case "Edit-MOVIE2":


            let newli = [...state];

            return newli.map((item, id) => (id == action.id) ? item = action.newi : item);




        default: return state

    }
}

export default stateR;