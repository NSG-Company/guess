function myFunction() {
    const person = prompt("Welkom! Wat is je naam?", "vul hier je naam in");

    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + person + "! How are you today?";
    }
}