// style 
import "../../static/pannel-apps/events.css";
// animation 
import { Slide } from "react-awesome-reveal";
const Events = () => {
    return (
        <Slide direction="left" duration={300}>
            <div className="events outlet">
                events
            </div>
        </Slide>
    )
}; export default Events;