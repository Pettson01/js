  //Deklarerar globla variabler
  let pointsA = 0;
  let pointsB = 0;
  let totalSumPoints = 0;
  let i = 0;
  let betyg = "";
  let betygSumman = 0;
  let jTal = 0;
  let subjectValue = 0;
  let kravTillExamen = 0;
  let resultingIndex = 0;

/*
 A = 20;                                            Godkännt i: - Svenska 1, 2, 3
 B = 17.5                                                       - Engelska 5, 6
 C = 15;                                                        - Matematik 1
 D = 12.5;                                                      - Gymnasiearbete
 E = 10;                                                        - 2 350 poäng av 2500
 F = 0;
*/

  let theIdPoints = ["selectPoints_1","selectPoints_2","selectPoints_3","selectPoints_4","selectPoints_5","selectPoints_6",
                    "selectPoints_7","selectPoints_8","selectPoints_9","selectPoints_10","selectPoints_11","selectPoints_12",
                    "selectPoints_13","selectPoints_14","selectPoints_15","selectPoints_16","selectPoints_17","selectPoints_18",
                    "selectPoints_19","selectPoints_20","selectPoints_21","selectPoints_22","selectPoints_23","selectPoints_24",
                    "selectPoints_25"];

  let theIdGrade = ["selectGrade_1", "selectGrade_2", "selectGrade_3", "selectGrade_4", "selectGrade_5", "selectGrade_6", "selectGrade_7",
                    "selectGrade_8", "selectGrade_9", "selectGrade_10", "selectGrade_11", "selectGrade_12", "selectGrade_13", "selectGrade_14",
                    "selectGrade_15", "selectGrade_16", "selectGrade_17", "selectGrade_18", "selectGrade_19", "selectGrade_20", "selectGrade_21",
                    "selectGrade_22", "selectGrade_23", "selectGrade_24", "selectGrade_25"];

  let theIdSubject = ["selectSubject_1", "selectSubject_2", "selectSubject_3", "selectSubject_4", "selectSubject_5", "selectSubject_6", "selectSubject_7"];

  let theIdSubjectAll = ["selectSubject_1A", "selectSubject_2A", "selectSubject_3A", "selectSubject_4A", "selectSubject_5A", "selectSubject_6A", "selectSubject_7A",
                         "selectSubject_8A", "selectSubject_9A", "selectSubject_10A", "selectSubject_11A", "selectSubject_12A", "selectSubject_13A", "selectSubject_14A",
                         "selectSubject_15A", "selectSubject_16A", "selectSubject_17A", "selectSubject_18A"];

  let theIdGradeA = ["selectGrade_1", "selectGrade_5", "selectGrade_6", "selectGrade_9", "selectGrade_10", "selectGrade_11", "selectGrade_25"];

  //Funktion för att få ut poängen
  function addingPoints(){
    pointsA = parseInt(document.getElementById(theIdPoints[i]).value);

      return pointsA;
      }

  function myFunction(){
    //Nollställer alla värden då man klickar på knappen så inget läses in fel
    totalSumPoints = 0;
    pointsA = 0;
    pointsB = 0;
    betygSumman = 0;
    subjectValue = 0;
    kravTillExamen = 0;

      //Kollar vilka betyg dy har valt och räknar ut din toal poä
      for(i = 0; i < 24; i++){
        pointsB = addingPoints();
        betyg = document.getElementById(theIdGrade[i]).value;

        switch (betyg) {
          case "A":
          betygSumman = (pointsB * 20) + betygSumman;
            break;

          case "B":
          betygSumman = (pointsB * 17.5) + betygSumman;
            break;

          case "C":
          betygSumman = (pointsB * 15) + betygSumman;
            break;

          case "D":
          betygSumman = (pointsB * 12.5) + betygSumman;
            break;

          case "E":
          betygSumman = (pointsB * 10) + betygSumman;
            break;

          case "F":
          betygSumma = (pointsB * 0) + betygSumman;
          default:

        }

        totalSumPoints = pointsB + totalSumPoints;
      }

      //Kollar ifall man har tillräckligt med ämnen för gymnasieexamen
      //.checked ger ett true eller false value.
      for (i = 0; i < 7; i++) {
          if(document.getElementById(theIdSubject[i]).checked){
            subjectValue++;
          }
        }

      for (i = 0; i < 7; i++){
        if (document.getElementById(theIdGradeA[i]).value == "F") {
          i = 7;
          resultingIndex = 7;
          //Du fick F i ett eller fler ämmnen
        }
        else if (document.getElementById(theIdGradeA[i]).value == "0") {
          i = 7;
          resultingIndex = 7;
          //Du fick '0' i ett eller fler ämnen
        }
        else {
          resultingIndex = 0;
        }
      }

        //Skapar den svarta boxen runt resultatet
        document.getElementById("resultBox").style.border = "thick solid black"

      if (subjectValue / 7 == 1) {

        //Du har läst svenska 1,2,3 & engelska 5,6 & matematik 1 & har ett Godkännt Gymnasiearbete
        if (document.getElementById("selectGrade_25").value == "F") {
          document.getElementById("resultingPar4").innerHTML = "Du missade ett eller flera av de grundläggande ämnena som behövdes för att få gymnasieexamen.";
        }
        else {
          if (resultingIndex == 7) {
            document.getElementById("resultingPar4").innerHTML = "Du missade ett eller flera av de grundläggande ämnena som behövdes för att få gymnasieexamen.";
          }
          else {
            document.getElementById("resultingPar4").innerHTML = "Du läste och klarade de grundläggande ämnena för att få gymnasieexamen.";
            kravTillExamen++;
          }
//Fixa denna delen, den säger att du har klarat kursenifall du har klickar i den.

        }
      }

      else {
       //Du har inte läst svenska 1,2,3 & engelska 5,6 & matematik 1 & har inte ett Godkännt Gymnasiearbete
       document.getElementById("resultingPar4").innerHTML = "Du missade ett eller flera av de grundläggande ämnena som behövdes för att få gymnasieexamen.";
      }


      //Kollar så att man har fått alla ämnen
      for(i = 0; i < 18; i++){
        if (document.getElementById(theIdSubjectAll[i]).checked) {
          subjectValue++;
        }
      }
      if (subjectValue - 25 == 0) {
        //Du har läst tillräckligt med ämnen
        document.getElementById("resultingPar3").innerHTML = "Du har läst alla ämnen som behövdes för att få gymnasieexamen.";
        kravTillExamen++;
      }
      else {
        //Du har läst för lite ämnen
        document.getElementById("resultingPar3").innerHTML = "Du har läst för få ämnen och kan inte få gymnasieexamen.";
      }

      if(totalSumPoints - 2250 < 0){
        //Du har inte tillräckligt med poäng
        document.getElementById("resultingPar2").innerHTML = "Du har inte tillräckligt med poäng för att få gymmnasieexamen.";
      }
      else {
        //Du har tillräckligt med poäng
        document.getElementById("resultingPar2").innerHTML = "Du har tillräckligt med poäng för gymnasieexamen.";
        kravTillExamen++;
      }


    //To fixed gör om variabeln till en string och gör att det endast blir 2 decimaler i talet.
    jTal = (betygSumman / totalSumPoints).toFixed(2);


    if (kravTillExamen == 3) {
      document.getElementById("resultingPar1").innerHTML =  "Jämförelsetal:" + jTal + "<br>Du har läst klart " + totalSumPoints + " poäng." + "<br> <br> <b> Du har fått gymnasieexamen </b> <br>";
    }

    else {
      document.getElementById("resultingPar1").innerHTML =  "Jämförelsetal:" + jTal + "<br>Du har läst klart " + totalSumPoints + " poäng." + "<br> <br> <b> Du har inte fått gymnasieexamen </b> <br>";
    }
  }


//Varenda gång jag lade till någon kåd under rad 34 sa den att elementet inte fanns.
