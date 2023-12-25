let r = (Math.random() * 255);
    let g = (Math.random() * 255);
    let b = (Math.random() * 255);

    let start = setInterval(fontcolor, 1000);
    function fontcolor() {
        r = (Math.random() * 255);
        g = (Math.random() * 255);
        b = (Math.random() * 255);
        document.getElementById("wish").style.color = `rgb(${r}, ${g}, ${b})`;
        
    }