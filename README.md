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
<li> occupancy control </li>
<li> door safety control </li>
<li> functionality control </li>
<li> opening the door on floor where its stops </li>
<li> release all doors lock, when elevator is not occupied </li>
<li> change direction allowed, if the top floor of direction is reached </li>
<li> stopping the elevator </li>
<li> emergency siuation </li>
</ul>

Elevator is able to travel between floors.
House with elevator has 4 floor. //I hope, that I understood correctly, that not elevator has 4 floors (as described in the assignment) ;-)
, there are two basic panels for manipulating (external and internal)
, 
, elevator starts going in direction of the first button pressed
, upon further external calls from the direction of movement, the elevator stops on the floor from which it was called
<br>
<h3>used technologies</h3>
ESX6 + Javascript 

<h3>description of your elevator alghorhitm<h3>
<b>Eleavator service controls:</b><br>
<b>Controller accessibility</b><br>
 //if accessStatus = 1
<b> Occupancy control </b><br>
//if measuring signal is 1
<b> Door safety control </b><br>
//if all doors lock checks are 1
<b> functionality control </b><br>
//if system indication is 1 


#steps for compilation and debugging
Unrequired processes. !!React copmponents, because of no production need, are dependent on CDNs babel transpiler.
