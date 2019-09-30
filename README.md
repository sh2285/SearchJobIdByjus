# SearchJobId10880844

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


Unit Test Case : -

#Test Case 1
Ensure there is two dropdown filters location and company.
Two Dropdown filter are there one for location and another one for company with default value '--All--'.
When select location table will have filtered and show data respected location as well as 
updated no of records  at bottom of table.

#Test Case 2
When we change location dropdown the company name dropdown reset and take its default value '--All--' and vice versa in case
of company name dropdown select, and table data will also be populated respectively.

#Test Case 3
Ensure there is search box.
Search box available in order to achieve searching  based on text provide by user and update no of records count respectively. 

#Test Case 4
Ensure there is pagination functionality available to increase no of records.

#Test Case 5
Ensure sorting functionality working based on data while we clicking on header of table.

# Observation 
Ensure login and register functionality available.
I have to comment single line of code which path is :-  helpers > jwt.interceptor.ts
//  Authorization: `Bearer ${currentUser.token}`
while we enable login feature it required cors policy authorization but i am not using my own webapi to implement the program so
i am not able to enable cors policy. I have to comment login feature ,  you can go through login and register code chunk.
