import airport from "./airport";
import {
  prefiles,
  prefile,
  pilots,
  pilot,
  controllers,
  controller,
  streams,
  events,
  airports,
  history,
} from "./resolvers";

const resolvers = {
  Query: {
    controllers,
    controller,
    prefiles,
    prefile,
    pilots,
    pilot,
    streams,
    eventCalendar: events,
    airport,
    airports,
    history,
  },
};

export default resolvers;
