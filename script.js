// Henter inn form og output elementene fra HTML
var form = document.getElementById("form");
var volumEl = document.getElementById("volum");
var literEl = document.getElementById("liter");
var sekkerEl = document.getElementById("sekker");
var prisEl = document.getElementById("pris");

// Funksjonen aktiveres når submit-knappen trykkes
form.addEventListener("submit", function(event) 
{

    var data = form.elements;
    var ytre = data.ytre.value;
    var indre = data.indre.value;
    var lengde = data.lengde.value;
    var volum = (Math.PI * (ytre/2)**2 * lengde) - (Math.PI * (indre/2)**2 * lengde);
    var liter = volum / 1000;
    var antallSekker = liter / 12.5;
    var pris = Math.ceil(antallSekker) * 89;

    if (volum < 0) 
    {
        // Outputter en feilmelding om volumet blir mindre enn 0
        volumEl.innerHTML = "Det oppsto en feil! Prøv på nytt. PS: Volum av betongrøret kan ikke være 0!";
        literEl.innerHTML = "";
        sekkerEl.innerHTML = "";
        prisEl.innerHTML = ""; 
    } else 
    {
        // Outputter volum til betongrør og runder av volumet til 2 desimaler
        volumEl.innerHTML = "Volum: " + Round(volum) + " cm³";

        // Outputter antall liter betong som trengs for betongrøret
        literEl.innerHTML = "Forbruk av betong: " + Round(liter) + " l";

        // Outputter antall sekker som trengs for betongrøret
        sekkerEl.innerHTML = "Antall nødvendige sekker: " + Math.ceil(antallSekker);  

        // Outputter pris
        prisEl.innerHTML = "Pris: " + Round(pris) + " kr";
    }
    
    // Stanser formen fra å refreshe siden
    event.preventDefault();

});

// Funksjon som runder av et tall til 2 desimaler
function Round (num) 
{

    var rundAv = Math.round((num + Number.EPSILON) * 100)/100;
    return rundAv;

}