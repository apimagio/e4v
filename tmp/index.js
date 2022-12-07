//import Controller from './class-controller.js';
console.log ("cnslTestJs");

class Controller {
    constructor(accessStatus, elevatorStatus) {
        this.accessStatus = accessStatus;
        this.elevatorStatus = elevatorStatus;
    }

    //elevatorStatus (idle, toUp, toDown), tm.>> const eS = [0, 1, 2];
    setElevatorStatus(sES) {
        this.elevatorStatus = sES;
    }

    getElevatorStatus() {
        this.value;
        //gES = this.elevatorStatus;
        switch (this.elevatorStatus) {
            case 0:
                this.value = "Elevator is idle.";
            break;
            case 1:
                this.value = "Elevator is moving up.";
            break;
            case 2:
                this.value = "Elevator is moving down.";
            break;   
            default:
                this.value = "No value found";
        } 
    }

    getElevatorStatus2() {
        if (this.elevatorStatus== 2) {
            console.log("Elevator status is moving down.");
        }
        else if (this.elevatorStatus== 1) {
            console.log("Elevator status is moving up.");
        }
        else {
            console.log("Elevator status is idling.");
        }
    }

    controllerStatus() {
        return this.accessStatus + "(ctrl) and elevator is: " + this.elevatorStatus;
    }
}

class ExtController extends Controller {
    constructor(accessStatus, elevatorStatus, currentFloor) {
       super(accessStatus, elevatorStatus);
       this.currentFloor = currentFloor;
       }
    }

    //basic testing controller verification
    function serviceTestController() {
        let tstController = new Controller(1,0);
        //document.getElementById("indicator").innerHTML = "tstController is accessible, accessStatus = "+tstController.controllerStatus();
        console.log (tstController); 
        //extra switch for elevatorStatus
        tstController.setElevatorStatus(2);
        console.log ("tstController is accessible, accessStatus = "+ tstController.controllerStatus());
        //console.log ("elevator status is: " + tstController.getElevatorStatus2());
        tstController.getElevatorStatus2();
        //console.log ("elevator status is: " + tstController.getElevatorStatus());
    }
    serviceTestController();


function timeInfo() {
    document.getElementById('indicator').innerHTML = '<span class="timeInfo">Elevator comes in about X seconds.</span>'; 
}

function noInfo() {
    document.getElementById('indicator').innerHTML = ''; 
}

/* React custom components */

function EntPreview() {
    return <h5>JS React elevator preview </h5>    
}

function Page() {
    return ( 
        <div>
            <header>
                <nav>
                    <img src="./elevator-logo.png" width="50px" />                    
                </nav>
            </header>
            CcPage
            <h1>Some facts</h1>
                <ul>
                    <li>nr 1.</li>
                    <li>nr 2.</li>
                </ul>
                <br />
            <footer className="footbar">
                <small> © 2022 AMG development.</small>
            </footer>
        </div>
    )
}

function App() {
    return (
        <div>
            <EntPreview />
            <Page />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render (
    <App />
)