/**
 * @description 倒计时
 */

var Timing = function (config) {
    var self = this;
    this.startTime = (new Date()).getTime();
    this.allRemainTime = config.remainTime;
    this.remainTime = config.remainTime;
    this.timingCallback = config.timingCallback;
    this.timeUpCallback = config.timeUpCallback;
    // 开始计时
    self.timingCallback();
    this.timing = setInterval(function () {
        var nowTime = (new Date()).getTime();
        var passedTime = Math.round((nowTime - self.startTime) / 1000);
        self.remainTime = self.allRemainTime - passedTime;
        if (self.remainTime >= 0) {
            self.timingCallback();
        }
        else {
            clearInterval(self.timing);
            self.timeUpCallback();
        }
    }, 1000);
};
Timing.prototype.getHours = function () {
    var hours = Math.floor(this.remainTime / 3600);
    if (hours < 10) {
        hours = '0' + hours;
    }
    return hours;
};
Timing.prototype.getMinutes = function () {
    var remainMinutes = this.remainTime % 3600;
    var minutes = Math.floor(remainMinutes / 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return minutes;
};
Timing.prototype.getSeconds = function () {
    var remainMinutes = this.remainTime % 3600;
    var seconds = Math.floor(remainMinutes % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return seconds;
};
Timing.prototype.getStrTime = function () {
    var hours = this.getHours();
    var minutes = this.getMinutes();
    var seconds = this.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
};
module.exports = Timing;

