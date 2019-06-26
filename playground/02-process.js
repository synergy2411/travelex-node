// node myfile.js

// myfile.runContent()

function shouldContinue(){
    
    var pendingOSTasks = []             // network socket is open, XHR
    var pendingAsyncOperation = []      // File System - read, write, append
    var pendingTimers = []          // setTimeout, setInterval

    return pendingAsyncOperation.length || pendingOSTasks.length || pendingTimers.length
    // return true
}

while(shouldContinue()){            // 'tick'

// process check and pause : 
    // 1 - completion of pendingOS
    // 2 - completion of pendingAsync
    // 3 - completion of pendingTimers

}

// program terminates