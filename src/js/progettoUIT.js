var IMG_PATH = "/img/";

window.onload = function(){
    let display = "creaGiocatori";




    switch(display) {

        case "creaGiocatori":
            creaGiocatori();
            break;

    }
};

function  creaGiocatori(){

    var n = -1;

    d3.json("./dataset.json").then( function(data) {

        console.log(data);

        var n = data.length;

    //PORTIERI
        const svgP = d3.select("#portieri")

        const nome = svgP
           .selectAll("figure")
           .data(data)
           .enter()
           .append("figure");

        d3.select("#portieri")
            .selectAll("figure")
            .append("input")
            .attr("type", "image")
            .attr("src", (d =>  IMG_PATH + d.small_img))
            .on("click", function(data) {
                window.location.replace("/src/scheda.html");
                //alert (d.cognome);
            d3.event.stopPropagation();
            });


        d3.select("#portieri")
            .selectAll("figure")
            .append("figcaption")
            .text( d => d.nickname );


        d3.select("#portieri")
            .selectAll("figure")
            .append('input')
            .attr('type','checkbox');

        //GIOCATORI

        const svgG = d3.select("#giocatori")

        const nomeG = svgG
            .selectAll("figure")
            .data(data)
            .enter()
            .append("figure");

        d3.select("#giocatori")
            .selectAll("figure")
            .append("input")
            .attr("type", "image")
            .attr("src", (d =>  IMG_PATH + d.small_img))
            .on("click", function() {
                alert('hello');
                d3.event.stopPropagation();
            });

        d3.select("#giocatori")
            .selectAll("figure")
            .append("figcaption")
            .text( d => d.nickname );


        d3.select("#giocatori")
            .selectAll("figure")
            .append('input')
            .attr('type','checkbox')

    });

        /*var svg = d3.select("#portieri")

            .selectAll("figure")
            .data(data)
            .enter()
            .append("figure")
            .append("figcaption")
            .text( d => d.nickname )
            .append("img")
            .attr("src", (d =>  IMG_PATH + d.small_img))
            .append("input")
            .attr("type", "checkbox")
            .style("position", "absolute")
            .style("top", "320")
            .style("left", "150");*/


}