class HelloWorld{
    
    firstName = '';
    middleName: string;
    lastName: string;
  
    constructor(firstName: string, middleName: string, lastName: string){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this. middleName + ' ' + this.lastName + ".");
    }

}

const myHelloClassInstance = new HelloWorld('Anthony', 'Marcus', 'Ortega');
myHelloClassInstance.sayHello();
