var selected_jokes = ["<p>"];

var all_jokes = jokes.slice();

function contains(query, otherArray) {

    for (z = 0; z < otherArray.length; z++) {

        if ( otherArray[z] == query) {
            return true;
        }

    }

    return false;
}

for (var n = 0; n < 25; n ++) {

    var selected_joke = all_jokes[~~(Math.random() * all_jokes.length)];
    while (contains(selected_joke, selected_jokes)) {
        var selected_joke = all_jokes[~~(Math.random() * all_jokes.length)];
    }

    if (n % 5 == 0 && n != 0 && n != 25) {
        selected_jokes.push("</p><p>");
    }

    selected_jokes.push(selected_joke);

}

selected_jokes.push("</p>");

document.getElementById("joke-wrapper").innerHTML = selected_jokes.join(" ");
