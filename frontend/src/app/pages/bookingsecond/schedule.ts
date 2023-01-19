// import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

function schedule()
{
let data: object [] = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 17, 12, 30),
  IsAllDay: false
  },{
  Id: 2,
  Subject: 'London',
  StartTime: new Date(2018, 1, 16, 12, 0),
  EndTime: new Date(2018, 1, 18, 13, 0),
  IsAllDay: false
  }];
  Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
  let scheduleObj: Schedule = new Schedule({
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  eventSettings: {
      dataSource: data,
      spannedEventPlacement: 'TimeSlot'
  }
  });
  scheduleObj.appendTo('#Schedule');
}
