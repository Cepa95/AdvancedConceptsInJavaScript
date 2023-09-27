// alert("Provjera");

function fail() {
  try {
    console.log("this works");
    // consol.log("this works");
    throw new Error("oopsie");
  } catch (error) {
    console.log("we made an error: ", error);
  } finally {
    console.log("still good");
  }
}

fail();
//async error handling
//.catch()
Promise.resolve("asyncfail")
  .then((response) => {
    throw new Error("1 fail");
    console.log(response);
    return response;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
    return error;
  })
  .then((response) => {
    console.log(response);
  });
