(function() {
    var serverURL = "http://gulfdoctor.net/docpg/phonegap.php", // IMPORTANT: This URL needs to be accessible from your phone for testing.
        $ques = $('#ques'),
        $ch1 = $('#ch1'),
        $ch2 = $('#ch2'),
        $ch3 = $('#ch3'),
        $ch4 = $('#ch4'),
        $notification = $('#notification'),
        $score = $('#score'),
        
        // Get List of questions from server
        getFeed = function() {
            if (checkConnection) {
                $ques.empty();
                $ch1.empty();
                $ch2.empty();
                $ch3.empty();
                $ch4.empty();
                $.ajax({
                    url: serverURL,
                    dataType: "json",
                    type: "GET"
                }).done(function(data) {

                    //A sample json string returned by server for testing
                    //var data = [{"sno":1,"que":"Which of the following factor is most critical in determining whether or not to extract a tooth involved with periodontal disease","ch1":"a. depth of the pocket","ch2":"b. amount of the attachment loss","ch3":"c. mobility of the tooth","ch4":"d. relationship to the adjucent teeth","ans":"b"},{"sno":2,"que":"The most important criterion for a gingival margin on a crown prepration is that","ch1":"a. it is dull knife edge","ch2":"b. its position is subgingival","ch3":"c. its position is supragingival","ch4":"d. its position be easily discrenible","ans":"d"},{"sno":3,"que":"Anterior bite plane is used to correct","ch1":"a. cross bite","ch2":"b. deep bite","ch3":"c. open bite","ch4":"d. tounge thrusting","ans":"b"},{"sno":4,"que":"Speech diffuculties related to complete dentures can be avoided by","ch1":"a. moving the maxillary incisiors anteriorly","ch2":"b. placing the artifical teeth as close as possible to the position of the natural teeth","ch3":"c. providing spaces or diastema between the incisiors","ch4":"d. thickening of the denture base on the palate immediately behind the incisors","ans":"b"},{"sno":5,"que":"The most effective means of limiting applied loads to abutment teeth in distal extension partial denture is by","ch1":"a. using stress breaker","ch2":"b. splinting abutments to the adjucent teeth","ch3":"c. using abutment teeth without splinting","ch4":"d. maintaining a stable base-tissue relationship","ans":"d"},{"sno":6,"que":"The most definitive diagnosis for pemphigus is made by","ch1":"A.nikolskys sign","ch2":"B.histopathologic examination","ch3":"C.response to drugs","ch4":"D.presence of desquamative gingivitis","ans":"b"},{"sno":7,"que":"The patient position of choice in the recovery room after an ambulatory general anesthetic is","ch1":"a. prone","ch2":"b. supine","ch3":"c. lateral","ch4":"d. supine with elevation of the feet","ans":"c"},{"sno":8,"que":"An early prepubertal growth spurt indicates","ch1":"a. a fast maturing child","ch2":"b. a slow maturing child","ch3":"c. a longer treatment time","ch4":"d. nothing of interest","ans":"a"},{"sno":9,"que":"When digitilas is used in atrial fibrillation ,the theurapeutic objective is to","ch1":"a. abolish cardiac decompression","ch2":"b. decrease the rate of A-V conduction","ch3":"c. increase the rate of cardiac repolarisation","ch4":"d. produce a decrease in the rate of atrial contraction","ans":"b"},{"sno":10,"que":"The tooth movement most readily accomplished with a removable appliance is","ch1":"a. bodily movement","ch2":"b. root movement","ch3":"c. tipping","ch4":"d. torquing","ans":"c"},{"sno":11,"que":"A 0.7cm pepedunculated,white ,rough-surfaced growth occurring on the hard palate is most likely","ch1":"a. a pleormorphic adenoma","ch2":"b. a keratoacanthoma","ch3":"c. a papilloma","ch4":"d. a fibroma","ans":"c"},{"sno":12,"que":"Leeway space helps in development of normal occlusion by","ch1":"a. allowing mesial drift of molars","ch2":"b. providing space for eruption of premolars","ch3":"c. providing space for eruption of permanent second molar","ch4":"d. all of the above","ans":"a"},{"sno":13,"que":"Prolonged sensitivity to heat, cold and presure after cementation of a crown or a fixed partial denture is usually related to","ch1":"a. occlusal trauma","ch2":"b. improper cementation","ch3":"c. impingement on the marginal gingiva","ch4":"d. failure to desensitize the abutment teeth","ans":"a"},{"sno":14,"que":"Which of the following groups of conditions has lesions of the oralmucosa which may pass through a stage in which they appear as vesicles","ch1":"a. pemphigus,erythema multiforme,and angioneurotic edema","ch2":"b. herpes simplex, pemphigus,and varicella","ch3":"c. verruca vulgaris, herpes simplex,and tuberculosis ulcer","ch4":"d. mucous patch, koplik spots,fordyce granules","ans":"b"},{"sno":15,"que":"A 2 year old child has an acute oral infection characterised by small reddish yellow vesicles in the buccal mucosa and on the hard palate.The temperature is 102 degree F the mouth is sore and the child will not eat or drink.The condition is described as","ch1":"a. moniliasis","ch2":"b. acute herpetic stomatis","ch3":"c. acute streptococcal infection","ch4":"d. acute necrotizing ulcerative gingivitis","ans":"b"},{"sno":16,"que":"The minimally accepted restoration for an endodontically treated maxillary first premolar is","ch1":"a. an onlay","ch2":"b. an MOD","ch3":"c. a full cast crown","ch4":"d. an occlusal amalgam","ans":"a"},{"sno":17,"que":"Which of the following land marks is not included in the postdam area","ch1":"a. pterygomaxillary notch","ch2":"b. fovea palatinus","ch3":"c. vibrating line","ch4":"d. hamular process","ans":"d"},{"sno":18,"que":"Petechiae involving the conjunctiva,yellow skin color,mulktiple unexplained bruises and a flushed ,ruddy complection are all clinical findings which suggest","ch1":"a. diabetes mellitus","ch2":"b. a predisposition for excessive bleeding following extractions","ch3":"c. hepatitis","ch4":"d. the onset of erythema multiforma","ans":"b"},{"sno":19,"que":"Following the amputation of the coronal portion of the pulp of an immature permanent first molar,the root stump should be capped with","ch1":"a. formocresol","ch2":"b. calcium chloride","ch3":"c. zinc oxide eugenol","ch4":"d. calcium hydroxide","ans":"d"},{"sno":20,"que":"The size of the x-ray tube focal spot influences radiographic","ch1":"a. defination","ch2":"b. contrast","ch3":"c. density","ch4":"d. distortion","ans":"a"},{"sno":21,"que":"The most life threatening potential complication assoicated with facial fractures is","ch1":"a. post anesthetic pneumonia","ch2":"b. exsanguinating hemorrhage","ch3":"c. post operative wound infection","ch4":"d. acute upper airway obstruction","ans":"d"},{"sno":22,"que":"Teeth are generally restored to their orginal anatomic form.Exceptions to this would be","ch1":"a. the over-contouring required to protect the gingival tissue in class V restorations","ch2":"b. the proximal over-contouring required to close a diastema in posterior dentition","ch3":"c. modification in the contour required to establish suitable guiding plane and retension on abutment teeth","ch4":"d. all of the above","ans":"c"},{"sno":23,"que":"To establish a preliminary dental diagnosis for stomatitis nicotina the first approch would be","ch1":"a. biopsy","ch2":"b. chemotherapeutic rinses","ch3":"c. application of clinical information and history to make a diagnostic decision","ch4":"d. referral to a surgeon","ans":"c"},{"sno":24,"que":"To be biologically and mechanically acceptable, a soldered joint of a fixed partial denture should be so formed that it","ch1":"a. extends to the facial margin of the retainer","ch2":"b. fills the entire interproximal space occlusogingivally","ch3":"c. is thin occlusiogingivally and wide faciolingually","ch4":"d. is circular in form and occupies the region of the contact area","ans":"d"},{"sno":25,"que":"Needle aspiration of a central bone lesion is used to","ch1":"a. feel the root surfaces","ch2":"b. rule out vascular lesion","ch3":"c. make the diagnosis of traumatic bone cyst","ch4":"d. determine the thickness of the buccal cortical plate","ans":"b"},{"sno":26,"que":"Leukemic gingivitis, because of spontaneous hemorrhage and necrosis, may be misdiagnosed as","ch1":"a. necrotizing ulcerative gingivitis","ch2":"b. thrombocytopenic purpura","ch3":"c. desquamative gingivitis","ch4":"d. infectious mononucleosis","ans":"a"},{"sno":27,"que":"Trigeminal neuralgia is characterized by","ch1":"a. paralysis in one side of the face","ch2":"b. prolonged episodes of pain in one side of the face","ch3":"c. uncontrolled twitching of one eye","ch4":"d. sharp excruciating pain when light pressure is applied to the affected area","ans":"d"},{"sno":28,"que":"The form in class III cavities which includes slight modifications in cavity form as may be necessary to placing and condensing direct filling gold is known as","ch1":"a. outline form","ch2":"b. retension form","ch3":"c. resistance form","ch4":"d. convenience form","ans":"d"},{"sno":29,"que":"In radiography, a long gray scale of contrast is obtained by","ch1":"a. decreasing the filtration","ch2":"b. increasing the kilovoltage","ch3":"c. increasing the milliampere","ch4":"d. decreasing the milliampere seconds","ans":"b"},{"sno":30,"que":"Band and crib space maintainer is classified as","ch1":"a. bilateral,fixed and functional","ch2":"b. unilateral,fixed and functional","ch3":"c. unilateral,fixed and nonfunctional","ch4":"d. none of the above","ans":"c"},{"sno":31,"que":"Which of the following is often added to the liquid culture medium to enhance the growth of strict anaerobes","ch1":"a. agar","ch2":"b. glucose","ch3":"c. whole blood","ch4":"d. penicillinase","ans":"a"},{"sno":32,"que":"In patients with advanced periodontitis, marked mobile teeth should be splinted to","ch1":"a. reduce gingival inflammation","ch2":"b. accelerate epitheliazation after periodontal surgery","ch3":"c. enhance formation of a new connective tissue attachment after surgery","ch4":"d. none of the above","ans":"d"},{"sno":33,"que":"Severe alveolar bone loss,as observed in juvenile periodontitis is associated with","ch1":"a. cyclic neutropenia","ch2":"b. lysis of the neutrophils","ch3":"c. increased phagocytosis","ch4":"d. neutrophil chemotatic defects","ans":"d"},{"sno":34,"que":"The primary airway hazard for an unconscious dental patient in a supine position is","ch1":"a. aspiration","ch2":"b. laryngospasm","ch3":"c. bronchospasm","ch4":"d. tongue obstruction","ans":"d"},{"sno":35,"que":"When removing a rubber dam, the first step should be to","ch1":"a. remove the clamp","ch2":"b. release the holder","ch3":"c. apply a water-soluble lubricant","ch4":"d. cut the interseptal rubber with scissors","ans":"d"},{"sno":36,"que":"Vitamin B12 is different from other B vitamins because it","ch1":"a. is synthesized in the body","ch2":"b. occurs only in food of plant orgin","ch3":"c. must be provided in the diet every day","ch4":"d. requries a mucoprotein carrier to facilitate its absorption from the GIT","ans":"d"},{"sno":37,"que":"Each of the following ,except one,is a good reason for using sedation.which one is this exception","ch1":"a. to alley apprehension, anxiety or fear","ch2":"b. to decrease the amount of local anesthesia that is required for a given procedure","ch3":"c. to alleviate stress in a severely medically compromised patient","ch4":"d. to accomplish certain procedures that a practioner would not normally be able to do on an anxious patient","ans":"b"},{"sno":38,"que":"When tetanus organism are suspected in a wounded patient that the dentist is asked to see in the emergency room,antibiotics should be administered and antitetanus prophylaxis given in the form of","ch1":"a. tetanus toxid","ch2":"b. pencillin(if no allergy)","ch3":"c. tetanus antitoxin ( if not previously immunised)","ch4":"d. all of the above","ans":"d"},{"sno":39,"que":"Plaque is distingushed from materia alba on the basis of its","ch1":"a. adherence","ch2":"b. organisation of the matrix","ch3":"c. naked visibility and colour","ch4":"d. all of the above","ans":"d"},{"sno":40,"que":"Each of the following diseases causes desquamative gingivitis except","ch1":"a. pemphigus","ch2":"b. pemphigoid","ch3":"c. lichen planus","ch4":"d. herpes simplex","ans":"d"},{"sno":41,"que":"Inadequate margins of restorations should be corrected primarily because they","ch1":"a. retain food debris","ch2":"b. cause occlusal disharmony","ch3":"c. cause mechanical irritation","ch4":"d. interfere with plaque removal","ans":"d"},{"sno":42,"que":"In juvenile periodontitis ,the teeth with the earliest and most severe destruction are usually","ch1":"a. incisors and first molars","ch2":"b. incisors and second premolars","ch3":"c. incisors and first premolars","ch4":"d. premolars and molars","ans":"a"},{"sno":43,"que":"pulp capping has the most favourable prognosis when there is","ch1":"a. serious moisture present at the exposure site","ch2":"b. an antibiotic used inthe pulp capping as a medicament","ch3":"c. a mechanical exposure in a clean ,dry feild in a mature tooth","ch4":"d. a mechanicalexposure in a clean,dry feild in a developing tooth","ans":"d"},{"sno":44,"que":"Gingival curettage is indicated in the treatment of","ch1":"a. inflamed and edematous gingiva","ch2":"b. fibrotic gingiva","ch3":"c. bleeding gingiva","ch4":"d. all of the above","ans":"a"},{"sno":45,"que":"A progressive increase in mandibular length and in mandibular interdental spacing in an adult patient is characteristic of","ch1":"a. hypothyrodism","ch2":"b. hyperpituitarism","ch3":"c. hypoadrenalism","ch4":"d. hyperparathyroidism","ans":"b"},{"sno":46,"que":"The bone of the nasal cavity is formed by","ch1":"a. palatine process of of the maxilla and the vertical part of the palate","ch2":"b. palatine process of the temporal and horizantal part of the palate","ch3":"c. vomer and vertical part of the palate","ch4":"d. palatine process of the maxilla and the horizontal part of the palate","ans":"d"},{"sno":47,"que":"The resin matrix portion of most composite resin is composed of","ch1":"a. epoxy resin","ch2":"b. acrylic resin","ch3":"c. BISGMA-type resin","ch4":"d. poly methyl methaacrylate resin","ans":"c"},{"sno":48,"que":"A purulent lesion in the facial vestibule of an 8 yr old patient is most likely","ch1":"a. a pyogenic granuloma","ch2":"b. an odentogenic fistula","ch3":"c. an infected apthous ulcer","ch4":"d. an isolated herpetic lesion","ans":"b"},{"sno":49,"que":"The anterior determinant of occlusion is the","ch1":"a. horizontal and vertical overlap relation of anterior teeth","ch2":"b. horizontal overlap relation of anterior teeth only","ch3":"c. vertical overlap relation of anterior teeth only","ch4":"d. cuspal inclination in degrees","ans":"a"},{"sno":50,"que":"Which of the following papillae is uncommon in location to the rest","ch1":"a. filiform","ch2":"b. foliate","ch3":"c. fungiform","ch4":"d. circumvallate","ans":"b"}];
                    var qno = 1;
                    window.localStorage.setItem("qno", qno);
                    $ques.append(data[qno].que);
                    $ch1.append(data[qno].ch1);
                    $ch2.append(data[qno].ch2);
                    $ch3.append(data[qno].ch3);
                    $ch4.append(data[qno].ch4);
                    var l = data.length;
                    for (var i = 1; i < l; i++) {
                        window.localStorage.setItem(i, JSON.stringify(data[i]));
                    }
                });
            }
        },

        //Display questions from local cache
        //Call getFeed if local cache is completed
        displayQuestion = function() {
            var qno = window.localStorage.getItem("qno");
            qno++;
            if (qno > 48) {
                getFeed();
                qno = 1;
            }
            window.localStorage.setItem("qno", qno);
            var json = window.localStorage.getItem(qno);
            var thisq = JSON.parse(json);
            $notification.empty();
            $notification.append($ques.text());
            $notification.append('<br>');
            $notification.append($ch1.text());
            $notification.append('<br>');
            $notification.append($ch2.text());
            $notification.append('<br>');
            $notification.append($ch3.text());
            $notification.append('<br>');
            $notification.append($ch4.text());
            $notification.append('<br>');
    
            checkAnswer(thisq['ans']);
            $ques.empty();
            $ch1.empty();
            $ch2.empty();
            $ch3.empty();
            $ch4.empty();
            $ques.append(thisq['que']);
            $ch1.append(thisq['ch1']);
            $ch2.append(thisq['ch2']);
            $ch3.append(thisq['ch3']);
            $ch4.append(thisq['ch4']);
        },

        //Check if a connection is available before updating feed
        checkConnection = function() {
            var networkState = navigator.connection.type;
            return networkState !== Connection.NONE;
        },
        
        // Check the answer
        checkAnswer = function(e) {
 
            var user_ans = $('input[name="ans"]:checked').val();
            var areEqual = user_ans.toUpperCase() === e.toUpperCase();

            var correct = window.sessionStorage.getItem("correct");
            var total = window.sessionStorage.getItem("total");
            total++;
            if (areEqual) {
                $notification.append('Correct! (', user_ans, ')');
                correct++;
            } else {
                $notification.append('Wrong. You answered: ', user_ans, ' Correct Answer: ', e);
            }
            $score.empty();
            var percent = Math.round((correct) * 100 / total);
            $score.append('Score: ', correct.toString(), ' / ', total.toString(), ' (', percent.toString(), '%)');
            window.sessionStorage.setItem("correct", correct);
            window.sessionStorage.setItem("total", total);
        };
    //Click function for the only button    
    $('#submit').on('click', displayQuestion);

    //Get the feed when the program loads
    getFeed();
}());