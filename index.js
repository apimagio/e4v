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

    /* 
    getElevatorStatus() {
        let getElStatStatus;
        switch (this.elevatorStatus) {
            case 0:
                getElStatStatus = "Elevator is idle.";
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
        //return (getElStatStatus);
        //console.log(getElStatus);
    }
*/
    //replacement of the function above, which doesnt worked properly
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

} /* end of class Controller */

class ExtController extends Controller {
    constructor(accessStatus, elevatorStatus, floorNumbers, ctrlerFloor) {
       super(accessStatus, elevatorStatus, floorNumbers);
       this.ctrlerFloor = ctrlerFloor;
       }
    
    //ctrl fn ExtController obj
    sMsgShow() {
        return this.sMsg() + " & extAdd = " + this.ctrlerFloor;
    }

    //call elevator on externak controller     
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
    
    //ctrl fn intController obj
    sMsgShow() {
        return this.sMsg() + " & no intCtrler prop. add ";
    }

    //selecting the floor where to go
    intCtrlerGoTo(floorToGo) {    
        return "int_msg: Elevator is going to selected floor - " + floorToGo;
    } 
}


/*
//App workflow using classes
*/

//basic controller service test/verification
    function controllerServiceTest() {
        let ctrlerServCtrl = new ExtController(1,0,4);
        //document.getElementById("indicator").innerHTML = "tstController is accessible, accessStatus = "+tstController.controllerStatus();
        console.log (ctrlerServCtrl); 
        //independent manual switch for elevatorStatus
        //ctrlerServCtrl.setElevatorStatus(2);
        console.log ("Controller /service test/ is accessible. The accessStatus = " + ctrlerServCtrl.getControllerStatus());
        console.log ("Self (condition based) elevator status is: " + ctrlerServCtrl.getElevatorStatus2());
        //console.log ("Self (switch based) elevator status is: " + ctrlerServCtrl.getElevatorStatus());
    }
    controllerServiceTest();

    //1 accessStatus, 2 elevatorStatus, 3 floorNumbers, 4 ctrlerFloor  
    let extCtrler1 = new ExtController(0,1,4,1);
    let extCtrler2 = new ExtController(0,1,4,2);
    let extCtrler3 = new ExtController(0,1,4,3);
    let extCtrler4 = new ExtController(0,1,4,4);

    //console.log("ext_msg: extCtrler4 is on floor: " + extCtrler4.ctrlerFloor)
    //console.log("ext_msg:" + extCtrler4.sMsgShow());

    //to the buttons on external panels/controllers would be assigned those object methode invokation
    console.log(extCtrler4.extElevatorCall());

    //1 accessStatus, 2 elevatorStatus, 3 floorNumbers
    let intCtrler = new IntController(0,1,4);

    //console.log("int_msg: " + intCtrler.sMsgShow());
    console.log(intCtrler.intCtrlerGoTo(2));

    /*
    function getExtCtrlerFloor() {
        let ctrlerFloor = extCtrler1.ctrlerFloor;
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