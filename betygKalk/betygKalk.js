  //Deklarerar globla variabler
  let pointsA = 0;
  let pointsB = 0;
  let totalSumPoints = 0;
  let i = 0;
  let betyg = "";
  let betygSumman = 0;
  let jTal = 0;
  let subjectValue = 0;

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

  function addingPoints(){
    pointsA = parseInt(document.getElementById(theIdPoints[i]).value);

      return pointsA;
      }

  function myFunction(){
    totalSumPoints = 0;
    pointsA = 0;
    pointsB = 0;
    betygSumman = 0;
    subjectValue = 0;

      for(i = 0; i < 24; i++){
        pointsB = addingPoints();
        betyg = document.getElementById(theIdGrade[i]).value;
        console.log("bing: " + i);

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
            console.log("idsubject 1: " + i)
          }
        }


      if (subjectValue / 7 == 1) {
        alert("Du har fått gymnasieexamnen");
      }

      else {
        alert("Du har inte fåtta enstaka ämnen som behövdes");
      }
      //Kollar så att man har fått alla ämnen
      for(i = 0; i < 18; i++){
        if (document.getElementById(theIdSubjectAll[i]).checked) {
          subjectValue++;
          console.log("idsubject 2: " + i)
        }
      }
      if (subjectValue - 25 == 0) {
        alert("Du har klickat i alla ämnen");
      }
      else {
        alert("Du har läst för lite ämnen");
      }

      if(totalSumPoints - 2250 < 0){
        alert("Du har för lite poäng")
      }


    alert("The total sum of points: " + totalSumPoints); //Must have
    alert("betygSumman: " + betygSumman); //debugging


    //To fixed gör om variabeln till en string och gör att det endast blir 2 decimaler i talet.
    jTal = (betygSumman / totalSumPoints).toFixed(2);

    alert("Jämförelsetal: " + jTal);

    alert("Jämförelsetal: " + jTal + "\nTotala Summan av poäng: " + totalSumPoints + "\nDu klarade / klarade inte kursen" + "\nBetygsumman: " + betygSumman + "\nSubjectValue: " + subjectValue);

  }


//Varenda gång jag lade till någon kåd under rad 34 sa den att elementet inte fanns.
