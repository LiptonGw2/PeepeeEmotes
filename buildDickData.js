import fs from "fs";
import path from "path";

let dickData = [];

let imgDir = "public/img";

let dickDirs = fs.readdirSync(imgDir).filter(x => x != "Unusable");
for (let dickDir of dickDirs) {
    let files = fs.readdirSync(path.resolve(imgDir, dickDir));
    for (let file of files) {
        let dickName = path.parse(file).name;

        let filePath = path.resolve(imgDir, dickDir, file);

        let fileStat = fs.statSync(filePath);

        dickData.push({
            createdBy: dickDir,
            name: dickName,
            path: "img/" + dickDir + "/" + file,
            date: fileStat.mtime
        });
    }
}

dickData = dickData.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date))
        return -1;
    return 1;
});

fs.writeFileSync("src/dickData.json", JSON.stringify(dickData), "utf-8");

console.log("Dick Data created");
