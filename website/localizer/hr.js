function L(s, gloss){
  if(s=="only") return function(s){
    return "Samo "+s;
  };
  if(s=="READ-ONLY") return "SAMO ZA ČITANJE";
  if(s=="Editing") return "Uređivanje";
  if(s=="Dublin City University") return "Dublin City University";
  if(s=="Log out") return "Odjava";
  if(s=="Change your password") return "Promijenite lozinku";
  if(s=="Registered user login") return "Korisnička prijava";
  if(s=="Get an account") return "Otvorite korisnički račun";
  if(s=="Forgot your password?") return "Zaboravili ste lozinku?";
  if(s=="E-mail address") return "Adresa e-pošte";
  if(s=="Password") return "Lozinka";
  if(s=="Log in") return "Prijava";
  if(s=="Your termbases") return "Vaše terminološke baze";
  if(s=="You have no termbases yet.") return "Još nemate terminoloških baza.";
  if(s=="Create a termbase") return "Izradite terminološku bazu";
  if(s=="Administration") return "Administracija";
  if(s=="Users") return "Korisnici";
  if(s=="Termbases") return "Terminološke baze";
  if(s=="smart search") return "pametno pretraživanje";
  if(s=="complete term") return "potpuni naziv";
  if(s=="start of term") return "početak naziva";
  if(s=="end of term") return "kraj naziva";
  if(s=="any part of term") return "bilo koji dio naziva";
  if(s=="any part except start or end") return "bilo koji dio osim početka ili kraja";
  if(s=="search in all languages") return "pretraživanje na svim jezicima";
  if(s=="Configuration") return "Konfiguracija";
  if(s=="ADMIN") return "ADMIN";
  if(s=="TRM") return "TRM";
  if(s=="DOM") return "DOM";
  if(s=="DEF") return "DEF";
  if(s=="XMPL") return "XMPL"
  if(s=="CHECKING STATUS") return "STATUS PROVJERE";
  if(s=="PUBLISHING STATUS") return "STATUS OBJAVLJIVANJA";
  if(s=="TERMS") return "NAZIVI";
  if(s=="DOMAINS") return "DOMENE";
  if(s=="term") return "naziv";
  if(s=="clarification") return "pojašnjenje";
  if(s=="acceptability") return "normativni status";
  if(s=="source") return "vrelo";
  if(s=="inflected form") return "izvedeni oblik";
  if(s=="annotation") return "označavanje";
  if(s=="domain") return "domena";
  if(s=="part of speech") return "vrsta riječi";
  if(s=="inflection") return "promjena oblika riječi";
  if(s=="language of origin") return "izvorni jezik";
  if(s=="symbol") return "simbol";
  if(s=="trademark") return "žig";
  if(s=="registered trademark") return "registrirani žig";
  if(s=="proper noun") return "vlastita imenica";
  if(s=="formatting") return "oblikovanje";
  if(s=="italic") return "kurziv";
  if(s=="Created") return "Izrađeno";
  if(s=="Changed") return "Promijenjeno";
  if(s=="Deleted") return "Izbrisano";
  if(s=="Bulk-deleted") return "Skupno izbrisano";
  if(s=="while uploading") return "tijekom prijenosa";
  if(s=="By") return "Promijenio";
  if(s=="When") return "Vrijeme";
  if(s=="any checking status") return "bilo koji status provjere";
  if(s=="any publishing status") return "bilo koji status objave";
  if(s=="any language") return "bilo koji jezik";
  if(s=="any acceptabilty or no acceptability") return "bilo koji normativni status ili bez statusa";
  if(s=="any acceptabilty") return "bilo koji normativni status";
  if(s=="no acceptability") return "bez oznake normativnog statusa";
  if(s=="any domain or no domain") return "bilo koja domena ili bez domene";
  if(s=="any domain") return "bilo koja domena";
  if(s=="no domain") return "bez oznake domene";
  if(s=="LAST MAJOR UPDATE") return "POSLJEDNJE VELIKO AŽURIRANJE";
  if(s=="set to today") return "postavi na današnji dan";
  if(s=="Invalid e-mail address or password.") return "Nevažeća adresa e-pošte ili lozinka.";
  if(s=="INTR") return "UVOD";
  if(s=="COLL") return "ZBIRKE";
  if(s=="INTROS") return "UVODI";
  if(s=="DEFINITIONS") return "DEFINICIJE";
  if(s=="EXAMPLES") return "PRIMJERI";
  if(s=="COLLECTIONS") return "ZBIRKE";
  if(s=="definition") return "definicija";
  if(s=="example") return "primjer";
  if(s=="sentence") return "rečenica";
  if(s=="collection") return "zbirka";
  if(s=="any collection or no collection") return "bilo koja zbirka ili bez zbirke";
  if(s=="any collection") return "bilo koja zbirka";
  if(s=="no collection") return "nije u zbirci";
  if(s=="comments") return "komentari";
  if(s=="with or without comments") return "sa ili bez komentara";
  if(s=="with comments") return "s komentarima";
  if(s=="without comments") return "bez komentara";
  if(s=="my comments") return "mmoji komentari";
  if(s=="with or without my comments") return "sa ili bez mojih komentara";
  if(s=="with my comments") return "les mojim komentarima";
  if(s=="without my comments") return "bez mojih komentara";
  if(s=="other people's comments") return "komentari drugih korisnika";
  if(s=="with or without other people's comments") return "sa ili bez komentara drugih korisnika";
  if(s=="with other people's comments") return "s komentarima drugih korisnika";
  if(s=="without other people's comments") return "bez komentara drugih korisnika";
  if(s=="EXTRANET") return "EKSTRANET";
  if(s=="EXT") return "EKS";
  if(s=="EXTRANETS") return "EKSTRANETI";
  if(s=="extranet") return "ekstranet";
  if(s=="any extranet or no extranet") return "bilo koji ekstranet ili bez ekstraneta";
  if(s=="any extranet") return "bilo koji ekstraneti";
  if(s=="no extranet") return "bez ekstraneta";
  if(s=="sorting language") return "jezik razvrstavanja";
  if(s=="Create mutual cross-references") return "Izradi uzajamne unakrsne reference";
  if(s=="Remove mutual cross-references") return "Ukloni uzajamne unakrsne reference";
  if(s=="Merge into a single entry") return "Spoji u jednu natuknicu";
  if(s=="SEE ALSO") return "VIDI TAKOĐER";
  if(s=="add to worklist") return "dodaj na radnu listu";
  if(s=="Domains") return "Domene";
  if(s=="Part-of-speech labels") return "Oznake vrste riječi";
  if(s=="Inflection labels") return "Oznake promjene oblika riječi";
  if(s=="Acceptability labels") return "Oznake normativnih statusa";
  if(s=="Sources") return "Vrela";
  if(s=="Collections") return "Zbirke";
  if(s=="Tags") return "Oznake";
  if(s=="Extranets") return "Ekstraneti";
  if(s=="Name and blurb") return "Ime i kratak opis";
  if(s=="Features") return "Značajke";
  if(s=="Languages") return "Jezici";
  if(s=="Publishing") return "Objavljivanje";
  if(s=="Change the termbase's URL") return "Promijeni URL terminološke baze";
  if(s=="Delete the termbase") return "Izbriši terminološku bazu";
  if(s=="TITLE") return "NASLOV";
  if(s=="abbreviation") return "kratica";
  if(s=="LANGUAGES") return "JEZICI";
  if(s=="select all") return "odaberi sve";
  if(s=="unselect all") return "poništi odabir za sve";
  if(s=="PRIORITY") return "PRIORITET";
  if(s=="high") return "visok";
  if(s=="medium") return "srednji";
  if(s=="low") return "nizak";
  if(s=="USERS") return "KORISNICI";
  if(s=="e-mail address") return "adresa e-pošte";
  if(s=="user") return "korisnik";
  if(s=="Alphabetical order") return "Abecedni redoslijed";
  if(s=="Similar terms (click to insert)") return "Slični nazivi (kliknite za umetanje)";
  if(s=="Other entries that share this term") return "Ostale natuknice koje dijele ovaj naziv";
  if(s=="stop sharing") return "prestani dijeliti";
  if(s=="Change checking status to") return "Promijeni status provjere u";
  if(s=="Change publishing status to") return "Promijeni status objavljivanja u";
  if(s=="Add to extranet") return "Dodaj na ekstranet";
  if(s=="Remove from extranet") return "Ukloni s ekstraneta";
  if(s=="checked") return "provjereno";
  if(s=="not checked") return "nije provjereno";
  if(s=="publishable") return "za objavu";
  if(s=="hidden") return "skriveno";
  if(s=="CHECKED") return "PROVJERENO";
  if(s=="NOT CHECKED") return "NIJE PROVJERENO";
  if(s=="PUBLISHABLE") return "ZA OBJAVU";
  if(s=="HIDDEN") return "SKRIVENO";
  if(s=="non-essential") return "nije važno";
  if(s=="STATUS") return "STATUS";
  if(s=="live") return "aktivno";
  if(s=="not live") return "neaktivno";
  if(s=="any clarification or no clarification") return "bilo koje pojašnjenje ili bez pojašnjenja";
  if(s=="any clarification") return "bilo koje pojašnjenje";
  if(s=="no clarification") return "bez pojašnjenja";
  if(s=="clarification containing...") return "pojašnjenje koje sadrži...";
  if(s=="any intro or no intro") return "bilo koji uvod ili bez uvoda";
  if(s=="any intro") return "bilo koji uvod";
  if(s=="no intro") return "bez uvoda";
  if(s=="intro containing...") return "uvod koji sadrži...";
  if(s=="any definition or no definition") return "bilo koja definicija ili bez definicije";
  if(s=="any definition") return "bilo koja definicija";
  if(s=="no definition") return "bez definicije";
  if(s=="definition containing...") return "definicija koja sadrži...";
  if(s=="any example or no example") return "bilo koji primjer ili bez primjera";
  if(s=="any example") return "bilo koji primjer";
  if(s=="no example") return "bez primjera";
  if(s=="example containing...") return "primjer koji sadrži...";
  if(s=="Automatic changes") return "Automatske promjene";
  if(s=="NAME") return "IME";
  if(s=="BLURB") return "KRATAK OPIS";
  if(s=="level") return "razina";
  if(s=="reader") return "čitatelj";
  if(s=="editor") return "eagarthóir";
  if(s=="creator") return "autor";
  if(s=="administrator") return "administrator";
  if(s=="configurator") return "konfigurator";
  if(s=="no change") return "bez promjene";
  if(s=="change to 'not checked'") return "promjeni u „nije provjereno”";
  if(s=="change to 'hidden'") return "promijeni u „skriveno”";
  if(s=="change to 'not checked' and 'hidden'") return "promjeni u „nije provjereno” i „skriveno”s";
  if(s=="LAST SEEN") return "ZADNJA AKTIVNOST";
  if(s=="NEVER") return "NIKADA";
  if(s=="No termbases") return "Nema terminoloških baza";
  if(s=="language") return "jezik";
  if(s=="major") return "glavni";
  if(s=="minor") return "sporedni";
  if(s=="role") return "uloga";
  if(s=="title") return "naslov";
  if(s=="ACCESS LEVEL") return "RAZINA PRISTUPA";
  if(s=="LICENCE") return "LICENCA";
  if(s=="private") return "privatno";
  if(s=="public") return "javno";
  if(s=="trigger_dateStampChange") return "promijenjen datum";
  if(s=="trigger_domainAdd") return "dodana domena";
  if(s=="trigger_domainRemove") return "uklonjena domena";
  if(s=="trigger_domainReorder") return "promijenjen redoslijed domena";
  if(s=="trigger_domainChange") return "promijenjena domena";
  if(s=="trigger_desigAdd") return "dodan naziv";
  if(s=="trigger_desigRemove") return "uklonjen naziv";
  if(s=="trigger_desigReorder") return "promijenjen redoslijed naziva";
  if(s=="trigger_desigClarifChange") return "promijenjeno pojašnjenje ";
  if(s=="trigger_desigAcceptChange") return "promijenjen normativni status";
  if(s=="trigger_termLangChange") return "promijenjen jezik naziva";
  if(s=="trigger_termWordingChange") return "promijenjen tekst naziva";
  if(s=="trigger_termInflectAdd") return "dodan izvedeni oblik";
  if(s=="trigger_termInflectRemove") return "uklonjen izvedeni oblik";
  if(s=="trigger_termInflectReorder") return "promijenjen redoslijed izvedenih oblika";
  if(s=="trigger_termInflectLabelChange") return "promijenjena oznaka izvedenih oblika";
  if(s=="trigger_termInflectTextChange") return "promijenjena tekst izvedenih oblika";
  if(s=="trigger_termAnnotAdd") return "dodana anotacija";
  if(s=="trigger_termAnnotRemove") return "uklonjena anotacija";
  if(s=="trigger_termAnnotReorder") return "promijenjen redoslijed anotacija";
  if(s=="trigger_termAnnotPositionChange") return "promijenjeno mjesto anotacije";
  if(s=="trigger_termAnnotLabelChange") return "promijenjena oznaka anotacije";
  if(s=="trigger_introChange") return "promijenjen uvod";
  if(s=="trigger_definitionAdd") return "dodana definicija";
  if(s=="trigger_definitionRemove") return "uklonjena definicija";
  if(s=="trigger_definitionReorder") return "promijenjen redoslijed definicija";
  if(s=="trigger_definitionTextChange") return "promijenjen tekst definicije";
  if(s=="trigger_exampleAdd") return "dodan primjer";
  if(s=="trigger_exampleRemove") return "uklonjen primjer";
  if(s=="trigger_exampleReorder") return "promijenjen redoslijed primjera";
  if(s=="trigger_exampleTextAdd") return "dodan primjer rečenice";
  if(s=="trigger_exampleTextRemove") return "uklonjen primjer rečenice";
  if(s=="trigger_exampleTextReorder") return "promijenjen redoslijed primjera rečenica";
  if(s=="trigger_exampleTextChange") return "promijenjen tekst rečenice za primjer";
  if(s=="trigger_collectionAdd") return "dodana zbirka";
  if(s=="trigger_collectionRemove") return "uklonjena zbirka";
  if(s=="trigger_collectionReorder") return "promijenjen redoslijed zbirki";
  if(s=="trigger_collectionChange") return "promijenjena zbirka";
  if(s=="trigger_extranetAdd") return "dodan ekstranet";
  if(s=="trigger_extranetRemove") return "uklonjen ekstranet";
  if(s=="trigger_extranetReorder") return "promijenjen redoslijed ekstraneta";
  if(s=="trigger_extranetChange") return "promijenjen ekstranet";
  if(s=="trigger_sourceAdd") return "dodano vrelo";
  if(s=="trigger_sourceRemove") return "uklonjeno vrelo";
  if(s=="trigger_sourceReorder") return "promijenjen redoslijed vrela";
  if(s=="trigger_sourceChange") return "promijenjeno vrelo";
  if(s=="trigger_nonessentialChange") return "promijenjen status važnosti";
  if(s=="(blank)") return "(prazno)";
  if(s=="Simple Multilingual Termbase") return "Jednostavna višejezična terminološka baza";
  if(s=="Simple Bilingual Termbase") return "Jednostavna dvojezična terminološka baza";
  if(s=="Simple Monolingual Termbase") return "Jednostavna jednojezična terminološka bazas";
  if(s=="Enter a human-readable title such as \"My Dictionary of Sports Terms\". You will be able to change this later.") return "Unesite čitljiv naslov kao što je „Moj rječnik sportskih naziva”. Moći ćete to kasnije promijeniti.";
  if(s=="This will be your termbase's address on the web. You will be able to change this later.") return "Ovo će biti adresa vaše terminološke baze na internetu. Moći ćete to kasnije promijeniti.";
  if(s=="You can choose a template here to start you off. Each template comes with a few sample entries. You will be able to change or delete those and to customize the template.") return "Ovdje za početak možete odabrati predložak. Svaki predložak sadrži nekoliko oglednih natuknica. Moći ćete ih promijeniti ili izbrisati te prilagoditi predložak.";
  if(s=="Your termbase is ready.") return "Vaša terminološka baza je spremna.";
  if(s=="TERM OF THE DAY") return "NAZIV DANA";
  if(s=="set to next available date") return "postavi na sljedeći dostupan datum";
  if(s=="Display from") return "Prikaži od";
  if(s=="Display until") return "Prikaži do";
  if(s=="News and announcements") return "Novosti i najave";
  if(s=="Create your account") return "Izradite svoj korisnički račun";
  if(s=="Reset your password") return "Ponovno postavite lozinku";
  if(s=="Terminologue signup") return "Registracija na Terminologue";
  if(s=="Please follow the link below to create your Terminologue account:") return "Slijedite poveznicu kako biste otvorili svoj korisnički račun na Terminologueu:";
  if(s=="Terminologue password reset") return "Ponovno postavljanje lozinke";
  if(s=="Please follow the link below to reset your Terminologue password:") return "Slijedite poveznicu kako biste ponovno postavili svoju lozinku za Terminologue:";
  if(s=="This page is only available in English.") return "Ova je stranica dostupna samo na engleskom jeziku.";
  if(s=="DRAFTING STATUS") return "STATUS IZRADE NACRTA";
  if(s=="draft entry") return "nacrt natuknice";
  if(s=="finished entry") return "završena natuknica";
  if(s=="DRAFT") return "NACRT";
  if(s=="FINISHED") return "ZAVRŠENO";
  if(s=="any drafting status") return "bilo koji status izrade nacrta";
  if(s=="Prefabricated comments") return "Ponuđeni komentari";
  if(s=="NOTES") return "BILJEŠKE";
  if(s=="note") return "bilješka";
  if(s=="NOT") return "NAP";
  if(s=="with or without notes") return "sa ili bez bilježaka";
  if(s=="with a note") return "s bilješkom";
  if(s=="with a note containing...") return "s bilješkom koja sadrži...";
  if(s=="without notes") return "bez bilježaka";
  if(s=="any type") return "bilo koja vrsta";
  if(s=="private note, not shown on extranets") return "privatna bilješka koja nije prikazana na ekstranetima";
  if(s=="private note, shown on extranets") return "privatna bilješka koja je prikazana na ekstranetima";
  if(s=="public note") return "javna bilješka";
  if(s=="Note types") return "Vrste bilježaka";
  if(s=="LEVEL") return "RAZINA";
  if(s=="with a comment") return "s komentarom";
  if(s=="with a comment contaning...") return "s komentarom koji sadrži...";
  if(s=="TBX export") return "izvezi kao TBX";
  if(s=="TBX import") return "uvezi kao TBX";
  if(s=="Empty the termbase") return "Isprazni terminološku bazu";
  if(s=="Careful now! You are about to delete this termbase. You will not be able to undo this.") return "Oprez! Izbrisat ćete ovu terminološku bazu. Ovaj postupak nećete moći poništiti.";
  if(s=="Careful now! You are about to delete all entries and their history. You will not be able to undo this.") return "Oprez! Izbrisat ćete sve natuknice i njihovu povijest. Ovaj postupak nećete moći poništiti.";
  if(s=="RELATED TERMS") return "POVEZANI NAZIVI";
  if(s=="Your termbase at a glance") return "Kratak prikaz vaše terminološke baze";
  if(s=="Number of entries") return "Broj natuknica";
  if(s=="Number of items in history log") return "Broj zapisa u popisu aktivnosti";
  if(s=="Your termbase is stored in the file %F") return "Vaša je terminološka baza pohranjena u datoteci %F";
  if(s=="File size") return "Veličina datoteke";
  if(s=="Download %F") return "Preuzimanje %F";
  if(s=="Upload %F") return "Prijenos %F";
  if(s=="Make sure that the file you are uploading is a valid Terminologue termbase. If you upload something else you will do irreparable damage to your termbase.") return "Provjerite je li datoteka koju prenosite valjana terminološka baza Terminologuea. Ako prenesete nešto drugo, napravit ćete nepopravljivu štetu svojoj bazi.";
  if(s=="PARENT") return "NADREĐENI ELEMENT";
  if(s=="no parent") return "bez nadređenog elementa";
  if(s=="excluding subdomains") return "bez poddomena";
  if(s=="including subdomains") return "s poddomenama";
  if(s=="the entry has this domain") return "natuknica ima ovu domenu";
  if(s=="the entry has only this domain") return "natuknica ima samo ovu domenu";
  if(s=="the entry has not only this domain") return "natuknica ima više domena";
  if(s=="Careful! If you remove yourself from this termbase you will lose access to it.") return "Oprez! Ako se uklonite iz ove terminološke baze, nećete joj više moći pristupiti.";

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
