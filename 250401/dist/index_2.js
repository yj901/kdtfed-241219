"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goToSchool = (user) => {
    // if (user.profile.type !== "student") {
    //   console.log("잘못오셨음");
    //   return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교완료`);
};
const developerUser = {
    name: "jin",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "jin",
    profile: {
        type: "student",
        school: "Ezen",
    },
};
goToSchool(studentUser);
