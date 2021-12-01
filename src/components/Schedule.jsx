import { schedules } from "./schedule/Data"
import shedule from "../assets/shedule.png";
import shedulemob from "../assets/shedulemob.png";
import ScheduleCard from "./schedule/ScheduleCard"
import './schedule/scheduleCard.css'
import ScheduleTagGrad from "./schedule/scheduleTagGrad";

import daySchedule from "../assets/day-schedule.svg";
import dayScheduleMob from "../assets/day-schedule-mb.svg";

const Schedule = ({ scheduleRef }) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 className='sd-main-head' ref={scheduleRef}>
        Schedule
      </h1>
      <ScheduleTagGrad />
      <div className="shedule">
        <img src={shedule} className="sheduleimg" alt="shedule" />
        <img src={shedulemob} className="shedulemob" alt="shedule" />
      </div>
        <DayScheduleImg />
      {/*<div className='sd-container'>*/}
      {/*  {schedules.map((schedule) => (*/}
      {/*    <ScheduleCard*/}
      {/*      id={schedule.id}*/}

      {/*      day={schedule.day}*/}
      {/*      para={schedule.para}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

const DayScheduleImg = () => {
    return (
        <div style={{width: "100%", marginTop: "4rem"}} className={"dayScheduleImgContainer"}>
            <img className={"dayScheduleImg"} style={{width: "100%"}} src={daySchedule} alt="day schedules"/>
            <img className={"dayScheduleMobImg"} style={{width: "100%"}} src={dayScheduleMob} alt="day schedules"/>
        </div>
    );
}

export default Schedule
