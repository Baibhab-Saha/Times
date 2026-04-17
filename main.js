function digitalClock() {
    let latestTime = new Date();
  
    const baseOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.querySelector("#local-time").innerHTML = latestTime.toLocaleTimeString("en-US", baseOptions);

    document.querySelector("#ny-time").innerHTML = latestTime.toLocaleTimeString("en-US", { 
        ...baseOptions, 
        timeZone: "America/New_York" 
    });
  
    document.querySelector("#london-time").innerHTML = latestTime.toLocaleTimeString("en-US", { 
        ...baseOptions, 
        timeZone: "Europe/London" 
    });

    document.querySelector("#tokyo-time").innerHTML = latestTime.toLocaleTimeString("en-US", { 
        ...baseOptions, 
        timeZone: "Asia/Tokyo" 
    });
}

digitalClock(); 
setInterval(digitalClock, 1000);