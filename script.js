var citaty=[
  "Láska je kompromis mezi velkými ideály a malými možnostmi.",
  "Vše se miluje, co je opačné, ale blízké.",
  "Proč žijeme v takovém kvapu a životem tak plýtváme? Jsme odhodláni zemřít hlady dříve než jsme hladovi.",
  "Písmo, jež je do poslední tečky inspirované, poskytuje klíč k porozumění tajemstvím života.",
  "Všichni jsme amatéři, život je tak krátký, že na víc nestačíme.",
  "Sebeláska je jedem přátelství.",
  "Cenou člověka je jeho sen.",
  "Lidé si nejsou naprosto rovni: jedni se rodí k otroctví, druzí ke vládě.",
  "Smutek má svoji hloubku; štěstí je mělké.",
  "Neohlížejte se smutně za minulostí, už se nevrátí.",
  "Citáty mají větší cenu, než se zdá; ony vysvětlují, dokazují, srovnávají.",
]

function randomCitat(){
  var randomNumber= Math.floor(Math.random()*citaty.length);
  document.getElementById("citatZde").innerHTML=citaty[randomNumber];
}
