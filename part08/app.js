// alert("Provjera");

// function fail() {
//   try {
//     console.log("this works");
//     // consol.log("this works");
//     throw new Error("oopsie");
//   } catch (error) {
//     console.log("we made an error: ", error);
//   } finally {
//     console.log("still good");
//   }
// }

// fail();
//async error handling
//.catch()
// Promise.resolve("asyncfail")
//   .then((response) => {
//     throw new Error("1 fail");
//     console.log(response);
//     return response;
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//     return error;
//   })
//   .then((response) => {
//     console.log(response);
//   });

(async function () {
  try {
    await Promise.resolve("oopsie");
    await Promise.reject("oopsie 2");
  } catch (error) {
    console.log(error);
  }
  console.log("is this still good?");
})();

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favoriteSnack = "grapes";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "databaseError";
    this.favoriteSnack = "watermelon";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "permissionError";
    this.favoriteSnack = "orange";
  }
}
const a = new AuthenticationError("oopsie");
console.log(a.favoriteSnack);

const b = new DatabaseError("Oopsie");
console.log(b.favoriteSnack);
