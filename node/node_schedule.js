const schedule = require('node-schedule');

let scheduleList = null;

const set = (s) => {
    let rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    let job = schedule.scheduleJob(rule, ()=> {
        console.log('Scheduler has executed!');
    })

    scheduleList = job;
}

const cancel = () => {
    if(scheduleList != null){
        scheduleList.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
}

const scheduleData = {
    dayOfWeek: [1,2],
    hour: 19,
    minute: 44
}

setScheduler(scheduleData);