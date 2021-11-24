import { schedules } from "./schedule/Data"
import ScheduleCard from "./schedule/ScheduleCard"
import './schedule/scheduleCard.css'
const Schedule = ({ scheduleRef }) => {
  return (
    <>
      <h1 className='sd-main-head' ref={scheduleRef}>
        Schedule
      </h1>
      <div className='sd-container'>
        {schedules.map((schedule) => (
          <ScheduleCard
            id={schedule.id}
            passId={schedule.id}
            day={schedule.day}
            lists={schedule.lists}
          />
        ))}
      </div>
    </>
  );
};

export default Schedule
