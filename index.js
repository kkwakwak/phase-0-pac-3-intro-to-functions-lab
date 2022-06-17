function shout(string) {
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

function logShout(string) {
    console.log(string.toUpperCase())
};

function logWhisper(string) {
    console.log(string.toLowerCase())
};

let response;
const string = "Let's have dinner together!";

function sayHiToHeadphonedRoommate(string) {
    if (string === whisper(string)) {
        response = "I can't hear you!"; 
    } else if (string === shout(string)) {
        response = "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        response = "I would love to!";
    }
}

console.log(response);