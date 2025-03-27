"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "jin",
    Role: Role.ADMIN,
};
const user8 = {
    name: "den",
    Role: Role.GUEST,
};
const user7 = {
    name: "mur",
    Role: Role.USER,
};
console.log(user9, user8, user7);
