// alert("Provjera");

function fail() {
  try {
    console.log("this works");
    // consol.log("this works");
    throw new Error("oopsie")
  } catch (error) {
    console.log("we made an error: ", error);
  }
  finally{
    console.log("still good");
  }
}

fail();
