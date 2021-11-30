import { schedules } from "./schedule/Data"
import shedule from "../assets/shedule.png";
import shedulemob from "../assets/shedulemob.png";
import ScheduleCard from "./schedule/ScheduleCard"
import './schedule/scheduleCard.css'

const Schedule = ({ scheduleRef }) => {
  return (
    <>
      <h1 className='sd-main-head' ref={scheduleRef}>
        Schedule
      </h1>
      <div className="shedule">
        <img src={shedule} className="sheduleimg" alt="shedule" />
        <img src={shedulemob} className="shedulemob" alt="shedule" />
      </div>
      <div className='sd-container'>
        {schedules.map((schedule) => (
          <ScheduleCard
            id={schedule.id}

            day={schedule.day}
            para={schedule.para}
          />
        ))}
      </div>
    </>
  );
};

export default Schedule
