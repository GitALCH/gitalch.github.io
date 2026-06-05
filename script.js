let languages;
let database;
let frameWorks;
let systems;

/**
 * Sets everything to link to the document
 */
window.addEventListener("load", () => {
    let lang = document.getElementById("languages");
    let data = document.getElementById("database");
    let frame =  document.getElementById("frameWorks");
    let sys = document.getElementById("systems");
    skillOutput = document.getElementById("skillsOutput");
    skillOutputTitle = document.getElementById("skillsOutputTitle");
    lang.addEventListener("click", () => {
        set();
        outPut(languages);
        set();
    });
    data.addEventListener("click", () => {
        set();
        outPut(database);
        set();
    });
    frame.addEventListener("click", () => {
        set();
        outPut(frameWorks);
        set();
    });
    sys.addEventListener("click", () => {
        set();
        outPut(systems);
        set();
    });
});

function outPut(skill) {
    skillOutputTitle.innerHTML = skill.pop();
    skillOutput.innerHTML = skill;
}

/**
 * Order for set is whatever is inside description is first, then the last item is the title
 */
function set() {
    languages = ["HTML/CSS", " Javascript", "PHP", "Java", "C#", "Python", "Bash", "Programming Languages"];
    database = ["SQL", " Microsoft SQL Server", " MySQL", "Database"];
    frameWorks = ["Bootstrap", " React", " Nodejs", "Frameworks"];
    systems = ["Software Unit Testing / Planning", "Git", "GitHub", "Linux", "Windows", "Systems and Tools"];
}