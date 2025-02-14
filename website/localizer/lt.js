function L(s, gloss){
  if(s=="only") return function(s){
    return "Tik "+s;
  };
  if(s=="READ-ONLY") return "NEKEIČIAMASIS FAILAS";
  if(s=="Editing") return "Redagavimas";
  if(s=="Dublin City University") return "Dublino miesto universitetas";
  if(s=="Log out") return "Atsijunkite";
  if(s=="Change your password") return "Pasikeiskite savo slaptažodį";
  if(s=="Registered user login") return "Registruoto vartotojo prisijungimas";
  if(s=="Get an account") return "Gaukite paskyrą";
  if(s=="Forgot your password?") return "Pamiršote slaptažodį?";
  if(s=="E-mail address") return "El. pašto adresas";
  if(s=="Password") return "Slaptažodis";
  if(s=="Log in") return "Prisijunkite";
  if(s=="Your termbases") return "Jūsų terminų bazės";
  if(s=="You have no termbases yet.") return "Jūs dar neturite terminų bazių.";
  if(s=="Create a termbase") return "Sukurkite terminų bazę";
  if(s=="Administration") return "Administravimas";
  if(s=="Users") return "Vartotojai";
  if(s=="Termbases") return "Terminų bazės";
  if(s=="smart search") return "Išmanioji paieška";
  if(s=="complete term") return "visas terminas";
  if(s=="start of term") return "termino pradžia";
  if(s=="end of term") return "termino pabaiga";
  if(s=="any part of term") return "bet kuri termino dalis";
  if(s=="any part except start or end") return "bet kuri dalis, išskyrus pradžią ir pabaigą";
  if(s=="search in all languages") return "ieškoti visomis kalbomis";
  if(s=="Configuration") return "Konfigūravimas";
  if(s=="ADMIN") return "ADMIN";
  if(s=="TRM") return "TRM";
  if(s=="DOM") return "SRT";
  if(s=="DEF") return "API";
  if(s=="XMPL") return "PVZ";
  if(s=="CHECKING STATUS") return "TIKRINIMO BŪSENA";
  if(s=="PUBLISHING STATUS") return "PUBLIKAVIMO BŪSENA";
  if(s=="TERMS") return "TERMINAI";
  if(s=="DOMAINS") return "SRITYS";
  if(s=="term") return "terminas";
  if(s=="clarification") return "patikslinimas";
  if(s=="acceptability") return "patikimumas";
  if(s=="source") return "šaltinis";
  if(s=="inflected form") return "kaitybos forma";
  if(s=="annotation") return "pažymos";
  if(s=="domain") return "sritis";
  if(s=="part of speech") return "kalbos dalis";
  if(s=="inflection") return "kaitybos forma";
  if(s=="language of origin") return "kilmės kalba";
  if(s=="symbol") return "simbolis";
  if(s=="trademark") return "prekės ženklas";
  if(s=="registered trademark") return "registruotas prekės ženklas";
  if(s=="proper noun") return "tikrinis daiktavardis";
  if(s=="formatting") return "formatavimas";
  if(s=="italic") return "kursyvas";
  if(s=="Created") return "Sukurta";
  if(s=="Changed") return "Pakeista";
  if(s=="Deleted") return "Ištrinta";
  if(s=="Bulk-deleted") return "Didelės apimties ištrynimas";
  if(s=="while uploading") return "kol įkeliama";
  if(s=="By") return "Iki";
  if(s=="When") return "Kada";
  if(s=="any checking status") return "bet kokia tikrinimo būsena";
  if(s=="any publishing status") return "bet kokia publikavimo būsena";
  if(s=="any language") return "bet kuri kalba";
  if(s=="any acceptabilty or no acceptability") return "bet kuri patikimumo pažyma arba nėra patikimumo pažymos";
  if(s=="any acceptabilty") return "bet kuri patikimumo pažyma";
  if(s=="no acceptability") return "nėra patikimumo pažymos";
  if(s=="any domain or no domain") return "bet kuri sritis arba nėra srities";
  if(s=="any domain") return "bet kuri sritis";
  if(s=="no domain") return "nėra srities";
  if(s=="LAST MAJOR UPDATE") return "PASKUTINIS PAGRINDINIS ATNAUJINIMAS";
  if(s=="set to today") return "nustatykite į šiandien";
  if(s=="Invalid e-mail address or password.") return "Klaidingas el. pašto adresas arba slaptažodis.";
  if(s=="INTR") return "ĮVD";
  if(s=="COLL") return "RINK";
  if(s=="INTROS") return "ĮVADINIAI PAAIŠKINIMAI";
  if(s=="DEFINITIONS") return "APIBRĖŽTYS";
  if(s=="EXAMPLES") return "PAVYZDŽIAI";
  if(s=="COLLECTIONS") return "RINKINIAI";
  if(s=="definition") return "apibrėžtis";
  if(s=="example") return "pavyzdys";
  if(s=="sentence") return "sakinys";
  if(s=="collection") return "rinkinys";
  if(s=="any collection or no collection") return "bet kuris rinkinys arba nėra rinkinio";
  if(s=="any collection") return "bet kuris rinkinys";
  if(s=="no collection") return "nėra rinkinio";
  if(s=="comments") return "komentarai";
  if(s=="with or without comments") return "su arba be komentarų";
  if(s=="with comments") return "su komentarais";
  if(s=="without comments") return "be komentarų";
  if(s=="my comments") return "mano komentarai";
  if(s=="with or without my comments") return "su arba be mano komentarų";
  if(s=="with my comments") return "su mano komentarais";
  if(s=="without my comments") return "be mano komentarų";
  if(s=="other people's comments") return "kitų žmonių komentarai";
  if(s=="with or without other people's comments") return "su arba be kitų žmonių komentarų";
  if(s=="with other people's comments") return "su kitų žmonių komentarais";
  if(s=="without other people's comments") return "be kitų žmonių komentarų";
  if(s=="EXTRANET") return "EKSTRANETAS";
  if(s=="EXT") return "EKST";
  if(s=="EXTRANETS") return "EKSTRANETAI";
  if(s=="extranet") return "ekstranetas";
  if(s=="any extranet or no extranet") return "bet kuris ekstranetas arba nėra ekstraneto";
  if(s=="any extranet") return "bet kuris ekstranetas";
  if(s=="no extranet") return "nėra ekstraneto";
  if(s=="sorting language") return "rūšiavimo kalba";
  if(s=="Create mutual cross-references") return "Sukurkite kryžmines nuorodas";
  if(s=="Remove mutual cross-references") return "Pašalinkite kryžmines nuorodas";
  if(s=="Merge into a single entry") return "Sujunkite į vieną įrašą";
  if(s=="SEE ALSO") return "TAIP PAT ŽIŪRĖKITE";
  if(s=="add to worklist") return "pridėkite prie darbinio sąrašo";
  if(s=="Domains") return "Sritys";
  if(s=="Part-of-speech labels") return "Kalbos dalių pažymos";
  if(s=="Inflection labels") return "Kaitybos formų pažymos";
  if(s=="Acceptability labels") return "Patikimumo pažymos";
  if(s=="Sources") return "Šaltiniai";
  if(s=="Collections") return "Rinkiniai";
  if(s=="Tags") return "Pažymos";
  if(s=="Extranets") return "Ekstranetai";
  if(s=="Name and blurb") return "Pavadinimas ir anotacija";
  if(s=="Features") return "Požymiai";
  if(s=="Languages") return "Kalbos";
  if(s=="Publishing") return "Publikavimas";
  if(s=="Change the termbase's URL") return "Pakeiskite terminų bazės nuorodą";
  if(s=="Delete the termbase") return "Ištrinkite terminų bazę";
  if(s=="TITLE") return "PAVADINIMAS";
  if(s=="abbreviation") return "sutrumpinimas";
  if(s=="LANGUAGES") return "KALBOS";
  if(s=="select all") return "pažymėkite viską";
  if(s=="unselect all") return "panaikinkite visus žymėjimus";
  if(s=="PRIORITY") return "PRIORITETAS";
  if(s=="high") return "didelis";
  if(s=="medium") return "vidutinis";
  if(s=="low") return "mažas";
  if(s=="USERS") return "VARTOTOJAI";
  if(s=="e-mail address") return "el. pašto adresas";
  if(s=="user") return "vartotojas";
  if(s=="Alphabetical order") return "Abėcėlinis išdėstymas";
  if(s=="Similar terms (click to insert)") return "Panašūs terminai (paspauskite, kad įterptumėte)";
  if(s=="Other entries that share this term") return "Kiti įrašai, kuriuose pateikiamas šis terminas";
  if(s=="stop sharing") return "nesidalyti";
  if(s=="Change checking status to") return "Pakeiskite tikrinimo būseną į";
  if(s=="Change publishing status to") return "Pakeiskite publikavimo būseną į";
  if(s=="Add to extranet") return "Pridėkite prie ekstraneto";
  if(s=="Remove from extranet") return "Pašalinkite iš ekstraneto";
  if(s=="checked") return "patikrinta";
  if(s=="not checked") return "nepatikrinta";
  if(s=="publishable") return "skelbtina";
  if(s=="hidden") return "paslėpta";
  if(s=="CHECKED") return "PATIKRINTA";
  if(s=="NOT CHECKED") return "NEPATIKRINTA";
  if(s=="PUBLISHABLE") return "SKELBTINA";
  if(s=="HIDDEN") return "PASLĖPTA";
  if(s=="non-essential") return "nebūtinas";
  if(s=="STATUS") return "BŪSENA";
  if(s=="live") return "tiesioginis rodymas";
  if(s=="not live") return "netiesioginis rodymas";
  if(s=="any clarification or no clarification") return "bet koks patikslinimas arba nėra patikslinimo";
  if(s=="any clarification") return "bet koks patikslinimas";
  if(s=="no clarification") return "nėra patikslinimas";
  if(s=="clarification containing...") return "patikslinimas, į kurį įeina...";
  if(s=="any intro or no intro") return "bet kuris įvadinis paaiškinimas arba nėra įvadinio paaiškinimo";
  if(s=="any intro") return "bet kuris įvadinis paaiškinimas";
  if(s=="no intro") return "nėra įvadinio paaiškinimo";
  if(s=="intro containing...") return "įvadinis paaiškinimas, į kurį įeina...";
  if(s=="any definition or no definition") return "bet kuri apibrėžtis arba nėra apibrėžties";
  if(s=="any definition") return "bet kuri apibrėžtis";
  if(s=="no definition") return "nėra apibrėžties";
  if(s=="definition containing...") return "apibrėžtis, į kurią įeina...";
  if(s=="any example or no example") return "bet kuris pavyzdys arba nėra pavyzdžių";
  if(s=="any example") return "bet kuris pavyzdys";
  if(s=="no example") return "nėra pavyzdžių";
  if(s=="example containing...") return "pavyzdys, į kurį įeina...";
  if(s=="Automatic changes") return "Automatiniai pakeitimai";
  if(s=="NAME") return "PAVADINIMAS";
  if(s=="BLURB") return "ANOTACIJA";
  if(s=="level") return "lygmuo";
  if(s=="reader") return "skaitytojas";
  if(s=="editor") return "redaktorius";
  if(s=="creator") return "kūrėjas";
  if(s=="administrator") return "administratorius";
  if(s=="configurator") return "konfigūruotojas";
  if(s=="no change") return "nėra pakeitimų";
  if(s=="change to 'not checked'") return "pakeiskite į 'nepatikrinta'";
  if(s=="change to 'hidden'") return "pakeiskite į 'paslėpta'";
  if(s=="change to 'not checked' and 'hidden'") return "pakeiskite į 'nepatikrinta' ir 'paslėpta'";
  if(s=="LAST SEEN") return "PASKUTINĮ KARTĄ ŽIŪRĖTA";
  if(s=="NEVER") return "NIEKADA";
  if(s=="No termbases") return "Nėra terminų bazių";
  if(s=="language") return "kalba";
  if(s=="major") return "pagrindinis";
  if(s=="minor") return "nepagrindinis";
  if(s=="role") return "vaidmuo";
  if(s=="title") return "pavadinimas";
  if(s=="ACCESS LEVEL") return "PRIEIGOS LYGMUO";
  if(s=="LICENCE") return "LICENCIJA";
  if(s=="private") return "privati";
  if(s=="public") return "vieša";
  if(s=="trigger_dateStampChange") return "pakeista data";
  if(s=="trigger_domainAdd") return "pridėta sritis";
  if(s=="trigger_domainRemove") return "pašalinta sritis";
  if(s=="trigger_domainReorder") return "pakeista sričių tvarka";
  if(s=="trigger_domainChange") return "pakeista sritis";
  if(s=="trigger_desigAdd") return "pridėtas terminas";
  if(s=="trigger_desigRemove") return "pašalintas terminas";
  if(s=="trigger_desigReorder") return "pakeista terminų tvarka";
  if(s=="trigger_desigClarifChange") return "pakeistas patikslinimas";
  if(s=="trigger_desigAcceptChange") return "pakeistas patikimumas";
  if(s=="trigger_termLangChange") return "pakeista termino kalba";
  if(s=="trigger_termWordingChange") return "pakeista termino formuluotė";
  if(s=="trigger_termInflectAdd") return "pridėta kaitybos forma";
  if(s=="trigger_termInflectRemove") return "pašalinta kaitybos forma";
  if(s=="trigger_termInflectReorder") return "pakeista kaitybos formų tvarka";
  if(s=="trigger_termInflectLabelChange") return "pakeista kaitybos formos pažyma";
  if(s=="trigger_termInflectTextChange") return "pakeista kaitybos formos pažymos formuluotė";
  if(s=="trigger_termAnnotAdd") return "pridėta termino pažyma";
  if(s=="trigger_termAnnotRemove") return "pašalinta termino pažyma";
  if(s=="trigger_termAnnotReorder") return "pakeista terminų pažymų tvarka";
  if(s=="trigger_termAnnotPositionChange") return "pakeista termino pažymos vieta";
  if(s=="trigger_termAnnotLabelChange") return "pakeista termino pažyma";
  if(s=="trigger_introChange") return "pakeistas įvadinis paaiškinimas";
  if(s=="trigger_definitionAdd") return "pridėta apibrėžtis";
  if(s=="trigger_definitionRemove") return "pašalinta apibrėžtis";
  if(s=="trigger_definitionReorder") return "pakeista apibrėžčių tvarka";
  if(s=="trigger_definitionTextChange") return "pakeistas apibrėžties tekstas";
  if(s=="trigger_exampleAdd") return "pridėtas pavyzdys";
  if(s=="trigger_exampleRemove") return "pašalintas pavyzdys";
  if(s=="trigger_exampleReorder") return "pakeista pavyzdžių tvarka";
  if(s=="trigger_exampleTextAdd") return "pridėtas pavyzdžio sakinys";
  if(s=="trigger_exampleTextRemove") return "pašalintas pavyzdžio sakinys";
  if(s=="trigger_exampleTextReorder") return "pakeista pavyzdžio sakinių tvarka";
  if(s=="trigger_exampleTextChange") return "pakeista pavyzdžio sakinio formuluotė";
  if(s=="trigger_collectionAdd") return "pridėtas rinkinys";
  if(s=="trigger_collectionRemove") return "pašalintas rinkinys";
  if(s=="trigger_collectionReorder") return "pakeista rinkinių tvarka";
  if(s=="trigger_collectionChange") return "pakeistas rinkinys";
  if(s=="trigger_extranetAdd") return "pridėtas ekstranetas";
  if(s=="trigger_extranetRemove") return "pašalintas ekstranetas";
  if(s=="trigger_extranetReorder") return "pakeista ekstranetų tvarka";
  if(s=="trigger_extranetChange") return "pakeistas ekstranetas";
  if(s=="trigger_sourceAdd") return "pridėtas šaltinis";
  if(s=="trigger_sourceRemove") return "pašalintas šaltinis";
  if(s=="trigger_sourceReorder") return "pakeista šaltinių tvarka";
  if(s=="trigger_sourceChange") return "pakeistas šaltinis";
  if(s=="trigger_nonessentialChange") return "pakeistas nebūtinumas";
  if(s=="(blank)") return "(tuščia)";
  if(s=="Simple Multilingual Termbase") return "Paprasta daugiakalbė terminų bazė";
  if(s=="Simple Bilingual Termbase") return "Paprasta dvikalbė terminų bazė";
  if(s=="Simple Monolingual Termbase") return "Paprasta vienakalbė terminų bazė";
  if(s=="Enter a human-readable title such as \"My Dictionary of Sports Terms\". You will be able to change this later.") return "Įveskite suprantamą pavadinimą, pvz., \"Mano sporto terminų žodynas\". Vėliau galėsite jį pakeisti.";
  if(s=="This will be your termbase's address on the web. You will be able to change this later.") return "Tai bus jūsų terminų bazės adresas žiniatinklyje. Vėliau galėsite jį pakeisti.";
  if(s=="You can choose a template here to start you off. Each template comes with a few sample entries. You will be able to change or delete those and to customize the template.") return "Norėdami pradėti, čia galite pasirinkti šabloną. Kiekviename šablone yra keletas įrašų pavyzdžių. Galėsite juos pakeisti arba ištrinti ir adaptuoti šabloną.";
  if(s=="Your termbase is ready.") return "Jūsų terminų bazė paruošta.";
  if(s=="TERM OF THE DAY") return "DIENOS TERMINAS";
  if(s=="set to next available date") return "nustatykite kitą galimą datą";
  if(s=="Display from") return "Rodykite nuo";
  if(s=="Display until") return "Rodykite iki";
  if(s=="News and announcements") return "Naujienos ir skelbimai";
  if(s=="Create your account") return "Sukurkite savo paskyrą";
  if(s=="Reset your password") return "Pakeiskite savo slaptažodį";
  if(s=="Terminologue signup") return "Terminologue registracija";
  if(s=="Please follow the link below to create your Terminologue account:") return "Paspauskite žemiau pateiktą nuorodą, kad sukurtumėte savo Terminologue paskyrą:";
  if(s=="Terminologue password reset") return "Terminologue slaptažodžio atnaujinimas";
  if(s=="Please follow the link below to reset your Terminologue password:") return "Paspauskite žemiau pateiktą nuorodą, kad atnaujintumėte savo Terminologue paskyrą:";
  if(s=="This page is only available in English.") return "Šis puslapis galimas tik anglų kalba.";
  if(s=="DRAFTING STATUS") return "RENGIMO BŪSENA";
  if(s=="draft entry") return "nebaigtas įrašas";
  if(s=="finished entry") return "baigtas įrašas";
  if(s=="DRAFT") return "NEBAIGTA";
  if(s=="FINISHED") return "BAIGTA";
  if(s=="any drafting status") return "bet kuri rengimo būsena";
  if(s=="Prefabricated comments") return "Parengti komentarai";
  if(s=="NOTES") return "PASTABOS";
  if(s=="note") return "pastaba";
  if(s=="NOT") return "PAST";
  if(s=="with or without notes") return "su arba be pastabų";
  if(s=="with a note") return "su pastaba";
  if(s=="with a note containing...") return "su pastaba, į kurią įeina...";
  if(s=="without notes") return "be pastabų";
  if(s=="any type") return "bet kurios rūšies";
  if(s=="private note, not shown on extranets") return "privati pastaba, nematoma ekstranetuose";
  if(s=="private note, shown on extranets") return "privati pastaba, matoma ekstranetuose";
  if(s=="public note") return "vieša pastaba";
  if(s=="Note types") return "Pastabų rūšys";
  if(s=="LEVEL") return "LYGMUO";
  if(s=="with a comment") return "su komentaru";
  if(s=="with a comment contaning...") return "su komentaru, į kurį įeina...";
  if(s=="TBX export") return "TBX eksportavimas";
  if(s=="TBX import") return "TBX importavimas";
  if(s=="Empty the termbase") return "Išvalykite terminų bazę";
  if(s=="Careful now! You are about to delete this termbase. You will not be able to undo this.") return "Atsargiai! Jūs ketinate ištrinti šią terminų bazę. To atšaukti negalėsite.";
  if(s=="Careful now! You are about to delete all entries and their history. You will not be able to undo this.") return "Atsargiai! Jūs ketinate ištrinti visus įrašus ir jų istoriją. To atšaukti negalėsite.";
  if(s=="RELATED TERMS") return "SUSIJĘ TERMINAI";
  if(s=="Your termbase at a glance") return "Terminų bazės apžvalga";
  if(s=="Number of entries") return "Įrašų skaičius";
  if(s=="Number of items in history log") return "Elementų skaičius istorijos žurnale";
  if(s=="Your termbase is stored in the file %F") return "Jūsų terminų bazė yra išsaugota faile %F";
  if(s=="File size") return "Failo dydis";
  if(s=="Download %F") return "Atsisiųskite %F";
  if(s=="Upload %F") return "Įkelkite %F";
  if(s=="Make sure that the file you are uploading is a valid Terminologue termbase. If you upload something else you will do irreparable damage to your termbase.") return "Įsitikinkite, kad įkeliamas failas yra Terminologue terminų bazė. Jei įkelsite ką nors kita, savo terminų bazei padarysite nepataisomą žalą.";
  if(s=="PARENT") return "BENDROJI SRITIS";
  if(s=="no parent") return "nėra bendrosios srities";
  if(s=="excluding subdomains") return "neįtraukiami posričiai";
  if(s=="including subdomains") return "įtraukiami posričiai";
  if(s=="the entry has this domain") return "įrašas, priskirtas šiai sričiai";
  if(s=="the entry has only this domain") return "įrašas, priskirtas tik šiai sričiai";
  if(s=="the entry has not only this domain") return "įrašas, priskirtas ne tik šiai sričiai";
  if(s=="Careful! If you remove yourself from this termbase you will lose access to it.") return "Atsargiai! Jei pašalinsite save iš šios terminų bazės, prarasite prieigą prie jos.";

  //New strings, need translation:
  if(s=="Leave this termbase") return s;

  if(!gloss) console.log(`if(s=="${s}") return "";`);
  else console.log(`if(s=="${s}", "${gloss}") return "";`);
  //if(s=="") return s;
  return s;
}

try {
  module.exports={
    L: L,
  }
} catch(e){}
