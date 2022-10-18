(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString);
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let results = planetsArray.join(' <br> ');
    console.log("Added br tags between each planet: " + results);

    let finalList = "<ul>" + "<li>" + planetsArray.join("</li><li>") + "</li>" + "</ul>";
    console.log("Here is an unordered list: " + finalList);


// creating a HTML unordered list from an array. This includes adding the list into the HTML doc - reference from geeksforkeeks.org/how-to-creating-html-list-from-javascript-array/

    //
    // let list = document.getElementById("myList");
    //
    // planetsArray.forEach((item) => {
    //     let li = document.createElement("li");
    //     li.innerText = item;
    //     list.appendChild(li);
    // });
})();
