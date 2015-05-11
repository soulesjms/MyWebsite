function getFromForm() {
    var x = document.getElementById("frm1");

    individual.setName(x.elements[0].value, x.elements[1].value);
    //individual.setLastName(x.elements[1].value);

    document.getElementById("demo").innerHTML = individual.getName() + individual.getContact();
}

function display() {
    document.getElementById("demo").innerHTML = testModule.incrementCounter();
}


var testModule = (function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log( "counter value prior to reset: " + counter );
            counter = 0;
        }
    };
})();

//this is an example of a module defined using object literal notation
var individual = {
    firstName: "Mark",
    lastName: "Soules",

    contact: {
        phoneNumber: "801-573-2342",
        cellNumber: "801-294-6511"
    },

    getName: function(){
        return this.firstName + " " + this.lastName;
    },
    getContact: function() {
        return this.contact.cellNumber + " " + this.contact.phoneNumber
    },
    setName: function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    },
    setContact: function(phoneNumber, cellNumber) {
        this.contact.cellNumber = cellNumber;
        this.contact.phoneNumber = phoneNumber;
    }
}

//this is an example of a module that is self-contained
var person  = (function() {
    var firstName = "Mark";
    var lastName = "Soules";

    return {
        setFirstName: function(firstName) {
            this.firstName = firstName;
        },

        setLastName: function(lastName) {
            this.lastName = lastName;
        },

        getName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
})();
