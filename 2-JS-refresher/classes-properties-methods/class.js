class Human {
  constructor() {
    this.gender = "female"
  }

  printGender() {
    console.log(this.gender);
}
}


class Person extends Human {
  cname = "Max";
  }

  printMyName = () =>  {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();