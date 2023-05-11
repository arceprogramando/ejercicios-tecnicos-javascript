/*Program a function that, given a string, returns an array of texts separated by a
 certain character, myFunction('Hello, what's up', '') will return ['Hello','what',''what's up']
 */

const stringToArray = (textString = "", separator = undefined) => {
    (!textString)
        ? console.error("You did not enter a text string.")
        : (separator === undefined)
            ? console.error("You didn't enter the separator character")
            : console.log(textString.split(separator))
}

stringToArray("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos magni consequatur enim aliquid voluptates cupiditate, reiciendis cum numquam esse itaque maiores commodi quae nisi. Explicabo illo nam accusamus repellendus.")
stringToArray("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos magni consequatur enim aliquid voluptates cupiditate, reiciendis cum numquam esse itaque maiores commodi quae nisi. Explicabo illo nam accusamus repellendus.", ",")
stringToArray("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos magni consequatur enim aliquid voluptates cupiditate, reiciendis cum numquam esse itaque maiores commodi quae nisi. Explicabo illo nam accusamus repellendus.", " ")