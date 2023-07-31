import bcrypt from "bcrypt";
import db from "../data/database.js";

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.address = {
      street: street,
      postalCode: postal,
      city: city,
    };
  }

  getUserWithSameEmail() {
    return db.getDb().collection("users").findOne({ email: this.email });
  }

  async existsAlready() {
    const existingUser = await this.getUserWithSameEmail();
    if (existingUser) return true;
    else return false;
  }

  async signup() {

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(this.password, saltRounds) 

    console.log(this.password);
    console.log(hashedPassword)
      
    await db.getDb().collection("users").insertOne({
        email: this.email,
        password: hashedPassword,
        address: this.address,
    })

    }

  async hasMatchingPassword(hashedPassword) {
    const hasMatch = await bcrypt.compare(this.password, hashedPassword);
    console.log(hashedPassword)
    console.log(hasMatch);
    console.log(this.password);
    return hasMatch;
  }
}

export default User;
