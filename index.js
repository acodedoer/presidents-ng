let i = 0;
AFRAME.registerComponent('information', {
    schema: {
        name: {type:'string', default: ''},
        period:{type: 'string', default: ''}
    },
    init: function () {
        const el = document.createElement("a-entity");  
        el.setAttribute("text",`font: mozillavr; value: ${this.data.name} \n ${this.data.period}; color: black; align:center;`)
        this.el.className="clickable";
        this.el.addEventListener('mouseenter', function (evt) {
            el.setAttribute("animation","property: position; to: 0 -1.15 0.0001;");
        });
        this.el.addEventListener('mouseleave', function (evt) {
            el.setAttribute("animation","property: position; to: 0 -1.15 -0.1;");
        });
        el.setAttribute("position","0 -1.15 -0.1");
        const scale = 3;
        el.setAttribute("scale",`${scale} ${scale} ${scale}`);
        this.el.appendChild(el);
        
    }
});

