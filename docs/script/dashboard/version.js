function redirectToVersion() {
    var enteredVersion = document.getElementById("versionInput").value;
    
    // Validate the entered version (you may want to add more validation)
    if (/^\d+\.\d+\.\d+$/.test(enteredVersion)) {
        var versionComponents = enteredVersion.split(".");
        
        var versionPath = "version/" + versionComponents[0] + "/" + versionComponents[1] + "/" + versionComponents[2] + "/";
        var versionFileName = "index.html";
        var fullPath = versionPath + versionFileName;
        
        window.location.href = fullPath;
    } else {
        alert("Please enter a valid version number (e.g., 1.0.0).");
    }
}