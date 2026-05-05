let frontEnd;
let backEnd;
let appDev;
let dataBase;
let testing;
let versionControl;
let os;
let frameWorks;
let skillOutput;
let skillOutputTitle;

window.addEventListener("load", () => {
    let front = document.getElementById("frontEnd");
    let back = document.getElementById("backEnd");
    let app = document.getElementById("appDev");
    let data = document.getElementById("database");
    let test = document.getElementById("testing");
    let version = document.getElementById("versionControl");
    let operating = document.getElementById("os");
    let frame =  document.getElementById("frameWorks");
    skillOutput = document.getElementById("skillsOutput");
    skillOutputTitle = document.getElementById("skillsOutputTitle");
    front.addEventListener("click", () => {
        set();
        outPut(frontEnd);
        set();
    });
    back.addEventListener("click", () => {
        set();
        outPut(backEnd);
        set();
    });
    app.addEventListener("click", () => {
        set();
        outPut(appDev);
        set();
    });
    data.addEventListener("click", () => {
        set();
        outPut(dataBase);
        set();
    });
    test.addEventListener("click", () => {
        set();
        outPut(testing);
        set();
    });
    version.addEventListener("click", () => {
        set();
        outPut(versionControl);
        set();
    });
    operating.addEventListener("click", () => {
        set();
        outPut(os);
        set();
    });
    frame.addEventListener("click", () => {
        set();
        outPut(frameWorks);
        set();
    });
});

function outPut(skill) {
    skillOutputTitle.innerHTML = skill.pop();
    skillOutput.innerHTML = skill;
}

function set() {
    frontEnd = ["HTML/CSS", " Javascript", "Front End"];
    backEnd = ["PHP", " Java", " C#", " Bash", "Back End"];
    appDev = ["Java", " C#", " Python", "App Development"];
    dataBase = ["SQL", " Microsoft SQL Server", " MySQL", "Database"];
    testing = ["Software Unit Testing / Planning"];
    versionControl = ["Git", " GitHub", "Version Control"];
    os = ["Linux", " Windows", "Operating Systems"];
    frameWorks = ["Bootstrap", " React", " Nodejs", "Frameworks"];
}