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
ESX6 + Javascript + React JSX

<h3>description of your elevator alghorhitm</h3>
<b>Eleavator service controls:</b><br><br>
<i>Controller accessibility</i><br>
&nbsp;&nbsp;    if accessStatus = 1
<br><br>
<i> Occupancy control </i><br>
&nbsp;&nbsp;    if measuring signal is 1
<br><br>
<i> Door safety control </i><br>
&nbsp;&nbsp;    if all doors lock checks are 1
<br><br>
<i> functionality control </i><br>
&nbsp;&nbsp;    if system indication is 1 
<br><br>

#steps for compilation and debugging
Unrequired processes. !!React copmponents, because of no production need, are dependent on CDNs babel transpiler.
