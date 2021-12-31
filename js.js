document.querySelector('a-scene').addEventListener('loaded', function () 
    {
        setTimeout(()=>{
            document.getElementById("splash-screen").style.display="none";
            const scene = document.getElementById("scene");
            scene.style.display="block";
            scene.style.position= "absolute";
        },2000)
    }
)