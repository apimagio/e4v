//import Controller from './class-controller.js';
console.log ("cnslTestJs");

class Controller {
    constructor(accessStatus, elevatorStatus) {
        this.accessStatus = accessStatus;
        this.elevatorStatus = elevatorStatus;
    }

    getControllerStatus() {
        return this.accessStatus + " (is controller status) and elevator status is: " + this.elevatorStatus; 
    }

    //elevatorStatus (idle, toUp, toDown) > elStat = [0, 1, 2];
    setElevatorStatus(setElStat) {
        this.elevatorStatus = setElStat;
    }

    getElevatorStatus() {
        let getElStatStatus;
        switch (this.elevatorStatus) {
            case 0:
                getElStatStatus = "Elevator is idleing..";
            break;
            case 1:
                getElStatStatus = "Elevator is moving up..";
            break;
            case 2:
                getElStatStatus = "Elevator is moving down..";
            break;   
            default:
                getElStatStatus = "No value found";
        } 
        return (getElStatStatus);
        //console.log(getElStatus);
    }


    getElevatorStatus2() {
        if (this.elevatorStatus== 2) {
            return ("Elevator is moving down!");
        }
        else if (this.elevatorStatus== 1) {
            return ("Elevator is moving up!");
        }
        else {
            return ("Elevator is idling!");
        }
    }

} //end of class Controller

class ExtController extends Controller {
    constructor(accessStatus, elevatorStatus, currentFloor) {
       super(accessStatus, elevatorStatus);
       this.currentFloor = currentFloor;
       }
}

/*
//App workflow using classes
*/

//basic controller service test/verification
    function controllerServiceTest() {
        let ctrlerServCtrl = new Controller(1,0);
        //document.getElementById("indicator").innerHTML = "tstController is accessible, accessStatus = "+tstController.controllerStatus();
        console.log (ctrlerServCtrl); 
        //independent manual switch for elevatorStatus
        //ctrlerServCtrl.setElevatorStatus(2);
        console.log ("Controller /service test/ is accessible. The accessStatus = " + ctrlerServCtrl.getControllerStatus());
        console.log ("Self (condition based) elevator status is: " + ctrlerServCtrl.getElevatorStatus2());
        //console.log ("Self (switch based) elevator status is: " + ctrlerServCtrl.getElevatorStatus());
    }
    controllerServiceTest();


//independent 2 JS functions
function timeInfo() {
    document.getElementById('indicator').innerHTML = '<span class="timeInfo">Elevator comes in about X seconds.</span>'; 
}

function noInfo() {
    document.getElementById('indicator').innerHTML = ''; 
}


/* 
//React custom components 
*/

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