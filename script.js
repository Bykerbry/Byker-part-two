
var eventType, tempFahr, clothing1, clothing2, result

eventType = prompt("What type of event will you be attending?");
tempFahr = prompt("What is the temperature in degrees Fahrenheit?")

eventType = eventType.toLowerCase();
tempFahr = parseInt(tempFahr);

if (eventType === "casual") {
    clothing1 = "something comfy";
} else if (eventType === "semi-formal") {
    clothing1 = "a polo";
} else {
    clothing1 = "a suit";
}

if (tempFahr < 54) {
    clothing2 = "a coat";
} else if (tempFahr >= 54 && tempFahr < 71) {
    clothing2 = "a jacket";
} else (
    clothing2 = "no jacket"
)

result = "Because it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + clothing1 + " and " + clothing2 + ".";

console.log (result);
















