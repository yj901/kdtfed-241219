interface IStudent {
  type: "student";
  school: string;
}

interface IDeveloper {
  type: "developer";
  skill: string;
}

// 인터페이스 유니온 방식으로
interface IUser<T> {
  name: string;
  profile: T;
}

const goToSchool = (user: IUser<IStudent>) => {
  // if (user.profile.type !== "student") {
  //   console.log("잘못오셨음");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교완료`);
};

const developerUser: IUser<IDeveloper> = {
  name: "jin",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: IUser<IStudent> = {
  name: "jin",
  profile: {
    type: "student",
    school: "Ezen",
  },
};

goToSchool(studentUser);
