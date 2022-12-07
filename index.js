//import Controller from './class-controller.js';
console.log ("cnslTestJs");

class Controller {
    constructor(accessStatus, elevatorStatus, floorNumbers) {
        this.accessStatus = accessStatus;
        this.elevatorStatus = elevatorStatus;
        this.floorNumbers = floorNumbers;
    }

    //simple message object verifier
    sMsg () {
        return "sMsg from Controller";
    }

    //to verify controller status info
    getControllerStatus() {
        return this.accessStatus + " (is controller status) and elevator status is: " + this.elevatorStatus; 
    }

    //elevatorStatus options (idle, toUp, toDown) > elStat = [0, 1, 2];
    setElevatorStatus(setElStat) {
        this.elevatorStatus = setElStat;
    }

    getElevatorStatus() {
        switch (this.elevatorStatus) {
            case 0:
                return "Elevator is idle.";
            case 1:
                return "Elevator is moving up.";
            case 2:
                return "Elevator is moving down.";
            default:
                return "No value found";
        } 
    }

    /*  //1st fn 
    getElevatorStatus2() {
        if (this.elevatorStatus== 2) {
            return ("Elevator is moving down!");
        }
        else if (this.elevatorStatus== 1) {
            return ("Elevator is moving up!");
        }
        else {
            return ("Elevator is idle!");
        }
    }
    */

} /* end of class Controller */

class ExtController extends Controller {
    constructor(accessStatus, elevatorStatus, floorNumbers, ctrlerFloor) {
       super(accessStatus, elevatorStatus, floorNumbers);
       this.ctrlerFloor = ctrlerFloor;
       }
    
    //simple message object verifier2
    sMsgShow() {
        return this.sMsg() + " & extAdd = " + this.ctrlerFloor;
    }

    //call elevator on external controller     
    extElevatorCall() {    
        //rtrn lastElStopPosition + " (is last elev. stop position);
        return "ext_msg: Elevator is going to " + this.ctrlerFloor;
    }

    /* 
    getElevatorLastStopPosition() {
        if (afterElevStopAndDoorActionCtrl) {
            return ctrler.Floor;
        }
    }*/
   
}

class IntController extends Controller {
    constructor(accessStatus, elevatorStatus, floorNumbers) {
       super(accessStatus, elevatorStatus, floorNumbers);
    }
    
    //simple message object verifier2
    sMsgShow() {
        return this.sMsg() + " & no intController prop. add ";
    }

    //selecting the floor where to go
    intControllerGoTo(floorToGo) {    
        return "int_msg: Elevator is going to selected floor - " + floorToGo;
    } 
}


/*
//App workflow using classes
*/

//basic controller service test/verification
    function controllerServiceTest() {
        let controllerServiceControl = new ExtController(1,0,4);
        //document.getElementById("indicator").innerHTML = "tstController is accessible, accessStatus = "+tstController.controllerStatus();
        console.log (controllerServiceControl); 
        //independent manual switch for elevatorStatus
        //controllerServiceControl.setElevatorStatus(2);
        console.log ("Controller /service test/ is accessible. The accessStatus = " + controllerServiceControl.getControllerStatus());
        //console.log ("Self (condition based) elevator status is: " + controllerServiceControl.getElevatorStatus());
        console.log ("Self (switch based) elevator status is: " + controllerServiceControl.getElevatorStatus());
    }
    controllerServiceTest();

    //1 accessStatus, 2 elevatorStatus, 3 floorNumbers, 4 ctrlerFloor  
    let extController1 = new ExtController(0,1,4,1);
    let extController2 = new ExtController(0,1,4,2);
    let extController3 = new ExtController(0,1,4,3);
    let extController4 = new ExtController(0,1,4,4);

    //console.log("ext_msg: extController4 is on floor: " + extCtrler4.ctrlerFloor)
    //console.log("ext_msg:" + extController4.sMsgShow());

    //to the buttons on external panels/controllers would be assigned object method invocation like this
    console.log(extController4.extElevatorCall());

    //1 accessStatus, 2 elevatorStatus, 3 floorNumbers
    let intController = new IntController(0,1,4);

    //console.log("int_msg: " + intController.sMsgShow());
    console.log(intController.intControllerGoTo(2));

    /*
    function getExtControlerFloor() {
        let controllerFloor = extController1.ctrlerFloor;
        return ctrlerFloor;
    }*/

    //independent 2 JS functions for counting approximete time of elevators disposition on floor of the external controlller
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