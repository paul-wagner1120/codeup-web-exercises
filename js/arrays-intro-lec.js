(function (){

    let testArray = [];

    let instructors = ["David", "Cody", "Codey the Duck"];

    const falsyValues = [false, null, "", 0, undefined, NaN];


    console.log(instructors.length);

    console.log([].length);
    console.log([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 44, 55, 66, 77].length);

    console.log(instructors[0]);
    instructors[0] = "'Lord Megatron' David";
    console.log(instructors[0]); // first element of an array
    console.log(falsyValues[falsyValues.length - 1]); // get the last element from an array ez

    let randomIndex = Math.floor(Math.random() * instructors.length);
    alert("One of my instructors name is " + instructors[randomIndex] + ".");

    console.log(instructors);

    for (let i = instructors.length -1; i > -1; i--) { // decending
        console.log("One of your instructors is named: " + instructors[i]);
    }

    // for (let i = 0; i < instructors.length; i++) { //acending
    //     console.log("One of your instructors is named: " + instructors[i]);
    // }

    instructors.forEach(function (instructor) { // anonymous function
        console.log("One of your instructors is named: " + instructor);
    });

    function logInfo(info) {
        console.log(info);
    }
    falsyValues.forEach(logInfo); // defined function
    instructors.forEach(logInfo);

    for(let instructor of instructors) {
        console.log("One of your instructors is named: " + instructor);
    }


})();