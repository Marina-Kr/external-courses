function electricalDevice(name, power, isSwitched) {
    this.name = name;
    this.power = power;
    this.isSwitched = isSwitched;
}

function hairDryer(name, power, isSwitched, color) {
    electricalDevice.call(this, name, power, isSwitched);
    this.color = color;
}

function iron(name, power, isSwitched, quality) {
    electricalDevice.call(this, name, power, isSwitched);
    this.quality = quality;
}

function vacuumCleaner(name, power, isSwitched, withFilter) {
    electricalDevice.call(this, name, power, isSwitched);
    this.withFilter = withFilter;
}

function room(devices) {
    this.devices = devices;
    room.prototype.calculatePower = function() {
        let result = 0;
        for (let i = 0; i < this.devices.length; i++) {
            if (this.devices[i].isSwitched === true) {
                result += this.devices[i].power;
            }
        }
        return Number(result.toFixed(2));
    };

    room.prototype.searchDevice = function(deviceName) {
        for (let i = 0; i < this.devices.length; i++) {
            if (this.devices[i].name === deviceName) {
                return this.devices[i];
			}
        }
        return "Не найдено"
    }
}

Object.setPrototypeOf(hairDryer.prototype, electricalDevice.prototype);
Object.setPrototypeOf(iron.prototype, electricalDevice.prototype);
Object.setPrototypeOf(vacuumCleaner.prototype, electricalDevice.prototype);

let rowenta = new hairDryer("Rowenta CV 5361", 2000, true, "white");
let babyliss = new hairDryer("Byliss BAB6510IRE", 2400, true, "black");
let bosch = new iron("Bosch TDA2325", 2250, false, "good");
let tefal = new iron("Tefal FV3915", 2500, true);
let samsung = new vacuumCleaner("Samsung SC8836", 3500, false, true);
let lumme = new vacuumCleaner("Lumme LU-3216", 3800, true, false);
let bedroom = new room([rowenta, babyliss, bosch, tefal, samsung, lumme]);
console.log(bedroom.devices);
console.log(bedroom.calculatePower());
console.log(bedroom.searchDevice("Tefal FV3915"));