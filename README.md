# Rain Alarm

Rain Alarm is an app for Firefox OS and Android (maybe more in the future) with which precipitation forecasts are visualized in a graph. For now only locations in The Netherlands are covered via open-data of Buienradar. Forecasts of the next two hours are displayed in five-minute intervals.

It is possible to search a certain location by address, through Nominatim and save it. You can save multiple locations and switch between them. You can also use your current location.
The forecasts can also be based on your current location, then it is important that the app has access to your location.

### Privacy

For now the GPS-coordinates of your location are sent to https://nominatim.openstreetmap.org to figure out what the description is for your location. This is shown in the app. Furthermore your GPS-coordinates are sent to http://gps.buienradar.nl/getrr.php to fetch the precipitation forecast for your location.

I am thinking about adding an option to 'blur' your location by a certain distance. This has also been implemented in the latest nightly of Firefox OS itself, so for that it is not immediately neccesary.

Third feature I am thinking of is a way of using a (anonymizing) proxy for fetching forecasts from Buienradar, to prevent sharing your location along with your IP-address with them.

### Version
2.0.0

### Tech

RainAlarm uses a number of open source projects to work properly:

* [PhoneGap] - framework to create mobile apps using standardized web APIs for different
* [HighCharts] - a charting library written in pure JavaScript
* [Nominatim] - a tool from OpenStreetmap for reverse geocoding
* [jQuery] - a fast, small, and feature-rich JavaScript library

### Install
Download the package from the [Firefox Marketplace] or from [f-droid]. Or install [PhoneGap] and compile and build it yourself.

License
----

ISC

Copyright (c) 2015 Sander Baas

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


[PhoneGap]:http://phonegap.com
[HighCharts]:http://www.highcharts.com
[Nominatim]:http://wiki.openstreetmap.org/wiki/Nominatim
[jQuery]:http://jquery.com
[Firefox Marketplace]:https://marketplace.firefox.com/
[f-droid]:https://f-droid.org/