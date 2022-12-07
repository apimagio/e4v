<h2>e4v = elevator4visma</h2>

<h3>author information</h3>
Martin Kovalcik<br>
Application runs on: https://ponovom.online
<br>
<h3>description of your solution</h3>
Simple Javascript application simulating the basic functions of the elevator of a four-story building.
Aplication has X classes and uses functions for:
<ul>
<li> controller accessibility </li> 
<li> elevator functionality control </li>
<li> elevator call (external controller) </li>
<li> elevator moveTo (internal controller)</li>
</ul>

<br><br>
Functions for future evaluating
<ul>
<li> occupancy control </li>
<li> door safety control </li>
<li> opening the door on floor where its stops </li>
<li> release all doors lock, when elevator is not occupied </li>
<li> change direction allowed, if the top floor of direction is reached </li>
<li> stopping the elevator </li>
<li> emergency siuation </li>
</ul>
<br><br>
<i>Notes:</i><br>
Elevator is able to travel between floors.<br>
House with elevator has 4 floor. //I hope, that I understood correctly, that not elevator has 4 floors (as described in the assignment) ;-) <br>
, there are two basic panels/controllers for manipulating (external and internal)<br>
, elevator starts going in direction of the first button pressed
, upon further external calls from the direction of movement, the elevator stops on the floor from which it was called
<br>

<h3>used technologies</h3>
ESX6 + Javascript + React JSX

<h3>description of your elevator alghorhitm</h3>
<b>Eleavator service controls:</b><br><br>
<i>Controller accessibility</i><br>
&nbsp;&nbsp;    function getControllerStatus() of object Controller //for basic controll of the controller functionality<br><br>
<i>Set elevator status</i><br>
&nbsp;&nbsp;    function setElevatorStatus(ARG) of object Controller //for setting elev. activity "idle", "up" and "down" [0,1,2] for controller<br><br>
<i>Get elevator status</i><br>
&nbsp;&nbsp;    function getElevatorStatus() of object Controller //for getting elev. activity "idle", "up" and "down" [0,1,2] from controller for indication<br><br>


<br><br><br><br>
OPTIONAL FUNCTIONS FOR LATER DEVELOPEMENT
<i> Door safety control </i><br>
&nbsp;&nbsp;    function getDoorLockedStatus() of object Elevator //for checking the doors, before the elevator move<br>
<br><br>

TO OPTIMALIZE<br><br>
<i> Occupancy control </i><br>
&nbsp;&nbsp;    function getElevOccupacyStatus() of object Elevator //for direct elevator call OR putting call into the array<br>
<br><br>

#steps for compilation and debugging
Unrequired processes. !!React copmponents, because of no production need, are dependent on CDNs babel transpiler.
