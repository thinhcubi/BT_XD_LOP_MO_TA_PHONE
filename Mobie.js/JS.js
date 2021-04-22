 class Mobile {
    constructor(name) {
        this.battery = 100;
        this.message = '';
        this.inBox = [];
        this.outBox = [];
        this.name = name;
        this.status = false;
    }
    checkOnOff() {
        this.dropBattery();
        return this.status;
    }
    turnOn() {
        this.dropBattery();
        this.status = true;
    }
    turnOff() {
        this.dropBattery();
        this.status = false;
    }
    dropBattery() {
        this.battery--;
    }
    chargeBattery() {
        this.dropBattery();
        if(this.checkBatteryFull()) {
            this.Battery++;
        }
    }
    checkBatteryFull() {
        return this.battery < 100;
    }
    writeMessage(txt) {
        this.dropBattery();
        this.message = txt;
    }
    sendMessage(mobile) {
        this.dropBattery();
        mobile.inBox.push(this.message);
        this.outBox.push(this.message);
    }
    getInbox() {
        this.dropBattery();
        return this.inBox;
    }
    getOutBox() {
        this.dropBattery();
        return this.outBox;
    }
    getName() {
        return this.name;
    }
}