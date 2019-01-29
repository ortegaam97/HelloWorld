var HelloWorld = (function () {
    function HelloWorld(firstName, middleName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.middleName + ' ' + this.lastName + ".");
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Anthony', 'Marcus', 'Ortega');
myHelloClassInstance.sayHello();
//# sourceMappingURL=HelloWorld.js.map